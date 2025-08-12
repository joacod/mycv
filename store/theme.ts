import { themes } from "@/utils/themes";
import { create } from "zustand";

interface ThemeState {
  theme: string;
  themeIndex: number;
  changeTheme: (newTheme: string) => void;
  nextTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: themes[0],
  themeIndex: 0,
  changeTheme: (newTheme: string) => set(() => ({ theme: newTheme })),
  nextTheme: () =>
    set((state) => {
      const newThemeIndex = (state.themeIndex + 1) % themes.length;
      return {
        themeIndex: newThemeIndex,
        theme: themes[newThemeIndex],
      };
    }),
}));
