import React from 'react';
import { Link } from 'react-router-dom';

const StationeryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
              <i className="ri-pencil-line text-4xl text-white"></i>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Stationery Collection
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Discover our premium collection of colorful pens, notebooks, and art supplies. 
              Everything your child needs to unleash their creativity and excel in learning.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <i className="ri-time-line text-3xl text-purple-600"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Something Amazing is Coming
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're carefully curating the best stationery products for children. 
              Our collection will feature high-quality, safe, and inspiring materials.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-palette-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Art Supplies</h3>
              <p className="text-gray-600">Premium crayons, markers, paints, and brushes for creative expression</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-book-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Notebooks & Journals</h3>
              <p className="text-gray-600">High-quality paper products designed for young learners</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-pencil-ruler-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Writing Tools</h3>
              <p className="text-gray-600">Ergonomic pens, pencils, and erasers perfect for small hands</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get Notified When We Launch
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Be the first to know when our stationery collection goes live. 
              Join our waitlist for exclusive early access and special launch discounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap">
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              to="/"
              className="bg-white text-purple-600 border border-purple-200 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors text-center"
            >
              Back to Home
            </Link>
            <Link
              to="/categories"
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors text-center"
            >
              Browse All Categories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StationeryPage;