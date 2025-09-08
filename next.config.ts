import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/urgent-emergency-care',
        destination: '/services/urgent-emergency-care',
        permanent: true,
      },
      {
        source: '/about-1',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact-1',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/veterinary-services',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
