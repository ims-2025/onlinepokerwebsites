import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getOperator, operators } from "@/lib/operators";
import { site } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import BrandTile from "@/components/BrandTile";
import StarRating from "@/components/StarRating";
import RatingBars from "@/components/RatingBars";
import ProsCons from "@/components/ProsCons";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return operators.map((o) => ({ slug: o.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const op = getOperator(params.slug);
  if (!op) return {};
  const title = `${op.name} Review 2026 — ${op.bonusHeadline} Bonus`;
  const description = `${op.name} review: ${op.tagline} Bonus, banking, traffic, safety and a full verdict for US & Canadian players. Rated ${op.rating.overall}/5.`;
  const canonical = `/reviews/${op.slug}/`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: `${site.url}${canonical}`, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const op = getOperator(params.slug);
  if (!op) notFound();

  const reviewLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: op.name,
      description: op.tagline,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: op.rating.overall,
      bestRating: 5,
      worstRating: 1,
    },
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    datePublished: "2026-01-15",
    dateModified: "2026-07-01",
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Reviews", href: "/#rankings" },
          { name: op.name, href: `/reviews/${op.slug}/` },
        ]}
      />

      {/* Review hero */}
      <article className="mx-auto max-w-content px-4">
        <header className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <BrandTile text={op.logoText} accent={op.accent} size="lg" />
              <div>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="rounded-full bg-neutral-200 px-2 py-0.5">Ranked #{op.rank}</span>
                  <span>{op.network}</span>
                </div>
                <h1 className="mt-1 text-2xl font-black text-neutral-900 sm:text-3xl">
                  {op.name} Review
                </h1>
                <div className="mt-2 flex items-center gap-2">
                  <StarRating value={op.rating.overall} size={18} />
                  <span className="text-sm text-neutral-500">Editorial rating</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gold-500/20 bg-gold-500/5 p-5 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gold-600">
                Welcome bonus
              </p>
              <p className="mt-1 text-2xl font-black text-neutral-900">{op.bonusHeadline}</p>
              <div className="mt-3">
                <Cta label={`Visit ${op.name}`} href={`/go/${op.slug}/`} block />
              </div>
              <p className="mt-2 text-[11px] text-neutral-500">21+ · T&amp;Cs apply</p>
            </div>
          </div>
          <p className="mt-6 text-lg text-neutral-700">{op.tagline}</p>
        </header>

        {/* Quick facts */}
        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-3 text-xl font-bold text-neutral-900">Overview</h2>
            <div className="prose-poker">
              {op.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="rounded-xl border border-neutral-200 bg-white p-5">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-neutral-500">
              Key facts
            </h2>
            <dl className="space-y-2 text-sm">
              {op.keyFacts.map((f) => (
                <div key={f.label} className="flex justify-between gap-4 border-b border-neutral-200 pb-2">
                  <dt className="text-neutral-500">{f.label}</dt>
                  <dd className="text-right font-semibold text-neutral-900">{f.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        {/* Ratings + pros/cons */}
        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <h2 className="mb-4 text-lg font-bold text-neutral-900">How we rate {op.name}</h2>
            <RatingBars rating={op.rating} />
            <div className="mt-5 flex items-center justify-between rounded-lg bg-neutral-100 px-4 py-3">
              <span className="text-sm font-semibold text-neutral-600">Overall score</span>
              <span className="text-2xl font-black text-neutral-900">{op.rating.overall.toFixed(1)}/5</span>
            </div>
          </div>
          <div>
            <ProsCons pros={op.pros} cons={op.cons} />
          </div>
        </section>

        {/* Best for / availability */}
        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          <InfoCard title="Best for" body={op.bestFor} />
          <InfoCard title="US players" body={op.usAvailability} />
          <InfoCard title="Canadian players" body={op.canadaAvailability} />
        </section>

        {/* Long-form: bonus + editorial sections */}
        <section className="prose-poker mt-10 max-w-none">
          <h2>Bonus &amp; promotions</h2>
          <p>{op.bonusDetail}</p>
          <p>
            <strong>Rakeback / rewards:</strong> {op.rakeback}.
            {op.promoCode ? ` Promo code: ${op.promoCode}.` : ""}
          </p>
          {op.sections.map((s) => (
            <div key={s.heading}>
              <h2>{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ))}
        </section>

        {/* Banking (structured, outside prose) */}
        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">Banking &amp; payouts</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="mb-2 font-bold text-neutral-900">Deposit methods</h3>
              <ul className="space-y-1 text-sm text-neutral-600">
                {op.banking.deposits.map((d) => (
                  <li key={d}>• {d}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="mb-2 font-bold text-neutral-900">Withdrawal methods</h3>
              <ul className="space-y-1 text-sm text-neutral-600">
                {op.banking.withdrawals.map((w) => (
                  <li key={w}>• {w}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-neutral-600">
            <strong className="text-neutral-900">Payout speed:</strong> {op.banking.payoutSpeed}{" "}
            {op.banking.note}
          </p>
        </section>

        {/* Games */}
        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">Games available</h2>
          <div className="flex flex-wrap gap-2">
            {op.games.map((g) => (
              <span
                key={g}
                className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
              >
                {g}
              </span>
            ))}
          </div>
        </section>

        {/* Verdict */}
        <section className="prose-poker mt-10 max-w-none">
          <h2>Our verdict</h2>
          {op.verdict.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        {/* CTA band */}
        <section className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gold-500/20 bg-gradient-to-r from-gold-500/10 to-white p-6 sm:flex-row">
          <div>
            <h2 className="text-lg font-bold text-neutral-900">Ready to play at {op.name}?</h2>
            <p className="mt-1 text-sm text-neutral-600">
              Claim the {op.bonusHeadline} welcome bonus. 21+ · Play responsibly · T&amp;Cs apply.
            </p>
          </div>
          <Cta label={`Visit ${op.name}`} href={`/go/${op.slug}/`} />
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <Faq items={op.faqs} heading={`${op.name} FAQ`} />
        </section>

        {/* Other reviews */}
        <section className="mt-12 mb-4">
          <h2 className="mb-4 text-xl font-bold text-neutral-900">Compare other poker sites</h2>
          <div className="flex flex-wrap gap-3">
            {operators
              .filter((o) => o.slug !== op.slug)
              .map((o) => (
                <Link
                  key={o.slug}
                  href={`/reviews/${o.slug}/`}
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 hover:border-felt-500/40 hover:text-neutral-900"
                >
                  <BrandTile text={o.logoText} accent={o.accent} size="sm" />
                  {o.name}
                </Link>
              ))}
          </div>
        </section>
      </article>

      <JsonLd data={reviewLd} />
    </>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5">
      <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-felt-600">{title}</h2>
      <p className="text-sm leading-relaxed text-neutral-600">{body}</p>
    </div>
  );
}
