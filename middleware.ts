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
  "/dashboard(.*)",
  "/:locale/dashboard(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (
    req.nextUrl.pathname.includes("/sign-in") ||
    req.nextUrl.pathname.includes("/sign-up") ||
    isProtectedRoute(req)
  ) {
    if (isProtectedRoute(req)) {
      const locale =
        req.nextUrl.pathname.match(/(\/.*)\/dashboard/)?.at(1) ?? "";

      const signInUrl = new URL(`${locale}/sign-in`, req.url);

      auth.protect({
        // `unauthenticatedUrl` is needed to avoid error: "Unable to find `next-intl` locale because the middleware didn't run on this request"
        unauthenticatedUrl: signInUrl.toString(),
      });
    }
  }

  return intlMiddleware(req);
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
