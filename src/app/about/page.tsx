'use client';

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function About() {
  return (
    <section className="min-h-screen bg-white text-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Hero Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-[#EB5C2A] mb-4">About Spherix Diagnostics</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advancing Indian diagnostics with reliable reagents, intelligent analyzers, and unwavering support.
          </p>
        </motion.div>

        {/* Mission & Reach */}
        <div className="grid md:grid-cols-2 gap-10 text-center md:text-left">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-[#EB5C2A]">Who We Are</h2>
            <p>
              Spherix Diagnostics is a healthcare-focused diagnostics company dedicated to delivering high-quality reagents and instruments for clinical laboratories across India. We specialize in offering a wide range of biochemistry and immunoturbidimetry reagents, along with our flagship analyzer—<strong>ChemCount 1.1</strong>, designed to empower small and mid-sized labs with precision and affordability.
            </p>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-[#EB5C2A]">Pan-India Presence</h2>
            <p>
              We are currently doing business in Maharashtra, Gujarat, Madhya Pradesh, Uttar Pradesh, Chhattisgarh, and Jharkhand through our authorized distributors. We make sure our products reach customers on time with full support. In the future, we plan to expand and supply our products all over India.
            </p>
          </motion.div>
        </div>

        {/* What We Offer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-[#EB5C2A] text-center">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Clinical Chemistry Reagents",
                desc:
                  "A broad range of high-performance reagents including Glucose, Urea, SGPT, Triglycerides, and ADA, supporting accurate results with long shelf life and optimal storage stability.",
              },
              {
                title: "Immunoturbidimetry Kits",
                desc:
                  "Reliable kits for CRP, ASO, RF, Ferritin, HbA1c, and IgE testing—engineered for high sensitivity and specificity in automated workflows.",
              },
              {
                title: "Monovial Packs",
                desc:
                  "Convenient, ready-to-use monovials for Alkaline Phosphatase, Calcium, Sodium, and Potassium—ensuring faster turnaround and reduced waste.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ChemCount Instrument Highlight */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-[#fef7f4] p-8 rounded-lg shadow-md space-y-4"
        >
          <h2 className="text-2xl font-semibold text-[#EB5C2A] text-center">ChemCount 1.1 Analyzer</h2>
          <p className="text-center max-w-4xl mx-auto text-sm text-gray-700">
            ChemCount 1.1 is our Made in India semi-automated chemistry analyzer. It comes with a 7-inch touch display, halogen lamp-based photometry, and supports kinetic, fix time and endpoint analysis modes. The stainless-steel flowcell ensures accurate results, while built-in memory stores up to 25,000 test records. With temperature control using Peltier elements, ChemCount 1.1 is designed for reliable performance in everyday lab use.
          </p>
        </motion.div>

        {/* Careers Section */}
        <motion.div
          id="careers"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-gray-100 p-8 rounded-lg text-center space-y-6 scroll-mt-32"
        >
          <h2 className="text-2xl font-semibold text-[#EB5C2A]">Sales Careers at Spherix Diagnostics</h2>

          <p className="text-gray-700 max-w-3xl mx-auto text-sm">
            We&apos;re expanding our nationwide presence and are on the lookout for enthusiastic and driven individuals to join our sales team.
            Whether you&apos;re a recent graduate or have prior experience, we&apos;d love to hear from you.
          </p>

          <p className="text-gray-700 max-w-3xl mx-auto text-sm">
            To apply, send your resume to{" "}
            <a
              href="mailto:sales@spherixdiagnostics.com"
              className="text-[#EB5C2A] underline"
            >
              sales@spherixdiagnostics.com
            </a>.
          </p>

          {/* Locations List */}
          <div className="mt-6 max-w-3xl mx-auto bg-white rounded-md shadow p-6">
            <h3 className="text-lg font-semibold text-[#EB5C2A] mb-3">We&apos;re Hiring in These Cities:</h3>
            <ul className="flex flex-wrap justify-center gap-3 text-gray-800 font-medium">
              {[
                "Ahmedabad",
                "Bhopal",
                "Delhi",
                "Indore",
                "Jaipur",
                "Kolkata",
                "Lucknow",
                "Mumbai",
                "Patna",
                "Pune",
              ].map((city) => (
                <li
                  key={city}
                  className="bg-[#EB5C2A] text-white px-3 py-1 rounded-full text-sm"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Qualifications */}
          <div className="max-w-3xl mx-auto bg-white rounded-md shadow p-6">
            <h3 className="text-lg font-semibold text-[#EB5C2A] mb-2">Preferred Qualifications:</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 text-left">
              <li>Science Graduate (B.Sc. or equivalent)</li>
              <li>Candidates with 12th + DMLT certification are also welcome</li>
              <li>Strong communication and interpersonal skills</li>
              <li>Willingness to travel and engage with healthcare professionals</li>
            </ul>
          </div>
        </motion.div>



        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <p className="text-lg font-medium text-gray-700 mb-4">
            Looking for a diagnostic partner that truly understands Indian labs?
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#EB5C2A] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#d44d1f] transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
