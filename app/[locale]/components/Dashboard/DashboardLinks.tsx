import { devInfo } from "@/utils/devInfo";
import { useTranslations } from "next-intl";
import { BiLogoDevTo, BiLogoSpotify } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaLink } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinktreeLogoBold } from "react-icons/pi";

export const DashboardLinks = () => {
  const t = useTranslations("DashboardLinks");

  const socialLinks = [
    {
      href: devInfo.githubUrl,
      icon: <FaGithub size={32} />,
      label: "GitHub",
    },
    {
      href: devInfo.devto,
      icon: <BiLogoDevTo size={32} />,
      label: "Dev.to",
    },
    {
      href: devInfo.linkedinUrl,
      icon: <FaLinkedin size={32} />,
      label: "LinkedIn",
    },
    {
      href: devInfo.xUrl,
      icon: <FaXTwitter size={32} />,
      label: "X",
    },
    {
      href: devInfo.spotify,
      icon: <BiLogoSpotify size={32} />,
      label: "Spotify",
    },
    {
      href: devInfo.linktree,
      icon: <PiLinktreeLogoBold size={32} />,
      label: "Linktree",
    },
  ];

  return (
    <div className="bg-base-100 rounded-xl p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full">
          <FaLink className="text-primary h-4 w-4" />
        </div>
        <h2 className="text-xl font-bold">{t("title")}</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="bg-base-200 hover:bg-primary hover:text-primary-content flex flex-col items-center justify-center rounded-lg p-4 transition-all duration-200 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mb-2">{link.icon}</div>
            <span className="text-sm font-medium">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
