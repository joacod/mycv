import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { ClickMe } from "./ClickMe/ClickMe";
import { User } from "./User/User";
import { SignedIn } from "@clerk/nextjs";

export const UsersNavigation = () => {
  return (
    <>
      <nav className="mx-2 flex items-center justify-between py-4 lg:hidden">
        <Link href="/">
          <button className="btn btn-neutral mr-2 px-2 py-6">
            <FaHome size={28} /> Home
          </button>
        </Link>
        <SignedIn>
          <div className="flex items-center gap-2">
            <ClickMe />
            <User />
          </div>
        </SignedIn>
      </nav>

      <nav id="navigation" className="navbar bg-base-100 hidden px-4 lg:flex">
        <div className="navbar-start space-x-4">
          <Link href="/">
            <button className="btn btn-neutral mr-2 px-2 py-6">
              <FaHome size={28} /> Home
            </button>
          </Link>
          <SignedIn>
            <ClickMe />
          </SignedIn>
        </div>
        <div className="navbar-end space-x-4">
          <SignedIn>
            <User />
          </SignedIn>
        </div>
      </nav>
    </>
  );
};
