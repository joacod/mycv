import { devInfo } from "@/utils/devInfo";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { PiLinktreeLogoBold } from "react-icons/pi";
import { CreditsModal } from "../CreditsModal/CreditsModal";
import { Credits } from "../CreditsModal/Credits";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoDevTo, BiLogoSpotify } from "react-icons/bi";

export const Footer = () => {
  const t = useTranslations("Footer");
  const tcred = useTranslations("Credits");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
      <section>
        <a
          href="https://github.com/joacod/mycv"
          className="transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFillClipboard2CheckFill size={50} aria-label="Clipboard Icon" />
        </a>
        <div className="space-y-2">
          <p className="font-bold">{devInfo.name}</p>
          <p>
            &copy; 2008-{currentYear} - {t("rights")}
          </p>
          <CreditsModal title={tcred("title")}>
            <Credits />
          </CreditsModal>
        </div>
      </section>
      <div className="grid grid-flow-col gap-4">
        <a
          href={devInfo.githubUrl}
          className="transition delay-50 duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub size={28} />
        </a>
        <a
          href={devInfo.linkedinUrl}
          className="transition delay-50 duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href={devInfo.devto}
          className="transition delay-50 duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener"
          aria-label="Linktree Profile"
        >
          <BiLogoDevTo size={28} />
        </a>
        <a
          href={devInfo.spotify}
          className="transition delay-50 duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener"
          aria-label="Linktree Profile"
        >
          <BiLogoSpotify size={28} />
        </a>
        <a
          href={devInfo.xUrl}
          className="transition delay-50 duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener"
          aria-label="X Profile"
        >
          <FaXTwitter size={28} />
        </a>
        <a
          href={devInfo.linktree}
          className="transition delay-50 duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener"
          aria-label="Linktree Profile"
        >
          <PiLinktreeLogoBold size={28} />
        </a>
      </div>
    </footer>
  );
};
