import JsonLd from "./JsonLd";
import type { Faq as FaqItem } from "@/lib/operators";

// Uses native <details>/<summary> for zero-JS accordions, plus FAQPage schema.
export default function Faq({ items, heading = "Frequently asked questions" }: { items: FaqItem[]; heading?: string }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="mb-5 text-2xl font-bold text-neutral-900">
        {heading}
      </h2>
      <div className="divide-y divide-neutral-200 overflow-hidden rounded-xl border border-neutral-200 bg-white">
        {items.map((f) => (
          <details key={f.q} className="group px-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-neutral-900 [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="text-felt-600 transition-transform group-open:rotate-45" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="pb-4 text-sm leading-relaxed text-neutral-600">{f.a}</p>
          </details>
        ))}
      </div>
      <JsonLd data={ld} />
    </section>
  );
}
