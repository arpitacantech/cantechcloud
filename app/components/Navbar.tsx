"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full z-50 px-8">
      <div
        className={`
          mx-auto
          bg-black/80
          backdrop-blur-xl
          border border-white/20
          rounded-full
          shadow-lg
          px-8
          py-3
          flex
          items-center
          transition-all duration-300 ease-out
          ${scrolled ? "max-w-5xl" : "max-w-7xl"} 
        `}
        style={{
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
        }}
      >
        {/* LEFT LOGO */}
        <div className="flex-1 flex items-center">
          <span className="text-white font-semibold text-lg whitespace-nowrap">
            Cantech Cloud
          </span>
        </div>

        {/* CENTER LINKS */}
        <ul className="flex-1 flex justify-center items-center space-x-10 font-medium text-white/80 whitespace-nowrap">
          <li><Link href="#" className="hover:text-white transition">Application</Link></li>
          <li><Link href="#" className="hover:text-white transition">Database</Link></li>
          <li><Link href="#" className="hover:text-white transition">Storage</Link></li>
          <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
        </ul>

        {/* RIGHT CTA */}
        <div className="flex-1 flex justify-end">
          <Link
            href="#"
            className="
              bg-black/70 
              text-white 
              font-medium 
              rounded-full 
              px-6 py-2 
              flex items-center gap-2 
              hover:shadow-[0_0_24px_rgba(255,255,255,1)] 
              shadow-[0_0_12px_rgba(255,255,255,0.7)] 
              transition 
              whitespace-nowrap
            "
          >
            Get Started →
          </Link>
        </div>
      </div>
    </nav>
  );
}
