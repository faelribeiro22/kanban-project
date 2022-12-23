/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ['log']
    }
  }
}

module.exports = nextConfig
