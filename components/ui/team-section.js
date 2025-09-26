'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const members = [
    // Faculty Coordinators
    {
        name: 'Dr. Sudha Ellison Mathe',
        role: 'Faculty Coordinator',
        avatar: '/sudha-elson.jpg',
    },
    {
        name: 'Dr. Aby Abraham',
        role: 'Faculty Coordinator',
        avatar: '/aby.jpg',
    },
    
    // Leadership Team
    {
        name: 'V.J.Maanasa Devi',
        role: 'Lead Organizer (Licensee)',
        avatar: '/TEAM CORE/Maanasa.jpg',
    },
    {
        name: 'Thummanapelli Vaishnavi',
        role: 'Co-Organizer',
        avatar: '/TEAM CORE/vaishnavi.jpg',
    },
    {
        name: 'R.V.Laleeth Sai',
        role: 'Co-Organizer',
        avatar: '/TEAM CORE/Laleeth_Photo.jpg',
    },
    {
        name: 'Lavanya Manne',
        role: 'Curator',
        avatar: '/TEAM CORE/SURYA LAVANYA MANNE.jpg',
    },
    {
        name: 'Inaparthy Sri Sai Mahita',
        role: 'Curator',
        avatar: '/TEAM CORE/Mahita.jpg',
    },
    
    // Executive Team
    {
        name: 'Rithwik Sthambamkadi',
        role: 'Executive Producer',
        avatar: '/TEAM CORE/rithwik.png',
    },
    {
        name: 'Nallagatla Jahnavi',
        role: 'Executive Producer',
        avatar: '/TEAM CORE/N Jahnavi.jpeg',
    },
    {
        name: 'Sangani Sathwik',
        role: 'Event Manager',
        avatar: '/TEAM CORE/SANGANI SATHWIK.jpg',
    },
    {
        name: 'Amrutha Suggula',
        role: 'Event Manager',
        avatar: '/TEAM CORE/SUGGULA AMRUTHA.jpg',
    },
    {
        name: 'Vallabh S Ghantasala',
        role: 'Event Manager',
        avatar: '/TEAM CORE/VALLABH S GHANTASALA.jpg',
    },
    {
        name: 'Klarika Cherukuri',
        role: 'Event Manager',
        avatar: '/TEAM CORE/CHERUKURI KLARIKA.jpg',
    },
    {
        name: 'Manchimsetti Vyshnavi',
        role: 'Budget Manager',
        avatar: '/TEAM CORE/MANCHIMSETTI VYSHNAVI.jpg',
    },
    
    // Creative Team
    {
        name: 'Nehthan Abhishek',
        role: 'Designer',
        avatar: '/TEAM CORE/NEHTHAN ABHISHEK.jpeg',
    },
    {
        name: 'Vishnu',
        role: 'Designer',
        avatar: '/TEAM CORE/VISHNU VARDHAN SETTIPALLI.jpg',
    },
    {
        name: 'Dharmika Sai Pavuluri',
        role: 'Designer',
        avatar: '/TEAM CORE/Dharmika.jpg',
    },
    {
        name: 'Sai Sravan Tanguturi',
        role: 'Video and Production Lead',
        avatar: '/TEAM CORE/SAI SRAVAN.jpg',
    },
    {
        name: 'K.N.B. Navaneeth Kumar',
        role: 'Video and Production Lead',
        avatar: '/TEAM CORE/NAVANEETH KUMAR.jpg',
    },
    {
        name: 'Neha Sreedhar',
        role: 'Stage Decorations & Resource Management',
        avatar: '/TEAM CORE/NEHA SREEDHAR.jpeg',
    },
    {
        name: 'Dheeraj',
        role: 'Stage Decorations & Resource Management',
        avatar: '/TEAM CORE/dheeraj.jpeg',
    },
    {
        name: 'Somireddy Gnanapreetham Reddy',
        role: 'Stage Decorations & Resource Management',
        avatar: '/TEAM CORE/preetham.jpeg',
    },
    
    // Communications & Marketing Team
    {
        name: 'Uthra Balakrishna',
        role: 'Director of Communications',
        avatar: '/TEAM CORE/UTHRA BALAKRISHNA.jpg',
    },
    {
        name: 'Jayanth Manikanta',
        role: 'Director of Editorial',
        avatar: '/TEAM CORE/JAYANTH MANIKANTA.jpg',
    },
    {
        name: 'Jayanth Baddila',
        role: 'Director of Editorial',
        avatar: '/TEAM CORE/BADDILA JAYANTH.jpg',
    },
    {
        name: 'Satwik K',
        role: 'Director of Editorial',
        avatar: '/TEAM CORE/k-satwik.jpg',
    },
    {
        name: 'Raviteja Kondabathula',
        role: 'Director of Social Media',
        avatar: '/TEAM CORE/raviteja.jpg',
    },
    {
        name: 'Krishna Nand Jha',
        role: 'Director of Marketing',
        avatar: '/TEAM CORE/KRISHNA JHA.jpg',
    },
    
    // Technical Team
    {
        name: 'Veligotla Yashasvi Koushik',
        role: 'Website Manager',
        avatar: '/TEAM CORE/koushik.jpeg',
    },
    {
        name: 'Allenki Akshay',
        role: 'Website Manager',
        avatar: '/TEAM CORE/akshay.png',
    },
    
    // Registration & Guest Care Team
    {
        name: 'Shveni Reddy Gobbur',
        role: 'Registrations (Tickets)',
        avatar: '/TEAM CORE/G SHVENI REDDY.jpg',
    },
    {
        name: 'Sreeja Joshi',
        role: 'Registrations (Tickets)',
        avatar: '/TEAM CORE/SREEJA JOSHI.jpg',
    },
    {
        name: 'Chejarla Shanmukha Keerthana',
        role: 'Guest Care',
        avatar: '/TEAM CORE/CH.Shanmukha keerthana.jpg',
    },
    {
        name: 'Tejaswi Cherukumalli',
        role: 'Guest Care',
        avatar: '/TEAM CORE/CHERUKUMALLI TEJASWI.jpg',
    },
    {
        name: 'Tulasidhar',
        role: 'Guest Care',
        avatar: '/TEAM CORE/tulasidhar.jpg',
    },
];

