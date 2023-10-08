import { useTranslations } from "next-intl";

export const Experience = () => {
  const t = useTranslations("Experience");

  return (
    <div id="section-experience">
      <p>{t("title")}</p>
    </div>
  );
};
