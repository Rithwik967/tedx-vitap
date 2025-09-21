"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

export function PreviousSpeakers() {
  const [active, setActive] = useState(null);
  const [activeTab, setActiveTab] = useState('2025');
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

  const currentSpeakers = activeTab === '2025' ? speakers2025Data : previousSpeakersData;

  return (
    <div className="bg-black text-white py-20 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">TEDx Speakers</h2>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-1 flex flex-col sm:flex-row">
            <button
              onClick={() => setActiveTab('2025')}
              className={`px-4 sm:px-6 py-3 rounded-md font-medium transition-all duration-200 text-sm sm:text-base ${
                activeTab === '2025'
                  ? 'bg-red-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              2025 Speakers
            </button>
            <button
              onClick={() => setActiveTab('previous')}
              className={`px-4 sm:px-6 py-3 rounded-md font-medium transition-all duration-200 text-sm sm:text-base ${
                activeTab === 'previous'
                  ? 'bg-red-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Previous Year Speakers
            </button>
          </div>
        </div>
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
        <ul className="max-w-4xl mx-auto w-full flex flex-wrap justify-center gap-4">
            {currentSpeakers.map((card) => (
            <motion.li
                layoutId={`card-${card.title}-${id}`}
                key={card.title}
                onClick={() => setActive(card)}
                className="p-4 flex flex-col bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 rounded-xl cursor-pointer w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] max-w-[20rem]"
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

const CloseIcon = () => {
    return (
      <motion.svg
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.05,
          },
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </motion.svg>
    );
  };

// 2025 Speakers Data
const speakers2025Data = [
  {
    description: "Music Artist & Educator",
    title: "Martand Badoni",
    src: "/Speakers/martand Badoni.jpg",
    ctaText: "Follow on Instagram",
    ctaLink: "https://www.instagram.com/chasingfolksounds/",
    content: () => (
      <div>
        <p>Martand Badoni is a music artist and educator from Uttarakhand whose work bridges the old world and the new. Drawing from the languages he speaks and dreams in—Hindi, English, and Garhwali—he creates songs that carry the soul of folk music while embracing contemporary sounds.</p>
        <p>His debut release &quot;Dekh Bhai&quot;, published in November last year, reflects this unique blend and has struck a chord with audiences, recently crossing 300,000 views on YouTube.</p>
      </div>
    ),
  },
  {
    description: "Cosmetic Gynecologist & Infertility Specialist",
    title: "Dr. Niveditha Kamaraj",
    src: "/Speakers/nivedita kamaraju.jpg",
    ctaText: "Follow on Instagram",
    ctaLink: "https://www.instagram.com/nivedithakamaraj/?hl=en",
    content: () => (
      <div>
        <p>Dr. Niveditha Kamaraj is a leading cosmetic gynecologist, obstetrician, and infertility specialist, currently serving as Consultant and Executive Director at Aakash Fertility Centre & Hospital, Chennai.</p>
        <p>A gold medalist with an MS in Obstetrics & Gynecology from Sri Ramachandra Medical College, she has advanced training in infertility, reproductive medicine, and laparoscopic surgery. With over a decade of experience, she specializes in cosmetic gynecology, IVF, and ART treatments.</p>
        <p>She has presented papers on female sexual health, scar pregnancies, and vaginismus at national and international forums, and actively promotes women&apos;s health awareness through media, workshops, and academic publications.</p>
      </div>
    ),
  },
  {
    description: "Violinist & Indosoul Creator",
    title: "Karthick Iyer",
    src: "/Speakers/karthik iyer.jpg",
    ctaText: "Follow on Instagram",
    ctaLink: "https://www.instagram.com/karthick_iyer/",
    content: () => (
      <div>
        <p>Karthick Iyer explored the world of both Carnatic and Western Violin Techniques to realise how much the two spectrums complement each other in holistically moulding a violinist.</p>
        <p>This learning was pivotal in leading him to develop a sound of his own - Indosoul, one that seeks to dissolve barriers, genres and cultures. He has also worked with artists such as A. R. Rahman, Harris Jayaraj, Susheela Raman and Raghu Dixit.</p>
        <p>A culmination of all this learning & performing over the last 20 yrs is Violin Technique with Karthick Iyer.</p>
      </div>
    ),
  },
  {
    description: "COO at Codedale & Content Creator",
    title: "Dodagatta Nihar",
    src: "/Speakers/nihar.jpg",
    ctaText: "Follow on Instagram",
    ctaLink: "https://www.instagram.com/niihaaarrrr/",
    content: () => (
      <div>
        <p>Dodagatta Nihar is the Chief Operating Officer (COO) at Codedale. He is also an active content creator with a significant following on Instagram (540K) and YouTube (200K).</p>
        <p>His professional journey began by teaching coding to engineering students, and he has since conducted numerous workshops at various colleges. He has also had the honor of being a chief guest at several events, where he&apos;s focused on motivating and educating students.</p>
        <p>He has previously spoken at Josh Talks and has given one TED Talk, making this his second TEDx speaking engagement. He started his career at a very early stage, which has provided him with unique experiences and perspectives.</p>
      </div>
    ),
  },
  {
    description: "Founder of Magsmen Brand Consultants",
    title: "Sandeep N",
    src: "/Speakers/Sandeep N.jpg",
    ctaText: "Follow on LinkedIn",
    ctaLink: "https://www.linkedin.com/in/itsnsandeep/?originalSubdomain=in",
    content: () => (
      <div>
        <p>Sandeep N is the founder of Magsmen Brand Consultants and one of our distinguished speakers for TEDx VITAP 2025. More details about his background and expertise will be shared soon.</p>
      </div>
    ),
  },
  {
    description: "IAS Officer",
    title: "Prashanth Surapati IAS",
    src: "/Speakers/surapati.jpeg",
    ctaText: "Follow on Instagram",
    ctaLink: "https://www.instagram.com/prasanth_surapati_ias/",
    content: () => (
      <div>
        <p>Prashanth Surapati is one of our distinguished speakers for TEDx VITAP 2025. More details about his background and expertise will be shared soon.</p>
      </div>
    ),
  },
  {
    description: "Live Band",
    title: "Taara Live Band",
    src: "/Speakers/taara.jpg",
    ctaText: "Follow on Instagram",
    ctaLink: "https://www.instagram.com/taara_live?igsh=anE5a29oZXA0amd0",
    content: () => (
      <div>
        <p>Taara Live Band is one of our distinguished performers for TEDx VITAP 2025. More details about their background and expertise will be shared soon.</p>
      </div>
    ),
  },
  
];

// Previous Year Speakers Data
const previousSpeakersData = [
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