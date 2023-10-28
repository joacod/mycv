"use client";

import { RiddlerInfo } from "@/utils/riddler";
import { useState } from "react";
import { RiddlerModal } from "./RiddlerModal";

export const RiddlerClient = ({ info }: { info: RiddlerInfo }) => {
  const phrases = info.question.split(" ");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const currentPhrase = phrases.slice(0, phraseIndex).join(" ") + "?";
  const isFullPhrase = phraseIndex === phrases.length;

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
      className="bg-neutral px-28 pb-12 pt-16 text-center lg:px-80 lg:pb-16 lg:pt-28"
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
      <RiddlerModal info={info} />
    </section>
  );
};
