import { useTranslations } from "next-intl";
import { ClientCard } from "./ClientCard";
import { myClients } from "@/utils/clients";

export const ExperienceDesktop = () => {
  const t = useTranslations("Experience");

  return (
    <section className="hidden lg:inline">
      <div className="px-28 py-20">
        <h1 className="text-5xl font-bold">{t("title")}</h1>
        <p className="py-6">{t("description")}</p>

        <ul className="flex justify-between text-secondary-content">
          {myClients.map((client) => (
            <li key={client.webUrl} className="mx-4 w-1/4">
              <ClientCard client={client} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
