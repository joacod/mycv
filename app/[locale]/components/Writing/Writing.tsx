import { devInfo } from "@/utils/devInfo";
import { useTranslations } from "next-intl";
import { BiLogoDevTo, BiLogoMediumSquare } from "react-icons/bi";

export const Writing = () => {
  const t = useTranslations("Writing");

  return (
    <section
      id="section-writing"
      className="bg-primary text-primary-content flex flex-col justify-center px-4 pt-14 md:items-center md:px-0 md:pt-5 lg:items-center lg:px-0 lg:py-0"
    >
      <h1 className="pb-6 text-5xl font-bold">{t("title")}</h1>
      <p className="lg:w-1/2 lg:text-center">{t("description")}</p>
      <div className="flex justify-center gap-4 pt-2 lg:gap-20">
        <article>
          <a
            href={devInfo.devto}
            target="_blank"
            rel="noopener"
            aria-label={`Dev.to`}
            className="flex flex-col items-center"
          >
            <BiLogoDevTo size={150} className="lg:hidden" />
            <BiLogoDevTo
              size={200}
              className="hidden transition delay-50 duration-200 ease-in-out hover:scale-125 lg:flex"
            />
            <p className="text-xl font-semibold">{t("platformDevTo")}</p>
          </a>
        </article>
        <article>
          <a
            href={devInfo.medium}
            target="_blank"
            rel="noopener"
            aria-label={`Medium`}
            className="flex flex-col items-center"
          >
            <BiLogoMediumSquare size={150} className="lg:hidden" />
            <BiLogoMediumSquare
              size={200}
              className="hidden transition delay-50 duration-200 ease-in-out hover:scale-125 lg:flex"
            />
            <p className="text-xl font-semibold">{t("platformMedium")}</p>
          </a>
        </article>
      </div>
    </section>
  );
};
