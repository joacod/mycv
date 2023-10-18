"use client";

import { useEffect } from "react";

export const EasterEgg = () => {
  useEffect(() => {
    console.clear();
    console.log(
      "%cYou take the %c🔵 blue pill%c... the story ends, you wake up in your bed and believe whatever you want to believe.",
      "background-color: white; color: green; font-size: 15px",
      "background-color: white; color: blue; font-size: 15px",
      "background-color: white; color: green; font-size: 15px",
    );
    console.log(
      "%cYou take the %c🔴 red pill%c... you stay in Wonderland, and I show you how deep the rabbit hole goes.",
      "background-color: white; color: green; font-size: 15px",
      "background-color: white; color: red; font-size: 15px",
      "background-color: white; color: green; font-size: 15px",
    );
    console.log(
      "%cFollow the white rabbit 🐇😎",
      "background-color: black; color: white; font-size: 20px; font-weight: bold",
    );
  }, []);

  return <></>;
};
