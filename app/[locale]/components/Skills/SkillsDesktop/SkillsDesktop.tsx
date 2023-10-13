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

export const SkillsDesktop = () => {
  const t = useTranslations("Skills");

  return (
    <div className="hidden lg:inline">
      <div className="px-28 py-20">
        <h1 className="mb-14 text-5xl font-bold">{t("title")}</h1>

        <div className="grid grid-rows-2 lg:grid-cols-5 lg:gap-y-5">
          <div className="mask mask-hexagon-2 flex h-40 w-40 items-center justify-center bg-accent hover:bg-secondary-focus">
            <FaReact size={110} className="text-accent-content " />
          </div>
          <div className="mask mask-hexagon-2 flex h-40 w-40 items-center justify-center bg-accent hover:bg-secondary-focus">
            <SiNextdotjs size={100} className="text-accent-content " />
          </div>
          <div className="mask mask-hexagon-2 flex h-40 w-40 items-center justify-center bg-accent hover:bg-secondary-focus">
            <SiVite size={90} className="text-accent-content " />
          </div>
          <div className="mask mask-hexagon-2 flex h-40 w-40 items-center justify-center bg-accent hover:bg-secondary-focus">
            <SiTailwindcss size={110} className="text-accent-content " />
          </div>
          <div className="mask mask-hexagon-2 flex h-40 w-40 items-center justify-center bg-accent hover:bg-secondary-focus">
            <SiAmazonaws size={90} className="text-accent-content " />
          </div>

          <div className="mask mask-hexagon-2 flex h-40 w-40 items-center justify-center bg-accent hover:bg-secondary-focus">
            <SiJavascript size={90} className="text-accent-content " />
          </div>
          <div className="mask mask-hexagon-2 flex h-40 w-40 items-center justify-center bg-accent hover:bg-secondary-focus">
            <BiLogoTypescript size={120} className="text-accent-content " />
          </div>
          <div className="mask mask-hexagon-2 flex h-40 w-40 items-center justify-center bg-accent hover:bg-secondary-focus">
            <SiGit size={100} className="text-accent-content " />
          </div>
          <div className="mask mask-hexagon-2 flex h-40 w-40 items-center justify-center bg-accent hover:bg-secondary-focus">
            <SiHtml5 size={90} className="text-accent-content " />
          </div>
          <div className="mask mask-hexagon-2 flex h-40 w-40 items-center justify-center bg-accent hover:bg-secondary-focus">
            <SiCsswizardry size={90} className="text-accent-content " />
          </div>
        </div>
      </div>
    </div>
  );
};
