import type { NextConfig } from "next";
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = isGithubActions ? 'FlyingBird' : '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isGithubActions? 'export' : "standalone",
  basePath: isGithubActions ? `/${repo}` : '',
  assetPrefix: isGithubActions ? `/${repo}` : '',
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
