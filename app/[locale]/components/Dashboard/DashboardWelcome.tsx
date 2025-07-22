"use client";

import { useUser } from "@clerk/nextjs";
import { useTranslations } from "next-intl";

export const DashboardWelcome = () => {
  const { user } = useUser();
  const t = useTranslations("DashboardWelcome");
  const userName = user?.firstName || "";

  return <h2 className="text-3xl font-bold">{t("message", { userName })}</h2>;
};
