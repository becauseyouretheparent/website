import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  async redirects() {
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
