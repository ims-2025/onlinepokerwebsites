import Link from "next/link";
import JsonLd from "./JsonLd";
import { site } from "@/lib/site";

export type Crumb = { name: string; href: string };

// Renders a visible breadcrumb trail AND matching BreadcrumbList structured data.
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.href}`,
    })),
  };
  return (
    <>
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-4 pt-6">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-neutral-500">
          {items.map((c, i) => (
            <li key={c.href} className="flex items-center gap-1">
              {i < items.length - 1 ? (
                <Link href={c.href} className="hover:text-neutral-900">
                  {c.name}
                </Link>
              ) : (
                <span className="text-neutral-700" aria-current="page">
                  {c.name}
                </span>
              )}
              {i < items.length - 1 && <span className="text-neutral-600">/</span>}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={ld} />
    </>
  );
}
