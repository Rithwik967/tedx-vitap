'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-6 max-w-7xl mx-auto">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo-white.png"
            alt="TEDx VITAP"
            width={160}
            height={60}
          />
        </Link>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-6">
        <Link href="/#about" className="text-white transition-all hover:text-red-500 hover:font-bold">About us</Link>
        <Link href="/team" className="text-white transition-all hover:text-red-500 hover:font-bold">Our Team</Link>
        <Link href="/#sponsors" className="text-white transition-all hover:text-red-500 hover:font-bold">Sponsors</Link>
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
          <Link href="/#about" className="block text-white py-2 px-2 rounded hover:text-red-500 hover:font-bold transition-all">About us</Link>
          <Link href="/team" className="block text-white py-2 px-2 rounded hover:text-red-500 hover:font-bold transition-all">Our Team</Link>
          <Link href="/#sponsors" className="block text-white py-2 px-2 rounded hover:text-red-500 hover:font-bold transition-all">Sponsors</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
