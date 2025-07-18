import { Client } from "@/utils/clients";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const ClientMobile = ({ client }: { client: Client }) => {
  const t = useTranslations("Experience");

  return (
    <article className="card glass">
      <figure>
        <Image
          src={client.imageUrl}
                        alt={t("clientLogoAlt", { clientName: client.name })}
          width={384}
          height={288}
          className=""
        />
      </figure>
      <div className="card-body inline-block pt-0">
        <h2 className="card-title">{client.name}</h2>
        <p className="mt-2 text-sm">{t(client.descriptionKey)}</p>
        <a
          className="btn btn-xs mt-5 inline-block py-1"
          href={client.webUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${client.name}`}
        >
          {t("visit")}
        </a>
      </div>
    </article>
  );
};
