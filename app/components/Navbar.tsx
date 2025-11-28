"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 text-white">
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center">
            {/* simple hexagon outline logo */}
          </div>
          <span className="font-bold text-lg">Cantech Cloud</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Application
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-400 transition-colors">
              DataBase
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Storage
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Pricing
            </Link>
          </li>
        </ul>

        {/* Get Started Button */}
        <div>
          <Link
            href="#"
            className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
