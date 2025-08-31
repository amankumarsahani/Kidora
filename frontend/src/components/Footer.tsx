import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-pacifico text-purple-400">
                Kidora
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Magical products for little dreamers. Quality children's items that inspire creativity and joy.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="https://instagram.com" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a href="https://twitter.com" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="https://youtube.com" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <i className="ri-youtube-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="/stationery" className="text-gray-400 hover:text-white transition-colors">Stationery</a></li>
              <li><a href="/toys" className="text-gray-400 hover:text-white transition-colors">Toys</a></li>
              <li><a href="/accessories" className="text-gray-400 hover:text-white transition-colors">Accessories</a></li>
              <li><a href="/clothes" className="text-gray-400 hover:text-white transition-colors">Clothes <span className="text-purple-400 text-xs">(Coming Soon)</span></a></li>
              <li><a href="/bundles" className="text-gray-400 hover:text-white transition-colors">Create Bundle</a></li>
              <li><a href="/deals" className="text-gray-400 hover:text-white transition-colors">Special Deals</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="/returns" className="text-gray-400 hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="/size-guide" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/track-order" className="text-gray-400 hover:text-white transition-colors">Track Your Order</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers, updates, and new product announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
              <span className="text-gray-400">© 2024 Kidora. All rights reserved.</span>
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">We accept:</span>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-white rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-900">VISA</span>
                </div>
                <div className="w-8 h-5 bg-white rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-900">MC</span>
                </div>
                <div className="w-8 h-5 bg-white rounded flex items-center justify-center">
                  <i className="ri-paypal-line text-sm text-blue-600"></i>
                </div>
                <div className="w-8 h-5 bg-white rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-900">UPI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;