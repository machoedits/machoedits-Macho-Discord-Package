/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  sassOptions: {
    includePaths: [path.join(__dirname, "pages/styles")],
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "cdn.discordapp.com",
      "i.imgur.com",
      "better-default-discord.netlify.app",
    ],
  },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/jvuM9sNGjJ",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
