"use client";

import { BsFillClipboard2CheckFill } from "react-icons/bs";

export const FontBtn = ({ title }: { title: string }) => {
  const fonts = ["system-ui", "cursive", "fantasy", "Fira Code"];
  let currentFont = "system-ui";

  const changeFont = () => {
    let newFont = fonts[Math.floor(Math.random() * fonts.length)];
    while (newFont === currentFont) {
      newFont = fonts[Math.floor(Math.random() * fonts.length)]; // Pick a different font
    }
    currentFont = newFont;
    document.documentElement.style.fontFamily = currentFont;
  };

  return (
    <h1
      className="btn btn-ghost text-base normal-case lg:text-xl"
      onClick={() => changeFont()}
    >
      <span className="hidden lg:inline">
        <BsFillClipboard2CheckFill size={32} />
      </span>{" "}
      <span>{title}</span>
    </h1>
  );
};
