/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['aceternity.com'], 
      domains: ['assets.aceternity.com'], // External domain added here
    },
  };

module.exports = nextConfig
