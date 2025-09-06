/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  // Performance optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Bundle analyzer for monitoring
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        animations: {
          name: 'animations',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
          priority: 30,
          reuseExistingChunk: true,
        },
        icons: {
          name: 'icons',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](lucide-react)[\\/]/,
          priority: 25,
          reuseExistingChunk: true,
        },
      };
    }
    return config;
  },
}

module.exports = nextConfig