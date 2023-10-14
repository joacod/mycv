import { useTranslations } from "next-intl";
import { FaReact } from "react-icons/fa";
import { SkillWrapper } from "../SkillWrapper";
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

export const SkillsSm = () => {
  const t = useTranslations("Skills");

  return (
    <div className="py-5 lg:hidden">
      <div className="p-4">
        <h1 className="text-5xl font-bold">{t("title")}</h1>

        <div className="mt-10 flex justify-between">
          <SkillWrapper size="sm">
            <FaReact size={70} />
          </SkillWrapper>
          <SkillWrapper size="sm">
            <SiNextdotjs size={60} />
          </SkillWrapper>
          <SkillWrapper size="sm">
            <SiVite size={50} />
          </SkillWrapper>
        </div>

        <div className="mt-10 flex justify-between">
          <SkillWrapper size="sm">
            <SiJavascript size={50} />
          </SkillWrapper>
          <SkillWrapper size="sm">
            <BiLogoTypescript size={70} />
          </SkillWrapper>
          <SkillWrapper size="sm">
            <SiAmazonaws size={60} />
          </SkillWrapper>
        </div>

        <div className="mt-10 flex justify-between">
          <SkillWrapper size="sm">
            <SiHtml5 size={50} />
          </SkillWrapper>
          <SkillWrapper size="sm">
            <SiCsswizardry size={50} />
          </SkillWrapper>
          <SkillWrapper size="sm">
            <SiTailwindcss size={60} />
          </SkillWrapper>
        </div>
      </div>
    </div>
  );
};
