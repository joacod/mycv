import { useTranslations } from "next-intl";
import { ClientCard } from "./ClientCard";

export const ExperienceDesktop = () => {
  const t = useTranslations("Experience");

  return (
    <div className="hidden lg:inline">
      <div className="px-28 py-20">
        <h1 className="text-5xl font-bold">{t("title")}</h1>
        <p className="py-6">{t("description")}</p>

        <div className="grid grid-cols-3 text-secondary-content">
          <ClientCard />
          <ClientCard />
          <ClientCard />
        </div>
      </div>
    </div>
  );
};
