"use client";

import { RiddlerInfo, LocationInfo } from "@/utils/riddler";
import { useState } from "react";
import { RiddlerModal } from "./RiddlerModal";

export const RiddlerClient = ({ info }: { info: RiddlerInfo }) => {
  const phrases = info.question.split(" ");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const currentPhrase = phrases.slice(0, phraseIndex).join(" ") + "?";
  const isFullPhrase = phraseIndex === phrases.length;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [geolocation, setGeolocation] = useState<LocationInfo | null>(null);

  const fetchGeolocation = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      setGeolocation(data);
    } catch (error) {
      // if error occurs, i'm not showing the location
    }
  };

  const handleClick = () => {
    if (phraseIndex < phrases.length) {
      setPhraseIndex(phraseIndex + 1);

      // Fetch geolocation data when user clicks the third time
      if (phraseIndex + 1 === 3) {
        fetchGeolocation();
      }
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="section-riddler"
      className="bg-neutral px-28 pt-16 pb-12 text-center lg:px-80 lg:pt-28 lg:pb-16"
    >
      <button
        className="bg-secondary text-secondary-content hover:bg-accent hover:text-accent-content inline-block cursor-pointer rounded-3xl border-4 p-8 text-4xl font-bold transition-colors duration-200 ease-in-out outline-double select-none md:text-6xl lg:px-20 lg:text-7xl"
        onClick={handleClick}
        aria-label="Riddle phrase button"
      >
        {isFullPhrase ? (
          <span className="animate-pulse">{currentPhrase}</span>
        ) : (
          currentPhrase
        )}
      </button>
      <RiddlerModal
        info={info}
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
        geolocation={geolocation}
      />
    </section>
  );
};
