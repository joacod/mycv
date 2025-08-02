import { useTranslations } from "next-intl";
import { FaAws, FaNode, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiGit,
  SiHtml5,
  SiCss3,
  SiPython,
  SiGo,
  SiPhp,
} from "react-icons/si";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { SkillBadge } from "./SkillBadge";

export const Skills = () => {
  const t = useTranslations("Skills");

  const skills = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNode /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Golang", icon: <SiGo /> },
    { name: "C#", icon: <TbBrandCSharp /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "SQL", icon: <TbSql /> },
    { name: "Git", icon: <SiGit /> },
    { name: "AWS", icon: <FaAws /> },
  ];

  return (
    <section id="section-skills" className="px-4 py-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold md:text-5xl lg:text-left">
          {t("title")}
        </h1>

        <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 md:gap-8 lg:grid-cols-6 lg:gap-10 xl:grid-cols-8">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name}>
              {skill.icon}
            </SkillBadge>
          ))}
        </div>
      </div>
    </section>
  );
};
