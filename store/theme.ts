import { themes } from "@/utils/themes";
import { create } from "zustand";

interface ThemeState {
  theme: string;
  changeTheme: (newTheme: string) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: themes[0],
  changeTheme: (newTheme: string) => set(() => ({ theme: newTheme })),
}));
