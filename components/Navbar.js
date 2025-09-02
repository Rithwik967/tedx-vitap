// ...existing code...
'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto relative">
      <div className="flex items-center">
        <Image
          src="/logo-white.png"
          alt="TEDx VITAP"
          width={160}
          height={60}
        />
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-6">
        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-white transition-colors transition-transform hover:text-red-500 hover:font-bold">About us</a>
        <a href="#team" onClick={(e) => handleScroll(e, 'team')} className="text-white transition-colors transition-transform hover:text-red-500 hover:font-bold">Our Team</a>
        <a href="#sponsors" onClick={(e) => handleScroll(e, 'sponsors')} className="text-white transition-colors transition-transform hover:text-red-500 hover:font-bold">Sponsors</a>
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
        <div className="md:hidden absolute right-6 top-full mt-3 w-52 bg-black border border-gray-800 rounded-lg p-4 shadow-xl z-50">
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="block text-white py-2 px-2 rounded hover:text-red-500 hover:font-bold">About us</a>
          <a href="#team" onClick={(e) => handleScroll(e, 'team')} className="block text-white py-2 px-2 rounded hover:text-red-500 hover:font-bold">Our Team</a>
          <a href="#sponsors" onClick={(e) => handleScroll(e, 'sponsors')} className="block text-white py-2 px-2 rounded hover:text-red-500 hover:font-bold">Sponsors</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
//