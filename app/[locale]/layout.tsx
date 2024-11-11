import { locales } from "@/middleware";
import "./globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { devInfo } from "@/utils/devInfo";
import { ThemeProvider } from "./providers/themeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
  title: "Software Solutions | " + devInfo.handle + " | " + devInfo.name,
  description: "Software Developer, IT Consultant, Entrepreneur, I write stuff",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === params.locale);
  if (!isValidLocale) notFound();

  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang={params.locale}>
        <body>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
