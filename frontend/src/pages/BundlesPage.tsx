import React from 'react';
import { Link } from 'react-router-dom';

const BundlesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
              <i className="ri-gift-line text-4xl text-white"></i>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Create Custom Bundles
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Mix and match products to create the perfect bundle for your child. 
              Combine stationery, toys, and accessories while saving money with bundle discounts.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <i className="ri-settings-3-line text-3xl text-orange-600"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Smart Bundle Builder
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our intelligent bundle creation tool will help you build the perfect combination 
              of products while maximizing savings and ensuring age-appropriate selections.
            </p>
          </div>

          {/* How It Works */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Categories</h3>
              <p className="text-gray-600">Select from stationery, toys, accessories, and clothing categories</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pick Products</h3>
              <p className="text-gray-600">Browse and select individual items to add to your custom bundle</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Save & Enjoy</h3>
              <p className="text-gray-600">Get automatic bundle discounts and have everything delivered together</p>
            </div>
          </div>

          {/* Bundle Benefits */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 lg:p-12 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Bundle Benefits
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Creating bundles isn't just convenient – it's smart shopping that benefits both you and your child.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-money-dollar-circle-line text-2xl text-green-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Save Money</h4>
                <p className="text-sm text-gray-600">Up to 20% off when buying in bundles</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-truck-line text-2xl text-blue-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Free Shipping</h4>
                <p className="text-sm text-gray-600">All bundles qualify for free delivery</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-gift-2-line text-2xl text-purple-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Gift Ready</h4>
                <p className="text-sm text-gray-600">Beautiful packaging perfect for gifts</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-medal-line text-2xl text-orange-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Curated Quality</h4>
                <p className="text-sm text-gray-600">AI-suggested combinations for best learning outcomes</p>
              </div>
            </div>
          </div>

          {/* Popular Bundle Ideas */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Popular Bundle Ideas</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get inspired by these popular combinations that other parents love
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-palette-line text-2xl text-pink-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Creative Artist Bundle</h4>
                <p className="text-gray-600 mb-4">Art supplies + sketch pad + creative toys</p>
                <div className="text-sm text-gray-500">Most popular with ages 4-8</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-graduation-cap-line text-2xl text-blue-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Back to School Bundle</h4>
                <p className="text-gray-600 mb-4">Stationery + backpack + lunch box</p>
                <div className="text-sm text-gray-500">Perfect for grades K-5</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-rocket-line text-2xl text-green-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">STEM Explorer Bundle</h4>
                <p className="text-gray-600 mb-4">Educational toys + science kit + accessories</p>
                <div className="text-sm text-gray-500">Great for curious minds 6-12</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Be First to Create Bundles
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get early access to our bundle builder and receive an exclusive 25% launch discount on your first custom bundle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap">
                Get Early Access
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              to="/"
              className="bg-white text-orange-600 border border-orange-200 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors text-center"
            >
              Back to Home
            </Link>
            <Link
              to="/categories"
              className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors text-center"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BundlesPage;