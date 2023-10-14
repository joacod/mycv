import { useTranslations } from "next-intl";
import { FaReact } from "react-icons/fa";
import { SkillWrapper } from "./SkillWrapper";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiAmazonaws,
  SiHtml5,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

export const SkillsMd = () => {
  const t = useTranslations("Skills");

  return (
    <div className="hidden md:inline lg:hidden">
      <div className="px-6 py-10">
        <h1 className="text-5xl font-bold">{t("title")}</h1>

        <div className="mt-10 flex justify-between">
          <SkillWrapper size="md">
            <FaReact size={70} />
          </SkillWrapper>
          <SkillWrapper size="md">
            <SiNextdotjs size={60} />
          </SkillWrapper>
          <SkillWrapper size="md">
            <SiVite size={50} />
          </SkillWrapper>
          <SkillWrapper size="md">
            <SiTailwindcss size={60} />
          </SkillWrapper>
        </div>

        <div className="mt-10 flex justify-between">
          <SkillWrapper size="md">
            <SiJavascript size={50} />
          </SkillWrapper>
          <SkillWrapper size="md">
            <BiLogoTypescript size={70} />
          </SkillWrapper>
          <SkillWrapper size="md">
            <SiHtml5 size={50} />
          </SkillWrapper>
          <SkillWrapper size="md">
            <SiAmazonaws size={60} />
          </SkillWrapper>
        </div>
      </div>
    </div>
  );
};
