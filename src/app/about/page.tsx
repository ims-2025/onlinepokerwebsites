import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About & Review Methodology",
  description:
    "How Online Poker Websites reviews and ranks poker sites for US and Canadian players — our methodology, editorial independence and advertiser disclosure.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about/" },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4">
        <header className="mt-6">
          <h1 className="text-3xl font-black text-neutral-900 sm:text-4xl">About Online Poker Websites</h1>
          <p className="mt-3 text-lg text-neutral-600">
            We&apos;re an independent guide to the best real-money poker sites for players in the
            United States and Canada.
          </p>
        </header>

        <div className="prose-poker mt-8">
          <h2>What we do</h2>
          <p>
            {site.name} exists to answer one question well: which online poker site should you play
            at? We review the rooms open to North American players, compare them on the factors that
            actually matter, and keep our rankings current as offers and conditions change.
          </p>
          <p>
            We are not a poker room and we don&apos;t take bets. Our job is to give you clear,
            honest information so you can choose with confidence.
          </p>

          <h2>How we rank poker sites</h2>
          <p>Every site is scored across six weighted categories:</p>
          <ul>
            <li>
              <strong>Traffic &amp; games</strong> — the depth of the player pool and the range of
              games and stakes available through peak hours.
            </li>
            <li>
              <strong>Bonus &amp; value</strong> — how the welcome bonus really clears, plus ongoing
              rakeback and promotions.
            </li>
            <li>
              <strong>Banking</strong> — deposit and withdrawal speed, fees and the range of
              methods, with a focus on crypto.
            </li>
            <li>
              <strong>Software</strong> — stability, features and mobile experience across desktop
              and app.
            </li>
            <li>
              <strong>Trust &amp; history</strong> — track record, network reputation and payout
              reliability.
            </li>
            <li>
              <strong>Availability</strong> — which US states and Canadian provinces the room
              accepts.
            </li>
          </ul>

          <h2>Editorial independence</h2>
          <p>
            Our rankings reflect our genuine assessment of each site. We do not sell placement, and a
            higher commission never buys a higher position. If our opinion of a site changes, its
            ranking changes.
          </p>

          <h2>Advertiser disclosure</h2>
          <p>
            We may earn a commission when you sign up to a site through links on this page. This is
            how we fund the work, and it comes at no extra cost to you. It does not influence our
            scores, rankings or editorial opinions.
          </p>

          <h2>Accuracy &amp; updates</h2>
          <p>
            Bonuses, promo codes, banking options and availability change frequently in this
            industry. We update our content regularly, but you should always confirm the current
            terms on the operator&apos;s own website before depositing. Nothing on this site is legal
            or financial advice.
          </p>

          <h2>Play responsibly</h2>
          <p>
            We only want you to play for entertainment and within your means. Please read our{" "}
            <a href="/responsible-gambling/">responsible gambling guide</a> for tools and support
            resources.
          </p>
        </div>
      </div>
    </>
  );
}
