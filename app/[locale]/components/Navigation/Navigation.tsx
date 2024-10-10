import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinktreeLogoBold } from "react-icons/pi";
import { devInfo } from "@/utils/devInfo";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import { NavLinks } from "./NavLinks";
import { RiMenu2Fill } from "react-icons/ri";
import { ClickMe } from "./ClickMe/ClickMe";
import { FontBtn } from "./FontBtn";

const Navigation = () => {
  return (
    <>
      <nav
        id="navigation"
        className="mx-2 flex items-center justify-between py-4 lg:hidden"
      >
        <div>
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost mr-2 px-2">
              <RiMenu2Fill size={28} />
            </button>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 space-y-2 rounded-box bg-base-100 p-2 shadow"
            >
              <NavLinks />
              <LocaleSwitcher />
            </ul>
          </div>
          <FontBtn title={devInfo.name} />
        </div>

        <ClickMe />
      </nav>

      <nav id="navigation" className="navbar hidden bg-base-100 px-4 lg:flex">
        <div className="navbar-start">
          <FontBtn title={devInfo.name} />
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal space-x-2 px-1">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end space-x-4">
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
            href={devInfo.xUrl}
            className="delay-50 transition duration-200 ease-in-out hover:scale-125"
            target="_blank"
            rel="noopener"
          >
            <FaXTwitter size={32} />
          </a>
          <a
            href={devInfo.linktree}
            className="delay-50 transition duration-200 ease-in-out hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiLinktreeLogoBold size={32} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
