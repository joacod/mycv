import { BiLogoDevTo, BiLogoMediumSquare } from "react-icons/bi";

export const Writing = () => {
  return (
    <section
      id="section-writing"
      className="flex flex-col justify-center bg-primary px-4 pt-14 text-primary-content md:items-center md:px-0 md:pt-5 lg:items-center lg:px-0 lg:pt-5"
    >
      <h1 className="pb-6 text-5xl font-bold">I Write Stuff</h1>
      <p className="lg:w-1/2 lg:text-center">
        I write about Software, Tech, Artificial Intelligence, Mentoring, Career
        Growth, Innovations and Opinions on different topics.
      </p>
      <div className="flex justify-center gap-5 pt-2 lg:gap-20">
        <article>
          <a
            href="https://dev.to/joacod"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Dev.to`}
            className="flex flex-col items-center"
          >
            <BiLogoDevTo
              size={200}
              className="delay-50 transition duration-200 ease-in-out hover:scale-125"
            />
            <p className="text-xl font-semibold">Dev.to</p>
          </a>
        </article>
        <article>
          <a
            href="https://medium.com/@joacod"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Medium`}
            className="flex flex-col items-center"
          >
            <BiLogoMediumSquare
              size={200}
              className="delay-50 transition duration-200 ease-in-out hover:scale-125"
            />
            <p className="text-xl font-semibold">Medium</p>
          </a>
        </article>
      </div>
    </section>
  );
};
