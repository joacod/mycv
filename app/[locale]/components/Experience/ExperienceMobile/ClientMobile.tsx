import { Client } from "@/utils/clients";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const ClientMobile = ({ client }: { client: Client }) => {
  const t = useTranslations("Experience");

  return (
    <div className="card glass">
      <figure>
        <Image
          src={client.imageUrl}
          alt={client.name}
          width={384}
          height={288}
          className=""
        />
      </figure>
      <div className="card-body pt-0">
        <h2 className="card-title">{client.name}</h2>
        <p>{t(client.descriptionKey)}</p>
        <a
          className="btn btn-xs mt-2 w-36"
          href={client.webUrl}
          target="_blank"
        >
          {t("visit")}
        </a>
      </div>
    </div>
  );
};
