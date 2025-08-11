import type { Metadata } from "next";
import { Footer } from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation variant="other" />
      {children}
      <Footer />
    </>
  );
}
