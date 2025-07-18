"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

export const EasterEgg = () => {
  const t = useTranslations("EasterEgg");

  useEffect(() => {
    console.clear();

    // Blue pill message with console formatting
    console.log(
      `%c${t("bluePill", { bluePillEmoji: "%c🔵%c" })}`,
      "background-color: white; color: green; font-size: 15px",
      "background-color: white; color: blue; font-size: 15px",
      "background-color: white; color: green; font-size: 15px",
    );

    // Red pill message with console formatting
    console.log(
      `%c${t("redPill", { redPillEmoji: "%c🔴%c" })}`,
      "background-color: white; color: green; font-size: 15px",
      "background-color: white; color: red; font-size: 15px",
      "background-color: white; color: green; font-size: 15px",
    );

    console.log(
      `%c${t("followRabbit")}`,
      "background-color: black; color: white; font-size: 20px; font-weight: bold",
    );
  }, [t]);

  return <></>;
};
