"use client";

import config from "@/tailwind.config";
import { themeState } from "@/utils/state";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export const ClickMeBtn = ({ texts }: { texts: string[] }) => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useRecoilState(themeState);
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
    setTheme(randomTheme);
    handleTextChange();
  };

  if (!mounted)
    return (
      <button className="btn btn-accent btn-sm hidden lg:inline">
        {clickMeText}
      </button>
    );

  return (
    <>
      <a className="lg:hidden" onClick={toggleTheme}>
        {texts[0]}
      </a>
      <button
        className="btn btn-accent btn-sm hidden w-32 lg:inline"
        onClick={toggleTheme}
      >
        {clickMeText}
      </button>
    </>
  );
};
