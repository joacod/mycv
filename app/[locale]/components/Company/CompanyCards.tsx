import { useTranslations } from "next-intl";
import { BiSolidZap } from "react-icons/bi";
import { IoMdClock } from "react-icons/io";
import { IoRocket } from "react-icons/io5";
import { FaBrain } from "react-icons/fa6";
import { SingleCard } from "./SingleCard";

export const CompanyCards = () => {
  const t = useTranslations("Company");

  return (
    <div className="border-primary-content/10 bg-primary-content/5 mb-12 rounded-2xl border p-8 shadow-2xl backdrop-blur-sm">
      <h3 className="mb-6 text-center text-2xl font-bold md:text-3xl">
        {t("cardTitle")}
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <SingleCard
          icon={<BiSolidZap className="h-full w-full" />}
          text={t("card1")}
        />
        <SingleCard
          icon={<IoMdClock className="h-full w-full" />}
          text={t("card2")}
        />
        <SingleCard
          icon={<IoRocket className="h-full w-full" />}
          text={t("card3")}
        />
        <SingleCard
          icon={<FaBrain className="h-full w-full" />}
          text={t("card4")}
        />
      </div>
    </div>
  );
};
