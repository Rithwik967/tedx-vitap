import React from 'react';
import Image from 'next/image';

const Events = () => {
  return (
    <section id="events" className="py-20 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Upcoming events</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <h3 className="text-4xl font-bold text-ted-red">TEDx VITAP</h3>
                <p className="text-lg text-gray-400 mt-2">27TH SEPTEMBER 2025</p>
                <p className="mt-4 text-gray-300">Join us for a day of brilliant speakers, thought-provoking ideas, and mind-opening conversations.</p>
                <a 
                    href="https://events.vitap.ac.in/e/tedxvitap-19fffad5-b29a-49e9-b330-2595a0e06a4c" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-8 px-8 py-3 border border-red-500 text-red-500 font-semibold rounded-full hover:bg-red-500 hover:text-white transition-colors inline-block"
                >
                    Register
                </a>
            </div>
            <div className="flex justify-center">
                 {/* You can create a logo or graphic for your event */}
                 <div className="w-64 h-64 rounded-full bg-red-500 flex items-center justify-center">
                    <h2 className="text-white text-5xl font-bold">TEDx VITAP</h2>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Events;