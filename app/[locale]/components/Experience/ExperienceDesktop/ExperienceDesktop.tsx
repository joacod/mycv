import { useTranslations } from "next-intl";
import { ClientCard } from "./ClientCard";
import { myClients } from "@/utils/clients";

export const ExperienceDesktop = () => {
  const t = useTranslations("Experience");

  return (
    <div className="hidden lg:inline">
      <div className="px-28 py-20">
        <h1 className="text-5xl font-bold">{t("title")}</h1>
        <p className="py-6">{t("description")}</p>

        <div className="grid grid-cols-3 text-secondary-content">
          {/* Show the first 3 clients in the array */}
          {myClients.slice(0, 3).map((client) => (
            <ClientCard key={client.webUrl} client={client} />
          ))}
        </div>
      </div>
    </div>
  );
};
