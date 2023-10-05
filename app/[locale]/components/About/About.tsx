import { useTranslations } from "next-intl";

export const About = () => {
  const t = useTranslations("About");

  return (
    <div id="section-about" className="py-12">
      <p>{t("title")}</p>
    </div>
  );
};
