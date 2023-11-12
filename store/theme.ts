import { create } from "zustand";
import config from "@/tailwind.config";

const themes = config.daisyui.themes as string[];

interface ThemeState {
  theme: string;
  changeTheme: (newTheme: string) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: themes[0],
  changeTheme: (newTheme: string) => set(() => ({ theme: newTheme })),
}));
