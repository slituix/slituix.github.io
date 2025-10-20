import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

// Initialize MDX plugin
const withMDX = createMDX()

const nextConfig: NextConfig = {
  // Include MDX pages
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // You can add more Next.js configuration here
  reactStrictMode: true,
  swcMinify: true,
}

// Export configuration wrapped with MDX
export default withMDX(nextConfig)
