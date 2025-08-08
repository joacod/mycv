import { useTranslations } from "next-intl";
import { FaGrinStars, FaExternalLinkAlt } from "react-icons/fa";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";

const ARTICLE_URL =
  "https://dev.to/joacod/from-playing-on-pc-to-building-software-my-journey-into-programming-33j9";
const ARTICLE_COVER_IMAGE =
  "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fndagr5ktu53fg5ql71xs.jpeg";

export const About = () => {
  const t = useTranslations("About");

  return (
    <section id="section-about" className="bg-base-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-4xl font-bold md:text-5xl lg:text-6xl">
          {t("title")}
        </h2>

        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-lg leading-relaxed text-pretty">{t("story1")}</p>
          <p className="text-lg leading-relaxed text-pretty">{t("story2")}</p>
          <p className="text-lg leading-relaxed text-pretty">{t("story3")}</p>
          <p className="text-lg leading-relaxed text-pretty">{t("story4")}</p>
          <p className="text-lg leading-relaxed text-pretty">{t("story5")}</p>
        </div>

        <div className="flex justify-center">
          <div className="mt-8 lg:w-3/5">
            <a
              href={ARTICLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-base-300 bg-base-200/50 hover:border-primary/30 hover:bg-base-200/80 block rounded-lg border p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="md:flex md:items-start md:gap-6">
                <div className="mb-4 flex items-center justify-between md:hidden">
                  <span className="badge badge-primary badge-sm">
                    {t("articleCard.badge")}
                  </span>
                  <FaExternalLinkAlt className="text-base-content/40 group-hover:text-primary h-4 w-4 flex-shrink-0 transition-colors" />
                </div>
                <Image
                  src={ARTICLE_COVER_IMAGE}
                  alt={t("articleCard.title")}
                  width={128}
                  height={96}
                  className="mb-4 h-48 w-full rounded-lg object-cover opacity-90 transition-opacity group-hover:opacity-100 md:mb-0 md:h-24 md:w-32 md:flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="mb-2 hidden items-center gap-2 md:flex">
                    <span className="badge badge-primary badge-sm">
                      {t("articleCard.badge")}
                    </span>
                  </div>
                  <h3 className="group-hover:text-primary mb-2 text-lg font-semibold transition-colors">
                    {t("articleCard.title")}
                  </h3>
                  <p className="text-base-content/70 text-sm">
                    {t("articleCard.description")}
                  </p>
                </div>
                <FaExternalLinkAlt className="text-base-content/40 group-hover:text-primary mt-2 hidden h-4 w-4 flex-shrink-0 transition-colors md:block" />
              </div>
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <SignedOut>
            <SignInButton>
              <button className="btn btn-primary btn-lg">
                {t("signin")} <FaGrinStars size={22} />
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </section>
  );
};
