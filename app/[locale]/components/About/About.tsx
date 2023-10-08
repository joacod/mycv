import { useTranslations } from "next-intl";
import { FaHandPointDown } from "react-icons/fa";
import Image from "next/image";

export const About = () => {
  const t = useTranslations("About");

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          className="lg:hidden"
          src="/avatar.png"
          alt="avatar"
          width={180}
          height={196}
        />
        <Image
          className="hidden lg:inline"
          src="/avatar.png"
          alt="avatar"
          width={480}
          height={526}
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
