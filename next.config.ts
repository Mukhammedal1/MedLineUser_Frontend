import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
  reactCompiler: true,
  reactStrictMode: true,
};

export default nextConfig;
