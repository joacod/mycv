import { useTranslations } from "next-intl";
import { ClickMeBtn } from "./ClickMeBtn";

export const ClickMe = () => {
  const t = useTranslations("ClickMe");
  const texts = [t("text1"), t("text2"), t("text3"), t("text4")];

  return <ClickMeBtn texts={texts} />;
};
