import { useTranslations } from "next-intl";
import { ClientCard } from "./ClientCard";
import { myClients } from "@/utils/clients";

export const Experience = () => {
  const t = useTranslations("Experience");

  return (
    <section
      id="section-experience"
      className="bg-primary from-primary to-secondary text-primary-content bg-linear-to-b py-24"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold lg:text-5xl">{t("title")}</h1>
            <p className="py-6 text-lg">{t("description")}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {myClients.map((client) => (
              <div key={client.webUrl}>
                <ClientCard client={client} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
