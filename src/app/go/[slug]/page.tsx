import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getOperator, operators } from "@/lib/operators";

// Cloaked affiliate redirect pages.
// A "Visit" button links to /go/<slug>/ (your own domain), and this page forwards
// the visitor to the affiliate URL. The affiliate link is never exposed in the
// on-page markup of the review, and these pages are marked noindex/nofollow so
// search engines don't index the redirect.

export function generateStaticParams() {
  return operators.map((o) => ({ slug: o.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const op = getOperator(params.slug);
  return {
    title: op ? `Redirecting to ${op.name}…` : "Redirecting…",
    robots: { index: false, follow: false, nocache: true },
  };
}

export default function GoPage({ params }: { params: { slug: string } }) {
  const op = getOperator(params.slug);
  if (!op) notFound();
  const url = op.tracking;

  return (
    <>
      {/* No-JS fallbacks: meta refresh + a manual continue link */}
      <meta httpEquiv="refresh" content={`0;url=${url}`} />
      {/* Instant client-side redirect */}
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(url)});`,
        }}
      />
      <div className="mx-auto flex max-w-content flex-col items-center px-4 py-24 text-center">
        <span className="text-5xl">♠</span>
        <h1 className="mt-4 text-2xl font-bold text-neutral-900">
          Taking you to {op.name}…
        </h1>
        <p className="mt-2 text-neutral-600">
          If you are not redirected automatically,{" "}
          <a
            href={url}
            rel="sponsored nofollow noopener"
            className="font-semibold text-felt-700 underline"
          >
            click here to continue
          </a>
          .
        </p>
        <p className="mt-6 text-xs text-neutral-500">21+ · Play responsibly · T&amp;Cs apply</p>
      </div>
    </>
  );
}
