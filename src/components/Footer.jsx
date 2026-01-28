import React from "react";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Project Name */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌳</span>
          <h1 className="text-xl font-bold">Vanshavali</h1>
        </div>

        {/* Quick Links */}
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-white">
          <a href="#" className="hover:text-green-300">
            <FiFacebook size={20} />
          </a>
          <a href="#" className="hover:text-green-300">
            <FiInstagram size={20} />
          </a>
          <a href="#" className="hover:text-green-300">
            <FiTwitter size={20} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-green-200 text-sm">
        &copy; {new Date().getFullYear()} Vanshavali. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
