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
      className="bg-primary text-primary-content pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          {/* Mobile: Stacked layout */}
          <div className="flex flex-col gap-8 lg:hidden">
            <div>
              <h1 className="pb-4 text-4xl font-bold">{t("title")}</h1>
              <p className="text-lg">{t("description")}</p>
            </div>
            <div className="grid grid-cols-2 justify-items-center gap-6">
              <article>
                <a
                  href={devInfo.youtube}
                  target="_blank"
                  rel="noopener"
                  aria-label={`YouTube Code Quests`}
                  className="flex flex-col items-center"
                >
                  <FaYoutube
                    size={60}
                    className="transition duration-200 ease-in-out hover:scale-110"
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
                  <BiLogoSpotify
                    size={60}
                    className="transition duration-200 ease-in-out hover:scale-110"
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
                  <FaPodcast
                    size={60}
                    className="transition duration-200 ease-in-out hover:scale-110"
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
                  <SiAmazonmusic
                    size={60}
                    className="transition duration-200 ease-in-out hover:scale-110"
                  />
                </a>
              </article>
            </div>
          </div>

          {/* Desktop: Two-column layout (60/40) */}
          <div
            className="hidden lg:grid lg:items-center lg:gap-12"
            style={{ gridTemplateColumns: "3fr 2fr" }}
          >
            {/* Left column: Title and description (60%) */}
            <div className="space-y-6">
              <h1 className="text-5xl leading-tight font-bold">{t("title")}</h1>
              <p className="text-xl leading-relaxed">{t("description")}</p>
            </div>

            {/* Right column: Logo grid (2x2) (40%) */}
            <div className="grid grid-cols-2 justify-items-center gap-6">
              <article>
                <a
                  href={devInfo.youtube}
                  target="_blank"
                  rel="noopener"
                  aria-label={`YouTube Code Quests`}
                  className="flex flex-col items-center"
                >
                  <FaYoutube
                    size={100}
                    className="transition delay-50 duration-200 ease-in-out hover:scale-125"
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
                  <BiLogoSpotify
                    size={100}
                    className="transition delay-50 duration-200 ease-in-out hover:scale-125"
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
                  <FaPodcast
                    size={100}
                    className="transition delay-50 duration-200 ease-in-out hover:scale-125"
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
                  <SiAmazonmusic
                    size={100}
                    className="transition delay-50 duration-200 ease-in-out hover:scale-125"
                  />
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
