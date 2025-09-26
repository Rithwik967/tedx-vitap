"use client";

import React from 'react';
import Image from 'next/image';

export function Timeline() {
  return (
    <section id="timeline" className="bg-black text-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Timeline of Speakers</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore the journey of our speakers and the evolution of ideas at TEDx VITAP
          </p>
        </div>

        {/* Timeline Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-5xl">
            <Image
              src="/Timeline.png"
              alt="Timeline of TEDx VITAP Speakers"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Additional Content */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            * Timeline shows the progression of speakers and key moments in TEDx VITAP history
          </p>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
