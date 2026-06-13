import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into ./out for GitHub Pages.
  output: "export",
  // Pages serves directory-style URLs; trailing slashes avoid 404s on refresh.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
