import { ExperienceDesktop } from "./ExperienceDesktop/ExperienceDesktop";
import { ExperienceMobile } from "./ExperienceMobile/ExperienceMobile";

export const Experience = () => {
  return (
    <section
      id="section-experience"
      className="bg-primary bg-linear-to-b from-primary to-secondary text-primary-content"
    >
      <ExperienceMobile />
      <ExperienceDesktop />
    </section>
  );
};
