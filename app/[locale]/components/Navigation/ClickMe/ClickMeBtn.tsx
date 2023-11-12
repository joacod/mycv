"use client";

import config from "@/tailwind.config";
import { useEffect, useState } from "react";
import { useThemeStore } from "@/store/theme";
import confetti from "canvas-confetti";

export const ClickMeBtn = ({ texts }: { texts: string[] }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, changeTheme } = useThemeStore();
  const [textIndex, setTextIndex] = useState(0);
  const themes = config.daisyui.themes;
  let clickMeText = texts[textIndex];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTextChange = () => {
    // Increment the current index and reset to 0 when it reaches the end
    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const toggleTheme = () => {
    const availableThemes = themes.filter((t: string) => t !== theme);
    const randomIndex = Math.floor(Math.random() * availableThemes.length);
    const randomTheme = availableThemes[randomIndex];
    changeTheme(randomTheme);
    handleTextChange();

    // Confetti!!
    confetti({
      particleCount: 120,
      spread: 150,
    });
  };

  if (!mounted)
    return (
      <button
        className="btn btn-accent btn-sm hidden lg:inline"
        aria-label="Click Me Button"
      >
        {clickMeText}
      </button>
    );

  return (
    <>
      <a
        className="lg:hidden"
        onClick={toggleTheme}
        role="button"
        tabIndex={0}
        aria-label="Click Me Button"
      >
        {texts[0]}
      </a>
      <button
        className="btn btn-accent btn-sm hidden w-32 lg:inline"
        onClick={toggleTheme}
        aria-label="Click Me Button"
      >
        {clickMeText}
      </button>
    </>
  );
};
