export const SkillWrapperMobile = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="mask mask-hexagon-2 flex h-24 w-24 items-center justify-center bg-primary text-primary-content ">
      {children}
    </div>
  );
};
