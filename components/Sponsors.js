import React from 'react';
import Image from 'next/image';

// Add paths to your sponsor logos in the `public` folder
const sponsorLogos = [
  '/sponsors/microsoft.png',
  '/sponsors/google.png',
  '/sponsors/intel.png',
  '/sponsors/amazon.png',
  '/sponsors/accenture.png',
  '/sponsors/deloitte.png',
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Our Sponsors</h2>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
        {sponsorLogos.map((logo, index) => (
          <div key={index} className="grayscale hover:grayscale-0 transition-all brightness-50 hover:brightness-100">
            <Image src={logo} alt={`Sponsor ${index + 1}`} width={130} height={60} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Sponsors;