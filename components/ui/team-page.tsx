'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const members = [
    {
        name: 'Jnana Maanasa Devi Veligotla',
        role: 'Organizer',
        avatar: '/Team/2169818.png',
        link: '#',
    },
    {
        name: 'Thummanapelli Vaishnavi',
        role: 'Co-Organizer',
        avatar: '/Team/vaishnavi.jpg',
        link: '#',
    },
    {
        name: 'Lalith',
        role: 'Co-Organizer',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        link: '#',
    },
    {
        name: 'Lavanya',
        role: 'Curator',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        link: '#',
    },
    {
        name: 'Mahitha',
        role: 'Curator',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww',
        link: '#',
    },
    {
        name: 'Akshay',
        role: 'Website Manager',
        avatar: '/Team/akshay.png',
        link: '#',
    },
    {
        name: 'Rithwik',
        role: 'Executive Producer',
        avatar: '/Team/rithwik.png',
        link: '#',
    },
    {
        name: 'Jahnavi',
        role: 'Executive Producer',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        link: '#',
    },
    {
        name: 'Sangani Sathwik',
        role: 'Event Manager',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        link: '#',
    },
    {
        name: 'Amrutha',
        role: 'Event Manager',
        avatar: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        link: '#',
    },
    {
        name: 'Klarika',
        role: 'Event Manager',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww',
        link: '#',
    },
    {
        name: 'Sai Sravan',
        role: 'Videography',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        link: '#',
    },
    {
        name: 'Designer',
        role: 'Design Team',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww',
        link: '#',
    },
    {
        name: 'Marketing Lead',
        role: 'Marketing',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        link: '#',
    },
    {
        name: 'Content Creator',
        role: 'Content Team',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        link: '#',
    },
    {
        name: 'Social Media',
        role: 'Social Media',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        link: '#',
    },
    {
        name: 'Photographer',
        role: 'Photography',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        link: '#',
    },
    {
        name: 'Volunteer 1',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        link: '#',
    },
    {
        name: 'Volunteer 2',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww',
        link: '#',
    },
    {
        name: 'Volunteer 3',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        link: '#',
    },
    {
        name: 'Volunteer 4',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww',
        link: '#',
    },
    {
        name: 'Volunteer 5',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        link: '#',
    },
    {
        name: 'Volunteer 6',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        link: '#',
    },
    {
        name: 'Volunteer 7',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        link: '#',
    },
    {
        name: 'Volunteer 8',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        link: '#',
    },
    {
        name: 'Volunteer 9',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        link: '#',
    },
    {
        name: 'Volunteer 10',
        role: 'Volunteer',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww',
        link: '#',
    },
];

// Group members by their roles
const leadershipMembers = members.filter(member => 
    member.role === 'Organizer' || member.role === 'Co-Organizer' || member.role === 'Curator'
);

const managementMembers = members.filter(member => 
    member.role === 'Executive Producer' || member.role === 'Event Manager' || member.role === 'Website Manager'
);

const creativeMembers = members.filter(member => 
    member.role === 'Videography' || member.role === 'Design Team' || member.role === 'Photography'
);

const marketingMembers = members.filter(member => 
    member.role === 'Marketing' || member.role === 'Content Team' || member.role === 'Social Media'
);

const volunteerMembers = members.filter(member => 
    member.role === 'Volunteer'
);

export default function TeamPage() {
    return (
        <section className="bg-gray-50 py-16 md:py-32 dark:bg-black">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-2/5">
                        <h2 className="text-3xl font-bold sm:text-4xl text-white">Our <span className="text-red-500">dream team</span></h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p className="text-gray-300">Passionate individuals working together to bring you inspiring ideas and transformative experiences at TEDx VITAP.</p>
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

                {/* Volunteers Section */}
                <div className="mt-12 md:mt-24">
                    <h3 className="text-2xl font-bold text-white mb-8">Volunteers</h3>
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {volunteerMembers.map((member, index) => (
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
