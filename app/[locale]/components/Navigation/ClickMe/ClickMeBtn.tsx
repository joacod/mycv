"use client";

import { useEffect, useState } from "react";
import { useThemeStore } from "@/store/theme";
import confetti from "canvas-confetti";
import { themes } from "@/utils/themes";

export const ClickMeBtn = ({ texts }: { texts: string[] }) => {
  const [mounted, setMounted] = useState(false);
  const { themeIndex, changeTheme, incrementIndex } = useThemeStore();
  let clickMeText = texts[themeIndex];

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    incrementIndex();
    const newTheme = themes[(themeIndex + 1) % themes.length];
    changeTheme(newTheme);

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
