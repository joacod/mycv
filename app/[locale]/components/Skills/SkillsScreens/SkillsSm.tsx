import { useTranslations } from "next-intl";
import { FaAws, FaNode, FaReact } from "react-icons/fa";
import { SkillWrapper } from "./SkillWrapper";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGolang } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";

export const SkillsSm = () => {
  const t = useTranslations("Skills");

  return (
    <div className="md:hidden lg:hidden">
      <div className="px-6 py-14">
        <h1 className="text-5xl font-bold">{t("title")}</h1>

        <div className="mt-10 flex justify-between px-4">
          <SkillWrapper size="sm" name="React">
            <FaReact size={70} />
          </SkillWrapper>
          <SkillWrapper size="sm" name="Next">
            <SiNextdotjs size={60} />
          </SkillWrapper>
          <SkillWrapper size="sm" name="Git">
            <SiGit size={60} />
          </SkillWrapper>
        </div>

        <div className="mt-10 flex justify-between px-4">
          <SkillWrapper size="sm" name="Javascript">
            <SiJavascript size={50} />
          </SkillWrapper>
          <SkillWrapper size="sm" name="Typescript">
            <BiLogoTypescript size={70} />
          </SkillWrapper>
          <SkillWrapper size="sm" name="AWS">
            <FaAws size={60} />
          </SkillWrapper>
        </div>

        <div className="mt-10 flex justify-between px-4">
          <SkillWrapper size="sm" name="HTML">
            <SiHtml5 size={50} />
          </SkillWrapper>
          <SkillWrapper size="sm" name="CSS">
            <SiCss3 size={50} />
          </SkillWrapper>
          <SkillWrapper size="sm" name="Tailwind">
            <SiTailwindcss size={60} />
          </SkillWrapper>
        </div>

        <div className="mt-10 flex justify-between px-4">
          <SkillWrapper size="sm" name="NodeJS">
            <FaNode size={60} />
          </SkillWrapper>
          <SkillWrapper size="sm" name="Golang">
            <FaGolang size={60} />
          </SkillWrapper>
          <SkillWrapper size="sm" name="C#">
            <TbBrandCSharp size={60} />
          </SkillWrapper>
        </div>
      </div>
    </div>
  );
};
