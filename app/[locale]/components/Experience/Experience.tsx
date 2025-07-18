import { ExperienceDesktop } from "./ExperienceDesktop/ExperienceDesktop";
import { ExperienceMobile } from "./ExperienceMobile/ExperienceMobile";

export const Experience = () => {
  return (
    <section
      id="section-experience"
      className="bg-primary from-primary to-secondary text-primary-content bg-linear-to-b"
    >
      <ExperienceMobile />
      <ExperienceDesktop />
    </section>
  );
};
