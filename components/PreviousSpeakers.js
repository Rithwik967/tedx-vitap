import React from 'react';
import Image from 'next/image';

// We store the speaker data in an array of objects for easy management.
const speakers = [
  {
    name: 'Aaryan Banthia',
    role: 'Singer',
    bio: 'Born in India on February 12, 1994, Aaryan Banthia is a singer-guitarist, songwriter, record producer, and current resident of Mumbai. He has collaborated with Zed Music Company on some of his most recent recordings. In October of 2019, he dropped his debut single, "Yaadein".',
    imageUrl: '/Speakers/aaryan.jpg', // Placeholder image
  },
  {
    name: 'Chandan Perla',
    role: 'Entrepreneur',
    bio: 'Chandan Perla is a vibrant 21-year-old businessman who is passionate about creating communities and innovation. His entrepreneurial path includes investment backing from esteemed organisations such as Lancify and WeWork Labs, as well as co-founding Podcast Circle and being a founding team member of Bluelearn.in.',
    imageUrl: '/Speakers/chandan.jpeg',
  },
  {
    name: 'Madhan Srinivasan',
    role: 'Businessman',
    bio: 'Dr. Madhan Kumar Srinivasan, a renowned Accenture Prolific Inventor and esteemed IIM-Calcutta graduate acknowledged for his exceptional contributions to technology and entrepreneurship. He has revolutionised innovation globally with his incredible portfolio that includes five profitable ventures and an astounding 104 patents.',
    imageUrl: '/Speakers/madhan.jpeg', // Placeholder image
  },
  {
    name: 'Mr Sanjay Lunia',
    role: 'Author',
    bio: 'Sanjay Lunia, recognized as the youngest author and publisher in his field, is a prodigious talent making waves in the literary world. With a remarkable knack for storytelling and a pioneering spirit in the realm of publishing, Sanjay has captivated audiences with his literary creations and entrepreneurial endeavors.',
    imageUrl: '/Speakers/sanjay.jpeg', // Placeholder image
  },
  {
    name: 'Narendra Nath',
    role: 'Film Director',
    bio: "Film director and writer Narendra Nath is a visionary who chose to follow his love of storytelling through cinema instead of following traditional professional pathways. 'Miss India,' the filmmaker Narendra Nath's first film, is a testament to his visionary artistic style and dedication to superb narrative.",
    imageUrl: '/Speakers/Narendra.jpeg', // Placeholder image
  },
  {
    name: 'Sagarikka S',
    role: 'Teen Entrepreneur',
    bio: 'Sagarikka S. is a dynamic entrepreneur and visionary leader, serving as the CEO of BeBindaas, a vibrant startup headquartered in Chennai, India. With a passion for innovation and a relentless drive for success, Sagarikka has propelled BeBindaas to the forefront of the startup ecosystem.',
    imageUrl: '/Speakers/sagarika.jpeg', // Placeholder image
  },
];

const PreviousSpeakers = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Previous Year Speakers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-black p-6 rounded-lg border border-gray-800 flex flex-col hover:border-red-500 shadow-red-500 ">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-ted-red">
                  <Image
                    src={speaker.imageUrl}
                    alt={`Photo of ${speaker.name}`}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                  <p className="text-red-500">{speaker.role}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {speaker.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousSpeakers;