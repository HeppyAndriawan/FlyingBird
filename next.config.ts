import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = isGithubActions ? '/FlyingBird' : '';
const outputDir = isGithubActions? 'export' : undefined;
const path = process.env.NODE_ENV === "development"?  '' : repo;

console.log(path);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: outputDir,
  basePath: `${path}`,
  assetPrefix: `${path}`,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "heppyandriawan.github.io/FlyingBird",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
