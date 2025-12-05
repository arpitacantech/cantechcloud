"use client";
import { IconCloud } from "../../components/ui/interactive-icon-cloud"
import { motion, Variants, easeOut } from "framer-motion";

const badgeVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const slugs = [
  "typescript", "javascript", "dart", "java", "react", "flutter",
  "android", "html5", "css3", "nodedotjs", "express", "nextdotjs",
  "prisma", "amazonaws", "postgresql", "firebase", "nginx", "vercel",
  "testinglibrary", "jest", "cypress", "docker", "git", "jira", "github",
  "gitlab", "visualstudiocode", "androidstudio", "sonarqube", "figma",
];

export function IconCloudDemo() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-background px-4">
      
      {/* Badge */}
      <motion.div
        className="flex justify-center mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={badgeVariants}
      >
        <p className="inline-block border border-gray-500 text-gray-400 uppercase text-xs md:text-sm px-3 py-1 rounded-full tracking-wide">
          Integration
        </p>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-semibold bg-gradient-to-b from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-2 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Cloud Platform For Developer
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-lg md:text-xl text-gray-400 max-w-5xl text-center mb-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Deploy your application instantly on our fully redundant, high performance and scalable Cloud Platform-as-a-Service. Choose the required runtimes and install different software stacks just in a few clicks.
      </motion.p>

      {/* Icon Cloud */}
      <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center overflow-hidden rounded-lg">
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  )
}
