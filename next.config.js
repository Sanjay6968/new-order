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

  // Use static export
  output: 'export',

  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision'),
    }

    if (!isServer && config.optimization?.splitChunks) {
      config.optimization.splitChunks.maxSize = 20000000 // 20MB chunk max size
    }

    return config
  }
}

module.exports = nextConfig
