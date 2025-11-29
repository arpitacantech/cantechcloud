"use client";
import ClientLogos from "./Clients";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover filter grayscale"
      >
        <source src="/hero-vid.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center 
                      text-center px-6 -translate-y-10">

        <h1 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4rem] 
                       font-medium 
                       leading-[3rem] md:leading-[4rem]
                       opacity-0 animate-zoom-in -translate-y-20">

          <span className="block bg-gradient-to-b from-white via-gray-300 to-black-100 bg-clip-text text-transparent">
            Power Your Future With Scalable
          </span>
          <span className="block mt-5 bg-gradient-to-b from-white via-gray-300 to-black-100 bg-clip-text text-transparent">
            Cloud Solution
          </span>
        </h1>

        <ul className="flex flex-wrap justify-center items-center gap-10 text-gray-200 text-lg md:text-xl 
                       font-medium opacity-0 animate-zoom-in-delay 
                       -translate-y-4 mt-12 md:mt-24">
          <li>Fast Deployment</li>
          <li className="text-gray-400 text-3xl md:text-4xl">&bull;</li>
          <li>Scalable Infrastructure</li>
          <li className="text-gray-400 text-3xl md:text-4xl">&bull;</li>
          <li>99.99% Uptime</li>
          <li className="text-gray-400 text-3xl md:text-4xl">&bull;</li>
          <li>Secure & Reliable</li>
        </ul>

        <a
          href="#"
          className="mt-8 md:mt-10 inline-block px-7 py-3 bg-black/70 text-white font-medium rounded-full 
                     shadow-[0_0_12px_rgba(192,192,192,0.6)]
                     hover:shadow-[0_0_24px_rgba(192,192,192,1)]
                     opacity-0 animate-zoom-in-delay2 transition-all text-lg"
        >
          Get Started
        </a>
      </div>

      <div className="absolute bottom-10 w-full z-20 animate-zoom-in transition-all">
        <ClientLogos transparent />
      </div>
    </section>
  );
}
