import { useTranslations } from "next-intl";
import { FaReact } from "react-icons/fa";
import { SkillWrapperMobile } from "./SkillWrapperMobile";
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

export const SkillsMobile = () => {
  const t = useTranslations("Skills");

  return (
    <div className="py-5 lg:hidden">
      <div className="p-4">
        <h1 className="text-5xl font-bold">{t("title")}</h1>

        <div className="mt-10 flex justify-between">
          <SkillWrapperMobile>
            <FaReact size={70} />
          </SkillWrapperMobile>
          <SkillWrapperMobile>
            <SiNextdotjs size={60} />
          </SkillWrapperMobile>
          <SkillWrapperMobile>
            <SiVite size={50} />
          </SkillWrapperMobile>
        </div>

        <div className="mt-10 flex justify-between">
          <SkillWrapperMobile>
            <SiJavascript size={50} />
          </SkillWrapperMobile>
          <SkillWrapperMobile>
            <BiLogoTypescript size={70} />
          </SkillWrapperMobile>
          <SkillWrapperMobile>
            <SiAmazonaws size={60} />
          </SkillWrapperMobile>
        </div>

        <div className="mt-10 flex justify-between">
          <SkillWrapperMobile>
            <SiHtml5 size={50} />
          </SkillWrapperMobile>
          <SkillWrapperMobile>
            <SiCsswizardry size={50} />
          </SkillWrapperMobile>
          <SkillWrapperMobile>
            <SiTailwindcss size={60} />
          </SkillWrapperMobile>
        </div>
      </div>
    </div>
  );
};
