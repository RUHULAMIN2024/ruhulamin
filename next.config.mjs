/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
