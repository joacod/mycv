import { devInfo } from "@/utils/devInfo";
import { BiLogoDevTo, BiLogoMediumSquare } from "react-icons/bi";

interface WritingContentProps {
  title: string;
  description: string;
  platformDevTo: string;
  platformMedium: string;
}

export function WritingContent({
  title,
  description,
  platformDevTo,
  platformMedium,
}: WritingContentProps) {
  return (
    <div className="flex flex-col justify-center lg:col-span-3">
      <h1 className="pb-6 text-4xl font-bold lg:text-6xl">{title}</h1>
      <p className="mb-8 text-lg leading-relaxed opacity-90 lg:text-xl">
        {description}
      </p>

      <div className="flex justify-center gap-8 lg:gap-12">
        <article>
          <a
            href={devInfo.devto}
            target="_blank"
            rel="noopener"
            aria-label="Dev.to"
            className="group flex flex-col items-center"
          >
            <BiLogoDevTo
              size={120}
              className="transition-all duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="mt-2 text-lg font-semibold transition-opacity">
              {platformDevTo}
            </p>
          </a>
        </article>
        <article>
          <a
            href={devInfo.medium}
            target="_blank"
            rel="noopener"
            aria-label="Medium"
            className="group flex flex-col items-center"
          >
            <BiLogoMediumSquare
              size={120}
              className="transition-all duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="mt-2 text-lg font-semibold transition-opacity">
              {platformMedium}
            </p>
          </a>
        </article>
      </div>
    </div>
  );
}
