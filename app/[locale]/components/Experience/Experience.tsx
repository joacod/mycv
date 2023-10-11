import { ExperienceDesktop } from "./ExperienceDesktop/ExperienceDesktop";
import { ExperienceMobile } from "./ExperienceMobile/ExperienceMobile";

export const Experience = () => {
  return (
    <div
      id="section-experience"
      className="bg-gradient-to-b from-primary to-secondary text-primary-content"
    >
      {/* <ExperienceMobile /> */}
      <ExperienceDesktop />
    </div>
  );
};
