import { ExperienceDesktop } from "./ExperienceDesktop/ExperienceDesktop";
import { ExperienceMobile } from "./ExperienceMobile/ExperienceMobile";

export const Experience = () => {
  return (
    <div
      id="section-experience"
      className="bg-primary text-primary-content lg:bg-gradient-to-b lg:from-primary lg:to-secondary"
    >
      <ExperienceMobile />
      <ExperienceDesktop />
    </div>
  );
};
