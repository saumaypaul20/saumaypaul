/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        path: "/",
        unoptimized: true
    }
};

export default nextConfig;
