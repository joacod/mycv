import { useTranslations } from "next-intl";

export const ClickMe = () => {
  const t = useTranslations("ClickMe");

  return <a className="btn">{t("text1")}</a>;
};
