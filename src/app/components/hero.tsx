"use client";

import { useState } from "react";

export default function Hero() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  function handleMouseEnter() {
    setIsFixed(false);
    setIsAnimating(true);
  }

  function handleAnimationEnd() {
    setIsAnimating(false);
    setIsFixed(true);
  }

  return (
    <section className="flex items-center justify-center h-screen bg-background">
      <div className="relative inline-block">
        {/* Stroke layer (underneath) */}
        <h1
          aria-hidden
          className="text-5xl font-extrabold tracking-tightest-custom text-transparent stroke-text absolute inset-0 z-0 select-none pointer-events-none"
        >
          Elizabeth Pretto-Sotelo
        </h1>

        {/* Gradient layer (on top) */}
        <h1
          className={`text-5xl font-extrabold tracking-tightest-custom text-transparent bg-clip-text relative z-10 shimmer-loop ${
            isAnimating ? "shimmer-animate" : ""
          } ${isFixed ? "shimmer-fixed" : ""}`}
          onMouseEnter={handleMouseEnter}
          onAnimationEnd={handleAnimationEnd}
        >
          Elizabeth Pretto-Sotelo
        </h1>
      </div>
    </section>
  );
}
