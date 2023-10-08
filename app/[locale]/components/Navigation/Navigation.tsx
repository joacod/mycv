import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { devInfo, githubUrl, linkedinUrl } from "@/utils/devInfo";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import { NavLinks } from "./NavLinks";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { useTranslations } from "next-intl";

const Navigation = () => {
  const t = useTranslations("Common");

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <NavLinks />
          </ul>
        </div>
        <a
          className="btn btn-ghost text-xl normal-case"
          href="https://github.com/joacod/mycv"
          target="_blank"
        >
          <BsFillClipboard2CheckFill size={32} /> {t("my")} CV - {devInfo.name}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLinks />
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <LocaleSwitcher />
        <a href={githubUrl} target="_blank">
          <FaGithub size={32} />
        </a>
        <a href={linkedinUrl} target="_blank">
          <FaLinkedin size={32} />
        </a>
        <a className="btn">{t("clickme")}</a>
      </div>
    </div>
  );
};

export default Navigation;
