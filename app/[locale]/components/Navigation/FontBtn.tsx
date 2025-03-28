"use client";

import { useState } from "react";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import confetti from "canvas-confetti";

export const FontBtn = ({ title }: { title: string }) => {
  const fonts = ["system-ui", "Fira Code", "Tahoma", "Courier New"];
  const [currentFont, setCurrentFont] = useState(fonts[0]);

  const changeFont = () => {
    let newFont = currentFont;
    while (newFont === currentFont) {
      newFont = fonts[Math.floor(Math.random() * fonts.length)]; // Pick a different font
    }
    setCurrentFont(newFont);
    document.documentElement.style.fontFamily = newFont;

    // Confetti!!
    const colors = ["#bb0000", "#ffffff"];
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });
  };

  return (
    <button
      className="btn btn-neutral px-2 py-6 text-sm normal-case lg:px-4 lg:text-lg"
      onClick={() => changeFont()}
      aria-label={`${title} | Change Font randomly`}
    >
      <span className="inline">
        <BsFillClipboard2CheckFill size={32} />
      </span>{" "}
      <span>{title}</span>
    </button>
  );
};
