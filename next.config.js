const withNextIntl = require("next-intl/plugin")("./i18n.ts");
const nextConfig = withNextIntl({});

module.exports = nextConfig;
