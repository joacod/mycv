import { Client } from "@/utils/clients";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const ClientCard = ({ client }: { client: Client }) => {
  const t = useTranslations("Experience");

  return (
    <a href={client.webUrl} target="_blank">
      <div className="card glass w-96">
        <figure>
          <Image
            src={client.imageUrl}
            alt="client"
            width={384}
            height={288}
            className=""
          />
        </figure>
        <div className="card-body pt-0">
          <h2 className="card-title">{client.name}</h2>
          <p>{t(client.descriptionKey)}</p>
        </div>
      </div>
    </a>
  );
};
