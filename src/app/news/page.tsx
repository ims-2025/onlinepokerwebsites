import Link from "next/link";
import type { Metadata } from "next";
import { sortedNews, formatNewsDate } from "@/lib/news";
import { site } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Poker News — US & Canada Online Poker Updates",
  description:
    "The latest online poker news, analysis and updates for US and Canadian players — operators, tournaments, crypto banking, legality and bonuses. Updated regularly.",
  alternates: { canonical: "/news/" },
  openGraph: {
    title: "Poker News — US & Canada Online Poker Updates",
    description:
      "The latest online poker news and analysis for US and Canadian players — operators, tournaments, crypto banking, legality and bonuses.",
    url: `${site.url}/news/`,
    type: "website",
  },
};

export default function NewsIndexPage() {
  const [lead, ...rest] = sortedNews;

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Poker News",
    numberOfItems: sortedNews.length,
    itemListElement: sortedNews.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${site.url}/news/${a.slug}/`,
      name: a.title,
    })),
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "News", href: "/news/" },
        ]}
      />

      <div className="mx-auto max-w-content px-4 pb-4 pt-6">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-felt-600">Poker News</p>
          <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
            Online poker news for US &amp; Canada
          </h1>
          <p className="mt-3 text-neutral-600">
            Analysis and updates on the operators, tournaments, banking and rules that matter to
            North American players. New articles published regularly.
          </p>
        </div>

        {/* Featured / lead story */}
        <Link
          href={`/news/${lead.slug}/`}
          className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-felt-500/40 sm:p-8"
        >
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-full bg-felt-500/10 px-3 py-1 font-semibold text-felt-700">
              {lead.category}
            </span>
            <span className="text-neutral-500">
              {formatNewsDate(lead.date)} · {lead.readMins} min read
            </span>
          </div>
          <h2 className="mt-3 text-2xl font-black text-neutral-900 group-hover:text-felt-700 sm:text-3xl">
            {lead.title}
          </h2>
          <p className="mt-3 max-w-3xl text-neutral-600">{lead.excerpt}</p>
          <span className="mt-4 inline-block text-sm font-semibold text-felt-700">Read article →</span>
        </Link>

        {/* Grid of remaining stories */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <Link
              key={a.slug}
              href={`/news/${a.slug}/`}
              className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-felt-500/40"
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 font-semibold text-neutral-700">
                  {a.category}
                </span>
                <span className="text-neutral-500">{formatNewsDate(a.date)}</span>
              </div>
              <h3 className="mt-2 font-bold text-neutral-900 group-hover:text-felt-700">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm text-neutral-600">{a.excerpt}</p>
              <span className="mt-3 text-sm font-semibold text-felt-700">Read →</span>
            </Link>
          ))}
        </div>
      </div>

      <JsonLd data={itemListLd} />
    </>
  );
}
