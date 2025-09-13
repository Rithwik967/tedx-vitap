'use client';

import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import ShaderBackground from './ShaderBackground';
import Image from 'next/image';

gsap.registerPlugin(SplitText);

const Hero = () => {
  const rootRef = useRef(null);
  const bgRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const ctaRef = useRef(null);

  const scrollToEvents = (e) => {
    e.preventDefault();
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useGSAP(
    () => {
      const ctas = ctaRef.current ? Array.from(ctaRef.current.children) : [];

      const h1Split = new SplitText(h1Ref.current, { type: "lines" });
      const pSplit = new SplitText(pRef.current, { type: "lines" });

      gsap.set(bgRef.current, { filter: "blur(28px)" });
      gsap.set(h1Split.lines, {
        opacity: 0,
        y: 24,
        filter: "blur(8px)",
      });
      gsap.set(pSplit.lines, {
        opacity: 0,
        y: 16,
        filter: "blur(6px)",
      });
      if (ctas.length) gsap.set(ctas, { opacity: 0, y: 16 });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.to(bgRef.current, { filter: "blur(0px)", duration: 1.2 }, 0)
        .to(
          h1Split.lines,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.1,
          },
          0.3,
        )
        .to(
          pSplit.lines,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.6,
            stagger: 0.08,
          },
          "-=0.3",
        )
        .to(ctas, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, "-=0.2");

      return () => {
        h1Split.revert();
        pSplit.revert();
      };
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="relative min-h-screen w-full overflow-hidden bg-red-500 text-white">
      {/* Shader background */}
      <div className="absolute inset-0" ref={bgRef}>
        <div className="h-full w-full bg-gradient-to-br from-red-600 via-red-500 to-red-700">
          <ShaderBackground className="h-full w-full" />
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_80%_at_50%_50%,_transparent_40%,_black_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center w-full">
          <div className="text-left">
            <h1 
              ref={h1Ref}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Welcome to TEDx VITAP25
            </h1>
            <p 
              ref={pRef}
              className="mt-4 text-gray-400"
            >
              Welcome to the official page of TEDx VITAP. Join us for a journey of innovation, inspiration, and impactful ideas.
            </p>

            {/* UPDATED: TEDx logo (links to external TEDx page) then Our Events button */}
            <div ref={ctaRef} className="mt-8 flex items-center gap-8">
              <a
                href="https://www.ted.com/about/programs-initiatives/tedx-program"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TEDx program"
                className="inline-flex items-center transform transition-transform hover:scale-105"
              >
                <Image
                  src="/tedx-logo.png"
                  alt="TEDx"
                  width={108}
                  height={108}
                  className="object-contain"
                />
              </a>

              <button
                onClick={scrollToEvents}
                className="inline-block px-8 py-3 border border-red-500 text-red-500 font-semibold rounded-full hover:border-white hover:text-white transition-colors cursor-pointer"
              >
                Our Events
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-[500px] max-h-[500px]">
              <video
                src="/hero-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                aria-label="Hero video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;