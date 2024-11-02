import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = isGithubActions ? 'repository-name' : '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', //change to 'undefined' for development
  basePath: `/${repo}`, //change to '' for development
  assetPrefix: `/${repo}`,//change to '' for development
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
