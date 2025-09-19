"use client"; // Required for components with user interaction like dragging
import React from "react";
import Image from "next/image"; // 1. Import the Next.js Image component
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

const reasonsData = [
  {
    id: 1,
    title: 'Hidden Opportunities',
    image: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=1470&auto=format&fit=crop',
    className: "absolute bottom-5 left-[30%] md:left-[15%] rotate-[-8deg]",
  },
  {
    id: 2,
    title: 'Breakthrough Networking',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop',
    className: "absolute bottom-10 left-[20%] md:left-[30%] rotate-[5deg]",
  },
  {
    id: 3,
    title: 'Inspiring Performances',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop',
    className: "absolute bottom-5 right-[10%] md:right-[30%] rotate-[10deg]",
  },
  {
    id: 4,
    title: 'Transformative Tales',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1470&auto=format&fit=crop',
    className: "absolute bottom-10 right-[18%] md:right-[15%] rotate-[-3deg]",
  },
];

export function ReasonsToAttend() {
  return (
    <DraggableCardContainer
      className="relative h-200 flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
      
      {/* Main Heading for the section */}
      <div className="absolute top-24 md:top-32 left-1/2 -translate-x-1/2 text-center z-30 pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.7)' }}>
          Reasons to Attend 
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-red-500" style={{ textShadow: '1px 1px 8px rgba(0,0,0,0.8)' }}>
          Step into a world where hidden opportunities unfold and breakthroughs take center stage.
        </p>
      </div>

      {/* "Book your tickets" text behind the cards - DECREASED SIZE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-0 pointer-events-none">
        <p className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white opacity-20 select-none whitespace-nowrap" style={{ lineHeight: '1' }}>
          Book your tickets
        </p>
      </div>

      {/* Draggable Cards */}
      {reasonsData.map((item) => (
        <DraggableCardBody key={item.id} className={item.className}>
          <div className="p-4 rounded-lg shadow-xl hover:bg-red-500/20 transition-colors duration-300 cursor-grab active:cursor-grabbing">
            <Image
              src={item.image}
              alt={item.title}
              width={320}
              height={320}
              className="pointer-events-none relative z-10 h-64 w-64 md:h-80 md:w-80 rounded-md object-cover" 
            />
            <h3
              className="mt-4 text-center text-xl md:text-2xl font-bold text-white">
              {item.title}
            </h3>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}

export default ReasonsToAttend;