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
      // Both www and apex were serving 200 with no redirect, so the site was
      // crawlable on two hosts while every canonical tag, the sitemap, and
      // metadataBase all declare the apex. This 301 makes the apex definitive.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.redrockvet.com' }],
        destination: 'https://redrockvet.com/:path*',
        permanent: true,
      },
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
