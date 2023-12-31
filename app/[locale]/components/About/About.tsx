import { useTranslations } from "next-intl";
import { FaHandPointDown } from "react-icons/fa";
import Image from "next/image";

export const About = () => {
  const t = useTranslations("About");

  return (
    <section className="hero z-0 min-h-screen bg-neutral text-neutral-content">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <figure className="animate-flip-up lg:hidden">
          <Image
            src="/avatar.png"
            alt="Avatar of a guy with a beard, winking and smiling"
            width={180}
            height={196}
            priority={true}
            placeholder="empty"
          />
        </figure>
        <figure className="hidden animate-flip-up lg:inline lg:w-1/5">
          <Image
            src="/avatar.png"
            alt="Avatar of a guy with a beard, winking and smiling"
            width={480}
            height={526}
            priority={true}
            placeholder="empty"
          />
        </figure>
        <article className="animate-flip-up lg:w-4/5 lg:pr-20">
          <h1 className="text-5xl font-bold">{t("title")}</h1>
          <p className="pt-6 text-xl font-semibold lg:pr-40 lg:text-2xl">
            {t("description")}
          </p>
          <div className="pt-6 md:flex md:gap-10 lg:flex lg:gap-12">
            <p>{t("role")}</p>
            <p className="pt-4 md:pt-0 lg:pt-0">{t("collaborate")}</p>
          </div>
          <div className="hidden lg:mt-10 lg:flex">
            <a className="btn btn-primary" href="#section-experience">
              {t("getstarted")} <FaHandPointDown size={22} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
