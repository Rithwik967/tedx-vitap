import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative text-center py-20 px-6">
      {/* Hero content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">Welcome to TEDx VITAP25</h1>
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
                src="/tedx-logo.png"
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
          <div className="w-full max-w-[500px] max-h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/hero-video-unscreen.gif"
              alt="TEDx VITAP Hero Animation"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;