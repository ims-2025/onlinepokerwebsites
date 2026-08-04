import Link from "next/link";
import type { Metadata } from "next";
import { rankedOperators } from "@/lib/operators";
import { guideLinks, site } from "@/lib/site";
import { sortedNews, formatNewsDate } from "@/lib/news";
import OperatorCard from "@/components/OperatorCard";
import SectionHeading from "@/components/SectionHeading";
import StarRating from "@/components/StarRating";
import BrandTile from "@/components/BrandTile";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Best Online Poker Sites 2026 — Expert Reviews & Rankings",
  description:
    "Compare the best online poker sites for US and Canadian players in 2026. Independent reviews of Americas Cardroom, BetOnline, Black Chip Poker, TigerGaming & SportsBetting.ag — bonuses, traffic, banking and safety.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    q: "What is the best online poker site for US players in 2026?",
    a: "Americas Cardroom (ACR) tops our rankings for US players thanks to the largest player pool available offshore, the multi-million-dollar Venom tournament series and a mature rewards program. BetOnline is the best all-round pick if you also want a sportsbook, casino and the widest crypto banking menu.",
  },
  {
    q: "Are these online poker sites legal in the US and Canada?",
    a: "The sites we review operate offshore and are not licensed by US state regulators. A few US states run their own regulated poker rooms, while others rely on offshore options. Canada is broadly permissive for players. Laws vary by location and change over time, so it is your responsibility to confirm what is allowed where you live. See our US legality and Canada guides for detail.",
  },
  {
    q: "How do we rank online poker sites?",
    a: "We weigh player traffic and game quality, welcome-bonus and rakeback value, banking speed and fees, software and mobile experience, and each operator's track record and reputation. We update rankings as offers and conditions change.",
  },
  {
    q: "What is the fastest way to deposit and withdraw?",
    a: "Cryptocurrency. Every site in our top five is crypto-first: deposits are instant and withdrawals typically clear within 24–48 hours with no platform fees, versus slower and pricier card or wire options.",
  },
];

