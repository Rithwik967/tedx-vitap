'use client';

import React, { useRef, useState } from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import ShaderBackground from './ShaderBackground';
import Image from 'next/image';
import { GradientButton } from './ui/gradient-button';

gsap.registerPlugin(SplitText);

const Hero = () => {
  const rootRef = useRef(null);
  const bgRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const ctaRef = useRef(null);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [open, setOpen] = useState(false);

  const scrollToEvents = (e) => {
    e.preventDefault();
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  useGSAP(
    () => {
      const ctas = ctaRef.current ? Array.from(ctaRef.current.children) : [];
      const navLinks = navLinksRef.current ? Array.from(navLinksRef.current.children) : [];

      const h1Split = new SplitText(h1Ref.current, { type: "lines" });
      const pSplit = new SplitText(pRef.current, { type: "lines" });

      // Set initial states
      gsap.set(bgRef.current, { filter: "blur(28px)" });
      gsap.set(navbarRef.current, { y: -100, opacity: 0 });
      gsap.set(logoRef.current, { scale: 0.8, opacity: 0 });
      gsap.set(navLinks, { opacity: 0, y: -20 });
      gsap.set(h1Split.lines, {
        opacity: 0,
        y: 24,
        filter: "blur(8px)",
      });
      gsap.set(pSplit.lines, {
        opacity: 0,
        y: 16,
        filter: "blur(6px)",
      });
      if (ctas.length) gsap.set(ctas, { opacity: 0, y: 16 });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      
      // Animate navbar first
      tl.to(navbarRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0)
        .to(logoRef.current, { scale: 1, opacity: 1, duration: 0.6 }, 0.2)
        .to(navLinks, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, 0.4)
        // Then animate background
        .to(bgRef.current, { filter: "blur(0px)", duration: 1.2 }, 0.5)
        // Then animate content
        .to(
          h1Split.lines,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.1,
          },
          0.8,
        )
        .to(
          pSplit.lines,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.6,
            stagger: 0.08,
          },
          "-=0.3",
        )
        .to(ctas, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, "-=0.2");

      return () => {
        h1Split.revert();
        pSplit.revert();
      };
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="relative min-h-screen w-full overflow-hidden bg-red-500 text-white">
      {/* Navbar */}
      <nav ref={navbarRef} className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image
            ref={logoRef}
            src="/logo-white.png"
            alt="TEDx VITAP"
            width={160}
            height={60}
          />
        </div>

        {/* Desktop links */}
        <div ref={navLinksRef} className="hidden md:flex gap-6 items-center">
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-white transition-all hover:text-red-500 hover:font-bold">About us</a>
          <a href="/team" className="text-white transition-all hover:text-red-500 hover:font-bold">Our Team</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-white transition-all hover:text-red-500 hover:font-bold">Contact Us</a>
          <a 
            href="https://events.vitap.ac.in/e/tedxvitap-19fffad5-b29a-49e9-b330-2595a0e06a4c" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <GradientButton className="min-w-[120px] px-6 py-2 text-sm rounded-full">
              Register
            </GradientButton>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-500 focus:outline-none"
        >
          {open ? (
            // close icon
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile menu */}
        {open && (
          <div ref={mobileMenuRef} className="md:hidden absolute right-6 top-full mt-3 w-52 bg-black border border-gray-800 rounded-lg p-4 shadow-xl z-50">
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="block text-white py-2 px-2 rounded hover:text-red-500 hover:font-bold transition-all">About us</a>
            <a href="/team" className="block text-white py-2 px-2 rounded hover:text-red-500 hover:font-bold transition-all">Our Team</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="block text-white py-2 px-2 rounded hover:text-red-500 hover:font-bold transition-all">Contact Us</a>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <a 
                href="https://events.vitap.ac.in/e/tedxvitap-19fffad5-b29a-49e9-b330-2595a0e06a4c" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <GradientButton className="w-full min-w-[100px] px-4 py-2 text-sm rounded-full">
                  Register
                </GradientButton>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Shader background */}
      <div className="absolute inset-0" ref={bgRef}>
        <div className="h-full w-full bg-gradient-to-br from-red-600 via-red-500 to-red-700">
          <ShaderBackground className="h-full w-full" />
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_80%_at_50%_50%,_transparent_40%,_black_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center w-full">
          <div className="text-left">
            <h1 
              ref={h1Ref}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Welcome to TEDx VITAP25
            </h1>
            <p 
              ref={pRef}
              className="mt-4 text-gray-400"
            >
              Welcome to the official page of TEDx VITAP. Join us for a journey of innovation, inspiration, and impactful ideas.
            </p>

            {/* UPDATED: TEDx logo (links to external TEDx page) then Our Events button */}
            <div ref={ctaRef} className="mt-8 flex items-center gap-8">
              <a
                href="https://www.ted.com/about/programs-initiatives/tedx-program"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TEDx program"
                className="inline-flex items-center transform transition-transform hover:scale-105"
              >
                <Image
                  src="/tedx-logo.png"
                  alt="TEDx"
                  width={108}
                  height={108}
                  className="object-contain"
                />
              </a>

              <button
                onClick={scrollToEvents}
                className="inline-block px-8 py-3 border border-red-500 text-red-500 font-semibold rounded-full hover:border-white hover:text-white transition-colors cursor-pointer"
              >
                Our Events
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-[500px] max-h-[500px]">
              <Image
                src="/hero-video-unscreen.gif"
                alt="Hero animation"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;