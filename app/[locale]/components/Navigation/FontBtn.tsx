"use client";

import { useState } from "react";
import { BsFillClipboard2CheckFill } from "react-icons/bs";

export const FontBtn = ({ title }: { title: string }) => {
  const fonts = ["system-ui", "cursive", "Fira Code", "Tahoma", "Courier New"];
  let [currentFont, setCurrentFont] = useState(fonts[0]);

  const changeFont = () => {
    let newFont = fonts[Math.floor(Math.random() * fonts.length)];
    while (newFont === currentFont) {
      newFont = fonts[Math.floor(Math.random() * fonts.length)]; // Pick a different font
    }
    setCurrentFont(newFont);
    document.documentElement.style.fontFamily = newFont;
  };

  return (
    <h1
      className="btn btn-neutral text-base normal-case lg:text-lg"
      onClick={() => changeFont()}
    >
      <span className="hidden lg:inline">
        <BsFillClipboard2CheckFill size={32} />
      </span>{" "}
      <span>{title}</span>
    </h1>
  );
};
