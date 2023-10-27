import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { IoLanguageOutline } from "react-icons/io5";
import { languages } from "@/middleware";
import Image from "next/image";

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
        <ul className="z-50 w-44 space-y-2 bg-base-100 p-2">
          {languages.map((lang) => (
            <li key={lang}>
              <Link
                href={"/" + lang}
                className={locale === lang ? "active px-2" : "px-2"}
              >
                <Image
                  src={"/flags/" + lang + ".png"}
                  alt={"Language: " + lang}
                  width={24}
                  height={24}
                />{" "}
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
