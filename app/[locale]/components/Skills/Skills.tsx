import { useTranslations } from "next-intl";
import { FaAws, FaGithub, FaNode, FaReact, FaRocket } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiPython,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiOpenai,
  SiClaude,
  SiGithubcopilot,
  SiDocker,
  SiAstro,
  SiKubernetes,
  SiTerraform,
  SiRedis,
} from "react-icons/si";
import { TbBrandCSharp, TbSql, TbBrain } from "react-icons/tb";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  const t = useTranslations("Skills");

  const mvpStack = [
    { name: "Next.js 15", icon: <SiNextdotjs />, category: "mvp" },
    { name: "React 19", icon: <FaReact />, category: "mvp" },
    { name: "TypeScript", icon: <SiTypescript />, category: "mvp" },
    { name: "Tailwind", icon: <SiTailwindcss />, category: "mvp" },
    { name: "PostgreSQL", icon: <SiPostgresql />, category: "mvp" },
    { name: "MongoDB", icon: <SiMongodb />, category: "mvp" },
    { name: "Vercel", icon: <SiVercel />, category: "mvp" },
    { name: "GitHub", icon: <FaGithub />, category: "mvp" },
  ];

  const aiPowered = [
    { name: "GPT-5", icon: <SiOpenai />, category: "ai" },
    { name: "Claude Code", icon: <SiClaude />, category: "ai" },
    { name: "v0 by Vercel", icon: <SiVercel />, category: "ai" },
    { name: "GitHub Copilot", icon: <SiGithubcopilot />, category: "ai" },
  ];

  const customSolutions = [
    { name: "Node.js", icon: <FaNode />, category: "custom" },
    { name: "Python", icon: <SiPython />, category: "custom" },
    { name: "Golang", icon: <SiGo />, category: "custom" },
    { name: "C#", icon: <TbBrandCSharp />, category: "custom" },
    { name: "AWS", icon: <FaAws />, category: "custom" },
    { name: "Docker", icon: <SiDocker />, category: "custom" },
    { name: "Kubernetes", icon: <SiKubernetes />, category: "custom" },
    { name: "Redis", icon: <SiRedis />, category: "custom" },
    { name: "Terraform", icon: <SiTerraform />, category: "custom" },
    { name: "Astro", icon: <SiAstro />, category: "custom" },
    { name: "Git", icon: <SiGit />, category: "custom" },
    { name: "OpenAI API", icon: <SiOpenai />, category: "custom" },
  ];

  return (
    <section id="section-skills" className="bg-base-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">{t("title")}</h2>
        <p className="text-base-content/70 mb-12 text-xl">{t("subtitle")}</p>

        <div className="space-y-12">
          {/* MVP Shipping Stack */}
          <SkillCard
            title={t("mvpStack")}
            description={t("mvpStackDescription")}
            skills={mvpStack}
            icon={<FaRocket />}
          />

          {/* AI-Powered Development */}
          <SkillCard
            title={t("aiTitle")}
            description={t("aiDescription")}
            skills={aiPowered}
            icon={<TbBrain />}
          />

          {/* Custom Solutions */}
          <SkillCard
            title={t("customTitle")}
            description={t("customDescription")}
            skills={customSolutions}
          />
        </div>
      </div>
    </section>
  );
};
