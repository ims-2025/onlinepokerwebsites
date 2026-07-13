import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-content flex-col items-center px-4 py-24 text-center">
      <span className="text-6xl">♠</span>
      <h1 className="mt-4 text-3xl font-black text-neutral-900">Page not found</h1>
      <p className="mt-3 max-w-md text-neutral-600">
        We couldn&apos;t find that page. It may have moved, or the link may be out of date.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-gradient-to-b from-gold-400 to-gold-600 px-6 py-3 text-sm font-bold text-ink-950"
        >
          Back to top poker sites
        </Link>
        <Link
          href="/guides/how-to-choose-a-poker-site/"
          className="rounded-lg border border-neutral-300 px-6 py-3 text-sm font-bold text-neutral-900 hover:bg-neutral-100"
        >
          Read our guides
        </Link>
      </div>
    </div>
  );
}
