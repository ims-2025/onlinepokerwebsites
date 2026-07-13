import Link from "next/link";
import { site } from "@/lib/site";
import { rankedOperators } from "@/lib/operators";
import { guideLinks } from "@/lib/site";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-content px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-felt-500 to-felt-800 font-black text-white">
                ♠
              </span>
              <span className="font-bold text-neutral-900">OnlinePokerWebsites</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              Independent reviews and rankings of the best real-money poker sites for US and
              Canadian players. Updated {site.updatedLabel}.
            </p>
          </div>

          <nav aria-label="Reviews" className="text-sm">
            <h2 className="mb-3 font-semibold text-neutral-900">Reviews</h2>
            <ul className="space-y-2">
              {rankedOperators.map((o) => (
                <li key={o.slug}>
                  <Link href={`/reviews/${o.slug}/`} className="text-neutral-500 hover:text-felt-700">
                    {o.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Guides" className="text-sm">
            <h2 className="mb-3 font-semibold text-neutral-900">Guides</h2>
            <ul className="space-y-2">
              {guideLinks.map((g) => (
                <li key={g.href}>
                  <Link href={g.href} className="text-neutral-500 hover:text-felt-700">
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="About" className="text-sm">
            <h2 className="mb-3 font-semibold text-neutral-900">About</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/about/" className="text-neutral-500 hover:text-felt-700">
                  About &amp; Methodology
                </Link>
              </li>
              <li>
                <Link href="/responsible-gambling/" className="text-neutral-500 hover:text-felt-700">
                  Responsible Gambling
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 rounded-lg border border-gold-500/40 bg-gold-500/10 p-4 text-xs leading-relaxed text-neutral-700">
          <strong className="text-gold-600">21+ · Play responsibly.</strong> Gambling involves risk
          and may be restricted or illegal in your jurisdiction — it is your responsibility to check
          the laws where you live. The sites reviewed here operate offshore and are not licensed by
          US state gaming regulators. We may earn a commission if you sign up through links on this
          site, which never affects our rankings or editorial opinions. If gambling is a problem for
          you, call 1-800-GAMBLER (US) or the Canadian problem-gambling helpline in your province.
        </div>

        <p className="mt-6 text-xs text-neutral-400">
          © {year} {site.name}. All rights reserved. All bonus figures, promo codes and terms are
          subject to change — always confirm details on the operator&apos;s website.
        </p>
      </div>
    </footer>
  );
}
