import { languages } from "@/middleware";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { devInfo } from "@/utils/devInfo";
import Navigation from "./components/Navigation/Navigation";
import { Footer } from "./components/Footer/Footer";
import { ThemeProvider } from "./themeProvider";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </ThemeProvider>
  );
}
