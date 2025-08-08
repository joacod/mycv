import { NextConfig } from "next";

const withNextIntl = require("next-intl/plugin")("./i18n/request.ts");
const nextConfig: NextConfig = withNextIntl({
  images: {
    domains: [
      "media2.dev.to",
      "res.cloudinary.com",
      "dev-to-uploads.s3.amazonaws.com",
    ],
  },
});

module.exports = nextConfig;
