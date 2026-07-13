import Link from "next/link";
import { primaryNav, site } from "@/lib/site";

// Header uses a native <details> for the mobile menu so it needs zero client JS.
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label={`${site.name} home`}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-felt-500 to-felt-800 text-lg font-black text-white shadow-sm">
            ♠
          </span>
          <span className="text-sm font-bold leading-tight text-neutral-900 sm:text-base">
            Online Poker<span className="text-felt-600">Websites</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-felt-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="relative md:hidden">
          <summary className="grid h-9 w-9 cursor-pointer list-none place-items-center rounded-md border border-neutral-300 text-neutral-700 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-56 rounded-lg border border-neutral-200 bg-white p-2 shadow-xl">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-felt-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
