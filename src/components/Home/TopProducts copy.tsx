'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Glucose Reagent',
    category: 'Clinical Chemistry',
    features: [
      'High stability with long shelf life',
      'Ready-to-use, cost-effective format',
    ],
  },
  {
    name: 'HbA1c Kit',
    category: 'Immunoturbidimetry',
    features: [
      'High specificity and sensitivity',
      'Reliable results for diabetes monitoring',
    ],
  },
  {
    name: 'ChemCount 1.1 Analyzer',
    category: 'Analyzer',
    features: [
      'Touchscreen with 25,000 memory',
      'Halogen lamp-based photometry',
    ],
  },
];

export default function TopProducts() {
  return (
    <section className="bg-white py-16 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#EB5C2A] mb-12">
          Our Top Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative bg-white rounded-lg shadow-md overflow-visible"
            >
              {/* 3D box container */}
              <div className="relative w-full h-64 perspective-[800px]">
                <div
                  className="relative w-full h-full rounded-lg bg-white shadow-md"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(0)',
                  }}
                >
                  {/* Front face - image + product name */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden bg-white border border-gray-200">
                    <Image
                      src="/images/spherix_product_layer.png"
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <h3 className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 text-black text-md pointer-events-none select-none">
                      {product.name}
                    </h3>
                  </div>

                </div>
              </div>

              {/* Product info */}
              <div className="p-5 text-center space-y-2">
                <p className="text-sm text-gray-500">{product.category}</p>
                <ul className="text-sm text-gray-700 list-disc list-inside text-left max-w-xs mx-auto">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <a
                  href={`mailto:sales@spherixdiagnostics.com?subject=Enquiry about ${encodeURIComponent(
                    product.name
                  )}`}
                  className="inline-block mt-3 text-[#EB5C2A] font-medium hover:underline"
                >
                  Enquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
