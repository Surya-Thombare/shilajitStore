import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Battery, Brain, Heart, Leaf } from "lucide-react";
import Image from "next/image";

// Benefits Page
const BenefitsPage = () => {
  const mainBenefits = [
    {
      icon: <Brain className="h-16 w-16 text-amber-700" />,
      title: "Cognitive Enhancement",
      description: "Shilajit has been traditionally used to enhance mental clarity, focus, and memory. Rich in fulvic acid and minerals, it supports optimal brain function and cognitive performance.",
      details: [
        "Improved mental clarity and focus",
        "Enhanced memory retention",
        "Better cognitive processing",
        "Reduced mental fatigue"
      ]
    },
    {
      icon: <Battery className="h-16 w-16 text-amber-700" />,
      title: "Natural Energy",
      description: "Experience sustained, natural energy throughout the day. Shilajit helps in cellular energy production and maintains healthy energy levels without crashes.",
      details: [
        "Sustained energy levels",
        "Enhanced physical performance",
        "Improved stamina",
        "Natural ATP production"
      ]
    },
    {
      icon: <Heart className="h-16 w-16 text-amber-700" />,
      title: "Overall Wellness",
      description: "Support your body's natural healing processes with Shilajit's rich mineral content and antioxidant properties, promoting overall health and vitality.",
      details: [
        "Immune system support",
        "Anti-aging properties",
        "Improved nutrient absorption",
        "Enhanced vitality"
      ]
    }
  ];

  const scientificBenefits = [
    {
      title: "Rich in Fulvic Acid",
      description: "Contains over 84 minerals in ionic form for optimal absorption",
    },
    {
      title: "Antioxidant Properties",
      description: "Helps combat free radicals and oxidative stress",
    },
    {
      title: "Anti-Inflammatory",
      description: "Supports healthy inflammatory response",
    },
    {
      title: "Cellular Energy",
      description: "Enhances mitochondrial function and ATP production",
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">The Power of Pure Shilajit</h1>
            <p className="text-xl text-gray-600">
              Discover the ancient wisdom and modern science behind our premium Himalayan Shilajit
            </p>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {mainBenefits.map((benefit, index) => (
            <div key={index} className="mb-20 last:mb-0">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <div className="p-6 bg-amber-100 rounded-2xl inline-block mb-6">
                    {benefit.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{benefit.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{benefit.description}</p>
                  <ul className="space-y-3">
                    {benefit.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center">
                        <Leaf className="h-5 w-5 text-amber-700 mr-3" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <Image
                    width={500}
                    height={400}
                    src="/assets/images/shilajit.jpg"
                    alt={benefit.title}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scientific Benefits */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Scientific Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scientificBenefits.map((benefit, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsPage