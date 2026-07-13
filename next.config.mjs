/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — pre-rendered pages, zero server needed, deploy anywhere
  // (Netlify, Cloudflare Pages, GitHub Pages, S3). Fastest possible delivery + best crawlability.
  output: "export",
  trailingSlash: true,
  images: {
    // required for `output: export` (no server-side image optimization)
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
