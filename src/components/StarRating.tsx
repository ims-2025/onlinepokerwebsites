// Accessible star rating rendered with inline SVG — no images, no client JS.
export default function StarRating({
  value,
  size = 16,
  showValue = true,
}: {
  value: number;
  size?: number;
  showValue?: boolean;
}) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  return (
    <span className="inline-flex items-center gap-2" aria-label={`Rated ${value} out of 5`}>
      <span className="relative inline-block" style={{ width: size * 5 + 4 * 4, height: size }}>
        <span className="absolute inset-0 flex gap-1 text-neutral-300">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={size} />
          ))}
        </span>
        <span
          className="absolute inset-0 flex gap-1 overflow-hidden text-gold-500"
          style={{ width: `calc(${pct}% )` }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={size} filled />
          ))}
        </span>
      </span>
      {showValue && <span className="text-sm font-semibold text-neutral-700">{value.toFixed(1)}</span>}
    </span>
  );
}

function Star({ size, filled }: { size: number; filled?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
      className="shrink-0"
      aria-hidden="true"
    >
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.98l-5.2 2.53.99-5.79L1.58 7.62l5.82-.85L10 1.5z" />
    </svg>
  );
}
