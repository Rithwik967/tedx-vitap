'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const members = [
    // Faculty Coordinators
    {
        name: 'Dr. Sudha Ellison Mathe',
        role: 'Faculty Coordinator',
        avatar: '/sudha-elson.jpg',
        link: '#',
    },
    {
        name: 'Dr. Aby Abraham',
        role: 'Faculty Coordinator',
        avatar: '/aby.jpg',
        link: '#',
    },
    
    // Leadership Team
    {
        name: 'V.J.Maanasa Devi',
        role: 'Lead Organizer (Licensee)',
        avatar: '/TEAM CORE/Maanasa.jpg',
        link: '#',
    },
    {
        name: 'Thummanapelli Vaishnavi',
        role: 'Co-Organizer',
        avatar: '/TEAM CORE/vaishnavi.jpg',
        link: '#',
    },
    {
        name: 'R.V.Laleeth Sai',
        role: 'Co-Organizer',
        avatar: '/TEAM CORE/Laleeth_Photo.jpg',
        
        link: '#',
    },
    {
        name: 'Lavanya Manne',
        role: 'Curator',
        avatar: '/TEAM CORE/SURYA LAVANYA MANNE.jpg',
        link: '#',
    },
    {
        name: 'Inaparthy Sri Sai Mahita',
        role: 'Curator',
        avatar: '/TEAM CORE/Mahita.jpg',
        link: '#',
    },
    
    // Executive Team
    {
        name: 'Rithwik Sthambamkadi',
        role: 'Executive Producer',
        avatar: '/TEAM CORE/rithwik.png',
        link: '#',
    },
    {
        name: 'Nallagatla Jahnavi',
        role: 'Executive Producer',
        avatar: '/TEAM CORE/N Jahnavi.jpeg',
        link: '#',
    },
    {
        name: 'Sangani Sathwik',
        role: 'Event Manager',
        avatar: '/TEAM CORE/SANGANI SATHWIK.jpg',
        link: '#',
    },
    {
        name: 'Amrutha Suggula',
        role: 'Event Manager',
        avatar: '/TEAM CORE/SUGGULA AMRUTHA.jpg',
        link: '#',
    },
    {
        name: 'Vallabh S Ghantasala',
        role: 'Event Manager',
        avatar: '/TEAM CORE/VALLABH S GHANTASALA.jpg',
        link: '#',
    },
    {
        name: 'Klarika Cherukuri',
        role: 'Event Manager',
        avatar: '/TEAM CORE/CHERUKURI KLARIKA.jpg',
        link: '#',
    },
    {
        name: 'Manchimsetti Vyshnavi',
        role: 'Budget Manager',
        avatar: '/TEAM CORE/MANCHIMSETTI VYSHNAVI.jpg',
        link: '#',
    },
    
    // Creative Team
    {
        name: 'Nehthan Abhishek',
        role: 'Designer',
        avatar: '/TEAM CORE/NEHTHAN ABHISHEK.jpeg',
        link: '#',
    },
    {
        name: 'Vishnu',
        role: 'Designer',
        avatar: '/TEAM CORE/vishnu-test.jpg',
        link: '#',
    },
    {
        name: 'Dharmika Sai Pavuluri',
        role: 'Designer',
        avatar: '/TEAM CORE/Dharmika.jpg',
        link: '#',
    },
    {
        name: 'Sai Sravan Tanguturi',
        role: 'Video and Production Lead',
        avatar: '/TEAM CORE/SAI SRAVAN.jpg',
        link: '#',
    },
    {
        name: 'K.N.B. Navaneeth Kumar',
        role: 'Video and Production Lead',
        avatar: '/TEAM CORE/NAVANEETH KUMAR.jpg',
        link: '#',
    },
    {
        name: 'Neha Sreedhar',
        role: 'Stage Decorations & Resource Management',
        avatar: '/TEAM CORE/NEHA SREEDHAR.jpeg',
        link: '#',
    },
    {
        name: 'Dheeraj',
        role: 'Stage Decorations & Resource Management',
        avatar: '/TEAM CORE/dheeraj.jpeg',
        link: '#',
    },
    {
        name: 'Somireddy Gnanapreetham Reddy',
        role: 'Stage Decorations & Resource Management',
        avatar: '/TEAM CORE/preetham.jpeg',
        link: '#',
    },
    
    // Communications & Marketing Team
    {
        name: 'Uthra Balakrishna',
        role: 'Director of Communications',
        avatar: '/TEAM CORE/UTHRA BALAKRISHNA.jpg',
        link: '#',
    },
    {
        name: 'Jayanth Manikanta',
        role: 'Director of Editorial',
        avatar: '/TEAM CORE/JAYANTH MANIKANTA.jpg',
        link: '#',
    },
    {
        name: 'Jayanth Baddila',
        role: 'Director of Editorial',
        avatar: '/TEAM CORE/BADDILA JAYANTH.jpg',
        link: '#',
    },
    {
        name: 'Satwik K',
        role: 'Director of Editorial',
        avatar: '/TEAM CORE/k-satwik.jpg',
        link: '#',
    },
    {
        name: 'Raviteja Kondabathula',
        role: 'Director of Social Media',
        avatar: '/TEAM CORE/raviteja.jpg',
        link: '#',
    },
    {
        name: 'Krishna Nand Jha',
        role: 'Director of Marketing',
        avatar: '/TEAM CORE/KRISHNA JHA.jpg',
        link: '#',
    },
    
    // Technical Team
    {
        name: 'Veligotla Yashasvi Koushik',
        role: 'Website Manager',
        avatar: '/TEAM CORE/koushik.jpeg',
        link: '#',
    },
    {
        name: 'Allenki Akshay',
        role: 'Website Manager',
        avatar: '/TEAM CORE/akshay.png',
        link: '#',
    },
    
    // Registration & Guest Care Team
    {
        name: 'Shveni Reddy Gobbur',
        role: 'Registrations (Tickets)',
        avatar: '/TEAM CORE/G SHVENI REDDY.jpg',
        link: '#',
    },
    {
        name: 'Sreeja Joshi',
        role: 'Registrations (Tickets)',
        avatar: '/TEAM CORE/SREEJA JOSHI.jpg',
        link: '#',
    },
    {
        name: 'Chejarla Shanmukha Keerthana',
        role: 'Guest Care',
        avatar: '/TEAM CORE/CH.Shanmukha keerthana.jpg',
        link: '#',
    },
    {
        name: 'Tejaswi Cherukumalli',
        role: 'Guest Care',
        avatar: '/TEAM CORE/CHERUKUMALLI TEJASWI.jpg',
        link: '#',
    },
    {
        name: 'Tulasidhar Reddy',
        role: 'Guest Care',
        avatar: '/TEAM CORE/tulasidhar.jpg',
        link: '#',
    },
];

