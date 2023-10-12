import { myClients } from "@/utils/clients";
import { useTranslations } from "next-intl";
import { ClientMobile } from "./ClientMobile";

export const ExperienceMobile = () => {
  const t = useTranslations("Experience");

  return (
    <div className="py-5 lg:hidden">
      <div className="p-4">
        <h1 className="text-5xl font-bold">{t("title")}</h1>
        <p className="py-6">{t("description")}</p>

        <div className="grid-row-3 grid space-y-4">
          {/* Show the first 3 clients for mobile */}
          {myClients.slice(0, 3).map((client) => (
            <ClientMobile key={client.webUrl} client={client} />
          ))}
        </div>
      </div>
    </div>
  );
};
