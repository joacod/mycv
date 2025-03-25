import { useTranslations } from "next-intl";
import { FaHandPointDown } from "react-icons/fa";
import Image from "next/image";

export const About = () => {
  const t = useTranslations("About");

  return (
    <section
      id="section-about"
      className="hero bg-primary from-secondary to-primary text-primary-content z-0 min-h-screen bg-linear-to-b"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <figure className="animate-flip-up mt-6 lg:hidden">
          <Image
            src="/avatar.webp"
            alt="Avatar of a guy with a beard, glasses and smiling"
            width={250}
            height={250}
            placeholder="empty"
          />
        </figure>
        <figure className="animate-flip-up hidden lg:inline lg:w-3/12">
          <Image
            src="/avatar.webp"
            alt="Avatar of a guy with a beard, glasses and smiling"
            width={500}
            height={500}
            placeholder="empty"
          />
        </figure>
        <article className="animate-flip-up lg:w-9/12 lg:pr-20">
          <h1 className="text-5xl font-bold">{t("title")}</h1>
          <p className="pt-6 text-xl font-semibold lg:pr-40 lg:text-2xl">
            {t("description")}
          </p>
          <div className="pt-6 md:flex md:gap-10 lg:flex lg:gap-12">
            <p>{t("role")}</p>
            <p className="pt-4 md:pt-0 lg:pt-0">{t("collaborate")}</p>
          </div>
          <div className="hidden lg:mt-10 lg:flex">
            <a className="btn btn-neutral" href="#section-writing">
              {t("getstarted")} <FaHandPointDown size={22} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
