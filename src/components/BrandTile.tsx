// CSS-only brand tile (monogram) — avoids shipping logo image files and keeps
// the page featherweight. Swap for a real <Image> when you have brand assets.
export default function BrandTile({
  text,
  accent,
  size = "md",
}: {
  text: string;
  accent: string;
  size?: "sm" | "md" | "lg";
}) {
  const dims =
    size === "lg" ? "h-16 w-16 text-xl" : size === "sm" ? "h-10 w-10 text-xs" : "h-12 w-12 text-sm";
  return (
    <span
      className={`grid ${dims} shrink-0 place-items-center rounded-xl bg-gradient-to-br ${accent} font-black tracking-tight text-white shadow-md ring-1 ring-white/10`}
      aria-hidden="true"
    >
      {text}
    </span>
  );
}
