"use client";

import config from "@/tailwind.config";
import { themeState } from "@/utils/state";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export const ClickMe = ({ text }: { text: string }) => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useRecoilState(themeState);
  const themes = config.daisyui.themes;

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  if (!mounted) return null;

  return (
    <>
      <a className="lg:hidden" onClick={toggleTheme}>
        {text}
      </a>
      <button className="btn hidden lg:inline" onClick={toggleTheme}>
        {text}
      </button>
    </>
  );
};
