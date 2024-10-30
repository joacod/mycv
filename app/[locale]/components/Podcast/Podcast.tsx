import { useTranslations } from "next-intl";
import { BiLogoSpotify } from "react-icons/bi";
import { SiAmazonmusic } from "react-icons/si";
import { FaPodcast } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { devInfo } from "@/utils/devInfo";

export const Podcast = () => {
  const t = useTranslations("Podcast");

  return (
    <section
      id="section-podcast"
      className="flex flex-col justify-center bg-primary px-4 pt-14 text-primary-content md:items-center md:px-0 md:pt-8 lg:items-center lg:px-0 lg:pt-20"
    >
      <h1 className="pb-6 text-5xl font-bold">{t("title")}</h1>
      <p className="lg:w-1/2 lg:text-center">{t("description")}</p>
      <div className="flex justify-center gap-4 pt-10 lg:gap-20">
        <article>
          <a
            href={devInfo.youtube}
            target="_blank"
            rel="noopener"
            aria-label={`YouTube Code Quests`}
            className="flex flex-col items-center"
          >
            <FaYoutube size={80} className="lg:hidden" />
            <FaYoutube
              size={200}
              className="delay-50 hidden transition duration-200 ease-in-out hover:scale-125 lg:flex"
            />
          </a>
        </article>
        <article>
          <a
            href={devInfo.spotify}
            target="_blank"
            rel="noopener"
            aria-label={`Spotify Code Quests`}
            className="flex flex-col items-center"
          >
            <BiLogoSpotify size={80} className="lg:hidden" />
            <BiLogoSpotify
              size={200}
              className="delay-50 hidden transition duration-200 ease-in-out hover:scale-125 lg:flex"
            />
          </a>
        </article>
        <article>
          <a
            href={devInfo.applepodcast}
            target="_blank"
            rel="noopener"
            aria-label={`Apple Podcasts Code Quests`}
            className="flex flex-col items-center"
          >
            <FaPodcast size={80} className="lg:hidden" />
            <FaPodcast
              size={200}
              className="delay-50 hidden transition duration-200 ease-in-out hover:scale-125 lg:flex"
            />
          </a>
        </article>
        <article>
          <a
            href={devInfo.amazonmusic}
            target="_blank"
            rel="noopener"
            aria-label={`Amazon Music Code Quests`}
            className="flex flex-col items-center"
          >
            <SiAmazonmusic size={80} className="lg:hidden" />
            <SiAmazonmusic
              size={200}
              className="delay-50 hidden transition duration-200 ease-in-out hover:scale-125 lg:flex"
            />
          </a>
        </article>
      </div>
    </section>
  );
};
