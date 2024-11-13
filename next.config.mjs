/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const repoName = "disc-website";

const nextConfig = {
  output: "export",
  basePath: isProduction ? `/${repoName}` : "",
  images: {
    unoptimized: true,
    path: isProduction ? `/${repoName}` : "",
  },
  trailingSlash: true,
};

export default nextConfig;
