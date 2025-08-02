import Link from "next/link";
import { devInfo } from "@/utils/devInfo";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { CompanyCards } from "./CompanyCards";
import { CompanyHeader } from "./CompanyHeader";

export const Company = () => {
  const t = useTranslations("Company");

  return (
    <section
      id="section-company"
      className="from-primary to-accent text-primary-content bg-linear-to-br py-16"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <span className="border-base bg-neutral text-neutral-content inline-block animate-pulse rounded-full border px-4 py-2 text-sm font-semibold">
              {t("badge")}
            </span>
          </div>

          <CompanyHeader />
          <CompanyCards />
          <p className="mb-6 text-center text-lg italic">{t("quote")}</p>

          <div className="flex justify-center">
            <Link
              href={devInfo.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base group btn btn-lg"
            >
              <span className="mr-2">{t("button")}</span>
              <FaArrowAltCircleRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
