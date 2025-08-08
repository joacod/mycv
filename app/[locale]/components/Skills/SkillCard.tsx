import { ReactNode } from "react";
import { SkillBadge } from "./SkillBadge";

interface SkillItem {
  name: string;
  icon: ReactNode;
  category: string;
}

interface SkillCardProps {
  title: string;
  description: string;
  skills: SkillItem[];
  icon?: ReactNode;
}

export const SkillCard = ({
  title,
  description,
  skills,
  icon,
}: SkillCardProps) => {
  return (
    <div className="group border-base-300 from-base-200/60 to-base-200/30 hover:border-primary/40 hover:from-base-200/80 hover:to-base-200/60 hover:shadow-primary/10 relative overflow-hidden rounded-2xl border bg-gradient-to-br p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-xl">
      <div className="from-primary/5 to-accent/5 absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-4">
          {icon && (
            <div className="bg-primary/10 text-primary group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-all duration-300 group-hover:scale-110">
              {icon}
            </div>
          )}
          <h3 className="text-base-content group-hover:text-primary text-2xl font-bold transition-colors duration-300">
            {title}
          </h3>
        </div>

        <p className="text-base-content/80 group-hover:text-base-content/90 mb-8 text-lg leading-relaxed transition-colors duration-300">
          {description}
        </p>

        <div className="grid grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name}>
              {skill.icon}
            </SkillBadge>
          ))}
        </div>
      </div>
    </div>
  );
};
