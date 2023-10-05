import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { devGithub, devLinkedIn } from "../../utils/devConstants";

const Navigation = () => {
  const githubUrl = "https://github.com/" + devGithub;
  const linkedinUrl = "https://www.linkedin.com/in/" + devLinkedIn;

  return (
    <nav className="bg-white p-4 shadow-md">
      <ul>
        <li>
          <Link href={`#section-about`}>About</Link>
        </li>
        <li>
          <Link href={`#section-experience`}>Experience</Link>
        </li>
        <li>
          <Link href={`#section-education`}>Education</Link>
        </li>
        <li>
          <Link href={`#section-skills`}>Skills</Link>
        </li>
      </ul>
      <div>
        <a href={githubUrl}>
          <FaGithub />
        </a>
        <a href={linkedinUrl}>
          <FaLinkedin />
        </a>
        {/* <Link href={`/${locale}`}>
          {locale.toUpperCase()}
        </Link> */}
      </div>
    </nav>
  );
};

export default Navigation;
