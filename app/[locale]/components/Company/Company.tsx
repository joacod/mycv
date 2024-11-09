import Link from "next/link";
import Image from "next/image";
import { devInfo } from "@/utils/devInfo";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { IoRocket } from "react-icons/io5";
import { IoMdClock } from "react-icons/io";
import { BiSolidZap } from "react-icons/bi";
import { useTranslations } from "next-intl";

export const Company = () => {
  const t = useTranslations("Company");

  return (
    <section
      id="section-company"
      className="bg-gradient-to-br from-primary to-accent py-16 text-primary-content"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <span className="mr-2 inline-block animate-bounce rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-black">
              {t("badge")}
            </span>
            <h2 className="mt-2 text-3xl font-bold">{t("title")}</h2>
          </div>

          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="relative">
              <Image
                src="/company-logo.png"
                alt="Company Logo"
                width={100}
                height={100}
                className="rounded-full bg-black p-2"
              />
            </div>
            <h3 className="text-center text-4xl font-semibold sm:text-left">
              {devInfo.company}
            </h3>
          </div>

          <p className="mb-6 text-center text-xl">{t("description")}</p>

          <div className="mb-8 transform rounded-lg bg-black p-6 text-gray-300 shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="mb-4 text-2xl font-semibold">{t("cardTitle")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <BiSolidZap className="mr-2 h-6 w-6 flex-shrink-0 text-yellow-500" />
                <span>{t("card1")}</span>
              </li>
              <li className="flex items-start">
                <IoMdClock className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" />
                <span>{t("card2")}</span>
              </li>
              <li className="flex items-start">
                <IoRocket className="mr-2 h-6 w-6 flex-shrink-0 text-blue-500" />
                <span>{t("card3")}</span>
              </li>
              <li className="flex items-start">
                <FaBrain className="mr-2 h-6 w-6 flex-shrink-0 text-purple-500" />
                <span>{t("card4")}</span>
              </li>
            </ul>
          </div>

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
