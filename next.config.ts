import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: false,
  },
};

export default nextConfig;