export default function TeamSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
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
        }, 5000); // Change every 5 seconds for more relaxed viewing

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
                        Meet our <span className="text-red-500">TEDxVITAP</span> team
                    </h2>
                    <p className="text-red-500 text-center mb-12 text-lg max-w-2xl mx-auto">
                        Passionate individuals working together to bring you inspiring ideas and transformative experiences
                    </p>

                    <div className="relative">
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-red-500/80 hover:bg-red-500 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-500 ease-out shadow-lg hover:shadow-xl hover:scale-110"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>

                        <button
                            onClick={nextSlide}
                            disabled={currentIndex >= maxIndex}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-red-500/80 hover:bg-red-500 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-500 ease-out shadow-lg hover:shadow-xl hover:scale-110"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>

                        {/* Team Cards Container */}
                        <div 
                            className="overflow-hidden px-2"
                            onMouseEnter={() => setIsAutoScrolling(false)}
                            onMouseLeave={() => setIsAutoScrolling(true)}
                        >
                            <div 
                                className="flex"
                                style={{ 
                                    transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                                    transition: 'transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)',
                                    willChange: 'transform',
                                    backfaceVisibility: 'hidden',
                                    perspective: '1000px'
                                }}
                            >
                                {members.map((member, index) => (
                                    <div key={`member-${member.name}-${index}`} className="flex-shrink-0 px-3" style={{ width: `${100 / cardsPerView}%` }}>
                                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-500 transition-all duration-700 ease-out group hover:shadow-xl hover:shadow-red-500/10 h-80 flex flex-col relative">
                                            <div className="bg-background size-28 rounded-full border-2 border-gray-700 p-1 shadow-lg shadow-black/30 mx-auto mb-4 group-hover:border-red-500 transition-colors duration-500 flex-shrink-0">
                                                <Image
                                                    className="aspect-square rounded-full object-cover"
                                                    src={member.avatar}
                                                    alt={member.name}
                                                    height="112"
                                                    width="112"
                                                    loading="lazy"
                                                    onLoad={() => {
                                                        console.log(`Successfully loaded image: ${member.avatar}`);
                                                    }}
                                                    onError={(e) => {
                                                        console.error(`Failed to load image: ${member.avatar}`, e);
                                                        e.target.src = '/placeholder-avatar.png'; // Fallback image
                                                    }}
                                                />
                                            </div>
                                            <div className="text-center flex-1 flex flex-col justify-center">
                                                <h3 className="block text-lg font-semibold text-white group-hover:text-red-500 transition-colors duration-300 mb-2 line-clamp-2">
                                                    {member.name}
                                                </h3>
                                                <span className="text-gray-400 block text-sm line-clamp-3 leading-relaxed">
                                                    {member.role}
                                                </span>
                                            </div>
                                            {/* Hover overlay for subtle scale effect without affecting layout */}
                                            <div className="absolute inset-0 rounded-xl bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
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
                                    className={`h-2 rounded-full transition-all duration-500 ease-out ${
                                        index === currentIndex 
                                            ? 'bg-red-500 w-8 shadow-lg shadow-red-500/30' 
                                            : 'bg-gray-600 hover:bg-gray-400 w-2 hover:w-4'
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
                            
                            <a
                                href="/team"
                                className="text-sm font-medium text-white bg-red-500 hover:bg-red-700 transition-colors duration-200 px-6 py-2 rounded-lg inline-block"
                            >
                                View Full Team
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}