/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   unoptimized: true,
  //   path: "/",
  // },
  // assetPrefix: isProd ? '/updatetest' : '',
  // basePath: isProd ? '/updatetest' : '',
  // output: 'export'
};

export default nextConfig;