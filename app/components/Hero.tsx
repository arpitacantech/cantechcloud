// app/components/Hero.tsx
"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover filter grayscale"
      >
        <source src="/hero-vid.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>


      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Small text */}
        <p className="text-sm text-blue-200 mb-2">NEW GEN AI AUTOMATION PARTNER</p>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-300 leading-tight mb-4">
          Automate Smarter. <br />
          Grow Faster. <span className="italic text-gray-100">With AI.</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 mb-8">
          AI Automation for Modern Businesses Made Simple
        </p>

        {/* Button */}
        <a
          href="#"
          className="inline-block px-6 py-3 bg-black/70 hover:bg-black/90 text-white font-medium rounded-md transition"
        >
          Book A Free Call
        </a>
      </div>
    </section>
  );
}
