import { devInfo } from "@/utils/devInfo";
import { BiLogoDevTo, BiLogoSpotify } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinktreeLogoBold } from "react-icons/pi";

export const DashboardLinks = () => {
  return (
    <div className="mt-12">
      <h2 className="mt-5 text-3xl">Explore My Projects and Social Media</h2>

      <div className="mt-5 flex justify-center space-x-12 lg:hidden">
        <a
          href={devInfo.githubUrl}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={64} />
        </a>
        <a
          href={devInfo.devto}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoDevTo size={64} />
        </a>
        <a
          href={devInfo.spotify}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoSpotify size={64} />
        </a>
      </div>
      <div className="mt-5 flex justify-center space-x-12 lg:hidden">
        <a
          href={devInfo.xUrl}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener"
        >
          <FaXTwitter size={64} />
        </a>
        <a
          href={devInfo.linkedinUrl}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener"
        >
          <FaLinkedin size={64} />
        </a>
        <a
          href={devInfo.linktree}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiLinktreeLogoBold size={64} />
        </a>
      </div>

      <div className="mt-5 hidden justify-center space-x-12 lg:flex">
        <a
          href={devInfo.githubUrl}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={64} />
        </a>
        <a
          href={devInfo.devto}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoDevTo size={64} />
        </a>
        <a
          href={devInfo.spotify}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoSpotify size={64} />
        </a>
        <a
          href={devInfo.xUrl}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener"
        >
          <FaXTwitter size={64} />
        </a>
        <a
          href={devInfo.linkedinUrl}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener"
        >
          <FaLinkedin size={64} />
        </a>
        <a
          href={devInfo.linktree}
          className="delay-50 transition duration-200 ease-in-out hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiLinktreeLogoBold size={64} />
        </a>
      </div>
    </div>
  );
};
