/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    output:isProd ? "export": undefined,
    reactStrictMode: true,
    assetPrefix: isProd ? 'https://saumaypaul20.github.io/saumaypaul/' : undefined,
};

export default nextConfig;
