import { create } from "zustand";
import config from "@/tailwind.config";

const themes = config.daisyui.themes as string[];

interface ThemeState {
  theme: string;
  changeTheme: (theme: string) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: themes[0],
  changeTheme: (theme: string) => set(() => ({ theme })),
}));
