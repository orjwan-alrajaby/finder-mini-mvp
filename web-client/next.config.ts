import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        'https://fastly.picsum.photos/id/106/400/400.jpg?hmac=eEZPxCkV47FG3BhZGEEkvju56UXv21b2QNtwjUqcNTc'
      ),
    ],
  },
};

export default nextConfig;
