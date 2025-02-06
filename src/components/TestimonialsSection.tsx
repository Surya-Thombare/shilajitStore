import { Star } from "lucide-react";
import { Card } from "./ui/card";
import Image from "next/image";

// New Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "David Chen",
      title: "Fitness Enthusiast",
      content: "I've tried many supplements, but Shilajit has made a noticeable difference in my energy levels and recovery time.",
      image: "/assets/images/shilajit.jpg"
    },
    {
      name: "Sarah Johnson",
      title: "Yoga Instructor",
      content: "This pure Himalayan Shilajit has become an essential part of my daily wellness routine. The quality is unmatched.",
      image: "/assets/images/shilajit.jpg"
    },
    {
      name: "Michael Rodriguez",
      title: "Holistic Health Coach",
      content: "I recommend this Shilajit to my clients. The purity and potency are exactly what you'd expect from a premium product.",
      image: "/assets/images/shilajit.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real experiences from our valued customers who have made Shilajit part of their daily routine
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-b from-amber-50 to-white p-8">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <Star className="h-8 w-8 text-amber-500" />
                </div>
                <p className="text-gray-700 mb-6 flex-grow italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <Image
                    width={300}
                    height={200}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection