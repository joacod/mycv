import createMiddleware from "next-intl/middleware";
import { createNavigation } from "next-intl/navigation";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export const locales = ["en", "es", "it", "pt", "fr", "de"] as const;
const localePrefix = "always";

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
});

const intlMiddleware = createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
});

const isProtectedRoute = createRouteMatcher([
  "/:locale/dashboard",
  "/:locale/dashboard/(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();

  return intlMiddleware(req);
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
