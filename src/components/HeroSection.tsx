import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

// Hero Section Component
const HeroSection = () => (
  <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 bg-gradient-to-b from-amber-50 to-white overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.1),transparent)]" />
    </div>
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2 z-10">
          <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-amber-700 mr-2" />
            <span className="text-amber-700 font-medium">Premium Quality Shilajit</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Pure Himalayan
            <span className="block text-amber-700">Natural Power</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-xl">
            Experience the ancient wisdom of Ayurveda with our premium Shilajit,
            harvested from the pristine heights of the Himalayas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={'/products'}>
              <Button size="lg" className="bg-amber-800 hover:bg-amber-900">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="mt-12 flex items-center space-x-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-amber-800">10k+</span>
              <span className="text-gray-600">Happy Customers</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-amber-800">100%</span>
              <span className="text-gray-600">Pure & Natural</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-200 rounded-full filter blur-3xl opacity-30" />
            <Image
              src="/assets/images/shilajit.jpg"
              alt="Premium Shilajit Product"
              width={600}
              height={600}
              className="relative rounded-2xl shadow-2xl"
            />

          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection