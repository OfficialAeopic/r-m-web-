import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@/components/ui/button";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { CIRCULAR_230_DISCLAIMER, COMPANY } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { articleLd, breadcrumbLd, buildMetadata } from "@/lib/metadata";
import { pad2 } from "@/lib/roman";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  const meta = buildMetadata({
    title: post.title,
    description: post.excerpt.slice(0, 158),
    path: `/blog/${post.slug}`,
    type: "article",
  });
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      authors: [post.author],
      publishedTime: post.date,
    },
  };
}

const MDX_COMPONENTS = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="font-display text-[30px] sm:text-[34px] leading-[1.15] mt-14 mb-3 tracking-tight"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="font-display text-[26px] sm:text-[30px] leading-[1.2] mt-14 mb-3 tracking-tight text-[var(--color-ink)]"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="font-display text-[20px] leading-tight mt-10 mb-2 tracking-tight text-[var(--color-ink)]"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="mt-5 text-[17px] leading-[1.75] text-[var(--color-ink-secondary)]"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-5 space-y-2 pl-6 text-[17px] text-[var(--color-ink-secondary)]" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mt-5 space-y-2 pl-6 text-[17px] text-[var(--color-ink-secondary)] list-decimal marker:font-display marker:text-[var(--color-gold-leaf)]"
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-[1.65] pl-1" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-10 py-6 border-t border-b border-[var(--color-rule)] font-display italic text-[22px] sm:text-[26px] leading-[1.35] text-[var(--color-ink)]"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-[var(--color-oxblood)] underline underline-offset-[3px] decoration-1 hover:decoration-2"
      {...props}
    />
  ),
  hr: () => (
    <hr aria-hidden className="my-10 border-0 border-t border-[var(--color-rule)]" />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-[var(--color-ink)]" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="font-display italic text-[var(--color-ink)]" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="font-mono text-[0.92em] bg-[var(--color-paper-tint)] border border-[var(--color-rule-soft)] px-1.5 py-0.5"
      {...props}
    />
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const postUrl = `${COMPANY.url}/blog/${post.slug}`;
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd
        data={[
          articleLd({
            title: post.title,
            description: post.excerpt,
            url: postUrl,
            datePublished: post.date,
            author: post.author,
          }),
          breadcrumbLd([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ]),
        ]}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-3xl px-5 lg:px-8 pt-10 pb-2"
      >
        <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">
          <li>
            <Link href="/" className="hover:text-[var(--color-oxblood)]">
              Home
            </Link>
          </li>
          <li aria-hidden>—</li>
          <li>
            <Link href="/blog" className="hover:text-[var(--color-oxblood)]">
              Blog
            </Link>
          </li>
          <li aria-hidden>—</li>
          <li className="text-[var(--color-ink)] truncate max-w-[220px]">
            {post.title}
          </li>
        </ol>
      </nav>

      {/* Metadata strip */}
      <div className="mx-auto max-w-3xl px-5 lg:px-8 pt-8">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pb-4 border-b border-[var(--color-rule)] font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">
          <span>Posted — {formattedDate}</span>
          <span className="text-[var(--color-rule)]">·</span>
          <span>Filed Under — {post.category}</span>
          <span className="text-[var(--color-rule)]">·</span>
          <span>Reading — {post.readTime}</span>
        </div>
      </div>

      {/* Title */}
      <header className="mx-auto max-w-3xl px-5 lg:px-8 pt-10 pb-8">
        <h1
          className="font-display text-[var(--color-ink)]"
          style={{
            fontSize: "clamp(36px, 5.4vw, 64px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            fontWeight: 400,
          }}
        >
          {post.title}
        </h1>
        <p className="mt-7 font-display italic text-[17px] text-[var(--color-ink-secondary)]">
          By {post.author}.
        </p>
      </header>

      {/* Body */}
      <article className="mx-auto max-w-[68ch] px-5 lg:px-8 pb-16">
        <div className="blog-body">
          <MDXRemote source={post.content} components={MDX_COMPONENTS} />
        </div>
      </article>

      {/* Colophon — Circular 230 Notice (verbatim) */}
      <section className="mx-auto max-w-3xl px-5 lg:px-8 pb-20">
        <div className="border-t-2 border-[var(--color-oxblood)] pt-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
            Colophon.
          </p>
          <p className="mt-4 font-display italic text-[15px] leading-[1.65] text-[var(--color-ink-secondary)] max-w-[60ch]">
            <span className="font-display not-italic text-[var(--color-ink)] tracking-wide">
              Circular 230 Notice —
            </span>{" "}
            {CIRCULAR_230_DISCLAIMER}
          </p>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t border-[var(--color-rule)] bg-[var(--color-paper-tint)]">
          <div className="mx-auto max-w-5xl px-5 lg:px-8 py-14">
            <p className="eyebrow">Next In This Series.</p>
            <h2
              className="mt-3 font-display text-[var(--color-ink)]"
              style={{ fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.15 }}
            >
              Continue reading.
            </h2>
            <ol className="mt-9 grid grid-cols-1 md:grid-cols-3 border-t border-l border-[var(--color-rule)]">
              {related.map((r, i) => (
                <li
                  key={r.slug}
                  className="border-r border-b border-[var(--color-rule)] bg-[var(--color-paper)]"
                >
                  <Link
                    href={`/blog/${r.slug}`}
                    className="group/r block h-full p-6 hover:bg-[var(--color-paper-tint)] transition-colors"
                  >
                    <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-gold-leaf)] group-hover/r:text-[var(--color-oxblood)] transition-colors tabular-nums">
                      {pad2(i + 1)}. {r.category}
                    </span>
                    <h3 className="mt-3 font-display text-[18px] leading-[1.25] text-[var(--color-ink)] tracking-tight">
                      {r.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-[1.55] text-[var(--color-ink-secondary)] line-clamp-2">
                      {r.excerpt}
                    </p>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 py-16 text-center space-y-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
            Questions on Your Own Return?
          </p>
          <h2
            className="font-display text-[var(--color-ink)]"
            style={{ fontSize: "clamp(26px, 3.4vw, 40px)", lineHeight: 1.15 }}
          >
            Schedule a consultation. <span className="italic text-[var(--color-oxblood)]">We will tell you honestly whether we can help.</span>
          </h2>
          <Button
            asChild
            className="bg-[var(--color-oxblood)] text-[var(--color-paper)] hover:bg-[var(--color-oxblood-hover)] rounded-none h-12 px-7 font-sans tracking-wide"
          >
            <Link href="/contact#schedule">Schedule a consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
