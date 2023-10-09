import { FaGithub, FaLinkedin } from "react-icons/fa";
import { devInfo, githubUrl, linkedinUrl } from "@/utils/devInfo";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import { NavLinks } from "./NavLinks";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { useTranslations } from "next-intl";
import { RiMenu2Fill } from "react-icons/ri";
import { ClickMe } from "./ClickMe/ClickMe";

const Navigation = () => {
  const t = useTranslations("Common");

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <RiMenu2Fill size={28} />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 space-y-2 bg-base-100 p-2 shadow"
          >
            <NavLinks />
            <LocaleSwitcher />
            <li>
              <ClickMe />
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-base normal-case lg:text-xl" href="#">
          <span className="hidden lg:inline">
            <BsFillClipboard2CheckFill size={32} />
          </span>{" "}
          <span>
            {t("my")} CV - {devInfo.name}
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-5 px-1">
          <NavLinks />
        </ul>
      </div>
      <div className="navbar-end hidden space-x-4 lg:flex">
        <ClickMe />
        <ul className="menu menu-horizontal px-1">
          <LocaleSwitcher />
        </ul>
        <a
          href={githubUrl}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
        >
          <FaGithub size={32} />
        </a>
        <a
          href={linkedinUrl}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
        >
          <FaLinkedin size={32} />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
