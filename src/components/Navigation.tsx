import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

// Navigation Component
const Navigation = () => (
  <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <Link href={'/'}>
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
            SHILAJIT
          </div>
        </Link>
        <div className="hidden md:flex space-x-12">
          <Link href="/" className="text-gray-700 hover:text-amber-700 font-medium">Home</Link>
          <Link href="/products" className="text-gray-700 hover:text-amber-700 font-medium">Products</Link>
          <Link href="/benefits " className="text-gray-700 hover:text-amber-700 font-medium">Benefits</Link>
          <Link href="/about" className="text-gray-700 hover:text-amber-700 font-medium">About</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href={'/cart'} >
            <ShoppingCart className="h-5 w-5" />
          </Link>
          <Link href={'/products'} >
            <Button className="hidden md:flex">

              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation