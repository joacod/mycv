"use client";

import { RiddlerInfo, LocationInfo } from "@/utils/riddler";
import { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";

export const RiddlerClient = ({ info }: { info: RiddlerInfo }) => {
  const phrases = info.question.split(" ");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [parserResult, setParserResult] = useState<UAParser.IResult>();
  const currentPhrase = phrases.slice(0, phraseIndex).join(" ") + "?";
  const isFullPhrase = phraseIndex === phrases.length;
  const [geolocation, setGeolocation] = useState<LocationInfo>();

  useEffect(() => {
    const parser = new UAParser();
    setParserResult(parser.getResult());

    const fetchGeolocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setGeolocation(data);
      } catch (error) {
        // if error occurs, i'm not showing the location
      }
    };

    fetchGeolocation();
  }, []);

  const handleClick = () => {
    if (phraseIndex < phrases.length) {
      setPhraseIndex(phraseIndex + 1);
    } else {
      const modal = document.getElementById(
        "riddler_modal",
      ) as HTMLDialogElement;
      if (modal) {
        modal.showModal();
      }
    }
  };

  return (
    <section
      id="section-riddler"
      className="bg-neutral px-28 py-24 text-center lg:px-80 lg:py-36"
    >
      <button
        className="inline-block cursor-pointer select-none rounded-3xl border-4 bg-secondary p-8 text-4xl font-bold text-secondary-content outline-double transition-colors duration-200 ease-in-out hover:bg-accent hover:text-accent-content md:text-6xl lg:px-20 lg:text-7xl"
        onClick={handleClick}
        aria-label="Riddle phrase button"
      >
        {isFullPhrase ? (
          <span className="animate-pulse">{currentPhrase}</span>
        ) : (
          currentPhrase
        )}
      </button>
      <dialog id="riddler_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-neutral text-neutral-content">
          <div className="text-center" aria-label="Device Information">
            <h3 className="text-7xl font-bold">?</h3>
            <p
              className="mt-2 inline-block animate-bounce"
              aria-label="Down Arrow"
            >
              👇
            </p>

            <dl className="text-center">
              <div>
                <dt className="inline">
                  <strong>{info.device}:</strong>
                </dt>
                <dd className="ml-1 inline">
                  {parserResult?.device.vendor} {parserResult?.device.model}
                </dd>
              </div>
              <div>
                <dt className="inline">
                  <strong>{info.os}:</strong>
                </dt>
                <dd className="ml-1 inline">
                  {parserResult?.os.name} - {info.version}:{" "}
                  {parserResult?.os.version}
                </dd>
              </div>
              <div>
                <dt className="inline">
                  <strong>{info.browser}:</strong>
                </dt>
                <dd className="ml-1 inline">
                  {parserResult?.browser.name} - {info.version}:{" "}
                  {parserResult?.browser.version}
                </dd>
              </div>
            </dl>

            {geolocation && (
              <>
                <p
                  className="mt-2 inline-block animate-bounce"
                  aria-label="Down Arrow"
                >
                  🌎
                </p>
                <dl className="text-center">
                  {geolocation.city && (
                    <div>
                      <dt className="inline">
                        <strong>City:</strong>
                      </dt>
                      <dd className="ml-1 inline">{geolocation.city}</dd>
                    </div>
                  )}
                </dl>
                <dl className="text-center">
                  {geolocation.country_name && (
                    <div>
                      <dt className="inline">
                        <strong>Country:</strong>
                      </dt>
                      <dd className="ml-1 inline">
                        {geolocation.country_name}
                      </dd>
                    </div>
                  )}
                </dl>
              </>
            )}

            <p className="mt-5 text-xs italic">{info.disclaimer}</p>
          </div>
          <div className="modal-action flex flex-col items-center">
            <form method="dialog">
              <button className="btn btn-primary" type="submit">
                {info.close}
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};
