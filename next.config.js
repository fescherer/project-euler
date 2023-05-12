/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    domains: [
      'cdn.playscores.com',
      'cdn.sportmonks.com',
      'lh3.googleusercontent.com'
    ],
    minimumCacheTTL: 360000
  }
}

module.exports = nextConfig
