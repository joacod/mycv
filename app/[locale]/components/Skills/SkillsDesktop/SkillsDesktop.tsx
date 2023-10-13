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

        <div className="grid grid-rows-2 text-primary-content hover:text-secondary-content lg:grid-cols-5 lg:gap-y-5">
          <div className="mask mask-hexagon-2 flex h-40 w-40 origin-center transform items-center justify-center bg-primary transition-transform duration-200 hover:mask-decagon hover:scale-125 hover:bg-secondary">
            <FaReact size={110} className="text-accent-content " />
          </div>
          <div className="mask mask-hexagon-2 flex h-40 w-40 origin-center transform items-center justify-center bg-primary transition-transform duration-200 hover:mask-decagon hover:scale-125 hover:bg-secondary">
            <SiNextdotjs size={100} className="text-accent-content " />
          </div>
          <div className="mask mask-hexagon-2 flex h-40 w-40 origin-center transform items-center justify-center bg-primary transition-transform duration-200 hover:mask-decagon hover:scale-125 hover:bg-secondary">
            <SiVite size={90} className="text-accent-content " />
          </div>
          <div className="mask mask-hexagon-2 flex h-40 w-40 origin-center transform items-center justify-center bg-primary transition-transform duration-200 hover:mask-decagon hover:scale-125 hover:bg-secondary">
            <SiTailwindcss size={110} className="text-accent-content " />
          </div>
          <div className="mask mask-hexagon-2 flex h-40 w-40 origin-center transform items-center justify-center bg-primary transition-transform duration-200 hover:mask-decagon hover:scale-125 hover:bg-secondary">
            <SiAmazonaws size={90} className="text-accent-content " />
          </div>

          <div className="mask mask-hexagon-2 flex h-40 w-40 origin-center transform items-center justify-center bg-primary transition-transform duration-200 hover:mask-decagon hover:scale-125 hover:bg-secondary">
            <SiJavascript size={90} className="text-accent-content " />
          </div>
          <div className="mask mask-hexagon-2 flex h-40 w-40 origin-center transform items-center justify-center bg-primary transition-transform duration-200 hover:mask-decagon hover:scale-125 hover:bg-secondary">
            <BiLogoTypescript size={120} className="text-accent-content " />
          </div>
          <div className="mask mask-hexagon-2 flex h-40 w-40 origin-center transform items-center justify-center bg-primary transition-transform duration-200 hover:mask-decagon hover:scale-125 hover:bg-secondary">
            <SiGit size={100} className="text-accent-content " />
          </div>
          <div className="mask mask-hexagon-2 flex h-40 w-40 origin-center transform items-center justify-center bg-primary transition-transform duration-200 hover:mask-decagon hover:scale-125 hover:bg-secondary">
            <SiHtml5 size={90} className="text-accent-content " />
          </div>
          <div className="mask mask-hexagon-2 flex h-40 w-40 origin-center transform items-center justify-center bg-primary transition-transform duration-200 hover:mask-decagon hover:scale-125 hover:bg-secondary">
            <SiCsswizardry size={90} className="text-accent-content " />
          </div>
        </div>
      </div>
    </div>
  );
};
