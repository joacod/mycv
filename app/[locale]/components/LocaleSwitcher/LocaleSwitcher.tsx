import { useLocale, useTranslations } from "next-intl";
import Link from "next-intl/link";
import { IoLanguageOutline } from "react-icons/io5";

const LocaleSwitcher = () => {
  const locale = useLocale();
  const t = useTranslations("LocaleSwitcher");

  return (
    <li>
      <details>
        <summary>
          <span className="hidden lg:inline">
            <IoLanguageOutline size={24} />
          </span>
          <span className="lg:hidden">{t("title")}</span>
        </summary>
        <ul className="z-50 space-y-2 bg-base-100 p-2">
          <li>
            <Link href={`en`} className={locale === "en" ? "active" : ""}>
              {t("en")}
            </Link>
          </li>
          <li>
            <Link href={`es`} className={locale === "es" ? "active" : ""}>
              {t("es")}
            </Link>
          </li>
          <li>
            <Link href={`pt`} className={locale === "pt" ? "active" : ""}>
              {t("pt")}
            </Link>
          </li>
          <li>
            <Link href={`fr`} className={locale === "fr" ? "active" : ""}>
              {t("fr")}
            </Link>
          </li>
          <li>
            <Link href={`de`} className={locale === "de" ? "active" : ""}>
              {t("de")}
            </Link>
          </li>
        </ul>
      </details>
    </li>
  );
};

export default LocaleSwitcher;
