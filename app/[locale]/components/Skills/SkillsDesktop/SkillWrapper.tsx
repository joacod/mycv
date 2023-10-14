export const SkillWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mask mask-hexagon-2 flex h-40 w-40 origin-center transform items-center justify-center bg-primary text-primary-content transition-transform duration-200 hover:mask-decagon hover:scale-125 hover:bg-secondary hover:text-secondary-content">
      {children}
    </div>
  );
};
