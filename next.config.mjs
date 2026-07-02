/** @type {import('next').NextConfig} */
const nextConfig = {
 
  reactCompiler: true,
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-1781429235828-55c8c31baf38/**',
        
        search: '',
      },
    ],
  },
};

export default nextConfig;
