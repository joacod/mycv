import { useTranslations } from "next-intl";
import { FaHandPointDown, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { BsRocketTakeoff } from "react-icons/bs";

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section
      id="section-hero"
      className="hero bg-primary from-secondary to-primary text-primary-content z-0 min-h-screen bg-linear-to-b"
    >
      <div className="container mx-auto">
        <div className="hero-content flex-col lg:max-w-full lg:flex-row-reverse">
          <figure className="animate-flip-up mt-6 lg:hidden">
            <Image
              src="/avatar.webp"
              alt={t("avatarAlt")}
              width={250}
              height={250}
              placeholder="empty"
              className="rounded-full"
            />
          </figure>
          <figure className="animate-flip-up hidden lg:inline lg:w-3/12 lg:self-start">
            <Image
              src="/avatar.webp"
              alt={t("avatarAlt")}
              width={500}
              height={500}
              placeholder="empty"
              className="rounded-full"
            />
          </figure>

          <article className="animate-flip-up lg:w-9/12 lg:pr-20">
            <h1 className="text-5xl leading-tight font-bold text-balance">
              {t("title")}
            </h1>
            <p className="pt-6 text-xl font-semibold lg:pr-40 lg:text-2xl">
              {t("subtitle")}
            </p>
            <div className="pt-6 md:flex md:gap-10 lg:flex lg:gap-12">
              <p className="text-pretty">{t("description1")}</p>
              <p className="pt-4 text-pretty md:pt-0 lg:pt-0">
                {t("description2")}
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6 lg:mt-10">
              <a className="btn btn-neutral btn-lg" href="#section-company">
                {t("ctaPrimary")} <BsRocketTakeoff size={20} />
              </a>
              <a className="btn btn-outline btn-lg" href="#section-about">
                {t("ctaSecondary")} <FaHandPointDown size={20} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
