export const SkillWrapper = ({
  children,
  size,
}: {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
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
    <div
      className={
        "mask mask-hexagon-2 transform bg-primary text-primary-content transition duration-300 hover:mask-decagon hover:scale-125 hover:bg-secondary hover:text-secondary-content hover:duration-700"
      }
    >
      <div className={containerClasses}>{children}</div>
    </div>
  );
};
