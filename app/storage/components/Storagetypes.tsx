"use client";

import { motion, Variants, easeOut } from "framer-motion";
import { Database, Folder, ShieldCheck } from "lucide-react";

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
          types
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-semibold bg-gradient-to-b from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-2"
          variants={fadeUp}
        >
          What are the Types of Cloud Storage?
        </motion.h2>

        <motion.p
          className="text-xl text-gray-400 max-w-4xl mx-auto"
          variants={fadeUp}
        >
          Different types of cloud storage are designed for specific use cases and performance requirements.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Object Storage */}
        <motion.div
          variants={fadeUp}
          className="rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"

        >
          <p className="text-center text-xl font-semibold text-white">$0.10</p>
          <p className="text-center text-sm text-gray-400 mb-6">
            per GB/month
          </p>

          <div className="flex justify-center mb-6">
            <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center">
              <Database className="h-7 w-7 text-white" />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white text-center mb-4">
            Object Storage
          </h3>

          <p className="text-gray-400 text-sm text-center mb-6">
            Fully S3-compatible object storage for unstructured data—photos,
            videos, and logs—supporting archiving, analytics, backup, and
            disaster recovery.
          </p>

          <ul className="space-y-3 text-sm text-gray-300 mb-8">
            <li>• 100% S3-compatible drop-in replacement</li>
            <li>• Store photos, videos & logs</li>
            <li>• Optimized for AI/ML workloads</li>
            <li>• Cloud-native & self-healing</li>
          </ul>

          <div className="text-center  mt-auto">
            <button className="px-6 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* File Storage */}
        <motion.div
          variants={fadeUp}
          className="rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"

        >
          <p className="text-center text-xl font-semibold text-white">$0.10</p>
          <p className="text-center text-sm text-gray-400 mb-6">
            per GB/month
          </p>

          <div className="flex justify-center mb-6">
            <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center">
              <Folder className="h-7 w-7 text-white" />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white text-center mb-4">
            File Storage
          </h3>

          <p className="text-gray-400 text-sm text-center mb-6">
            Secure and scalable file storage with powerful sharing and
            collaboration features.
          </p>

          <ul className="space-y-3 text-sm text-gray-300 mb-8">
            <li>• Team & external file sharing</li>
            <li>• Real-time editing (ONLYOFFICE)</li>
            <li>• Password & expiry protection</li>
            <li>• Connect S3 & network drives</li>
          </ul>

          <div className="text-center  mt-auto">
            <button className="px-6 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Backup Storage */}
        <motion.div
          variants={fadeUp}
          className="rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"

        >
          <p className="text-center text-xl font-semibold text-white">$0.10</p>
          <p className="text-center text-sm text-gray-400 mb-6">
            per GB/month
          </p>

          <div className="flex justify-center mb-6">
            <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center">
              <ShieldCheck className="h-7 w-7 text-white" />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white text-center mb-4">
            Backup Storage
          </h3>

          <p className="text-gray-400 text-sm text-center mb-6">
            Scalable and secure backup storage with automated clustering and
            fast recovery.
          </p>

          <ul className="space-y-3 text-sm text-gray-300 mb-8">
            <li>• Centralized backups</li>
            <li>• Standalone or GlusterFS</li>
            <li>• NFS & FUSE native</li>
            <li>• Auto-failover clustering</li>
          </ul>

          <div className="text-center  mt-auto">
            <button className="px-6 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
