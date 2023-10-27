import { SkillsLg } from "./SkillsScreens/SkillsLg";
import { SkillsMd } from "./SkillsScreens/SkillsMd";
import { SkillsSm } from "./SkillsScreens/SkillsSm";

export const Skills = () => {
  return (
    <section id="section-skills">
      <SkillsSm />
      <SkillsMd />
      <SkillsLg />
    </section>
  );
};
