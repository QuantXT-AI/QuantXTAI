import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["twitter-api-v2", "agent-twitter-client"],
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig;
