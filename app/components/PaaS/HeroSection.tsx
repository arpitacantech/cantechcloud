'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GradientDots } from '../ui/gradient-dots';
import ClientLogos from "../Clients";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center text-center bg-black pt-52 pb-16 overflow-hidden">

      {/* Animated Gradient Dots Background */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-full h-[60%] z-0 pointer-events-none"
      >
        <GradientDots
          duration={100}
          colorCycleDuration={80}
          backgroundColor="rgba(255,255,255,0.05)"
          className="w-full h-full"
        />
      </motion.div>

      {/* Heading + Subheading + Email Signup */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-5xl mb-16 px-6"
      >
      <h1 className="text-5xl md:text-7xl font-semibold mb-16 
               bg-gradient-to-r from-white to-gray-400 
               bg-clip-text text-transparent">
  Sign Up And Deploy Your <span className="block mt-6">Application For Free</span>
</h1>


     

        {/* Email input + button */}
   <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-md mx-auto">
  <input
    type="email"
    placeholder="Enter Your Email"
    className="w-full sm:flex-1 px-4 py-3 rounded-full bg-black border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
  />
  <button className="inline-block px-7 py-3 bg-black/70 text-white font-medium rounded-full 
             shadow-[0_0_12px_rgba(192,192,192,0.6)]
             hover:shadow-[0_0_24px_rgba(192,192,192,1)]
             text-lg
             sm:mt-0 mt-4">
    Sign up
  </button>
</div>


      </motion.div>

      {/* Dashboard Preview */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5, duration: 1 }}
  className="z-10 w-full max-w-[1200px] mb-20" // add margin bottom
>
  <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl mx-auto">
    <Image
      src="/dashboard.png"
      alt="Dashboard preview"
      width={1200}
      height={700}
      className="w-full h-auto rounded-2xl"
    />
  </div>
</motion.div>

{/* Clients Logos */}
<div className="w-full z-10 animate-zoom-in transition-all">
  <ClientLogos transparent />
</div>
    </section>
    
  );
}
