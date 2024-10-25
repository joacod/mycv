import type { Metadata } from "next";
import { Footer } from "../components/Footer/Footer";
import { UsersNavigation } from "../components/Navigation/UsersNavigation";
import { devInfo } from "@/utils/devInfo";

export const metadata: Metadata = {
  title: "Auth | " + devInfo.handle + " | " + devInfo.name,
  description: "Access your account by signing in to joacod",
  metadataBase: new URL("https://joacod.com"),
  authors: [{ name: "Joaquin Diaz", url: "https://github.com/joacod" }],
  keywords: [
    devInfo.name,
    devInfo.handle,
    "sign in",
    "login",
    "create account",
  ],
  openGraph: {
    images: "/mycv.jpg",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UsersNavigation />
      {children}
      <Footer />
    </>
  );
}
