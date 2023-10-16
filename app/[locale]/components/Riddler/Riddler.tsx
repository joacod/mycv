"use client";

import React, { useState } from "react";

export const Riddler = () => {
  const phrases = ["What", "do", "I", "know", "about", "you"];
  const [phraseIndex, setPhraseIndex] = useState(0);

  const handleClick = () => {
    if (phraseIndex < phrases.length) {
      setPhraseIndex(phraseIndex + 1);
    } else {
      // open modal
    }
  };

  return (
    <div
      id="section-riddler"
      className="bg-neutral px-28 py-24 text-center text-accent"
    >
      <h1 className="cursor-pointer text-9xl font-bold" onClick={handleClick}>
        {phrases.slice(0, phraseIndex).join(" ")}?
      </h1>
    </div>
  );
};
