import { useTranslations } from "next-intl";
import Link from "next/link";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const GoUp = () => {
  const t = useTranslations("Common");

  return (
    <section className="bg-neutral flex justify-center pb-8 lg:pb-10">
      <Link
        href="#navigation"
        className="text-neutral-content flex flex-col items-center transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-125"
      >
        <BsFillArrowUpCircleFill size={50} aria-label="Up arrow Icon" />
        <span className="mt-2">{t("top")}</span>
      </Link>
    </section>
  );
};
