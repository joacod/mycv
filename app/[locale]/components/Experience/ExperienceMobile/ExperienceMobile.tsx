import { myClients } from "@/utils/clients";
import { useTranslations } from "next-intl";
import { ClientMobile } from "./ClientMobile";

export const ExperienceMobile = () => {
  const t = useTranslations("Experience");

  return (
    <section className="lg:hidden">
      <div className="px-4 py-14">
        <h1 className="text-5xl font-bold">{t("title")}</h1>
        <p className="py-6">{t("description")}</p>

        <div className="space-y-4">
          {/* Display the first 3 clients for mobile */}
          {myClients.slice(0, 3).map((client) => (
            <ClientMobile key={client.webUrl} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};
