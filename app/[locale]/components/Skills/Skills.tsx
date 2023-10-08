import { useTranslations } from "next-intl";

export const Skills = () => {
  const t = useTranslations("Skills");

  return (
    <div id="section-skills">
      <p>{t("title")}</p>
    </div>
  );
};
