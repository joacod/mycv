"use client";

import React, { useState } from "react";

export const Riddler = () => {
  const phrases = ["What", "do", "I", "know", "about", "you"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const { geolocation, language, userAgent } = navigator;

  const handleClick = () => {
    if (phraseIndex < phrases.length) {
      setPhraseIndex(phraseIndex + 1);
    } else {
      (
        document.getElementById("riddler_modal") as HTMLDialogElement
      )?.showModal();
    }
  };

  const currentPhrase = phrases.slice(0, phraseIndex).join(" ") + "?";
  const isFullPhrase = phraseIndex === phrases.length;

  return (
    <>
      <div id="section-riddler" className="bg-neutral px-28 py-24 text-center">
        <h1
          className="inline-block cursor-pointer rounded-3xl bg-secondary p-8 text-9xl font-bold text-secondary-content outline-double transition-colors duration-200 ease-in-out hover:bg-accent hover:text-accent-content"
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
              <h3 className="mb-5 text-3xl font-bold ">?</h3>

              <ul>
                <li>
                  <p>{userAgent}</p>
                </li>
                <li>
                  <p>{language}</p>
                </li>
              </ul>
              <p className="text-xs italic">
                This page doesn&apos;t store or keep any of this information.
              </p>
            </div>
            <div className="modal-action flex flex-col items-center">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-primary">Close</button>
              </form>
            </div>
          </>
        </div>
      </dialog>
    </>
  );
};
