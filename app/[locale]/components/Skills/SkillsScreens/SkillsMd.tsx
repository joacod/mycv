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
          <SkillWrapper size="md" name="React">
            <FaReact size={80} />
          </SkillWrapper>
          <SkillWrapper size="md" name="Next">
            <SiNextdotjs size={70} />
          </SkillWrapper>
          <SkillWrapper size="md" name="Vite">
            <SiVite size={60} />
          </SkillWrapper>
          <SkillWrapper size="md" name="Tailwind">
            <SiTailwindcss size={70} />
          </SkillWrapper>
        </div>

        <div className="mt-10 flex justify-between px-4">
          <SkillWrapper size="md" name="Javascript">
            <SiJavascript size={60} />
          </SkillWrapper>
          <SkillWrapper size="md" name="Typescript">
            <BiLogoTypescript size={80} />
          </SkillWrapper>
          <SkillWrapper size="md" name="HTML">
            <SiHtml5 size={60} />
          </SkillWrapper>
          <SkillWrapper size="md" name="AWS">
            <SiAmazonaws size={70} />
          </SkillWrapper>
        </div>
      </div>
    </div>
  );
};
