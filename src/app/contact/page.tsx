"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4">
      <motion.div
        className="max-w-6xl mx-auto space-y-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          custom={0}
        >
          <h1 className="text-4xl font-bold text-[#EB5C2A] mb-2">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you. Reach out to us anytime.
          </p>
        </motion.div>

        {/* Grid: Contact Info + Form */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-start"
          variants={fadeUp}
          custom={1}
        >
          {/* Contact Details */}
          <div className="space-y-1 text-base leading-relaxed">
            <h2 className="text-xl font-semibold text-[#EB5C2A] mb-2">Spherix Diagnostics</h2>
            <p>Office No. K-131, S.No. 17/1A/2</p>
            <p>Palladium Grand, PH-2</p>
            <p>Dhanori, Pune</p>
            <p>Maharashtra - 411015</p>

            <div className="space-y-2 mt-4">
              <p>
                <span className="font-medium">Email: </span>
                <a href="mailto:sales@spherixdiagnostics.com" className="text-[#EB5C2A] hover:underline">
                  sales@spherixdiagnostics.com
                </a>
              </p>
              <p>
                <span className="font-medium">Phone: </span>
                <a href="tel:+919527564070" className="text-[#EB5C2A] hover:underline">
                  +91 95275 64070
                </a>
              </p>
              <p>
                <span className="font-medium">Website: </span>
                <a
                  href="https://spherixdiagnostics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EB5C2A] hover:underline"
                >
                  spherixdiagnostics.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            className="bg-white rounded-lg shadow-lg p-6 space-y-5"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={e => {
              e.preventDefault();
              alert("Message sent! (demo)");
            }}
          >
            <h2 className="text-xl font-semibold text-[#EB5C2A]">Send a Message</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-[#EB5C2A] focus:border-[#EB5C2A] outline-none"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-[#EB5C2A] focus:border-[#EB5C2A] outline-none"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-[#EB5C2A] focus:border-[#EB5C2A] outline-none"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#EB5C2A] text-white font-medium px-6 py-2 rounded hover:bg-[#d44d1f] transition"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
}
