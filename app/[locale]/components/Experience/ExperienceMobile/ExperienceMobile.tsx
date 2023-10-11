import { useTranslations } from "next-intl";

export const ExperienceMobile = () => {
  const t = useTranslations("Experience");

  return (
    <div className="lg:hidden">
      <div className="p-4">
        <h1 className="text-5xl font-bold">{t("title")}</h1>
        <p className="py-6">{t("description")}</p>

        <div className="grid-row-3 grid">
          <p>Client 1</p>
          <p>Client 2</p>
          <p>Client 3</p>
        </div>
      </div>
    </div>
  );
};
