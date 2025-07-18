"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

export const EasterEgg = () => {
  const t = useTranslations("EasterEgg");

  useEffect(() => {
    console.clear();
    
    // Blue pill message with rich text formatting
    const bluePillMessage = t.rich("bluePill", {
      blue: (chunks) => `%c${chunks}%c`,
    });
    console.log(
      bluePillMessage,
      "background-color: white; color: green; font-size: 15px",
      "background-color: white; color: blue; font-size: 15px",
      "background-color: white; color: green; font-size: 15px",
    );
    
    // Red pill message with rich text formatting
    const redPillMessage = t.rich("redPill", {
      red: (chunks) => `%c${chunks}%c`,
    });
    console.log(
      redPillMessage,
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
