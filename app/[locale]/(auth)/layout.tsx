import type { Metadata } from "next";
import { Footer } from "../components/Footer/Footer";
import { UsersNavigation } from "../components/Navigation/UsersNavigation";
import { devInfo } from "@/utils/devInfo";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Layout" });

  return {
    title: `${t("authTitle")} | ${devInfo.handle} | ${devInfo.name}`,
    description: t("authDescription"),
    metadataBase: new URL("https://joacod.com"),
    authors: [{ name: "Joaquin Diaz", url: "https://github.com/joacod" }],
    keywords: [
      devInfo.name,
      devInfo.handle,
      ...t("authKeywords"),
    ],
    openGraph: {
      images: "/mycv.jpg",
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function UsersLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <UsersNavigation />
      {children}
      <Footer />
    </>
  );
}
