import createMiddleware from "next-intl/middleware";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "es", "it", "pt", "fr", "de"] as const;
const localePrefix = "always";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
