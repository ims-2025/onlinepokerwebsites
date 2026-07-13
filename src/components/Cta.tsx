// Affiliate call-to-action button.
// href points to a cloaked /go/<slug>/ redirect that forwards to the affiliate URL.
// rel="sponsored nofollow" keeps you compliant with Google's paid-link guidelines.
export default function Cta({
  label = "Visit Site",
  href = "#",
  subtle = false,
  block = false,
}: {
  label?: string;
  href?: string;
  subtle?: boolean;
  block?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold-400/60";
  const style = subtle
    ? "border border-neutral-300 text-neutral-800 hover:bg-neutral-100"
    : "bg-gradient-to-b from-gold-400 to-gold-600 text-ink-950 shadow-md shadow-gold-500/30";
  return (
    <a
      href={href}
      rel="sponsored nofollow noopener"
      target="_blank"
      className={`${base} ${style} ${block ? "w-full" : ""}`}
    >
      {label}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}
