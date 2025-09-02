import React from 'react';
import Snowfall from './Snowfall'; // client component

// ...existing code...
const Hero = () => {
  return (
    // make the hero a positioned container and allow overflow so accumulation is visible
    <section className="relative overflow-hidden text-center py-20 px-6">
      {/* Snowfall canvas placed absolutely inside hero and behind content */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Snowfall count={72} color="#ff2b2b" maxSize={7} minSize={2} accumulationStrength={0.6} />
      </div>

      {/* content must be stacked above the canvas */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Unfolding possibilities
            </h1>
            <p className="mt-4 text-gray-400">
              Welcome to the official page of TEDx VITAP. Join us for a journey of innovation, inspiration, and impactful ideas.
            </p>
            <button className="mt-8 px-8 py-3 border border-red-500 text-red-500 font-semibold rounded-full hover:border-white hover:text-white transition-colors">
              Our Events
            </button>
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
// ...existing code...