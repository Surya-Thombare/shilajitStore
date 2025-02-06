'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingCart,
  Filter,
  Star,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

const ProductsPage = () => {
  // Products Data
  const products = React.useMemo(() => [
    {
      id: 1,
      name: "Premium Shilajit Resin",
      price: 49.99,
      category: "Resin",
      rating: 5,
      weight: "20g",
      image: "/assets/images/shilajit.jpg",
      description: "Pure, unprocessed Shilajit resin sourced from high altitudes.",
      tags: ["Premium", "Pure", "Resin"]
    },
    {
      id: 2,
      name: "Shilajit Gold Capsules",
      price: 39.99,
      category: "Capsules",
      rating: 4.5,
      weight: "60 capsules",
      image: "/assets/images/shilajit.jpg",
      description: "Convenient daily supplement in easy-to-take capsule form.",
      tags: ["Capsules", "Daily", "Convenient"]
    },
    {
      id: 3,
      name: "Shilajit Extract Plus",
      price: 69.99,
      category: "Extract",
      rating: 5,
      weight: "30ml",
      image: "/assets/images/shilajit.jpg",
      description: "Concentrated Shilajit extract enhanced with herbs.",
      tags: ["Extract", "Enhanced", "Concentrated"]
    },
    {
      id: 4,
      name: "Shilajit Powder",
      price: 44.99,
      category: "Powder",
      rating: 4.5,
      weight: "50g",
      image: "/assets/images/shilajit.jpg",
      description: "Fine Shilajit powder for versatile consumption.",
      tags: ["Powder", "Versatile"]
    },
    {
      id: 5,
      name: "Ultimate Shilajit Pack",
      price: 129.99,
      category: "Bundle",
      rating: 5,
      weight: "Combo Pack",
      image: "/assets/images/shilajit.jpg",
      description: "Complete bundle with resin, capsules, and powder.",
      tags: ["Bundle", "Value", "Complete"]
    }
  ], []);

  // State management
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);

  // Categories
  const categories = ['All', 'Resin', 'Capsules', 'Extract', 'Powder', 'Bundle'];

  // Price ranges
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $40', value: 'under-40' },
    { label: '$40 - $60', value: '40-60' },
    { label: 'Over $60', value: 'over-60' }
  ];

  // Sort options
  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Rating', value: 'rating' }
  ];

  // Filter and sort products
  const filterProducts = React.useCallback(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Price range filter
    switch (priceRange) {
      case 'under-40':
        filtered = filtered.filter(product => product.price < 40);
        break;
      case '40-60':
        filtered = filtered.filter(product => product.price >= 40 && product.price <= 60);
        break;
      case 'over-60':
        filtered = filtered.filter(product => product.price > 60);
        break;
      default:
        break;
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured sorting (default order)
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, sortBy, priceRange, products]);

  // Effect to update filtered products when filters change
  React.useEffect(() => {
    filterProducts();
  }, [selectedCategory, sortBy, priceRange, filterProducts]);

  // Render star rating
  const RatingStars = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${index < rating
              ? 'text-amber-400 fill-amber-400'
              : 'text-gray-300'
              }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-lg text-gray-600">
              Discover our premium selection of pure Himalayan Shilajit products
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Mobile Filters Toggle */}
          <div className="md:hidden mb-6">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="w-full flex items-center justify-center"
            >
              <Filter className="h-5 w-5 mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={`md:w-64 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === category
                          ? 'bg-amber-100 text-amber-800'
                          : 'hover:bg-gray-100'
                          }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Price Range</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => setPriceRange(range.value)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${priceRange === range.value
                          ? 'bg-amber-100 text-amber-800'
                          : 'hover:bg-gray-100'
                          }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Only: Close Filters Button */}
                <Button
                  onClick={() => setShowFilters(false)}
                  className="md:hidden w-full mt-4"
                >
                  Apply Filters
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Sort Controls */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} products
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden group">
                    <div className="relative">
                      <Image
                        height={400}
                        width={400}
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Quick add overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-end justify-center opacity-0 group-hover:opacity-100">
                        <Button className="mb-4 bg-white text-black hover:bg-amber-50">
                          <ShoppingCart className="h-5 w-5 mr-2" />
                          Quick Add
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2">
                        <RatingStars rating={product.rating} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-amber-800">
                          ${product.price}
                        </span>
                        <span className="text-gray-600">{product.weight}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">
                    No products found matching your criteria
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedCategory('All');
                      setPriceRange('all');
                      setSortBy('featured');
                    }}
                    variant="outline"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;