"use client";
import BeamsBackground from "./BeamsBackground";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import Image from "next/image";
import ClientLogos from "@/app/components/Clients";

export default function HeroCompute() {
  return (
    <section className="relative w-full  bg-black overflow-hidden pt-52 pb-0">

      {/* ⭐ 1. SHADER BACKGROUND */}
      <div className="absolute inset-0 w-full h-11 z-0 pointer-events-none">
        <BeamsBackground />
      </div>

      {/* ⭐ 2. GRAYSCALE OVERLAY */}
      {/* <div className="absolute inset-0 w-full h-full z-[1] pointer-events-none 
                      bg-black/60 backdrop-blur-[1px] 
                      mix-blend-normal 
                      grayscale">
      </div> */}

      {/* ⭐ 3. CONTENT ABOVE EVERYTHING */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 mb-20">

        {/* Heading */}
        <h1
          className="text-5xl md:text-7xl font-semibold mb-10 
          bg-gradient-to-r from-white to-gray-400 
          bg-clip-text text-transparent">
          High-performance cloud
          <span className="block mt-6">made simple</span>
        </h1>
{/* CTA BUTTON */}
<a
  href="#"
  className="group relative inline-block 
             mt-6 sm:mt-8 md:mt-10 
             rounded-2xl p-[1px] 
             animate-zoom-in-delay2"
>
  {/* 1. The Gradient Border Background */}
  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white via-transparent to-gray-300" />
  
  {/* 2. The Top 'Lamp' Glow (Static or Subtle Transition) */}
  {/* This glow remains subtle unless you want it to brighten, but the text glow is the primary focus. */}
  <span className="absolute -top-[2px] left-1/2 h-1/2 w-3/4 -translate-x-1/2 bg-white blur-md opacity-40 transition-opacity duration-300 group-hover:opacity-50" />

  {/* 3. The Inner Button (Static black background) */}
  <span className="relative flex h-full w-full items-center justify-center rounded-2xl bg-black 
                   px-6 sm:px-7 md:px-8 
                   py-2.5 sm:py-3 md:py-3.5
                   transition-colors duration-200">
                   
    {/* 4. The Text (Text shadow added on group-hover) */}
    <span className="font-small text-white 
                     text-base sm:text-lg md:text-lg
                     transition-shadow duration-300
                     group-hover:text-shadow-[0_0_8px_rgba(255,255,255,0.7),_0_0_12px_rgba(255,255,255,0.4)]">
      Get Started
    </span>
  </span>
</a>


      </div>

      {/* ⭐ Dashboard */}
      <div className="-mt-80 relative z-10">
        <ContainerScroll titleComponent={<></>}>
          <div className="relative w-full max-w-[1200px] mx-auto">
            <Image
              src="/dashboard.png"
              alt="Dashboard preview"
              width={1200}
              height={700}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </ContainerScroll>
      </div>

      {/* ⭐ Clients */}
      <div className="-mt-72 relative z-10">
        <ClientLogos transparent />
      </div>
    </section>
  );
}