import React from 'react';
import Snowfall from './Snowfall';
import Image from 'next/image';
// ...existing code...

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-center py-20 px-6">
      {/* Snow behind content */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Snowfall count={72} color="#ff2b2b" maxSize={3} minSize={0.6} accumulationStrength={0.5} />
      </div>

      {/* content above the snow */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">Welcome to TEDx VITAP'25</h1>
          <p className="mt-4 text-gray-400">Welcome to the official page of TEDx VITAP. Join us for a journey of innovation, inspiration, and impactful ideas.</p>

          {/* UPDATED: TEDx logo (links to external TEDx page) then Our Events button */}
          <div className="mt-8 flex items-center gap-8">
            <a
              href="https://www.ted.com/about/programs-initiatives/tedx-program"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TEDx program"
              className="inline-flex items-center transform transition-transform hover:scale-105"
            >
              <Image
                src="/tedx-logo.png"         // place your TEDx logo at public/tedx-logo.png
                alt="TEDx"
                width={108}
                height={108}
                className="object-contain"
              />
            </a>

            <a
              href="#events"
              className="inline-block px-8 py-3 border border-red-500 text-red-500 font-semibold rounded-full hover:border-white hover:text-white transition-colors"
            >
              Our Events
            </a>
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
    </section>
  );
};

export default Hero;
// ...existing code...