import { FaGithub, FaLinkedin } from "react-icons/fa";
import { devInfo } from "@/utils/devInfo";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import { NavLinks } from "./NavLinks";
import { useTranslations } from "next-intl";
import { RiMenu2Fill } from "react-icons/ri";
import { ClickMe } from "./ClickMe/ClickMe";
import { FontBtn } from "./FontBtn";

const Navigation = () => {
  const t = useTranslations("Common");

  return (
    <nav className="navbar bg-base-100 lg:px-4">
      <div className="navbar-start">
        <div className="dropdown mr-2">
          <button
            tabIndex={0}
            aria-haspopup="true"
            aria-expanded="false"
            aria-controls="dropdown-menu"
            className="btn btn-ghost lg:hidden"
          >
            <RiMenu2Fill size={28} />
          </button>
          <ul
            id="dropdown-menu"
            role="menu"
            aria-label="submenu"
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
        <FontBtn title={t("my") + "CV - " + devInfo.name} />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-2 px-1">
          <NavLinks />
        </ul>
      </div>
      <div className="navbar-end hidden space-x-4 lg:flex">
        <ClickMe />
        <ul className="menu menu-horizontal px-1">
          <LocaleSwitcher />
        </ul>
        <a
          href={devInfo.githubUrl}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={32} />
        </a>
        <a
          href={devInfo.linkedinUrl}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={32} />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
