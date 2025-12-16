"use client";

import Cards from './Cards';
import Image from "next/image";
import { motion, Variants, easeOut } from "framer-motion";

interface FeatureCardProps {
  iconSrc?: string; // optional if not used
  title: string;
  description: string;
}

// Motion variants
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};
const palette = {
  surface: "bg-neutral-950 text-neutral-100",
  panel: "bg-neutral-900/50",
  border: "border-white/10",
  heading: "text-white",
  muted: "text-neutral-400",
  iconRing: "border-white/20",
  iconSurface: "bg-white/5",
  icon: "text-white",
  glow: "rgba(255, 255, 255, 0.08)",
  aurora: "radial-gradient(ellipse 50% 100% at 10% 0%, rgba(226, 232, 240, 0.15), transparent 65%), #000000",
  shadow: "shadow-[0_36px_140px_-60px_rgba(10,10,10,0.95)]",
  overlay: "linear-gradient(130deg, rgba(255,255,255,0.04) 0%, transparent 65%)",
};
export default function TwoCardSection() {
  return (
    <section className="relative w-full py-40">
      
      {/* Section Intro */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className="inline-block border border-gray-300 text-gray-300 uppercase text-sm px-3 py-1 rounded-full mb-2 tracking-wide"
          variants={fadeUp}
        >
          Services
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-semibold bg-gradient-to-b from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-2"
          variants={fadeUp}
        >
          Select the service that best fits your needs
        </motion.h2>

        <motion.p
          className="text-4xl md:text-xl text-gray-400 max-w-4xl mx-auto"
          variants={fadeUp}
        >
          Choose from our range of services to get started quickly and easily
        </motion.p>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeUp}>
          <Cards
            imageSrc="/card1.png"
            title="PaaS"
            description="Quick access to pre-configured cloud environments"
            button="Access Service"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Cards
            imageSrc="/card2.png"
            title="Cloud Compute"
            description="Full control over computing resources for advanced workloads"
            button="Access Service"
          />
        </motion.div>
      </motion.div>

      {/* Glowing Divider */}
<motion.div
  className="w-full h-px my-16 bg-gradient-to-r from-transparent via-gray-600/80 to-transparent"
  variants={fadeUp}
/>


    </section>
  );
}
