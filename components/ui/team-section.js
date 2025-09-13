'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

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
    const [showFullTeam, setShowFullTeam] = useState(false);
    const [cardsPerView, setCardsPerView] = useState(5);
    
    // Responsive cards per view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCardsPerView(1);
            } else if (window.innerWidth < 768) {
                setCardsPerView(2);
            } else if (window.innerWidth < 1024) {
                setCardsPerView(3);
            } else if (window.innerWidth < 1280) {
                setCardsPerView(4);
            } else {
                setCardsPerView(5);
            }
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
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
        <>
            <section className="py-12 md:py-24 bg-black relative">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <h2 className="mb-6 text-4xl font-bold md:mb-12 lg:text-5xl text-white text-center">
                        Meet our <span className="text-ted-red">TEDxVITAP</span> team
                    </h2>
                    <p className="text-gray-300 text-center mb-12 text-lg max-w-2xl mx-auto">
                        Passionate individuals working together to bring you inspiring ideas and transformative experiences
                    </p>

                    <div className="relative">
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-ted-red/80 hover:bg-ted-red disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-300 shadow-lg"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>

                        <button
                            onClick={nextSlide}
                            disabled={currentIndex >= maxIndex}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-ted-red/80 hover:bg-ted-red disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-300 shadow-lg"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>

                        {/* Team Cards Container */}
                        <div className="overflow-hidden px-2">
                            <div 
                                className="flex transition-transform duration-700 ease-out"
                                style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
                            >
                                {members.map((member, index) => (
                                    <div key={`member-${member.name}-${index}`} className="flex-shrink-0 px-3" style={{ width: `${100 / cardsPerView}%` }}>
                                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-ted-red transition-all duration-500 group hover:scale-105 hover:shadow-xl hover:shadow-ted-red/10">
                                            <div className="bg-background size-28 rounded-full border-2 border-gray-700 p-1 shadow-lg shadow-black/30 mx-auto mb-4 group-hover:border-ted-red transition-colors duration-500">
                                                <Image
                                                    className="aspect-square rounded-full object-cover"
                                                    src={member.avatar}
                                                    alt={member.name}
                                                    height="112"
                                                    width="112"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <h3 className="block text-lg font-semibold text-white group-hover:text-ted-red transition-colors duration-300 mb-1">
                                                    {member.name}
                                                </h3>
                                                <span className="text-gray-400 block text-sm">
                                                    {member.role}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-10 space-x-2">
                            {Array.from({ length: maxIndex + 1 }, (_, index) => (
                                <button
                                    key={`dot-${index}`}
                                    onClick={() => goToSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'bg-ted-red w-8' 
                                            : 'bg-gray-600 hover:bg-gray-400 w-2'
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Auto-scroll toggle and View Full Team button */}
                        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-4">
                            <button
                                onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-800"
                            >
                                {isAutoScrolling ? 'Pause Auto-scroll' : 'Resume Auto-scroll'}
                            </button>
                            
                            <button
                                onClick={() => setShowFullTeam(true)}
                                className="text-sm font-medium text-white bg-ted-red hover:bg-red-700 transition-colors duration-200 px-6 py-2 rounded-lg"
                            >
                                View Full Team
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Team Modal */}
            {showFullTeam && (
                <div className="fixed inset-0 bg-black/90 z-50 overflow-y-auto">
                    <div className="min-h-screen px-4 py-12">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex justify-between items-center mb-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-white">
                                    Our <span className="text-ted-red">Full Team</span>
                                </h2>
                                <button
                                    onClick={() => setShowFullTeam(false)}
                                    className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
                                >
                                    <X className="w-8 h-8" />
                                </button>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {members.map((member, index) => (
                                    <div key={`full-member-${member.name}-${index}`} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-ted-red transition-all duration-300 group">
                                        <div className="bg-background size-24 rounded-full border-2 border-gray-700 p-1 shadow-lg shadow-black/30 mx-auto mb-4 group-hover:border-ted-red transition-colors duration-300">
                                            <Image
                                                className="aspect-square rounded-full object-cover"
                                                src={member.avatar}
                                                alt={member.name}
                                                height="96"
                                                width="96"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="block text-base font-semibold text-white group-hover:text-ted-red transition-colors duration-300 mb-1">
                                                {member.name}
                                            </h3>
                                            <span className="text-gray-400 block text-sm">
                                                {member.role}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}