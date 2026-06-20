import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell } from "@/components/shell";
import { Tag } from "@/components/ui/brutal";
import { getPost, getPostSlugs, formatDate } from "@/lib/blog";

type Params = { slug: string };

// Pre-render one static page per post at build time (required for export).
export function generateStaticParams(): Params[] {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!getPostSlugs().includes(slug)) return {};
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  if (!getPostSlugs().includes(slug)) notFound();
  const post = await getPost(slug);

  return (
    <Shell lang="en">
      <article className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <Link
          href="/blog/"
          className="font-mono text-xs font-semibold uppercase tracking-wide text-ink/55 transition-colors hover:text-accent"
        >
          ← Back to blog
        </Link>

        <header className="mt-6 border-b-[3px] border-ink pb-8">
          {post.tags.length > 0 ? (
            <div className="mb-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Tag key={tag} tone="yellow">
                  {tag}
                </Tag>
              ))}
            </div>
          ) : null}

          <h1
            dir="auto"
            className="font-display text-4xl font-extrabold leading-[1.0] tracking-tight text-ink sm:text-5xl"
          >
            {post.title}
          </h1>

          <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-wide text-ink/55">
            {formatDate(post.date)}
            <span className="mx-2 text-ink/25">·</span>
            {post.readingTime}
          </p>
        </header>

        {/* Each block carries dir="auto" (set in lib/blog.ts), so a single
            post can freely mix Arabic and English. */}
        <div
          className="prose mt-10"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Shell>
  );
}
