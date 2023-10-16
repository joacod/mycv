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
      <div className="px-6 py-14">
        <h1 className="text-5xl font-bold">{t("title")}</h1>

        <div className="mt-10 flex justify-between px-4">
          <SkillWrapper size="md">
            <FaReact size={80} />
          </SkillWrapper>
          <SkillWrapper size="md">
            <SiNextdotjs size={70} />
          </SkillWrapper>
          <SkillWrapper size="md">
            <SiVite size={60} />
          </SkillWrapper>
          <SkillWrapper size="md">
            <SiTailwindcss size={70} />
          </SkillWrapper>
        </div>

        <div className="mt-10 flex justify-between px-4">
          <SkillWrapper size="md">
            <SiJavascript size={60} />
          </SkillWrapper>
          <SkillWrapper size="md">
            <BiLogoTypescript size={80} />
          </SkillWrapper>
          <SkillWrapper size="md">
            <SiHtml5 size={60} />
          </SkillWrapper>
          <SkillWrapper size="md">
            <SiAmazonaws size={70} />
          </SkillWrapper>
        </div>
      </div>
    </div>
  );
};
