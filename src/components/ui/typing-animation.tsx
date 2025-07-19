"use client";

import { useState, useEffect, type CSSProperties } from "react";

type TypingAnimationProps = {
  sequences: (string | number)[];
  className?: string;
  style?: CSSProperties;
};

export default function TypingAnimation({
  sequences,
  className,
  style,
}: TypingAnimationProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentSequence = sequences[sequenceIndex];

    if (typeof currentSequence === "number") {
      const timeout = setTimeout(() => {
        setSequenceIndex((prev) => (prev + 1) % sequences.length);
      }, currentSequence);
      return () => clearTimeout(timeout);
    }

    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setText(currentSequence.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setSequenceIndex((prev) => (prev + 1) % sequences.length);
        }
      } else {
        if (charIndex < currentSequence.length) {
          setText(currentSequence.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          setTypingSpeed(150);
        } else {
          const nextSequence = sequences[sequenceIndex + 1];
          if (typeof nextSequence === "number") {
            setTimeout(() => setIsDeleting(true), nextSequence);
          } else {
            setIsDeleting(true);
          }
        }
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    sequenceIndex,
    sequences,
    text,
    typingSpeed,
  ]);

  return (
    <span className={className} style={style}>
      {text}
      <span className="animate-ping">|</span>
    </span>
  );
}
