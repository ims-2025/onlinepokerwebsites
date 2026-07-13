import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuide, guides } from "@/lib/guides";
import { rankedOperators } from "@/lib/operators";
import { site } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Cta from "@/components/Cta";
import BrandTile from "@/components/BrandTile";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuide(params.slug);
  if (!g) return {};
  const canonical = `/guides/${g.slug}/`;
  return {
    title: g.metaTitle,
    description: g.description,
    alternates: { canonical },
    openGraph: { title: g.metaTitle, description: g.description, url: `${site.url}${canonical}`, type: "article" },
    twitter: { card: "summary_large_image", title: g.metaTitle, description: g.description },
  };
}

function anchor(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug);
  if (!g) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.metaTitle,
    description: g.description,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    dateModified: "2026-07-01",
    mainEntityOfPage: `${site.url}/guides/${g.slug}/`,
  };
  const top = rankedOperators[0];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/#learn" },
          { name: g.title, href: `/guides/${g.slug}/` },
        ]}
      />

      <article className="mx-auto max-w-content px-4">
        <header className="mt-6 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-felt-600">Guide</p>
          <h1 className="mt-2 text-3xl font-black text-neutral-900 sm:text-4xl">{g.title}</h1>
          <p className="mt-2 text-sm text-neutral-500">
            Updated {g.updated} · {g.readMins} min read
          </p>
        </header>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_18rem]">
          <div className="max-w-none">
            <div className="prose-poker">
              {g.intro.map((p, i) => (
                <p key={i} className="text-lg">
                  {p}
                </p>
              ))}
            </div>

            {g.sections.map((s) => (
              <section key={s.heading} className="prose-poker">
                <h2 id={anchor(s.heading)}>{s.heading}</h2>
                {s.blocks.map((b, i) => {
                  if (b.type === "p") return <p key={i}>{b.text}</p>;
                  if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
                  return (
                    <ul key={i}>
                      {b.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  );
                })}
              </section>
            ))}

            <div className="mt-10">
              <Faq items={g.faqs} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <nav aria-label="On this page" className="rounded-xl border border-neutral-200 bg-white p-5">
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-neutral-500">
                On this page
              </h2>
              <ul className="space-y-2 text-sm">
                {g.sections.map((s) => (
                  <li key={s.heading}>
                    <a href={`#${anchor(s.heading)}`} className="text-neutral-600 hover:text-neutral-900">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

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
          </aside>
        </div>
      </article>

      <JsonLd data={articleLd} />
    </>
  );
}
