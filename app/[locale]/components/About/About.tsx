import { useTranslations } from "next-intl";
import { FaHandPointDown } from "react-icons/fa";
import Image from "next/image";

export const About = () => {
  const t = useTranslations("About");

  return (
    <section className="hero z-0 min-h-screen bg-neutral text-neutral-content">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <figure className="lg:hidden animate-flip-up">
          <Image
            src="/avatar.png"
            alt="Avatar of a guy with a beard, winking and smiling"
            width={180}
            height={196}
            priority={true}
            placeholder="empty"
          />
        </figure>
        <figure className="hidden lg:inline lg:w-1/5 animate-flip-up">
          <Image
            src="/avatar.png"
            alt="Avatar of a guy with a beard, winking and smiling"
            width={480}
            height={526}
            priority={true}
            placeholder="empty"
          />
        </figure>
        <div className="lg:w-4/5 lg:pr-20 animate-flip-up">
          <h1 className="text-5xl font-bold">{t("title")}</h1>
          <p className="pt-6">{t("description")}</p>
          <p className="pt-6">{t("role")}</p>
          <p className="py-6">{t("collaborate")}</p>
          <div className="hidden lg:inline">
            <a className="btn btn-primary" href="#section-experience">
              {t("getstarted")} <FaHandPointDown size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
