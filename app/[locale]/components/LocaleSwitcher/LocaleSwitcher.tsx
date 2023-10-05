import { useLocale } from "next-intl";
import Link from "next-intl/link";
import React from "react";

const LocaleSwitcher = () => {
  const locale = useLocale();

  return (
    <>
      <Link href={`en`} className={locale === "en" ? "text-blue-400" : ""}>
        EN
      </Link>
      <Link href={`es`} className={locale === "es" ? "text-blue-400" : ""}>
        ES
      </Link>
    </>
  );
};

export default LocaleSwitcher;
