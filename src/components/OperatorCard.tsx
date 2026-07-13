import Link from "next/link";
import type { Operator } from "@/lib/operators";
import BrandTile from "./BrandTile";
import StarRating from "./StarRating";
import Cta from "./Cta";

export default function OperatorCard({ op }: { op: Operator }) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-lg transition-colors hover:border-felt-500/40 sm:p-6">
      {op.rank === 1 && (
        <span className="absolute right-0 top-0 rounded-bl-lg bg-gold-500 px-3 py-1 text-xs font-black uppercase tracking-wide text-ink-950">
          Editor&apos;s pick
        </span>
      )}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-neutral-300 text-sm font-black text-neutral-600">
            {op.rank}
          </span>
          <BrandTile text={op.logoText} accent={op.accent} size="lg" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-lg font-bold text-neutral-900">
              <Link href={`/reviews/${op.slug}/`} className="hover:text-felt-700">
                {op.name}
              </Link>
            </h3>
            <StarRating value={op.rating.overall} />
          </div>
          <p className="mt-1 text-sm text-neutral-500">{op.tagline}</p>
          <p className="mt-2 text-xs text-neutral-500">
            {op.network} · Est. {op.established}
          </p>
        </div>

        <div className="shrink-0 rounded-xl border border-gold-500/20 bg-gold-500/5 p-4 text-center sm:w-48">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-gold-600">
            Welcome bonus
          </p>
          <p className="mt-1 text-xl font-black leading-none text-neutral-900">{op.bonusHeadline}</p>
          <div className="mt-3 flex flex-col gap-2">
            <Cta label="Visit Site" href={`/go/${op.slug}/`} block />
            <Link
              href={`/reviews/${op.slug}/`}
              className="text-xs font-semibold text-neutral-600 hover:text-neutral-900"
            >
              Read review →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
