import { useTranslations } from "next-intl";
import { FaGrinStars, FaHandPointDown } from "react-icons/fa";
import Image from "next/image";
import { SignedOut, SignInButton } from "@clerk/nextjs";

export const About = () => {
  const t = useTranslations("About");

  return (
    <section
      id="section-about"
      className="hero bg-primary from-secondary to-primary text-primary-content z-0 min-h-screen bg-linear-to-b"
    >
      <div className="container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <figure className="animate-flip-up mt-6 lg:hidden">
            <Image
              src="/avatar.webp"
              alt={t("avatarAlt")}
              width={250}
              height={250}
              placeholder="empty"
              className="rounded-full"
            />
          </figure>
          <figure className="animate-flip-up hidden lg:inline lg:w-3/12 lg:self-start">
            <Image
              src="/avatar.webp"
              alt={t("avatarAlt")}
              width={500}
              height={500}
              placeholder="empty"
              className="rounded-full"
            />
          </figure>
          <article className="animate-flip-up lg:w-9/12 lg:pr-20">
            <h1 className="text-5xl font-bold">{t("title")}</h1>
            <p className="pt-6 text-xl font-semibold lg:pr-40 lg:text-2xl">
              {t("description")}
            </p>
            <div className="pt-6 md:flex md:gap-10 lg:flex lg:gap-12">
              <p>{t("role")}</p>
              <p className="pt-4 md:pt-0 lg:pt-0">{t("collaborate")}</p>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-6 lg:mt-10">
              <a className="btn btn-neutral" href="#section-writing">
                {t("getstarted")} <FaHandPointDown size={22} />
              </a>
              <SignedOut>
                <SignInButton>
                  <button className="btn btn-neutral">
                    {t("signin")} <FaGrinStars size={22} />
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
