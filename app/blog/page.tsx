import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/shell";
import { Card, SectionHeading, Tag } from "@/components/ui/brutal";
import { IconArrowUpRight } from "@/components/icons";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on building and shipping AI systems — RAG, LLM fine-tuning, edge inference, and the engineering around them.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <Shell lang="en">
      <section className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading eyebrow="Writing" title="Blog" accent="blue" />

        {posts.length === 0 ? (
          <p className="text-base text-ink/70">No posts yet — check back soon.</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="block"
                aria-label={post.title}
              >
                <Card tone="cream" className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-xs font-semibold uppercase tracking-wide text-ink/55">
                      {formatDate(post.date)}
                      <span className="mx-2 text-ink/25">·</span>
                      {post.readingTime}
                    </p>
                    <IconArrowUpRight className="shrink-0 text-ink/40" />
                  </div>

                  {/* dir="auto" so Arabic titles/summaries orient right-to-left. */}
                  <h2
                    dir="auto"
                    className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
                  >
                    {post.title}
                  </h2>

                  {post.summary ? (
                    <p
                      dir="auto"
                      className="mt-3 text-sm leading-relaxed text-ink/75 sm:text-base"
                    >
                      {post.summary}
                    </p>
                  ) : null}

                  {post.tags.length > 0 ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Tag key={tag} tone="white">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  ) : null}
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>
    </Shell>
  );
}
