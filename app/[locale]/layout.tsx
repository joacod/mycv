import "./globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { devInfo } from "@/utils/devInfo";
import { ThemeProvider } from "./providers/themeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { locales, routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Software Solutions | " + devInfo.handle + " | " + devInfo.name,
  description: "Software Developer, IT Consultant, Entrepreneur, I write stuff",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Validate that the incoming `locale` parameter is valid
  const { locale } = await params;
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang={locale}>
        <body>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
