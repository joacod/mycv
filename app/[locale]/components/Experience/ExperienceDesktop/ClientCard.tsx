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
    >
      <article className="card glass hover:animate-wiggle hover:shadow-secondary-content h-full hover:shadow-lg">
        <figure>
          <Image
            src={client.imageUrl}
            alt={t("clientLogoAlt", { clientName: client.name })}
            width={384}
            height={288}
          />
        </figure>
        <div className="card-body pt-0 lg:pr-4 lg:pl-4">
          <h3 className="card-title">{client.name}</h3>
          <p className="mt-2 text-sm">{t(client.descriptionKey)}</p>
        </div>
      </article>
    </a>
  );
};
