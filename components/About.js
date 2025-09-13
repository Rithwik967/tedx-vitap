import React from 'react';
import Image from 'next/image';
import SonicWaveformDivider from './ui/sonic-waveform-divider';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            About Us
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        {/* About TEDx Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-black p-8 rounded-2xl  hover:border-red-500 transition-all duration-300">
                <h3 className="text-4xl font-bold mb-6 text-white flex items-center">
                  
                  About TEDx
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  TEDx is a grassroots initiative, created in the spirit of TED&apos;s overall mission to research and discover &apos;ideas worth spreading.&apos; TEDx brings the spirit of TED to local communities around the globe through TEDx events.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  These events are organized independently by volunteers who are passionate about sharing knowledge and inspiring their communities.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="p-2 rounded-2xl">
                <Image 
                  src="/tedx-logo.png"
                  alt="TEDx Speaker" 
                  width={500} 
                  height={500} 
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sonic Waveform Divider Section */}
        <div className="my-16">
          <SonicWaveformDivider />
        </div>

        {/* About TEDxVITAP Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="p-2   rounded-2xl">
                <Image 
                  src="/hero-graphic.png"
                  alt="TEDxVITAP Logo" 
                  width={600} 
                  height={600} 
                  className="rounded-xl"
                />
              </div>
            </div>
            <div>
              <div className="bg-black p-8 rounded-2xl  hover:border-red-500 transition-all duration-300">
                <h3 className="text-4xl font-bold mb-6 text-white flex items-center">
                  
                  About TEDxVITAP
                </h3>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium">
                    Theme: Unfolding Possibilities
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  TEDxVITAP is the official TEDx event at VIT-AP University, bringing together brilliant minds, innovative ideas, and inspiring stories from our campus and beyond.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We are committed to fostering intellectual curiosity, promoting diverse perspectives, and creating a platform where ideas can flourish and inspire positive change in our community.
                </p>
                
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default About;