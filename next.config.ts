import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isGithubPages? 'export' : "standalone",
  basePath: isGithubPages ? '/FlyingBird' : '',
  assetPrefix: isGithubPages ? '/FlyingBird' : '',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "heppyandriawan.github.io",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
