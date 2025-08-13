/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next';


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {hostname: 'commons.wikimedia.org', pathname: '/wiki/File/**'},
    ]
  },
};

export default nextConfig;