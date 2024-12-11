import { NextConfig } from "next";

const withNextIntl = require("next-intl/plugin")("./i18n.ts");
const nextConfig: NextConfig = withNextIntl({});

module.exports = nextConfig;
