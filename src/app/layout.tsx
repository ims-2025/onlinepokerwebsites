import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Best Online Poker Sites 2026 — Expert Reviews & Rankings",
    template: "%s | Online Poker Websites",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "online poker sites",
    "best poker sites",
    "US poker sites",
    "Canada poker sites",
    "real money poker",
    "poker site reviews",
    "poker bonuses",
    "Americas Cardroom",
    "BetOnline poker",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Best Online Poker Sites 2026 — Expert Reviews & Rankings",
    description: site.description,
    url: site.url,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Poker Sites 2026 — Expert Reviews & Rankings",
    description: site.description,
    site: site.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "gambling",
};

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
  };
  const siteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "en",
    about: "Online poker site reviews and rankings for US and Canadian players",
  };
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-ink-950"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={[orgLd, siteLd]} />
      </body>
    </html>
  );
}
