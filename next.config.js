/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Adds trailing slash to URLs (e.g. /about/)
  trailingSlash: true,

  // Disables React strict mode (you can turn it back on if needed)
  reactStrictMode: false,

  // Ignore ESLint build errors during production
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Ignore TypeScript build errors during production
  typescript: {
    ignoreBuildErrors: true,
  },

  // Optional: Enable SWC-based minification
  swcMinify: true,

  // Custom Webpack configuration
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision'),
    };
    return config;
  },
};

module.exports = nextConfig;
