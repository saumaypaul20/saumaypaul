/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    output:isProd ? "export": undefined,
    reactStrictMode: true,
    basePath:isProd? "/saumaypaul": undefined,
};

export default nextConfig;
