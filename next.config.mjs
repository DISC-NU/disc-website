/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProduction ? "/disc-website" : "",
  images: {
    unoptimized: true,
  },
  assetPrefix: isProduction ? "/disc-website" : "",
};

export default nextConfig;