// Group members by their roles
const facultyMembers = members.filter(member => 
    member.role === 'Faculty Coordinator'
);

const leadershipMembers = members.filter(member => 
    member.role === 'Lead Organizer (Licensee)' || member.role === 'Co-Organizer' || member.role === 'Curator'
);

const managementMembers = members.filter(member => 
    member.role === 'Executive Producer' || member.role === 'Event Manager' || member.role === 'Budget Manager'
);

const creativeMembers = members.filter(member => 
    member.role === 'Designer' || member.role === 'Video and Production Lead' || member.role === 'Stage Decorations & Resource Management'
);

const marketingMembers = members.filter(member => 
    member.role === 'Director of Communications' || member.role === 'Director of Editorial' || member.role === 'Director of Social Media' || member.role === 'Director of Marketing'
);

const technicalMembers = members.filter(member => 
    member.role === 'Website Manager'
);

const operationsMembers = members.filter(member => 
    member.role === 'Registrations (Tickets)' || member.role === 'Guest Care'
);

export default function TeamPage() {
    return (
        <section className="bg-black py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-2/5">
                        <h2 className="text-3xl font-bold sm:text-4xl text-white">Our <span className="text-red-500">dream team</span></h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p className="text-gray-300">Passionate individuals working together to bring you inspiring ideas and transformative experiences at TEDx VITAP.</p>
                    </div>
                </div>
                
                {/* Faculty Coordinators Section */}
                <div className="mt-12 md:mt-24">
                    <h3 className="text-2xl font-bold text-white mb-8">Faculty Coordinators</h3>
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {facultyMembers.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <Image 
                                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" 
                                    src={member.avatar} 
                                    alt="team member" 
                                    width="826" 
                                    height="1239" 
                                />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider text-white">{member.name}</h3>
                                        <span className="text-xs text-gray-400">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-gray-400">{member.role}</span>
                                        <Link href={member.link} className="group-hover:text-red-500 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100 text-gray-400">
                                            {' '}
                                            Linktree
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Leadership Section */}
                <div className="mt-12 md:mt-24">
                    <h3 className="text-2xl font-bold text-white mb-8">Leadership</h3>
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {leadershipMembers.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <Image 
                                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" 
                                    src={member.avatar} 
                                    alt="team member" 
                                    width="826" 
                                    height="1239" 
                                />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider text-white">{member.name}</h3>
                                        <span className="text-xs text-gray-400">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-gray-400">{member.role}</span>
                                        <Link href={member.link} className="group-hover:text-red-500 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100 text-gray-400">
                                            {' '}
                                            Linktree
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Management Section */}
                <div className="mt-12 md:mt-24">
                    <h3 className="text-2xl font-bold text-white mb-8">Management</h3>
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {managementMembers.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <Image 
                                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" 
                                    src={member.avatar} 
                                    alt="team member" 
                                    width="826" 
                                    height="1239" 
                                />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider text-white">{member.name}</h3>
                                        <span className="text-xs text-gray-400">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-gray-400">{member.role}</span>
                                        <Link href={member.link} className="group-hover:text-red-500 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100 text-gray-400">
                                            {' '}
                                            Linktree
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Creative Section */}
                <div className="mt-12 md:mt-24">
                    <h3 className="text-2xl font-bold text-white mb-8">Creative Team</h3>
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {creativeMembers.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <Image 
                                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" 
                                    src={member.avatar} 
                                    alt="team member" 
                                    width="826" 
                                    height="1239" 
                                />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider text-white">{member.name}</h3>
                                        <span className="text-xs text-gray-400">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-gray-400">{member.role}</span>
                                        <Link href={member.link} className="group-hover:text-red-500 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100 text-gray-400">
                                            {' '}
                                            Linktree
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Marketing Section */}
                <div className="mt-12 md:mt-24">
                    <h3 className="text-2xl font-bold text-white mb-8">Marketing & Content</h3>
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {marketingMembers.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <Image 
                                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" 
                                    src={member.avatar} 
                                    alt="team member" 
                                    width="826" 
                                    height="1239" 
                                />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider text-white">{member.name}</h3>
                                        <span className="text-xs text-gray-400">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-gray-400">{member.role}</span>
                                        <Link href={member.link} className="group-hover:text-red-500 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100 text-gray-400">
                                            {' '}
                                            Linktree
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Section */}
                <div className="mt-12 md:mt-24">
                    <h3 className="text-2xl font-bold text-white mb-8">Technical Team</h3>
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {technicalMembers.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <Image 
                                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" 
                                    src={member.avatar} 
                                    alt="team member" 
                                    width="826" 
                                    height="1239" 
                                />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider text-white">{member.name}</h3>
                                        <span className="text-xs text-gray-400">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-gray-400">{member.role}</span>
                                        <Link href={member.link} className="group-hover:text-red-500 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100 text-gray-400">
                                            {' '}
                                            Linktree
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Operations Section */}
                <div className="mt-12 md:mt-24">
                    <h3 className="text-2xl font-bold text-white mb-8">Operations & Guest Care</h3>
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {operationsMembers.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <Image 
                                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" 
                                    src={member.avatar} 
                                    alt="team member" 
                                    width="826" 
                                    height="1239" 
                                />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider text-white">{member.name}</h3>
                                        <span className="text-xs text-gray-400">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-gray-400">{member.role}</span>
                                        <Link href={member.link} className="group-hover:text-red-500 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100 text-gray-400">
                                            {' '}
                                            Linktree
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

