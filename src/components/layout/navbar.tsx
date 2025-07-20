"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4 relative">
        <div className="text-xl font-bold">Ashutosh Yadav</div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center z-20"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        {/* Links */}
        <div className="hidden md:flex gap-6">
          <Link href="/"><span className="hover:underline cursor-pointer">Home</span></Link>
          <Link href="#projects"><span className="hover:underline cursor-pointer">Projects</span></Link>
          <Link href="#experience"><span className="hover:underline cursor-pointer">Experience</span></Link>
          <Link href="#blog"><span className="hover:underline cursor-pointer">Blog</span></Link>
          <Link href="#contact"><span className="hover:underline cursor-pointer">Contact</span></Link>
        </div>
        {/* Mobile Card Menu */}
        {menuOpen && (
          <div className="absolute right-4 top-14 w-48 bg-gray-800 rounded-lg shadow-lg flex flex-col gap-2 py-3 px-4 md:hidden animate-fade-in z-10">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <span className="block py-2 hover:underline cursor-pointer">Home</span>
            </Link>
            <Link href="#projects" onClick={() => setMenuOpen(false)}>
              <span className="block py-2 hover:underline cursor-pointer">Projects</span>
            </Link>
            <Link href="#experience" onClick={() => setMenuOpen(false)}>
              <span className="block py-2 hover:underline cursor-pointer">Experience</span>
            </Link>
            <Link href="#blog" onClick={() => setMenuOpen(false)}>
              <span className="block py-2 hover:underline cursor-pointer">Blog</span>
            </Link>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>
              <span className="block py-2 hover:underline cursor-pointer">Contact</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}