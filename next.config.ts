import { NextConfig } from "next";

const withNextIntl = require("next-intl/plugin")("./i18n/request.ts");
const nextConfig: NextConfig = withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media2.dev.to",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "dev-to-uploads.s3.amazonaws.com",
      },
    ],
  },
});

module.exports = nextConfig;
