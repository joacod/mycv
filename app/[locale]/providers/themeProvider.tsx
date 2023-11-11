"use client";

import { themeState } from "@/utils/state";

export const ThemeProvider = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) => {
  const theme = themeState;

  return (
    <html data-theme={theme} lang={locale}>
      {children}
    </html>
  );
};
