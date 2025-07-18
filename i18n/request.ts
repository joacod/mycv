import { getRequestConfig } from "next-intl/server";
import { routing } from "@/i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Fallback to default locale if requestLocale is undefined
  if (!locale) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../dictionaries/@${locale === 'en' ? 'en-US' : locale}.json`)).default,
  };
});
