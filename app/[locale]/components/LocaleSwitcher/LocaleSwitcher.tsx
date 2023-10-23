import { useLocale, useTranslations } from "next-intl";
import Link from "next-intl/link";
import { IoLanguageOutline } from "react-icons/io5";
import { languages } from "@/middleware";

const LocaleSwitcher = () => {
  const locale = useLocale();
  const t = useTranslations("LocaleSwitcher");

  return (
    <li className="relative">
      <details>
        <summary>
          <span className="hidden lg:inline">
            <IoLanguageOutline size={24} />
          </span>
          <span className="lg:hidden">{t("title")}</span>
        </summary>
        <ul className="z-50 space-y-2 bg-base-100 p-2">
          {languages.map((lang) => (
            <li key={lang}>
              <Link href={lang} className={locale === lang ? "active" : ""}>
                {t(lang)}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
};

export default LocaleSwitcher;
