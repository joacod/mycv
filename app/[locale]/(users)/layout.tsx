import type { Metadata } from "next";
import { Footer } from "../components/Footer/Footer";
import { UsersNavigation } from "../components/Navigation/UsersNavigation";
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
      <UsersNavigation />
      {children}
      <Footer />
    </>
  );
}
