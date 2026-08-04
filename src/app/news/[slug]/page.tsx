import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle, newsArticles, sortedNews, formatNewsDate } from "@/lib/news";
import { rankedOperators } from "@/lib/operators";
import { site } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import RichText from "@/components/RichText";
import JsonLd from "@/components/JsonLd";
import Cta from "@/components/Cta";
import BrandTile from "@/components/BrandTile";

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug);
  if (!a) return {};
  const canonical = `/news/${a.slug}/`;
  return {
    title: a.metaTitle,
    description: a.description,
    alternates: { canonical },
    openGraph: {
      title: a.metaTitle,
      description: a.description,
      url: `${site.url}${canonical}`,
      type: "article",
      publishedTime: a.date,
    },
    twitter: { card: "summary_large_image", title: a.metaTitle, description: a.description },
  };
}

function anchor(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) notFound();

  const top = rankedOperators[0];
  const related = sortedNews.filter((x) => x.slug !== a.slug).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.date,
    articleSection: a.category,
    author: { "@type": "Organization", name: a.author },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/news/${a.slug}/`,
    keywords: a.tags.join(", "),
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "News", href: "/news/" },
          { name: a.title, href: `/news/${a.slug}/` },
        ]}
      />

      <article className="mx-auto max-w-content px-4">
        <header className="mt-6 max-w-3xl">
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-full bg-felt-500/10 px-3 py-1 font-semibold text-felt-700">
              {a.category}
            </span>
            <span className="text-neutral-500">
              {formatNewsDate(a.date)} · {a.readMins} min read · By {a.author}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-black leading-tight text-neutral-900 sm:text-4xl">
            {a.title}
          </h1>
          <p className="mt-3 text-lg text-neutral-600">{a.excerpt}</p>
        </header>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_18rem]">
          <div className="prose-poker max-w-none">
            {a.body.map((b, i) => {
              if (b.type === "h2")
                return (
                  <h2 key={i} id={anchor(b.text)}>
                    {b.text}
                  </h2>
                );
              if (b.type === "list")
                return (
                  <ul key={i}>
                    {b.items.map((it, j) => (
                      <li key={j}>
                        <RichText text={it} />
                      </li>
                    ))}
                  </ul>
                );
              return (
                <p key={i}>
                  <RichText text={b.text} />
                </p>
              );
            })}

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2 not-prose">
              {a.tags.map((t) => (
                <span key={t} className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  #{t}
                </span>
              ))}
            </div>

            <p className="mt-8 text-xs text-neutral-500">
              Informational content for readers 21+. The sites referenced operate offshore and are not
              licensed by US state regulators. Bonus figures and terms change — always confirm on the
              operator&apos;s website. Nothing here is legal or financial advice.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-gold-500/20 bg-gold-500/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                Our #1 poker site
              </p>
              <div className="mt-3 flex items-center gap-3">
                <BrandTile text={top.logoText} accent={top.accent} />
                <div>
                  <p className="font-bold text-neutral-900">{top.name}</p>
                  <p className="text-sm text-gold-600">{top.bonusHeadline}</p>
                </div>
              </div>
              <div className="mt-4">
                <Cta label={`Visit ${top.name}`} href={`/go/${top.slug}/`} block />
              </div>
              <Link
                href={`/reviews/${top.slug}/`}
                className="mt-2 block text-center text-xs font-semibold text-neutral-600 hover:text-neutral-900"
              >
                Read our full review →
              </Link>
            </div>

            <nav aria-label="Related news" className="rounded-xl border border-neutral-200 bg-white p-5">
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-neutral-500">
                More news
              </h2>
              <ul className="space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/news/${r.slug}/`} className="block text-sm font-semibold text-neutral-800 hover:text-felt-700">
                      {r.title}
                    </Link>
                    <span className="text-xs text-neutral-500">{formatNewsDate(r.date)}</span>
                  </li>
                ))}
              </ul>
              <Link href="/news/" className="mt-4 block text-sm font-semibold text-felt-700">
                All news →
              </Link>
            </nav>
          </aside>
        </div>
      </article>

      <JsonLd data={articleLd} />
    </>
  );
}
