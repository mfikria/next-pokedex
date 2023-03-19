/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.REPO_NAME ? process.env.REPO_NAME : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack: (config) => {
    // svgr config
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { ref: true } }],
    })
    return config
  },
}

module.exports = nextConfig
