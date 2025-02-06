import { Award, CheckCircle, Shield } from "lucide-react";

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-amber-700" />,
      title: "100% Pure & Natural",
      description: "Sourced directly from the Himalayas"
    },
    {
      icon: <Shield className="h-6 w-6 text-amber-700" />,
      title: "Lab Tested",
      description: "Certified for purity and potency"
    },
    {
      icon: <Award className="h-6 w-6 text-amber-700" />,
      title: "Premium Quality",
      description: "Carefully processed and preserved"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 rounded-xl hover:bg-amber-50 transition-colors">
              <div className="p-3 bg-amber-100 rounded-lg">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection