"use client";
import HomePage from "../../application/components/hero-bg";

export default function HeroStorage() {
  return (
    <section className="relative w-full bg-black overflow-hidden pt-40 pb-40 min-h-[100vh]">
      <div className="absolute inset-0 z-0 h-full">
        <HomePage />
      </div>

      <div className="relative z-10 text-center px-4 pt-10"> 
  <h1
    className="text-5xl md:text-7xl font-semibold mb-10 
    bg-gradient-to-r from-white to-gray-700 
    bg-clip-text text-transparent">
    Deploy Cloud Apps With
    <span className="block mt-6"> Confidence and Scale</span>
  </h1>

  {/* <p className="text-lg md:text-2xl text-gray-500 mb-10">
    One platform for all your cloud applications. Simple, secure, and infinitely scalable
  </p> */}

  <div className="flex flex-wrap justify-center gap-10 text-gray-300 text-xl">
  <span className="flex items-center gap-2">
    • <span>Enterprise Security</span>
  </span>

  <span className="flex items-center gap-2">
    • <span>Enterprise Security</span>
  </span>

  <span className="flex items-center gap-2">
    • <span>Enterprise Security</span>
  </span>

  <span className="flex items-center gap-2">
    • <span>Enterprise Security</span>
  </span>
</div>


<div className="mt-24 flex justify-center gap-6">
  <button
    className="w-40 h-14 rounded-lg bg-black border border-white/20 text-white text-lg 
               transition shadow-none 
               hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] 
               hover:text-white hover:[text-shadow:_0_0_10px_rgba(255,255,255,0.8)]">
    Explore More
  </button>

  <button
    className="w-40 h-14 rounded-lg bg-black border border-white/20 text-white text-lg 
               transition shadow-none 
               hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] 
               hover:text-white hover:[text-shadow:_0_0_10px_rgba(255,255,255,0.8)]">
    Get Started
  </button>
</div>
{/* Feature Cards */}
{/* Feature Cards */}
<div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

  {/* Card */}
  <div className="group relative rounded-2xl border border-white/10 
                  bg-gradient-to-b from-white/5 to-white/0 
                  p-8 backdrop-blur-md transition
                  hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
                  text-left">

    {/* Icon */}
    <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-lg 
                    bg-white/10 text-white">
      ⚡
    </div>

    {/* Heading + Price */}
    <div className="flex items-center gap-3 mb-4">
      <h3 className="text-xl font-semibold text-white">
        Object Storage
      </h3>

      <span className="text-sm px-3 py-1 rounded-full 
                       bg-white/10 text-white/80">
        $29
      </span>
    </div>

    {/* Description */}
    <p className="text-gray-400 mb-6 leading-relaxed">
      Ultra-fast data processing designed for modern cloud workloads.
    </p>

    {/* Learn more */}
    <span className="inline-flex items-center gap-2 text-white/80 cursor-pointer
                     hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)] transition">
      Learn more →
    </span>
  </div>

  {/* Card */}
  <div className="group relative rounded-2xl border border-white/10 
                  bg-gradient-to-b from-white/5 to-white/0 
                  p-8 backdrop-blur-md transition
                  hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
                  text-left">

    <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-lg 
                    bg-white/10 text-white">
      🔒
    </div>

    <div className="flex items-center gap-3 mb-4">
      <h3 className="text-xl font-semibold text-white">
        File Storage
      </h3>
      <span className="text-sm px-3 py-1 rounded-full 
                       bg-white/10 text-white/80">
        $49
      </span>
    </div>

    <p className="text-gray-400 mb-6 leading-relaxed">
      Enterprise-grade protection with continuous monitoring.
    </p>

    <span className="inline-flex items-center gap-2 text-white/80 cursor-pointer
                     hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)] transition">
      Learn more →
    </span>
  </div>

  {/* Card */}
  <div className="group relative rounded-2xl border border-white/10 
                  bg-gradient-to-b from-white/5 to-white/0 
                  p-8 backdrop-blur-md transition
                  hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
                  text-left">

    <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-lg 
                    bg-white/10 text-white">
      🧩
    </div>

    <div className="flex items-center gap-3 mb-4">
      <h3 className="text-xl font-semibold text-white">
        Backup Storage
      </h3>
      <span className="text-sm px-3 py-1 rounded-full 
                       bg-white/10 text-white/80">
        $19
      </span>
    </div>

    <p className="text-gray-400 mb-6 leading-relaxed">
      Plug-and-play components that scale with your needs.
    </p>

    <span className="inline-flex items-center gap-2 text-white/80 cursor-pointer
                     hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)] transition">
      Learn more →
    </span>
  </div>

</div>


</div>

    </section>
  );
}
