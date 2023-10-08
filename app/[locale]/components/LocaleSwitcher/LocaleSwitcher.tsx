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
          <IoLanguageOutline size={24} />
        </summary>
        <ul className="space-y-2 bg-base-100 p-2">
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
        </ul>
      </details>
    </li>
  );
};

export default LocaleSwitcher;
