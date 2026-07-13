import type { Rating } from "@/lib/operators";

const LABELS: { key: keyof Rating; label: string }[] = [
  { key: "bonus", label: "Bonus & value" },
  { key: "traffic", label: "Traffic & games" },
  { key: "banking", label: "Banking" },
  { key: "software", label: "Software" },
  { key: "trust", label: "Trust & history" },
];

export default function RatingBars({ rating }: { rating: Rating }) {
  return (
    <dl className="space-y-3">
      {LABELS.map(({ key, label }) => {
        const val = rating[key];
        return (
          <div key={key} className="grid grid-cols-[8rem_1fr_2.5rem] items-center gap-3">
            <dt className="text-sm text-neutral-600">{label}</dt>
            <dd className="h-2 overflow-hidden rounded-full bg-neutral-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-felt-500 to-felt-300"
                style={{ width: `${(val / 5) * 100}%` }}
              />
            </dd>
            <dd className="text-right text-sm font-semibold text-neutral-900">{val.toFixed(1)}</dd>
          </div>
        );
      })}
    </dl>
  );
}
