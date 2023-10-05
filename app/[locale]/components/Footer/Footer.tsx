import { devName } from "@/utils/devConstants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 p-5 text-center text-sm">
      <p>
        © Copyright 2023-{currentYear} - {devName}
      </p>
    </footer>
  );
};
