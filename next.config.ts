import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder art ships as SVG. Safe here because every image is a
    // first-party file in /public (no remote/user-supplied SVGs).
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
