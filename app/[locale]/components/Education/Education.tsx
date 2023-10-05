import { useTranslations } from "next-intl";

export const Education = () => {
  const t = useTranslations("Education");

  return (
    <div id="section-education" className="py-12">
      <p>{t("title")}</p>
    </div>
  );
};
