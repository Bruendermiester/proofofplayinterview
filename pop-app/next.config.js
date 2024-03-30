/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enabling React Server Components
    experimental: {
      // Enable the new architecture features, including Server Components
      reactRoot: true, // This might be required depending on your Next.js version
  
      // Specific to enabling Server Components and the new runtime
      runtime: 'experimental-edge',
  
      // Enable Concurrent Features in React
      concurrentFeatures: true,
    },
  }
  
  module.exports = nextConfig