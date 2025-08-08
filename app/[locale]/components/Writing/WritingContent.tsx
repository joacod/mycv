import { devInfo } from "@/utils/devInfo";
import { getTranslations } from "next-intl/server";
import { BiLogoDevTo, BiLogoMediumSquare } from "react-icons/bi";

export async function WritingContent() {
  const t = await getTranslations("Writing");

  return (
    <div className="flex flex-col justify-center lg:col-span-3">
      <h2 className="pb-6 text-4xl font-bold lg:text-5xl">{t("title")}</h2>

      <p className="mb-6 text-base leading-relaxed italic">
        {t("description")}
      </p>

      <div className="mb-8 italic">
        <p className="text-base">{t("recentPost")}</p>
      </div>

      <div className="flex justify-center gap-8 lg:gap-12">
        <article>
          <a
            href={devInfo.devto}
            target="_blank"
            rel="noopener"
            aria-label="Dev.to"
            className="group flex flex-col items-center"
          >
            <BiLogoDevTo
              size={120}
              className="transition-all duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="mt-2 text-lg font-semibold transition-opacity">
              {t("platformDevTo")}
            </p>
          </a>
        </article>
        <article>
          <a
            href={devInfo.medium}
            target="_blank"
            rel="noopener"
            aria-label="Medium"
            className="group flex flex-col items-center"
          >
            <BiLogoMediumSquare
              size={120}
              className="transition-all duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="mt-2 text-lg font-semibold transition-opacity">
              {t("platformMedium")}
            </p>
          </a>
        </article>
      </div>
    </div>
  );
}
