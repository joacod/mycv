import { devInfo, githubUrl, linkedinUrl } from "@/utils/devInfo";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillClipboard2CheckFill } from "react-icons/bs";

export const Footer = () => {
  const tc = useTranslations("Common");
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center bg-primary p-10 text-primary-content">
      <aside>
        <a
          href="https://github.com/joacod/mycv"
          className="delay-50 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-125"
          target="_blank"
        >
          <BsFillClipboard2CheckFill size={50} />
        </a>
        <p className="font-bold">
          {tc("my")} CV <br />
          {devInfo.name}
        </p>
        <p>
          Copyright © 2023-{currentYear} - {t("rights")}
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href={githubUrl}
            className="delay-50 transition duration-200 ease-in-out hover:scale-125"
            target="_blank"
          >
            <FaGithub size={28} />
          </a>
          <a
            href={linkedinUrl}
            className="delay-50 transition duration-200 ease-in-out hover:scale-125"
            target="_blank"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </nav>
    </footer>
  );
};
