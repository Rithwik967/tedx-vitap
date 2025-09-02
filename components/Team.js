import React from 'react';
import Image from 'next/image';

// ...existing code...
const teamMembers = [
  { name: 'Jnana Maanasa Devi Veligotla', role: 'Organizer', image: '/Team/2169818.png' },
  { name: ' Thummanapelli Vaishnavi', role: 'Co-Organizer', image: '/Team/vaishnavi.jpg' },
  { name: 'Lalith', role: 'Co-Organizer' },
  { name: 'Lavanya', role: 'Curators' },
  { name: 'Mahitha', role: 'Curators' },
  { name: 'Akshay', role: 'Website Manager', image: '/Team/akshay.png' },
  { name: 'Rithwik', role: 'Executive Producer', image: '/Team/rithwik.png' },
  { name: 'Jahnavi', role: 'Executive Producer' },
  { name: 'Sangani Sathwik', role: 'Event Manager' },
  { name: 'Amrutha', role: 'Event manager' },
  { name: 'Klarika', role: 'Event manager' },
  { name: 'Sravan', role: 'Videography' },
];


// ...existing code...
const Team = () => {
  return (
    <section id="team" className="py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:z-10"
            >
              {member.image ? (
                <div className="w-32 h-32 mb-4 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                <div className="w-32 h-32 bg-gray-800 border-2 border-gray-700 rounded-lg mb-4" />
              )}
              <h4 className="font-bold text-white transition-transform duration-300 group-hover:scale-105">
                {member.name}
              </h4>
              <p className="text-red-500 transition-transform duration-300 group-hover:scale-105">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team;