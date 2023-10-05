import { useTranslations } from "next-intl";

export const Experience = () => {
  const t = useTranslations("Experience");

  return (
    <div id="section-experience" className="py-12">
      <p>{t("title")}</p>
    </div>
  );
};
