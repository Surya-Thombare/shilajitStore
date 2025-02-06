// Enhanced Footer
const Footer = () => (
  <footer className="bg-gray-900">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">SHILAJIT</h3>
          <p className="text-gray-400 mb-6">
            Premium quality Himalayan Shilajit, bringing ancient wisdom to modern wellness.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
              <span className="sr-only">Facebook</span>
              {/* Add social icons here */}
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Shop</a></li>
            <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Shipping</a></li>
            <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Returns</a></li>
            <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li>1234 Himalayan Way</li>
            <li>Pure Valley, HP 12345</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Email: info@shilajit.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 py-8">
        <div className="text-center text-gray-400">
          <p>&copy; 2025 Shilajit. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer