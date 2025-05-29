'use client';

import React, { useState, useMemo } from 'react';
import { products } from '@/data/productData';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  // Get unique categories for filter dropdown
  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map((p) => p.category)));
    return cats.sort();
  }, []);

  // Filter products based on category and search term
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [categoryFilter, searchTerm]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-[#EB5C2A] text-center">Our Products</h1>

      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 mb-12">
        <input
          type="text"
          placeholder="Search products by name..."
          className="border border-gray-300 rounded px-4 py-2 flex-grow max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search products"
        />

        <select
          className="border border-gray-300 rounded px-4 py-2 max-w-xs"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded shadow p-4 bg-white hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
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
              <p className="mt-2 text-sm italic text-gray-600">Category: {product.category}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
