/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
    reactStrictMode: true,
    swcMinify: true,
  }
  
  module.exports = nextConfig