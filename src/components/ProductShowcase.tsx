import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

// Product Showcase Section
const ProductShowcase = () => {
  const products = [
    {
      name: "Premium Shilajit Resin",
      price: "$49.99",
      description: "Pure, unprocessed resin form",
      image: "/assets/images/shilajit.jpg"
    },
    {
      name: "Shilajit Gold Capsules",
      price: "$39.99",
      description: "Convenient daily supplement",
      image: "/assets/images/shilajit.jpg"
    },
    {
      name: "Shilajit Extract Plus",
      price: "$69.99",
      description: "Enhanced formula with herbs",
      image: "/assets/images/shilajit.jpg"
    }
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of pure Himalayan Shilajit products,
            carefully crafted to preserve their natural benefits.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden">
                <Image
                  width={500}
                  height={400}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-800">{product.price}</span>
                  <Button variant="outline" className="border-amber-800 text-amber-800">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase