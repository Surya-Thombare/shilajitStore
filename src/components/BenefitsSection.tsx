import { Battery, Brain, Heart, Leaf } from "lucide-react";

// New Benefits Section
const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Leaf className="h-12 w-12 text-amber-700" />,
      title: "Natural Energy Boost",
      description: "Experience sustained energy throughout the day without crashes or jitters."
    },
    {
      icon: <Brain className="h-12 w-12 text-amber-700" />,
      title: "Cognitive Enhancement",
      description: "Improve focus, memory, and mental clarity with regular use."
    },
    {
      icon: <Battery className="h-12 w-12 text-amber-700" />,
      title: "Cellular Rejuvenation",
      description: "Rich in fulvic acid and minerals that support cellular health."
    },
    {
      icon: <Heart className="h-12 w-12 text-amber-700" />,
      title: "Overall Wellness",
      description: "Support immune function and promote overall vitality."
    }
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Shilajit?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the transformative benefits of this ancient Ayurvedic superfood
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6 p-4 bg-amber-100 rounded-xl inline-block">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection