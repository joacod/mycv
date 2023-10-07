import { languages } from "@/middleware";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import Wrapper from "./components/Wrapper/Wrapper";
import { devName } from "@/utils/devConstants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My CV - " + devName,
  description:
    "My software developer resume. Created using Bun, Next.js 13, Typescript and Tailwind CSS.",
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
    <html data-theme="retro" lang={params.locale}>
      <body className={inter.className}>
        {/* <Wrapper>{children}</Wrapper> */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
