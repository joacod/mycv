export const SkillWrapper = ({
  children,
  size,
}: {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
}) => {
  const sizeNumber = size === "sm" ? 24 : size === "md" ? 32 : 40;

  return (
    <div
      className={`mask mask-hexagon-2 flex h-${sizeNumber} w-${sizeNumber} origin-center transform items-center justify-center bg-primary text-primary-content transition-transform duration-200 hover:mask-decagon hover:scale-125 hover:bg-secondary hover:text-secondary-content`}
    >
      {children}
    </div>
  );
};
