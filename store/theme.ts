import { themes } from "@/utils/themes";
import { create } from "zustand";

interface ThemeState {
  theme: string;
  themeIndex: number;
  changeTheme: (newTheme: string) => void;
  incrementIndex: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: themes[0],
  themeIndex: 0,
  changeTheme: (newTheme: string) => set(() => ({ theme: newTheme })),
  incrementIndex: () =>
    set((state) => ({
      themeIndex: (state.themeIndex + 1) % themes.length,
    })),
}));
