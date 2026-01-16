import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Allow loading images from the production site in development
      ...(process.env.NEXT_PUBLIC_REMOTE_URL ? [{
        protocol: 'https' as const,
        hostname: new URL(process.env.NEXT_PUBLIC_REMOTE_URL).hostname,
      }] : []),
    ],
  },
  output: 'standalone',
};

export default nextConfig;
