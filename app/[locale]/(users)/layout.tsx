import type { Metadata } from "next";
import { Footer } from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import { devInfo } from "@/utils/devInfo";

export const metadata: Metadata = {
  title: "Dashboard | " + devInfo.name + " | " + devInfo.handle,
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
      <Navigation variant="dashboard" />
      {children}
      <Footer />
    </>
  );
}
