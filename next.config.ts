/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["lh3.googleusercontent.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
        pathname:"**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**"
      }


    ],
  },
};

export default nextConfig;
