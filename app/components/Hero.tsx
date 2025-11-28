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
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-300 leading-tight mb-10 opacity-0 animate-zoom-in">
          Power Your Future With Scalable<br />
          Cloud Solution
        </h1>

        {/* Horizontal list with dots */}
        <ul className="flex flex-wrap justify-center items-center gap-5 text-gray-200 text-lg md:text-xl font-medium mb-20 opacity-0 animate-zoom-in-delay">
          <li>Fast Deployment</li>
          <li className="text-gray-500">&bull;</li>
          <li>Scalable Infrastructure</li>
          <li className="text-gray-500">&bull;</li>
          <li>99.99% Uptime</li>
          <li className="text-gray-500">&bull;</li>
          <li>Secure & Reliable</li>
        </ul>

        {/* Button */}
        <a
          href="#"
          className="inline-block px-6 py-3 bg-black/70 text-white font-medium rounded-md 
                     shadow-[0_0_10px_rgba(192,192,192,0.6)] hover:shadow-[0_0_20px_rgba(192,192,192,1)] 
                     opacity-0 animate-zoom-in-delay2 transition-all"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
