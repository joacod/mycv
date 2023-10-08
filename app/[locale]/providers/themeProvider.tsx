"use client";

import { themeState } from "@/utils/state";
import { useRecoilValue } from "recoil";

export const ThemeProvider = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) => {
  const theme = useRecoilValue(themeState);

  return (
    <html data-theme={theme} lang={locale}>
      <body>{children}</body>
    </html>
  );
};
