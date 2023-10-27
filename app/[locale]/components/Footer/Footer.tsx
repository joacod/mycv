import { devInfo } from "@/utils/devInfo";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { CreditsModal } from "../CreditsModal/CreditsModal";
import { Credits } from "../CreditsModal/Credits";

export const Footer = () => {
  const tc = useTranslations("Common");
  const t = useTranslations("Footer");
  const tcred = useTranslations("Credits");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center bg-primary p-10 text-primary-content">
      <section>
        <a
          href="https://github.com/joacod/mycv"
          className="delay-50 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFillClipboard2CheckFill size={50} aria-label="Clipboard Icon" />
        </a>
        <div className="space-y-2">
          <p className="font-bold">
            {tc("my")} CV <br />
            {devInfo.name}
          </p>
          <p>
            Copyright &copy; 2023-{currentYear} - {t("rights")}
          </p>
          <CreditsModal title={tcred("title")}>
            <Credits />
          </CreditsModal>
        </div>
      </section>
      <div className="grid grid-flow-col gap-4">
        <a
          href={devInfo.githubUrl}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub size={28} />
        </a>
        <a
          href={devInfo.linkedinUrl}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
    </footer>
  );
};
