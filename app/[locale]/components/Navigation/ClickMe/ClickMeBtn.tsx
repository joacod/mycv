"use client";

import { useEffect, useState } from "react";
import { useThemeStore } from "@/store/theme";
import confetti from "canvas-confetti";

export const ClickMeBtn = ({ texts }: { texts: string[] }) => {
  const [mounted, setMounted] = useState(false);
  const { themeIndex, nextTheme } = useThemeStore();
  let clickMeText = texts[themeIndex];

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    nextTheme();

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
    <button
      className="btn btn-primary btn-sm md:btn-md py-2 md:py-6"
      onClick={toggleTheme}
      aria-label="Click Me Button"
    >
      {clickMeText}
    </button>
  );
};
