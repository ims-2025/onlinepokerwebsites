# SEO Crawl Analysis & Fix Plan — onlinepokerwebsites.com

**Source:** Screaming Frog export `2026.08.13.16.11.22/` (live-site crawl)
**Date reviewed:** 13 August 2026
**Pages crawled:** 80 URLs (66 HTML pages + assets)

---

## Headline

The site's content, metadata and structured data are in good shape — **no broken links, no missing or duplicate titles/descriptions, no missing H1s, and zero structured-data errors.** But the crawl surfaced **one critical, site-wide indexing problem**: every HTML page is currently **Non-Indexable** because of a www / non-www canonical conflict. This is almost certainly holding back organic performance, and it is now fixed in code (pending a redeploy).

---

## What the crawl found

### ✅ Healthy (no action needed)
- **Response codes:** 0 client errors (4xx) and 0 server errors (5xx). No broken internal links.
- **Titles & meta descriptions:** none missing, none duplicated, none over-length.
- **H1s:** present and unique on every page. No multiple/missing H1s.
- **Structured data:** 0 parse errors, 0 validation errors across all schema (Organization, WebSite, Review, Article, FAQ, Breadcrumb, ItemList).
- **HSTS header:** present (Vercel supplies it).
- **Scheduled news pipeline is working:** the crawl already shows several newly auto-published articles live (e.g. *multi-tabling*, *tournament formats*, *account security*, *bankroll management*, *beginner roadmap*).

### 🟥 P0 — Critical: www / non-www canonical conflict (all 66 pages Non-Indexable)
- Vercel serves the site on **`www.onlinepokerwebsites.com`** and 301/308-redirects the non-www apex (`onlinepokerwebsites.com`) to it.
- But every page's **canonical tag pointed to the non-www URL** (`https://onlinepokerwebsites.com/...`).
- Net effect: the served **www** page says "my canonical is the **non-www** URL," which then **redirects back to www**. Screaming Frog classifies all 66 HTML URLs as Non-Indexable — 33 "Canonicalised" (www→non-www canonical) + 33 "Redirected" (non-www→www).
- **Why it matters:** a canonical that points at a redirecting URL sends Google mixed signals, can suppress or delay indexing, and dilutes link equity.

### 🟧 P1 — Missing security response headers (all 47 served pages)
Four recommended headers are absent (HSTS is already present):
- `X-Content-Type-Options`
- `X-Frame-Options`
- `Content-Security-Policy`
- `Referrer-Policy`

Not a direct ranking factor, but it's a trust/security best practice and shows up in audits (and Screaming Frog's Security tab).

### ⚪ Not an issue (expected behaviour)
- **30 "nofollow" internal outlinks** = your cloaked `/go/<slug>/` affiliate CTAs, which correctly use `rel="sponsored nofollow"`. This is intended and should stay.

---

## Fixes applied in code (this session)

| # | Fix | File changed | Status |
|---|-----|--------------|--------|
| 1 | Canonical base set to **www** so canonicals, sitemap, robots host, Open Graph and JSON-LD all match the served domain | `src/lib/site.ts` (`url` → `https://www.onlinepokerwebsites.com`) | ✅ Done — needs deploy |
| 2 | Added security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, a conservative CSP) | new `vercel.json` | ✅ Done — needs deploy |

Because every URL in the codebase derives from the single `site.url` value, fix #1 corrects canonicals **and** the sitemap, robots.txt, OG tags and structured-data URLs in one change.

### Decision: www vs non-www
I aligned the **code to the live host (www)** because that's the zero-friction fix — no DNS or Vercel change required. If you'd prefer the shorter **non-www** as your canonical domain instead, do this instead of fix #1:
1. In Vercel → Project → **Settings → Domains**, set `onlinepokerwebsites.com` (non-www) as the **primary** domain (so www redirects to non-www).
2. Revert `src/lib/site.ts` `url` back to `https://onlinepokerwebsites.com`.

Either is fine for SEO — the only thing that matters is that the canonical domain and the redirect direction agree. Pick one and be consistent.

---

## Action plan

**Now (to make the fix live):**
1. Commit and push the two changes so Vercel redeploys:
   ```
   git add -A && git commit -m "SEO: canonical to www + security headers" && git push
   ```

**After deploy (verify):**
2. Spot-check a page's canonical in the browser (View Source) — it should read `https://www.onlinepokerwebsites.com/...`.
3. Confirm headers with a tool like securityheaders.com or `curl -I https://www.onlinepokerwebsites.com/`.
4. **Re-run the Screaming Frog crawl.** Expected result: HTML pages flip from *Non-Indexable* to **Indexable**, and the Canonicalised/Redirected counts drop to just the single apex→www redirect.

**Google Search Console:**
5. Ensure the **`www` property** (or a Domain property covering both) is verified.
6. Submit the sitemap: `https://www.onlinepokerwebsites.com/sitemap.xml`.
7. Use **URL Inspection → Request Indexing** on the homepage and 3–4 key money pages (best reviews + top guides) to accelerate re-crawl.

**Ongoing improvements (nice-to-have, not urgent):**
8. Add internal links **from the new news articles back to the money pages** (reviews) — the daily task already does 3–4 pillar links per article; keep that pattern.
9. Consider an **OG/Twitter share image** (`opengraph-image.png`) for richer social/rich-result previews.
10. Watch **crawl depth** as the news archive grows — keep the `/news` hub linked from the header so new articles stay within ~2 clicks of the homepage (already the case).

---

## Bottom line
The build quality is strong; the single thing suppressing indexation was the canonical/redirect mismatch, and that's fixed in code. Push to deploy, re-crawl to confirm every page turns Indexable, then request indexing in Search Console. The security headers are a clean secondary win in the same deploy.
