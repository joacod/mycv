import { useTranslations } from "next-intl";

export const Skills = () => {
  const t = useTranslations("Skills");

  return (
    <div id="section-skills" className="py-12">
      <p>{t("title")}</p>
    </div>
  );
};
