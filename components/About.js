import React from 'react';
import Image from 'next/image';

// ...existing code...
const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">About us</h2>
          <p className="text-gray-400 leading-relaxed">
            TEDx is a grassroots initiative, created in the spirit of TED’s overall mission to research and discover “ideas worth spreading.” TEDx brings the spirit of TED to local communities around the globe through TEDx events. These events are organized independently by volunteers.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="p-2 border-2 border-red-500 rounded-xl">
            <Image 
              src="/aboutus.jpg" // Make sure this image is in your `public` folder
              alt="TEDx Speaker" 
              width={350} 
              height={250} 
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;