import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // ...other config options
}

export default createMDX({
  extension: /.mdx?$/,
  options: {
    // remark/rehype plugins go here—will cover Shiki next
  }
})(nextConfig)
