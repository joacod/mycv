import { useTranslations } from "next-intl";
import Link from "next/link";

export const NavLinks = () => {
  const t = useTranslations("Navigation");

  return (
    <>
      <li>
        <Link href={`#section-about`}>{t("about")}</Link>
      </li>
      <li>
        <Link href={`#section-experience`}>{t("experience")}</Link>
      </li>
      <li>
        <Link href={`#section-education`}>{t("education")}</Link>
      </li>
      <li>
        <Link href={`#section-skills`}>{t("skills")}</Link>
      </li>
    </>
  );
};
