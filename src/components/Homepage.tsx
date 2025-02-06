// import { Navigation } from "lucide-react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import ProductShowcase from "./ProductShowcase";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import BenefitsSection from "./BenefitsSection";
import TestimonialsSection from "./TestimonialsSection";
import Navigation from "./Navigation";

// Main Homepage Component
const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <ProductShowcase />
      <TestimonialsSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Homepage;