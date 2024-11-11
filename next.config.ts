/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["lh3.googleusercontent.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://i.pravatar.cc",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
