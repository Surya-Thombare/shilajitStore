import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Facebook, Instagram, Mail, MapPin, Mountain, Phone, Shield, Twitter } from "lucide-react";
import Image from "next/image";

// About Us Page with Contact
const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-600">
              Bringing ancient Himalayan wisdom to modern wellness
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, our mission has been to bring the purest form of Shilajit
                to health-conscious individuals worldwide. We work directly with local
                communities in the Himalayas to sustainably source our Shilajit.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to quality means we maintain strict testing protocols
                and processing standards to ensure you receive the most potent and
                pure Shilajit possible.
              </p>
            </div>
            <div>
              <Image
                width={500}
                height={500}
                src="/assets/images/shilajit.jpg"
                alt="Our Journey"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <Mountain className="h-12 w-12 text-amber-700 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Purity</h3>
                <p className="text-gray-600">
                  We never compromise on quality, ensuring every batch meets our strict
                  standards for purity and potency.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-amber-700 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
                <p className="text-gray-600">
                  Our harvesting practices respect both nature and local communities,
                  ensuring sustainable sourcing.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-amber-700 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Tradition</h3>
                <p className="text-gray-600">
                  We honor ancient Ayurvedic wisdom while embracing modern scientific
                  standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-amber-700 mr-4" />
                    <p className="text-gray-600">
                      1234 Himalayan Way<br />
                      Pure Valley, HP 12345
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-amber-700 mr-4" />
                    <p className="text-gray-600">info@shilajit.com</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-amber-700 mr-4" />
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-amber-700 hover:text-amber-800">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-amber-700 hover:text-amber-800">
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-amber-700 hover:text-amber-800">
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <Button className="w-full bg-amber-800 hover:bg-amber-900">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage