const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,

  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision'),
    }

    if (!isServer && config.optimization?.splitChunks) {
      config.optimization.splitChunks.maxSize = 24000000 // Under 25 MB
    }

    return config
  }
}

module.exports = nextConfig

