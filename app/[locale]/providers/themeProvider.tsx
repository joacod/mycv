"use client";

import { useThemeStore } from "@/store/theme";

export const ThemeProvider = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <html data-theme={theme} lang={locale}>
      {children}
    </html>
  );
};
