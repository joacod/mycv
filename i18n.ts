import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  return {
    locale,
    messages: (await import(`./dictionaries/${locale}.json`)).default,
  };
});
