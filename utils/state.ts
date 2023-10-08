import config from "@/tailwind.config";
import { atom } from "recoil";

const themes = config.daisyui.themes;

export const themeState = atom({
  key: "themeState",
  default: themes[0],
});
