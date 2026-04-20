import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tcca-cms.livetubex.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
