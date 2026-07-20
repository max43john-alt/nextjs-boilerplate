"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const phrases = [
  "> discovering free dev tools...",
  "> analyzing AI services...",
  "> loading privacy resources...",
  "> system ready.",
];

export function useTypingEffect() {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef({ phrase: 0, char: 0, deleting: false });

  const tick = useCallback(() => {
    const { phrase, char, deleting } = indexRef.current;
    const text = phrases[phrase];

    if (!deleting) {
      if (char < text.length) {
        setDisplayed(text.slice(0, char + 1));
        indexRef.current = { phrase, char: char + 1, deleting: false };
      } else {
        indexRef.current = { phrase, char, deleting: true };
      }
      return;
    }

    if (char > 0) {
      setDisplayed(text.slice(0, char - 1));
      indexRef.current = { phrase, char: char - 1, deleting: true };
    } else {
      const nextPhrase = (phrase + 1) % phrases.length;
      indexRef.current = { phrase: nextPhrase, char: 0, deleting: false };
    }
  }, []);

  useEffect(() => {
    const { phrase, char, deleting } = indexRef.current;
    const text = phrases[phrase];
    const delay = deleting ? 20 : char < text.length ? 35 : 1800;

    const id = setTimeout(() => tick(), delay);
    return () => clearTimeout(id);
  }, [displayed, tick]);

  return { displayed };
}
