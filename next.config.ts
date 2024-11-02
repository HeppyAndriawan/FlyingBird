import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:"export",//only for github pages
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;
