"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full z-50 px-4">
      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-full
          shadow-sm
          px-8
          py-3
          flex
          items-center
        "
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
        }}
      >
        {/* LEFT LOGO */}
        <div className="flex-1 flex items-center">
          <span className="text-white font-semibold text-lg whitespace-nowrap">
            Cantech Cloud
          </span>
        </div>

        {/* CENTER LINKS */}
        <ul className="flex-1 flex justify-center items-center space-x-10 text-m font-medium text-white/80 whitespace-nowrap">
          <li><Link href="#" className="hover:text-white transition">Application</Link></li>
          <li><Link href="#" className="hover:text-white transition">DataBase</Link></li>
          <li><Link href="#" className="hover:text-white transition">Storage</Link></li>
          <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
        </ul>

        {/* RIGHT CTA */}
        <div className="flex-1 flex justify-end">
          <Link
  href="#"
  className="
    bg-black/70 text-white 
    font-medium rounded-full 
    px-6 py-2 
    flex items-center gap-2 
    hover:shadow-[0_0_24px_rgba(192,192,192,1)] 
    shadow-[0_0_12px_rgba(192,192,192,0.6)] 
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
