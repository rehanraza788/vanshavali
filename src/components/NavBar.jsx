"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiLogIn } from "react-icons/fi";

const NavBar = () => {
  // Mobile menu open / close state
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-emerald-700 to-green-700 text-white fixed top-0 left-0 w-full z-50 ">
      {/* Navbar container */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Project Name */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌳</span>
          <Link href="/">
            <h1 className="text-xl font-bold">Vanshavali</h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/relations" className="hover:underline">
            RelationShips
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>

          {/* Login Button */}
          <Link
            href="/login"
            className="flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-full"
          >
            <FiLogIn />
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white text-green-700 px-4 pb-4">
          <Link href="/" className="block py-2" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link
            href="/about"
            className="block py-2"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/relations"
            className="block py-2"
            onClick={() => setOpen(false)}
          >
            RelationShips
          </Link>

          <Link
            href="/contact"
            className="block py-2"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/login"
            className="flex items-center gap-2 py-2"
            onClick={() => setOpen(false)}
          >
            <FiLogIn />
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
