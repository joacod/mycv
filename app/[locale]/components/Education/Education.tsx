import { useTranslations } from "next-intl";

export const Education = () => {
  const t = useTranslations("Education");

  return (
    <div id="section-education">
      <p>{t("title")}</p>
    </div>
  );
};
