import { devName } from "../../utils/devConstants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white p-4 shadow-md">
      <p>© Copyright 2023-{currentYear}</p> - {devName}
    </footer>
  );
};
