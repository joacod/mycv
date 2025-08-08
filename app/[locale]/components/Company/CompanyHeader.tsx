import Image from "next/image";
import { devInfo } from "@/utils/devInfo";
import { useTranslations } from "next-intl";

export const CompanyHeader = () => {
  const t = useTranslations("Company");

  return (
    <div className="mb-8 flex flex-row items-center justify-center gap-8 sm:items-start sm:gap-10 md:mx-auto md:w-10/12">
      <div>
        <div className="relative flex-shrink-0">
          <Image
            src="/company-logo.png"
            alt={t("logoAlt")}
            width={120}
            height={120}
            className="bg-base-content ring-primary-content/20 rounded-full p-3 text-base shadow-2xl ring-4"
          />
        </div>
        <h2 className="text-primary-content/80 mt-4 text-center text-xl font-medium md:text-2xl">
          {devInfo.company}
        </h2>
      </div>

      <div className="flex-1 pt-2">
        <h2 className="mb-4 text-3xl leading-tight font-bold md:text-4xl lg:text-6xl">
          {t("title")}
        </h2>
        <p className="text-primary-content/90 text-md mx-auto mb-4 max-w-2xl leading-relaxed md:text-xl">
          {t("description")}
        </p>
        <div className="bg-primary-content/10 mb-6 rounded-lg p-4">
          <p className="text-primary-content text-lg font-medium">
            {t("mvpPitch")}
          </p>
        </div>
      </div>
    </div>
  );
};
