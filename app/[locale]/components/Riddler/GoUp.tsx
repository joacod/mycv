import { useTranslations } from "next-intl";
import Link from "next/link";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const GoUp = () => {
  const t = useTranslations("Common");

  return (
    <section className="flex justify-center bg-neutral pb-8 lg:pb-10">
      <Link
        href="#navigation"
        className="delay-50 flex flex-col items-center text-neutral-content transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-125"
      >
        <BsFillArrowUpCircleFill size={50} aria-label="Up arrow Icon" />
        <span className="mt-2">{t("top")}</span>
      </Link>
    </section>
  );
};
