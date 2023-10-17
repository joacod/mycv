export const SkillWrapper = ({
  children,
  size,
}: {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
}) => {
  return (
    <div
      className={`mask mask-hexagon-2  transform items-center justify-center bg-primary text-primary-content transition-transform duration-200 hover:mask-decagon hover:scale-125 hover:bg-secondary hover:text-secondary-content`}
    >
      {size === "sm" ? (
        <div className="flex h-24 w-24 items-center justify-center">
          {children}
        </div>
      ) : size === "md" ? (
        <div className="flex h-32 w-32 items-center justify-center">
          {children}
        </div>
      ) : (
        <div className="flex h-40 w-40 items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};
