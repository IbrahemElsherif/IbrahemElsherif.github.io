/**
 * Blog content layer. Posts are Markdown files in `content/blog/*.md` with
 * YAML frontmatter. Everything here runs at build time (static export), so it
 * can read the filesystem directly — no runtime/server needed for GitHub Pages.
 *
 * To add a post: drop a new `.md` file in `content/blog/` with frontmatter:
 *
 *   ---
 *   title: "My post title"
 *   date: 2026-06-19
 *   summary: "One-line description shown on the blog index and in metadata."
 *   tags: ["RAG", "LLMs"]
 *   ---
 *
 * ...then write Markdown below. Push to `main` and the deploy workflow rebuilds.
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

// Block-level tags that should auto-detect text direction, so a single post
// can mix Arabic (RTL) and English (LTR) and each block orients itself.
const AUTO_DIR_TAGS = new Set([
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "li",
  "blockquote",
  "td",
  "th",
  "figcaption",
  "dd",
  "dt",
]);

/** rehype plugin: add `dir="auto"` to block-level elements. */
function rehypeAutoDir() {
  return (tree: unknown) => {
    const walk = (node: {
      type?: string;
      tagName?: string;
      properties?: Record<string, unknown>;
      children?: unknown[];
    }) => {
      if (
        node.type === "element" &&
        node.tagName &&
        AUTO_DIR_TAGS.has(node.tagName)
      ) {
        node.properties = node.properties ?? {};
        if (node.properties.dir == null) node.properties.dir = "auto";
      }
      if (Array.isArray(node.children)) {
        for (const child of node.children) walk(child as typeof node);
      }
    };
    walk(tree as Parameters<typeof walk>[0]);
  };
}

export type PostMeta = {
  slug: string;
  title: string;
  /** ISO date, `YYYY-MM-DD`. */
  date: string;
  summary: string;
  tags: string[];
  /** e.g. "4 min read" */
  readingTime: string;
};

export type Post = PostMeta & { html: string };

function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function parsePost(slug: string): { meta: PostMeta; content: string } {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: typeof data.title === "string" ? data.title : slug,
      // gray-matter may parse an unquoted YAML date into a Date object.
      date: data.date ? new Date(data.date).toISOString().slice(0, 10) : "",
      summary: typeof data.summary === "string" ? data.summary : "",
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      readingTime: readingTime(content),
    },
    content,
  };
}

/** All posts, newest first. */
export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => parsePost(slug).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** A single post with its Markdown rendered to HTML. */
export async function getPost(slug: string): Promise<Post> {
  const { meta, content } = parsePost(slug);
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutoDir)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);
  return { ...meta, html: String(file) };
}

/** Human-friendly date, e.g. "June 19, 2026". */
export function formatDate(iso: string): string {
  if (!iso) return "";
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
