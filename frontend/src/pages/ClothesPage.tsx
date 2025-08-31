import React from 'react';
import { Link } from 'react-router-dom';

const ClothesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-pink-500 to-rose-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
              <i className="ri-shirt-line text-4xl text-white"></i>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Kids Clothing Collection
            </h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto mb-8">
              Comfortable, stylish, and fun outfits for every adventure. 
              Discover clothing that grows with your child's personality and active lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6">
              <i className="ri-time-line text-3xl text-pink-600"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fashion-Forward Kids Wear
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're sourcing the finest materials and designs for children's clothing. 
              Our collection will combine comfort, durability, and style.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-t-shirt-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Everyday Wear</h3>
              <p className="text-gray-600">Comfortable t-shirts, pants, and dresses for daily adventures</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-sun-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Seasonal Collections</h3>
              <p className="text-gray-600">Weather-appropriate clothing for all seasons and activities</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Special Occasions</h3>
              <p className="text-gray-600">Elegant outfits for birthdays, parties, and special events</p>
            </div>
          </div>

          {/* Size Guide Preview */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 lg:p-12 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Perfect Fit Guarantee
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our detailed size charts and easy exchange policy ensure every child gets the perfect fit.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white rounded-xl p-4">
                <div className="text-2xl font-bold text-pink-600 mb-1">2-4</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="text-2xl font-bold text-rose-600 mb-1">5-7</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-600 mb-1">8-10</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="text-2xl font-bold text-indigo-600 mb-1">11-14</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Fashion Club
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get early access to new collections, exclusive discounts, and style tips for your little ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <button className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors whitespace-nowrap">
                Join Club
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              to="/"
              className="bg-white text-pink-600 border border-pink-200 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors text-center"
            >
              Back to Home
            </Link>
            <Link
              to="/categories"
              className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors text-center"
            >
              Browse All Categories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClothesPage;