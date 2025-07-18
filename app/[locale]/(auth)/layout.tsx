import type { Metadata } from "next";
import { Footer } from "../components/Footer/Footer";
import { UsersNavigation } from "../components/Navigation/UsersNavigation";

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
      <UsersNavigation />
      {children}
      <Footer />
    </>
  );
}
