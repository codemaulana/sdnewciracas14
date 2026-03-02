import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "mvzl4invrp5kf3ie.public.blob.vercel-storage.com",
      },
    ],
  },

  experimental: {
    serverActions: {
      allowedOrigins: ["c1m1jltr-3000.asse.devtunnels.ms", "localhost:3000"],
      bodySizeLimit: "10mb",
    },
  },

  // Additional security headers
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization, X-CSRF-Token",
          },
        ],
      },
    ];
  },
} satisfies NextConfig;

export default nextConfig;
