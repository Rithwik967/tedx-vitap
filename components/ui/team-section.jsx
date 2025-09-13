'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const members = [
    {
        name: 'Jnana Maanasa Devi Veligotla',
        role: 'Organizer',
        avatar: '/Team/2169818.png',
    },
    {
        name: 'Thummanapelli Vaishnavi',
        role: 'Co-Organizer',
        avatar: '/Team/vaishnavi.jpg',
    },
    {
        name: 'Lalith',
        role: 'Co-Organizer',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        name: 'Lavanya',
        role: 'Curator',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        name: 'Mahitha',
        role: 'Curator',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww',
    },
    {
        name: 'Akshay',
        role: 'Website Manager',
        avatar: '/Team/akshay.png',
    },
    {
        name: 'Rithwik',
        role: 'Executive Producer',
        avatar: '/Team/rithwik.png',
    },
    {
        name: 'Jahnavi',
        role: 'Executive Producer',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        name: 'Sangani Sathwik',
        role: 'Event Manager',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        name: 'Amrutha',
        role: 'Event Manager',
        avatar: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        name: 'Klarika',
        role: 'Event Manager',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww',
    },
    {
        name: 'Sai Sravan',
        role: 'Videography',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        name: 'Designer',
        role: 'Design Team',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww',
    },
    {
        name: 'Marketing Lead',
        role: 'Marketing',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        name: 'Content Creator',
        role: 'Content Team',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        name: 'Social Media',
        role: 'Social Media',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        name: 'Photographer',
        role: 'Photography',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        name: 'Volunteer 1',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        name: 'Volunteer 2',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww',
    },
    {
        name: 'Volunteer 3',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        name: 'Volunteer 4',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww',
    },
    {
        name: 'Volunteer 5',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        name: 'Volunteer 6',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        name: 'Volunteer 7',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        name: 'Volunteer 8',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        name: 'Volunteer 9',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        name: 'Volunteer 10',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww',
    },
];

export default function TeamSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const cardsPerView = 5;
    const maxIndex = Math.max(0, members.length - cardsPerView);

    // Auto-scroll functionality
    useEffect(() => {
        if (!isAutoScrolling) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex >= maxIndex) {
                    return 0; // Reset to beginning
                }
                return prevIndex + 1;
            });
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [isAutoScrolling, maxIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
        setIsAutoScrolling(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        setIsAutoScrolling(false);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoScrolling(false);
    };

  return (
        <section className="py-12 md:py-32 bg-black">
            <div className="mx-auto max-w-6xl px-8 lg:px-0">
                <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl text-white text-center">
                    Meet our <span className="text-ted-red">TEDxVITAP</span> team
                </h2>
                <p className="text-gray-400 text-center mb-12 text-lg">
                    Passionate individuals working together to bring you inspiring ideas
                </p>

                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-2 transition-all duration-200"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= maxIndex}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-2 transition-all duration-200"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Team Cards Container */}
                    <div className="overflow-hidden">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
                        >
                            {members.map((member, index) => (
                                <div key={`member-${member.name}-${index}`} className="flex-shrink-0 w-1/5 px-2">
                                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-ted-red transition-colors duration-300 group">
                                        <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5 mx-auto mb-3">
                                            <Image
                                                className="aspect-square rounded-full object-cover"
                                                src={member.avatar}
                                                alt={member.name}
                                                height="80"
                                                width="80"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <span className="block text-sm font-medium text-white group-hover:text-ted-red transition-colors duration-300">
                                                {member.name}
                                            </span>
                                            <span className="text-gray-400 block text-xs mt-1">
                                                {member.role}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from({ length: maxIndex + 1 }, (_, index) => (
                            <button
                                key={`dot-${index}`}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                    index === currentIndex 
                                        ? 'bg-ted-red w-8' 
                                        : 'bg-gray-600 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Auto-scroll toggle */}
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            {isAutoScrolling ? 'Pause' : 'Resume'} Auto-scroll
                        </button>
                    </div>
                </div>
            </div>
        </section>
  );
}