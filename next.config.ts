import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: `/FlyingBird`,
  assetPrefix: `/FlyingBird`,
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
