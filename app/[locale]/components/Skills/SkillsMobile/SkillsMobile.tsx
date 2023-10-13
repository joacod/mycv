import { useTranslations } from "next-intl";

export const SkillsMobile = () => {
  const t = useTranslations("Skills");

  return (
    <div className="py-5 lg:hidden">
      <div className="p-4">
        <h1 className="text-5xl font-bold">{t("title")}</h1>
        <p>In progress...</p>
      </div>
    </div>
  );
};
