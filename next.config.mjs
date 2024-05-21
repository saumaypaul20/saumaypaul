/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'github-pages'
const nextConfig = {
    basePath: "/saumaypaul",
    output: "export",
    reactStrictMode: true,
    assetPrefix: isProd ?"/saumaypaul": undefined
};

export default nextConfig;
