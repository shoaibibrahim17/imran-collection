import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Remote cover imagery (collections) is served from Unsplash's CDN and
    // optimised through the Next.js Image pipeline.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    // Placeholder art ships as SVG. Safe here because every image is a
    // first-party file in /public (no remote/user-supplied SVGs).
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
