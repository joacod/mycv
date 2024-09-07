import { useTranslations } from "next-intl";
import { FaAws, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiGit,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SkillWrapper } from "./SkillWrapper";

export const SkillsLg = () => {
  const t = useTranslations("Skills");

  return (
    <div className="hidden lg:inline">
      <div className="px-28 py-20">
        <h1 className="mb-14 text-5xl font-bold">{t("title")}</h1>

        <div className="flex justify-between">
          <SkillWrapper size="lg" name="React">
            <FaReact size={110} />
          </SkillWrapper>
          <SkillWrapper size="lg" name="Next">
            <SiNextdotjs size={100} />
          </SkillWrapper>
          <SkillWrapper size="lg" name="Vite">
            <SiVite size={90} />
          </SkillWrapper>
          <SkillWrapper size="lg" name="Tailwind">
            <SiTailwindcss size={110} />
          </SkillWrapper>
          <SkillWrapper size="lg" name="AWS">
            <FaAws size={90} />
          </SkillWrapper>
        </div>
        <div className="mt-12 flex justify-between">
          <SkillWrapper size="lg" name="Javascript">
            <SiJavascript size={90} />
          </SkillWrapper>
          <SkillWrapper size="lg" name="Typescript">
            <BiLogoTypescript size={120} />
          </SkillWrapper>
          <SkillWrapper size="lg" name="Git">
            <SiGit size={100} />
          </SkillWrapper>
          <SkillWrapper size="lg" name="HTML">
            <SiHtml5 size={90} />
          </SkillWrapper>
          <SkillWrapper size="lg" name="CSS">
            <SiCss3 size={90} />
          </SkillWrapper>
        </div>
      </div>
    </div>
  );
};
