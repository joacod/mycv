"use client";

import { useEffect, useState } from "react";
import { useThemeStore } from "@/store/theme";
import confetti from "canvas-confetti";
import { themes } from "@/utils/themes";

export const ClickMeBtn = ({ texts }: { texts: string[] }) => {
  const [mounted, setMounted] = useState(false);
  const theme = useThemeStore((state) => state.theme);
  const changeTheme = useThemeStore((state) => state.changeTheme);
  const [textIndex, setTextIndex] = useState(0);
  const [themeIndex, setThemeIndex] = useState(0);
  let clickMeText = texts[textIndex];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = () => {
    // Increment the current index and reset to 0 when it reaches the end
    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  const toggleTheme = () => {
    const newTheme = themes[(themeIndex + 1) % themes.length];
    changeTheme(newTheme);
    handleChange();

    // Confetti!!
    confetti({
      particleCount: 120,
      spread: 150,
    });
  };

  if (!mounted)
    return (
      <button
        className="btn btn-primary btn-sm md:btn-md py-2 md:py-6"
        aria-label="Click Me Button"
      >
        {clickMeText}
      </button>
    );

  return (
    <>
      <button
        className="btn btn-primary btn-sm md:btn-md py-2 md:py-6"
        onClick={toggleTheme}
        aria-label="Click Me Button"
      >
        {clickMeText}
      </button>
    </>
  );
};
