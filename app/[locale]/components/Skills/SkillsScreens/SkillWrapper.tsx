export const SkillWrapper = ({
  children,
  size,
  name,
}: {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
  name: string;
}) => {
  let containerClasses = "flex";
  let containerClassesEnd = " items-center justify-center";

  // Concatenated following TailiwindCSS classes order
  switch (size) {
    case "sm":
      containerClasses += " h-24 w-24" + containerClassesEnd;
      break;
    case "md":
      containerClasses += " h-32 w-32" + containerClassesEnd;
      break;
    case "lg":
      containerClasses += " h-40 w-40" + containerClassesEnd;
      break;
    default:
      containerClasses += " h-32 w-32" + containerClassesEnd;
  }

  return (
    <div className="tooltip tooltip-bottom" data-tip={name}>
      <div
        className={
          "mask mask-hexagon-2 bg-primary text-primary-content transition duration-300 hover:mask-decagon hover:scale-125 hover:bg-secondary hover:text-secondary-content hover:duration-700 motion-reduce:transition-none motion-reduce:hover:transform-none"
        }
      >
        <div className={containerClasses}>{children}</div>
      </div>
    </div>
  );
};
