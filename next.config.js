const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,

  output: 'export', // Required for `next export`
  
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision'),
    }

    // 👇 Split large chunks to avoid Cloudflare 25MB limit
    if (config.optimization?.splitChunks) {
      config.optimization.splitChunks.maxSize = 20000000 // 20MB
    }

    return config
  },
}

module.exports = nextConfig
