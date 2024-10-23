import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { clerkMiddleware } from "@clerk/nextjs/server";

export const locales = ["en", "es", "it", "pt", "fr", "de"] as const;
const localePrefix = "always";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

const intlMiddleware = createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
});

const authMiddleware = clerkMiddleware();

function composeMiddlewares(...middlewares: Function[]) {
  return async function (req: NextRequest) {
    for (const middleware of middlewares) {
      const res = await middleware(req);
      if (res && res instanceof NextResponse) {
        // If the middleware returns a response, stop processing and return it
        return res;
      }
    }
    // If no middleware returns a response, proceed to the next handler
    return NextResponse.next();
  };
}

export default composeMiddlewares(
  intlMiddleware,
  authMiddleware,
  // Add more middleware functions as needed
);

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
