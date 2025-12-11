import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  async redirects() {

    if (!isVercel) {
      // Local dev -> no redirect
      return [];
    }

    return [
      {
        source: "/",
        destination: "https://www.becauseyouretheparent.com",
        permanent: true, // uses 308 under the hood
      },
    ];
  },
};

export default nextConfig;
