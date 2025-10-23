import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "delightful-trust-ed829e5176.media.strapiapp.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
