import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { devGithub, devLinkedIn } from "@/utils/devConstants";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import { useTranslations } from "next-intl";

const Navigation = () => {
  const t = useTranslations("Navigation");
  const githubUrl = "https://github.com/" + devGithub;
  const linkedinUrl = "https://www.linkedin.com/in/" + devLinkedIn;

  return (
    <nav className="flex items-center justify-between bg-neutral-800 px-10 py-5 shadow-md">
      <ul className="flex space-x-4">
        <li>
          <Link href={`#section-about`}>{t("about")}</Link>
        </li>
        <li>
          <Link href={`#section-experience`}>{t("experience")}</Link>
        </li>
        <li>
          <Link href={`#section-education`}>{t("education")}</Link>
        </li>
        <li>
          <Link href={`#section-skills`}>{t("skills")}</Link>
        </li>
      </ul>
      <div className="flex space-x-4">
        <a href={githubUrl}>
          <FaGithub size={32} />
        </a>
        <a href={linkedinUrl}>
          <FaLinkedin size={32} />
        </a>
        <LocaleSwitcher />
      </div>
    </nav>
  );
};

export default Navigation;
