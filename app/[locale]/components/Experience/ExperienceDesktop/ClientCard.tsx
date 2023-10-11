import Image from "next/image";

export const ClientCard = () => {
  return (
    <a
      href="https://wbd.com/"
      target="_blank"
      className="transform-gpu grayscale transition-transform duration-300 hover:grayscale-0"
    >
      <div className="card glass w-96">
        <figure>
          <Image
            src="/clients/client.jpeg"
            alt="client"
            width={928}
            height={548}
            className=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Client</h2>
          <p>Description of what I did</p>
        </div>
      </div>
    </a>
  );
};
