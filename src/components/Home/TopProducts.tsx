'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const products = [
  {
    id: 4,
    name: 'Ammonia',
    method: 'UV GLDH',
    packSize: '10 ML',
    storage: '2-8°C',
    shelfLife: '18 Months',
    category: 'Clinical Chemistry',
  },
  {
    id: 23,
    name: 'IgE',
    method: 'Turbilatex',
    packSize: '1x10/1x5 ML',
    storage: '2-8°C',
    shelfLife: '18 Months',
    category: 'Immunoturbidimetry',
  },
  {
    id: 1,
    name: 'ADA',
    method: 'Enzyme Cycling',
    packSize: '30 ML',
    storage: '2-8°C',
    shelfLife: '18 Months',
    category: 'Clinical Chemistry',
  },
];

const size = 260; // cube size in px

function BoxFlipCard({ product }: { product: typeof products[0] }) {
  const [flipped, setFlipped] = useState(false);

  const borderColor = '#999';

  return (
    <div
      className="cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      aria-label={`Flip box for ${product.name}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setFlipped(!flipped);
        }
      }}
      style={{ perspective: `${size * 4}px`, margin: 'auto' }}
    >
      <div
        className="relative"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s',
          transform: flipped ? 'rotateY(160deg)' : 'rotateY(-20deg)',
          position: 'relative',
          borderRadius: 8,
        }}
      >
        {/* Front face */}
        <div
          style={{
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            background: 'linear-gradient(135deg, #fff 0%, #f0f0f0 100%)',
            borderRadius: 8,
            border: `1px solid ${borderColor}`,
            boxSizing: 'border-box',
            transform: `translateZ(${size / 2}px)`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            userSelect: 'none',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src="/images/spherix_product_layer.png"
              alt={product.name}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <h3
              style={{
                position: 'absolute',
                top: '35%',
                width: '100%',
                textAlign: 'center',
                color: 'black',
                fontWeight: '500',
                fontSize: '1.1rem',
                userSelect: 'none',
              }}
            >
              {product.name}
            </h3>
          </div>
        </div>

        {/* Back face */}
        <div
          style={{
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: 'white',
            borderRadius: 8,
            border: `1px solid ${borderColor}`,
            boxSizing: 'border-box',
            transform: `rotateY(180deg) translateZ(${size / 2}px)`,
            padding: 20,
            overflowY: 'auto',
            userSelect: 'none',
          }}
        >
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: 10 }}>
            {product.name}
          </h3>
          <p style={{ color: '#555', marginBottom: 10 }}>{product.category}</p>
          <div style={{ fontSize: 14, color: '#444' }}>
            <p>
              <strong>Method:</strong> {product.method}
            </p>
            <p>
              <strong>Pack Size:</strong> {product.packSize}
            </p>
            <p>
              <strong>Storage:</strong> {product.storage}
            </p>
            <p>
              <strong>Shelf Life:</strong> {product.shelfLife}
            </p>
          </div>
        </div>

        {/* Top face */}
        <div
          style={{
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: '#f9f9f9',
            borderRadius: '8px 8px 0 0',
            borderTop: `2px solid ${borderColor}`,
            borderLeft: `1px solid ${borderColor}`,
            borderRight: `1px solid ${borderColor}`,
            boxSizing: 'border-box',
            transform: `rotateX(90deg) translateZ(${size / 2}px)`,
          }}
        />

        {/* Right face */}
        <div
          style={{
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: '#f9f9f9',
            borderRadius: '0 8px 8px 0',
            borderTop: `1px solid ${borderColor}`,
            borderRight: `2px solid ${borderColor}`,
            borderBottom: `1px solid ${borderColor}`,
            boxSizing: 'border-box',
            transform: `rotateY(90deg) translateZ(${size / 2}px)`,
          }}
        />

        {/* Left face with logo */}
        <div
          style={{
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: 'white',
            borderRadius: '8px 0 0 8px',
            borderTop: `1px solid ${borderColor}`,
            borderLeft: `2px solid ${borderColor}`,
            borderBottom: `1px solid ${borderColor}`,
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            userSelect: 'none',
            transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
          }}
        >
          <Image
            src="/images/chemcount_logo.png"
            alt="ChemCount Logo"
            width={size - 40}
            height={size - 40}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default function TopProducts() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#EB5C2A] mb-16">
          Our Top Products
        </h2>

        <div className="flex flex-wrap justify-center gap-12 sm:gap-16 lg:gap-30">
          {products.map((product) => (
            <div key={product.id} className="mb-8 ml-8 sm:ml-0">
              <BoxFlipCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
