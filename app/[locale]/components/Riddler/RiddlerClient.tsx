"use client";

import { RiddlerInfo } from "@/utils/riddler";
import { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";

export const RiddlerClient = ({ info }: { info: RiddlerInfo }) => {
  const phrases = info.question.split(" ");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [parserResult, setParserResult] = useState<UAParser.IResult>();
  const currentPhrase = phrases.slice(0, phraseIndex).join(" ") + "?";
  const isFullPhrase = phraseIndex === phrases.length;

  useEffect(() => {
    const parser = new UAParser();
    setParserResult(parser.getResult());
  }, []);

  const handleClick = () => {
    if (phraseIndex < phrases.length) {
      setPhraseIndex(phraseIndex + 1);
    } else {
      (
        document.getElementById("riddler_modal") as HTMLDialogElement
      )?.showModal();
    }
  };

  return (
    <>
      <div
        id="section-riddler"
        className="bg-neutral px-28 py-24 text-center lg:px-80 lg:py-36"
      >
        <h1
          className="inline-block cursor-pointer select-none rounded-3xl border-4 bg-secondary p-8 text-4xl font-bold text-secondary-content outline-double transition-colors duration-200 ease-in-out hover:bg-accent hover:text-accent-content md:text-6xl lg:px-20 lg:text-7xl"
          onClick={handleClick}
        >
          {isFullPhrase ? (
            <span className="animate-pulse">{currentPhrase}</span>
          ) : (
            currentPhrase
          )}
        </h1>
      </div>
      <dialog id="riddler_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-neutral text-neutral-content">
          <>
            <div id="modal-content" className="space-y-4 text-center">
              <h3 className="text-7xl font-bold">?</h3>
              <p className="inline-block animate-bounce">👇</p>

              <ul>
                <li>
                  <strong>{info.device}: </strong>
                  {parserResult?.device.vendor} {parserResult?.device.model}
                </li>
                <li>
                  <strong>{info.os}: </strong>
                  {parserResult?.os.name} - {info.version}:{" "}
                  {parserResult?.os.version}
                </li>
                <li>
                  <strong>{info.browser}: </strong>
                  {parserResult?.browser.name} - {info.version}:{" "}
                  {parserResult?.browser.version}
                </li>
              </ul>
              <p className="text-xs italic">{info.disclaimer}</p>
            </div>
            <div className="modal-action flex flex-col items-center">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-primary">{info.close}</button>
              </form>
            </div>
          </>
        </div>
      </dialog>
    </>
  );
};