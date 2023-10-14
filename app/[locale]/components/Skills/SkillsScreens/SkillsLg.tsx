import { useTranslations } from "next-intl";
import { FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiAmazonaws,
  SiGit,
  SiHtml5,
  SiCsswizardry,
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
          <SkillWrapper size="lg">
            <FaReact size={110} />
          </SkillWrapper>
          <SkillWrapper size="lg">
            <SiNextdotjs size={100} />
          </SkillWrapper>
          <SkillWrapper size="lg">
            <SiVite size={90} />
          </SkillWrapper>
          <SkillWrapper size="lg">
            <SiTailwindcss size={110} />
          </SkillWrapper>
          <SkillWrapper size="lg">
            <SiAmazonaws size={90} />
          </SkillWrapper>
        </div>
        <div className="mt-12 flex justify-between">
          <SkillWrapper size="lg">
            <SiJavascript size={90} />
          </SkillWrapper>
          <SkillWrapper size="lg">
            <BiLogoTypescript size={120} />
          </SkillWrapper>
          <SkillWrapper size="lg">
            <SiGit size={100} />
          </SkillWrapper>
          <SkillWrapper size="lg">
            <SiHtml5 size={90} />
          </SkillWrapper>
          <SkillWrapper size="lg">
            <SiCsswizardry size={90} />
          </SkillWrapper>
        </div>
      </div>
    </div>
  );
};
