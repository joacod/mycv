import { useTranslations } from "next-intl";
import { FaHandPointDown } from "react-icons/fa";

export const About = () => {
  const t = useTranslations("About");

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{t("title")}</h1>
          <p className="py-6">{t("description")}</p>
          <button className="btn btn-primary">
            {t("getstarted")} <FaHandPointDown size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};
