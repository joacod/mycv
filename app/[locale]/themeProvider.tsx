"use client";

export const ThemeProvider = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) => {
  return (
    <html data-theme="retro" lang={locale}>
      {children}
    </html>
  );
};
