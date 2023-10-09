import { useTranslations } from "next-intl";

export const Riddler = () => {
  const t = useTranslations("Riddler");

  return (
    <div id="section-riddler">
      <p>{t("title")}</p>
    </div>
  );
};
