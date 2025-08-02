interface SkillBadgeProps {
  children: React.ReactNode;
  name: string;
}

export const SkillBadge = ({ children, name }: SkillBadgeProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mask mask-hexagon-2 bg-primary hover:bg-accent text-primary-content hover:text-accent-content group hover:mask-decagon flex h-24 w-24 items-center justify-center rounded-2xl shadow-lg transition duration-300 hover:scale-110 hover:duration-700 motion-reduce:transition-none motion-reduce:hover:transform-none">
        <div className="text-5xl">{children}</div>
      </div>
      <span className="mt-2 text-center text-xs font-medium opacity-80 md:text-sm">
        {name}
      </span>
    </div>
  );
};
