# Online Poker Websites

A fast, SEO-optimized poker-site review and rankings website for US & Canadian players, built with **Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**. It exports to fully static HTML for maximum speed and easy hosting.

## What's inside

- **Homepage** with hero, top-5 rankings, comparison table, methodology, guides and FAQ.
- **5 in-depth site reviews**: Americas Cardroom, BetOnline Poker, Black Chip Poker, SportsBetting.ag, TigerGaming.
- **5 guides**: choosing a site, bonuses explained, deposits & withdrawals, US legality, Canada.
- **About / methodology** and **Responsible Gambling** pages.
- **SEO built in**: per-page titles & meta descriptions, canonical URLs, Open Graph/Twitter cards, JSON-LD structured data (Organization, WebSite, ItemList, Review + Rating, Article, FAQPage, BreadcrumbList), auto-generated `sitemap.xml` and `robots.txt`, semantic HTML and a skip-link for accessibility.
- **Performance**: static export, zero client-side JavaScript for interactivity (native `<details>` menus/accordions), CSS-only brand tiles (no image requests), system-font stack (no web-font fetch).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build the static site

```bash
npm run build
```

The exported site is written to the **`out/`** folder — plain HTML/CSS/JS you can host anywhere.

## Deploy (pick one)

- **Cloudflare Pages / Netlify**: connect the repo, build command `npm run build`, output directory `out`.
- **GitHub Pages**: push the contents of `out/` to your Pages branch.
- **Any static host / S3**: upload the `out/` folder.

## Before you go live — customise these

1. **Affiliate links.** Every "Visit Site" button uses `href="#"`. Open `src/components/Cta.tsx` and the CTAs on each page/card and replace `#` with your tracking/affiliate URL per brand. The buttons already use `rel="sponsored nofollow"`.
2. **Bonus figures & promo codes.** Content in `src/lib/operators.ts` is accurate as of July 2026 but changes often — keep it current and confirm terms on each operator's site.
3. **Domain.** Set in `src/lib/site.ts` (`site.url`) — currently `https://onlinepokerwebsites.com`. This drives canonicals, sitemap and structured data.
4. **Open Graph image.** Add an `opengraph-image.png` to `src/app/` for richer social previews (optional).
5. **Analytics.** Drop your analytics snippet into `src/app/layout.tsx` if desired.

## Editing content

- **Operators / reviews** → `src/lib/operators.ts`
- **Guides** → `src/lib/guides.ts`
- **Site name, nav, footer** → `src/lib/site.ts`

All reviews and guides are data-driven, so adding a new site or guide is just a new entry in the relevant file.

---

**Disclaimer:** This project promotes real-money gambling to an adult (21+) audience. The reviewed sites operate offshore and are not licensed by US state regulators. Content is informational, not legal or financial advice. Always confirm what's legal where you live and gamble responsibly.
