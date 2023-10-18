import { useTranslations } from "next-intl";
import { RiddlerClient } from "./RiddlerClient";
import { RiddlerInfo } from "@/utils/riddler";

export const Riddler = () => {
  const t = useTranslations("Riddler");
  const tc = useTranslations("Common");
  const info: RiddlerInfo = {
    question: t("question"),
    device: t("device"),
    os: t("os"),
    browser: t("browser"),
    version: t("version"),
    disclaimer: t("disclaimer"),
    close: tc("close"),
  };

  return <RiddlerClient info={info} />;
};
