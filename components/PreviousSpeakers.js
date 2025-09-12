"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

export function PreviousSpeakers() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="bg-black text-white py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Previous Year Speakers</h2>
        <AnimatePresence>
            {active && typeof active === "object" && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 h-full w-full z-10"
            />
            )}
        </AnimatePresence>
        <AnimatePresence>
            {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100]">
                <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
                >
                <CloseIcon />
                </motion.button>
                <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
                >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                    <Image
                    width={500}
                    height={320}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                    />
                </motion.div>
                <div>
                    <div className="flex justify-between items-start p-4">
                    <div className="">
                        <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-neutral-200 text-2xl"
                        >
                        {active.title}
                        </motion.h3>
                        <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-400 text-base"
                        >
                        {active.description}
                        </motion.p>
                    </div>
                    <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.ctaLink}
                        target="_blank"
                        className="px-4 py-3 text-sm rounded-full font-bold bg-red-500 text-white"
                    >
                        {active.ctaText}
                    </motion.a>
                    </div>
                    <div className="pt-4 relative px-4">
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-neutral-400 text-sm md:text-base pb-10 flex flex-col items-start gap-4 h-40 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)]"
                    >
                        {typeof active.content === "function" ? active.content() : active.content}
                    </motion.div>
                    </div>
                </div>
                </motion.div>
            </div>
            ) : null}
        </AnimatePresence>
        <ul className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-4">
            {speakersData.map((card) => (
            <motion.li
                layoutId={`card-${card.title}-${id}`}
                key={card.title}
                onClick={() => setActive(card)}
                className="p-4 flex flex-col bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
                <div className="flex gap-4 flex-col w-full">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                    <Image
                    width={300}
                    height={240}
                    src={card.src}
                    alt={card.title}
                    className="h-60 w-full rounded-lg object-cover object-top"
                    />
                </motion.div>
                <div className="flex justify-center items-center flex-col">
                    <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-200 text-center text-base"
                    >
                    {card.title}
                    </motion.h3>
                    <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-400 text-center text-base"
                    >
                    {card.description}
                    </motion.p>
                </div>
                </div>
            </motion.li>
            ))}
        </ul>
    </div>
  );
}

const CloseIcon = () => { /* SVG icon code */ };

// Your Speaker Data
const speakersData = [
  {
    description: "Singer",
    title: "Aaryan Banthia",
    src: "/Speakers/aaryan.jpg",
    ctaText: "Learn More",
    ctaLink: "https://www.ted.com/tedx/events/56718",
    content: () => (
      <p>Born in India on February 12, 1994, Aaryan Banthia is a singer-guitarist, songwriter, and record producer. He has collaborated with Zed Music Company on some of his most recent recordings.</p>
    ),
  },
  {
    description: "Entrepreneur",
    title: "Chandan Perla",
    src: "/Speakers/chandan.jpeg",
    ctaText: "Learn More",
    ctaLink: "https://www.ted.com/tedx/events/56718",
    content: () => (
      <p>Chandan Perla is a vibrant 21-year-old businessman passionate about creating communities and innovation. His path includes backing from WeWork Labs and co-founding Podcast Circle.</p>
    ),
  },
  {
    description: "Businessman",
    title: "Madhan Srinivasan",
    src: "/Speakers/madhan.jpeg",
    ctaText: "Learn More",
    ctaLink: "https://www.ted.com/tedx/events/56718",
    content: () => (
      <p>Dr. Madhan Kumar Srinivasan is a renowned Accenture Prolific Inventor with an astounding 104 patents that have influenced commercially successful goods across the globe.</p>
    ),
  },
  {
    description: "Author",
    title: "Sanjay Lunia",
    src: "/Speakers/sanjay.jpeg",
    ctaText: "Learn More",
    ctaLink: "https://www.ted.com/tedx/events/56718",
    content: () => (
      <p>Sanjay Lunia, recognized as the youngest author and publisher in his field, is a prodigious talent making waves in the literary world with a remarkable knack for storytelling.</p>
    ),
  },
  {
    description: "Film Director",
    title: "Narendra Nath",
    src: "/Speakers/Narendra.jpeg",
    ctaText: "Learn More",
    ctaLink: "https://www.ted.com/tedx/events/56718",
    content: () => (
      <p>Film director and writer Narendra Nath is a visionary who chose to follow his love of storytelling. His first film, &apos;Miss India&apos;, is a testament to his visionary artistic style.</p>
    ),
  },
  {
    description: "Teen Entrepreneur",
    title: "Sagarikka S",
    src: "/Speakers/sagarika.jpeg",
    ctaText: "Learn More",
    ctaLink: "https://www.ted.com/tedx/events/56718",
    content: () => (
      <p>Sagarikka S. is a dynamic entrepreneur and visionary leader, serving as the CEO of BeBindaas, a vibrant startup that she has propelled to the forefront of the startup ecosystem.</p>
    ),
  },
];

export default PreviousSpeakers;