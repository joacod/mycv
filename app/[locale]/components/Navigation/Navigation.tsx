import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navigation = () => {
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
        <a href="https://github.com/your-github-profile">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile">
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