export default function HomePage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Online Poker Sites 2026",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: rankedOperators.length,
    itemListElement: rankedOperators.map((o) => ({
      "@type": "ListItem",
      position: o.rank,
      url: `${site.url}/reviews/${o.slug}/`,
      name: o.name,
    })),
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(31,158,107,0.18),transparent)]" />
        <div className="relative mx-auto max-w-content px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-felt-500/30 bg-felt-500/10 px-3 py-1 text-xs font-semibold text-felt-700">
              Updated {site.updatedLabel} · Independent & ad-free rankings
            </span>
            <h1 className="mt-5 text-4xl font-black leading-tight text-neutral-900 sm:text-5xl">
              The Best Online Poker Sites for{" "}
              <span className="bg-gradient-to-r from-felt-600 to-gold-600 bg-clip-text text-transparent">
                US &amp; Canada
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-600">
              We tested and compared the top real-money poker rooms open to North American players —
              ranked on traffic, bonuses, banking speed and safety, so you can pick a site with
              confidence.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="#rankings"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-gold-400 to-gold-600 px-6 py-3 text-sm font-bold text-ink-950 shadow-lg shadow-gold-500/20 transition-transform hover:-translate-y-0.5"
              >
                See the top 5 poker sites
              </Link>
              <Link
                href="/guides/how-to-choose-a-poker-site/"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-6 py-3 text-sm font-bold text-neutral-900 hover:bg-neutral-100"
              >
                How we rank them
              </Link>
            </div>
            <dl className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-4 text-center">
              <Stat value="5" label="Sites reviewed" />
              <Stat value="24–48h" label="Crypto payouts" />
              <Stat value="21+" label="Play responsibly" />
            </dl>
          </div>
        </div>
      </section>

      {/* Rankings */}
      <section id="rankings" className="mx-auto max-w-content scroll-mt-20 px-4 py-14">
        <SectionHeading
          eyebrow="2026 Rankings"
          title="Top 5 online poker sites right now"
          intro="Every site below accepts players from the US and/or Canada and is crypto-friendly. Bonuses are subject to change — always confirm terms on the operator's site."
        />
        <div className="space-y-4">
          {rankedOperators.map((op) => (
            <OperatorCard key={op.slug} op={op} />
          ))}
        </div>
        <p className="mt-6 text-xs text-neutral-500">
          Advertiser disclosure: we may earn a commission when you sign up through links on this
          page. This never affects our rankings or review scores.
        </p>
      </section>

      {/* Comparison table */}
      <section className="border-y border-neutral-200 bg-neutral-100">
        <div className="mx-auto max-w-content px-4 py-14">
          <SectionHeading
            eyebrow="At a glance"
            title="Compare the top poker sites"
            intro="A quick side-by-side of bonuses, networks and ratings."
          />
          <div className="overflow-x-auto rounded-xl border border-neutral-200">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead className="bg-neutral-100 text-neutral-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">#</th>
                  <th className="px-4 py-3 font-semibold">Poker site</th>
                  <th className="px-4 py-3 font-semibold">Welcome bonus</th>
                  <th className="px-4 py-3 font-semibold">Network</th>
                  <th className="px-4 py-3 font-semibold">Rating</th>
                  <th className="px-4 py-3 font-semibold">Review</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {rankedOperators.map((op) => (
                  <tr key={op.slug} className="hover:bg-neutral-100">
                    <td className="px-4 py-3 font-black text-neutral-500">{op.rank}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <BrandTile text={op.logoText} accent={op.accent} size="sm" />
                        <span className="font-semibold text-neutral-900">{op.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-semibold text-gold-600">{op.bonusHeadline}</td>
                    <td className="px-4 py-3 text-neutral-600">{op.network.replace(" Poker Network", " Network")}</td>
                    <td className="px-4 py-3">
                      <StarRating value={op.rating.overall} showValue />
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/reviews/${op.slug}/`}
                        className="font-semibold text-felt-700 hover:text-felt-800"
                      >
                        Read →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why trust us */}
      <section className="mx-auto max-w-content px-4 py-14">
        <SectionHeading
          eyebrow="Our methodology"
          title="Why you can trust these rankings"
          intro="We are not a poker room — we are an independent guide. Here's what shapes every score."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Feature
            title="Traffic & games"
            body="A poker site is only as good as its games. We prioritise rooms with the deepest player pools and softest tables through North American peak hours."
          />
          <Feature
            title="Real bonus value"
            body="We look past the headline number to how a bonus actually clears, plus ongoing rakeback and reloads — the value you'll really receive."
          />
          <Feature
            title="Banking & payouts"
            body="Fast, low-fee cashouts matter most. We test crypto and traditional methods and flag any withdrawal friction."
          />
          <Feature
            title="Trust & track record"
            body="History, ownership, network reputation and payout reliability all feed into a site's trust score."
          />
        </div>
      </section>

      {/* Guides */}
      <section id="learn" className="scroll-mt-20 border-t border-neutral-200 bg-neutral-100">
        <div className="mx-auto max-w-content px-4 py-14">
          <SectionHeading
            eyebrow="Learn more"
            title="Poker guides for US & Canadian players"
            intro="New to online poker or want to play smarter? Start here."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guideLinks.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-felt-500/40"
              >
                <h3 className="font-bold text-neutral-900 group-hover:text-felt-700">{g.title}</h3>
                <p className="mt-2 text-sm text-neutral-500">{g.blurb}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-felt-700">Read guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="news" className="scroll-mt-20 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-content px-4 py-14">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Poker News"
              title="Latest poker news & analysis"
              intro="Fresh updates on operators, tournaments, banking and rules for US and Canadian players."
            />
            <Link
              href="/news/"
              className="mb-8 hidden shrink-0 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-bold text-neutral-900 hover:bg-neutral-100 sm:inline-block"
            >
              All news →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sortedNews.slice(0, 3).map((a) => (
              <Link
                key={a.slug}
                href={`/news/${a.slug}/`}
                className="group flex flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-5 transition-colors hover:border-felt-500/40"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-felt-500/10 px-2.5 py-0.5 font-semibold text-felt-700">
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
          <Link href="/news/" className="mt-6 inline-block text-sm font-bold text-felt-700 sm:hidden">
            All news →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-4 py-14">
        <Faq items={homeFaqs} />
      </section>

      {/* Responsible gambling banner */}
      <section className="mx-auto max-w-content px-4 pb-6">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-felt-200 bg-gradient-to-r from-felt-100 to-white p-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-lg font-bold text-neutral-900">Play for fun, and within your limits</h2>
            <p className="mt-1 text-sm text-neutral-600">
              Set a budget, never chase losses, and take breaks. If gambling stops being fun, help is
              available.
            </p>
          </div>
          <Link
            href="/responsible-gambling/"
            className="shrink-0 rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-bold text-neutral-900 hover:bg-neutral-100"
          >
            Responsible gambling
          </Link>
        </div>
      </section>

      <JsonLd data={itemListLd} />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-neutral-100 px-3 py-4">
      <div className="text-2xl font-black text-neutral-900">{value}</div>
      <div className="mt-1 text-xs text-neutral-500">{label}</div>
    </div>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5">
      <h3 className="font-bold text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">{body}</p>
    </div>
  );
}
