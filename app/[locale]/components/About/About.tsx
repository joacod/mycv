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
          <p className="pt-6">{t("description")}</p>
          <p className="pt-6">{t("role")}</p>
          <p className="py-6">{t("colaborate")}</p>
          <a className="btn btn-primary" href="#section-experience">
            {t("getstarted")} <FaHandPointDown size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};
