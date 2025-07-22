import { devInfo } from "@/utils/devInfo";
import { useTranslations } from "next-intl";
import { BiLogoDevTo, BiLogoSpotify } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiLinktreeLogoBold } from "react-icons/pi";

export const DashboardLinks = () => {
  const t = useTranslations("DashboardLinks");

  return (
    <div className="mt-12">
      <h2 className="mt-5 text-3xl">{t("title")}</h2>

      <div className="mt-5 flex justify-center space-x-12 lg:hidden">
        <a
          href={devInfo.githubUrl}
          className="transition delay-50 duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={64} />
        </a>
        <a
          href={devInfo.devto}
          className="transition delay-50 duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoDevTo size={64} />
        </a>
        <a
          href={devInfo.spotify}
          className="transition delay-50 duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoSpotify size={64} />
        </a>
      </div>
      <div className="mt-5 flex justify-center space-x-12 lg:hidden">
        <a
          href={devInfo.linkedinUrl}
          className="transition delay-50 duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener"
        >
          <FaLinkedin size={64} />
        </a>
        <a
          href={devInfo.linktree}
          className="transition delay-50 duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiLinktreeLogoBold size={64} />
        </a>
      </div>

      <div className="mt-5 hidden justify-center space-x-12 lg:flex">
        <a
          href={devInfo.githubUrl}
          className="transition delay-50 duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={64} />
        </a>
        <a
          href={devInfo.devto}
          className="transition delay-50 duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoDevTo size={64} />
        </a>
        <a
          href={devInfo.spotify}
          className="transition delay-50 duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoSpotify size={64} />
        </a>
        <a
          href={devInfo.linkedinUrl}
          className="transition delay-50 duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener"
        >
          <FaLinkedin size={64} />
        </a>
        <a
          href={devInfo.linktree}
          className="transition delay-50 duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiLinktreeLogoBold size={64} />
        </a>
      </div>
    </div>
  );
};
