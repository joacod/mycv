import { SkillsDesktop } from "./SkillsDesktop/SkillsDesktop";
import { SkillsMobile } from "./SkillsMobile/SkillsMobile";

export const Skills = () => {
  return (
    <div id="section-skills">
      <SkillsMobile />
      <SkillsDesktop />
    </div>
  );
};
