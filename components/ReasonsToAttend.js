"use client"; // Required for components with user interaction like dragging
import React, { useState } from "react";
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
  const [clickedCards, setClickedCards] = useState(new Set());
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = (cardId) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setClickedCards(prev => new Set([...prev, cardId]));
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const visibleCards = reasonsData.filter(item => !clickedCards.has(item.id));
  const allCardsClicked = clickedCards.size === reasonsData.length;

  return (
    <DraggableCardContainer
      className="relative h-200 flex min-h-screen w-full items-center justify-center overflow-clip bg-black">
      
      {/* Main Heading for the section */}
      <div className="absolute top-24 md:top-32 left-1/2 -translate-x-1/2 text-center z-30 pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.7)' }}>
          Reasons to Attend 
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-red-500" style={{ textShadow: '1px 1px 8px rgba(0,0,0,0.8)' }}>
          {allCardsClicked 
            ? "Ready to experience TEDxVITAP? Book your tickets now!"
            : "Click on each card to discover why you should attend"
          }
        </p>
      </div>

      {/* "Book your tickets" text behind the cards - becomes more prominent when all cards are clicked */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-0 pointer-events-none transition-all duration-1000 ${
        allCardsClicked ? 'opacity-20 scale-110' : 'opacity-5'
      }`}>
        <p className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white select-none whitespace-nowrap" style={{ lineHeight: '1' }}>
          Book your tickets
        </p>
      </div>

      {/* Call to Action Button - appears when all cards are clicked */}
      {allCardsClicked && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 animate-pulse">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Book Your Tickets Now
          </button>
        </div>
      )}

      {/* Draggable Cards */}
      {visibleCards.map((item) => (
        <DraggableCardBody 
          key={item.id} 
          className={`${item.className} transition-all duration-500 ${
            clickedCards.has(item.id) ? 'opacity-0 scale-0 rotate-180' : 'opacity-100 scale-100 rotate-0'
          }`}
        >
          <div 
            className="p-4 rounded-lg shadow-xl hover:bg-red-500 cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95"
            onClick={() => handleCardClick(item.id)}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={320}
              height={320}
              className="pointer-events-none relative z-10 h-64 w-64 md:h-80 md:w-80 rounded-md object-cover" 
            />
            <h3 className="mt-4 text-center text-xl md:text-2xl font-bold text-neutral-200">
              {item.title}
            </h3>
            {/* Mobile hint */}
            <div className="md:hidden mt-2 text-center text-sm text-red-400 opacity-70">
              Tap to explore
            </div>
          </div>
        </DraggableCardBody>
      ))}

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="flex space-x-2">
          {reasonsData.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index < clickedCards.size 
                  ? 'bg-red-500 scale-110' 
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </DraggableCardContainer>
  );
}

export default ReasonsToAttend;