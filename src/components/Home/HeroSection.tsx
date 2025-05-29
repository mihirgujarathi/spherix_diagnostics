"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)]">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/dna_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional: very subtle darken layer */}
      <div className="absolute inset-0 bg-black/5 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 flex items-center justify-center w-full px-6 min-h-[calc(100vh-4rem)]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-y-24 lg:gap-y-0 gap-x-10 items-center py-12 lg:py-0">

          {/* Text Section */}
          <div className="space-y-6 text-center lg:text-left text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.7)]"
            >
              Diagnostics<br />
              Made Smarter
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg max-w-md mx-auto lg:mx-0 drop-shadow-[0_1px_1.5px_rgba(0,0,0,0.7)]"
            >
              Empowering diagnostics with advanced reagents and analyzers, trusted by labs across India for accurate patient outcomes.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                href="/products"
                className="bg-[#EB5C2A] text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition"
              >
                View Products
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-[#eb5c2a0d] transition"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/images/chemcount1.1.png"
              alt="Diagnostic Instrument"
              width={600}
              height={400}
              className="rounded-xl object-cover bg-transparent filter brightness-110"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
