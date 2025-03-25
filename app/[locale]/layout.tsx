import "./globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { devInfo } from "@/utils/devInfo";
import { ThemeProvider } from "./providers/themeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { locales, routing } from "@/i18n/routing";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Software Solutions | " + devInfo.handle + " | " + devInfo.name,
  description: "Software Developer, Entrepreneur, I write stuff",
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

  // Fetch messages for the current locale
  const messages = await getMessages();

  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang={locale}>
        <body>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider>{children}</ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
