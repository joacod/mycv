import { FaGithub } from "react-icons/fa";
import { devInfo } from "@/utils/devInfo";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import { NavLinks } from "./NavLinks";
import { RiMenu2Fill } from "react-icons/ri";
import { ClickMe } from "./ClickMe/ClickMe";
import { FontBtn } from "./FontBtn";
import { User } from "./User/User";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { BiLogoDevTo } from "react-icons/bi";

const Navigation = () => {
  return (
    <>
      <nav id="navigation" className="mx-2 py-4 lg:hidden">
        <div className="flex items-center justify-between">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost mr-2 px-2">
              <RiMenu2Fill size={28} />
            </button>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-1 mt-3 w-52 space-y-2 rounded-box bg-base-100 p-2 shadow-sm"
            >
              <SignedIn>
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
              </SignedIn>
              <NavLinks />
              <LocaleSwitcher />
            </ul>
          </div>

          <User />
        </div>
        <div className="mt-2 flex items-center justify-between">
          <FontBtn title={devInfo.name} />
          <ClickMe />
        </div>
      </nav>

      <nav id="navigation" className="navbar hidden bg-base-100 px-4 lg:flex">
        <div className="navbar-start space-x-4">
          <FontBtn title={devInfo.name} />
          <ClickMe />
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal space-x-2 px-1">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <ul className="menu menu-horizontal px-1">
            <LocaleSwitcher />
          </ul>
          <SignedIn>
            <Link href="/dashboard">
              <button className="btn btn-neutral mr-2 px-2">
                <MdDashboard size={28} /> Dashboard
              </button>
            </Link>
          </SignedIn>
          <SignedOut>
            <a
              href={devInfo.githubUrl}
              className="delay-50 transition duration-200 ease-in-out hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} />
            </a>
            <a
              href={devInfo.devto}
              className="delay-50 transition duration-200 ease-in-out hover:scale-125"
              target="_blank"
              rel="noopener"
            >
              <BiLogoDevTo size={40} />
            </a>
          </SignedOut>

          <User />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
