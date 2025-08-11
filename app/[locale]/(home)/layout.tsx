import type { Metadata } from "next";
import Navigation from "../components/Navigation/Navigation";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "../components/Footer/Footer";
import { devInfo } from "@/utils/devInfo";

export const metadata: Metadata = {
  metadataBase: new URL("https://joacod.com"),
  authors: [{ name: "Joaquin Diaz", url: "https://github.com/joacod" }],
  keywords: [
    devInfo.name,
    devInfo.handle,
    "Software",
    "Software Developer",
    "Software Engineer",
    "Entrepreneur",
    "Writing",
    "Tech",
    "Mentoring",
    "Career",
    "Latam",
  ],
  openGraph: {
    images: "/mycv.jpg",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation variant="home" />
      {children}
      <Footer />
      <Analytics />
    </>
  );
}
