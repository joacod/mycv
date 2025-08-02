import { Client } from "@/utils/clients";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const ClientCard = ({ client }: { client: Client }) => {
  const t = useTranslations("Experience");

  return (
    <a
      href={client.webUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${client.name}`}
      className="block h-full"
    >
      <article className="card glass hover:animate-wiggle hover:shadow-secondary-content h-full transition-all duration-200 hover:shadow-lg">
        <figure>
          <Image
            src={client.imageUrl}
            alt={t("clientLogoAlt", { clientName: client.name })}
            width={384}
            height={288}
            className="object-cover"
          />
        </figure>
        <div className="card-body">
          <h3 className="card-title text-lg">{client.name}</h3>
          <p className="mt-2 flex-grow text-sm">{t(client.descriptionKey)}</p>
          <div className="card-actions mt-4 justify-start md:hidden">
            <span className="btn btn-xs btn-secondary">{t("visit")}</span>
          </div>
        </div>
      </article>
    </a>
  );
};
