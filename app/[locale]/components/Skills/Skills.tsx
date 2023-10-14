import { SkillsLg } from "./SkillsScreens/SkillsLg";
import { SkillsMd } from "./SkillsScreens/SkillsMd";
import { SkillsSm } from "./SkillsScreens/SkillsSm";

export const Skills = () => {
  return (
    <div id="section-skills">
      <SkillsSm />
      <SkillsMd />
      <SkillsLg />
    </div>
  );
};
