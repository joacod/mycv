import { languages } from "@/middleware";
import "./globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { devInfo } from "@/utils/devInfo";
import Navigation from "./components/Navigation/Navigation";
import { Footer } from "./components/Footer/Footer";
import { ThemeProvider } from "./themeProvider";

export const metadata: Metadata = {
  title: "My CV - " + devInfo.name,
  description:
    "My software developer resume. Created using Bun, Next.js 13, Typescript, Tailwind CSS and daisyUI.",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = languages.some((cur) => cur === params.locale);
  if (!isValidLocale) notFound();

  return (
    <ThemeProvider locale={params.locale}>
      <body>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </ThemeProvider>
  );
}
