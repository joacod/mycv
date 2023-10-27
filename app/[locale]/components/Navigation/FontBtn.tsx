"use client";

import { useState } from "react";
import { BsFillClipboard2CheckFill } from "react-icons/bs";

export const FontBtn = ({ title }: { title: string }) => {
  const fonts = ["system-ui", "cursive", "Fira Code", "Tahoma", "Courier New"];
  const [currentFont, setCurrentFont] = useState(fonts[0]);

  const changeFont = () => {
    let newFont = currentFont;
    while (newFont === currentFont) {
      newFont = fonts[Math.floor(Math.random() * fonts.length)]; // Pick a different font
    }
    setCurrentFont(newFont);
    document.documentElement.style.fontFamily = newFont;
  };

  return (
    <button
      className="btn btn-neutral text-base normal-case lg:text-lg"
      onClick={() => changeFont()}
      aria-label={`${title} | Change Font randomly`}
    >
      <span className="hidden lg:inline">
        <BsFillClipboard2CheckFill size={32} />
      </span>{" "}
      <span>{title}</span>
    </button>
  );
};
