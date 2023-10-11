import Image from "next/image";

export const ClientCard = ({
  imageUrl,
  clientUrl,
}: {
  imageUrl: string;
  clientUrl: string;
}) => {
  return (
    <a href={clientUrl} target="_blank">
      <div className="card glass w-96">
        <figure>
          <Image
            src={imageUrl}
            alt="client"
            width={384}
            height={288}
            className=""
          />
        </figure>
        <div className="card-body pt-0">
          <h2 className="card-title">Client</h2>
          <p>Description of what I did</p>
        </div>
      </div>
    </a>
  );
};
