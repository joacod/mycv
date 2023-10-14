import { useTranslations } from "next-intl";

export const Riddler = () => {
  const t = useTranslations("Riddler");

  return (
    <div
      id="section-riddler"
      className="bg-neutral px-28 py-24 text-center text-accent"
    >
      <h1 className="text-9xl font-bold">{t("title")}</h1>
      <h3 className="text-xl mt-10">{t("riddle")}</h3>
      <h4 className="text-2xl mt-5">{t("end")}</h4>
    </div>
  );
};
