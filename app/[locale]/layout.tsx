import { languages } from "@/middleware";
import "./globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { devInfo } from "@/utils/devInfo";
import Navigation from "./components/Navigation/Navigation";
import { Footer } from "./components/Footer/Footer";
import { ThemeProvider } from "./providers/themeProvider";
import { RecoilProvider } from "./providers/recoilProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://joacod.com"),
  title: "My CV - " + devInfo.name,
  description:
    "My software developer resume. Created using Bun, Next.js 14, Typescript, Tailwind CSS and daisyUI.",
  authors: [{ name: "Joaquin Diaz", url: "https://github.com/joacod" }],
  keywords: [
    devInfo.name,
    "Software",
    "Resume",
    "Bun",
    "React",
    "Next.js 14",
    "Typescript",
    "Tailwind CSS",
    "daisyUI",
  ],
  openGraph: {
    images: "/mycv.jpg",
  },
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
    <RecoilProvider>
      <ThemeProvider locale={params.locale}>
        <body>
          <Navigation />
          {children}
          <Footer />
          <Analytics />
        </body>
      </ThemeProvider>
    </RecoilProvider>
  );
}
