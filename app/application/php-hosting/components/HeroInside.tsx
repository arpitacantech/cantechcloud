"use client";
import React from "react";

// Inline Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost" | "gradient";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", className = "", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default: "bg-white text-black hover:bg-gray-100",
      secondary: "bg-gray-800 text-white hover:bg-gray-700",
      ghost: "hover:bg-gray-800/50 text-white",
      gradient:
        "bg-gradient-to-b from-white via-white/95 to-white/60 text-black hover:scale-105 active:scale-95",
    };

    const sizes = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-10 px-5 text-sm",
      lg: "h-12 px-8 text-base",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

// Icon
const ArrowRight = ({ className = "", size = 16 }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// Hero Component
const Hero = React.memo(() => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center px-6 pt-32 md:pt-40 pb-24"

      style={{ animation: "fadeIn 0.6s ease-out" }}
    >
{/* Top Background Video (bleeds into dashboard) */}
<div className="absolute top-0 left-0 w-full h-[85vh] md:h-[95vh] z-0 overflow-hidden">
  <video
    className="h-full w-full object-cover grayscale scale-[1.35]"
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
  >
    <source src="/hero-video.mp4" type="video/mp4" />
  </video>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/80" />
</div>
  
      <aside className="mb-8 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm max-w-full">
        <span className="text-s text-center whitespace-nowrap text-gray-400">
          New version of template is out!
        </span>
        <a
          href="#new-version"
          className="flex items-center gap-1 text-s text-gray-400 hover:text-white transition-all active:scale-95 whitespace-nowrap"
        >
          Read more
          <ArrowRight size={12} />
        </a>
      </aside>

     <h1
  className="
    text-5xl md:text-7xl 
    font-semibold 
    mb-10 
    text-center
    leading-tight
    max-w-5xl
    bg-gradient-to-r from-white to-gray-700 
    bg-clip-text text-transparent z-10
  "
>
  Deploy Cloud Apps With
  <span className="block mt-6">
    Confidence and Scale
  </span>
</h1>


      <p className="text-lg md:text-2xl text-gray-500 mb-10 z-10">
    One platform for all your cloud applications. Simple, secure, and infinitely scalable
  </p>

      <div className="flex items-center gap-4 relative z-10 mb-16">
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

      <div className="w-full max-w-5xl relative pb-20">
        {/* <div
          className="absolute left-1/2 w-[90%] pointer-events-none z-0"
          style={{ top: "-10%", transform: "translateX(-50%)" }}
        >
          <img
            src="/glow.png"
            alt=""
            className="w-full h-auto opacity-60 mix-blend-screen"
          />
        </div> */}

        <div className="relative z-10">
          <img
            src="https://i.postimg.cc/SKcdVTr1/Dashboard2.png"
            alt="Dashboard preview"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

// Main Component
export default function Component() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
    </main>
  );
}
