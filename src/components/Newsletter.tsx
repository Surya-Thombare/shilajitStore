import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

// Newsletter Section with Better Design
const Newsletter = () => (
  <section className="py-20 bg-amber-800">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
        <p className="text-lg mb-8 text-amber-100">
          Subscribe to receive exclusive offers, health tips, and updates about our premium Shilajit products.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg"
          />
          <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-100 px-8">
            Subscribe
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Newsletter