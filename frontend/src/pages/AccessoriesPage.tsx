import React from 'react';
import { Link } from 'react-router-dom';

const AccessoriesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
              <i className="ri-briefcase-line text-4xl text-white"></i>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Kids Accessories
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Practical and stylish accessories for every adventure. 
              From school bags to water bottles, we have everything your child needs for daily activities.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <i className="ri-time-line text-3xl text-green-600"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Essential Accessories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're selecting the most practical, durable, and stylish accessories for children. 
              Every item is chosen for quality, safety, and everyday usability.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shopping-bag-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bags & Backpacks</h3>
              <p className="text-gray-600">Durable and comfortable bags perfect for school and outdoor adventures</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-cup-line text-2xl text-cyan-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bottles & Lunch Boxes</h3>
              <p className="text-gray-600">Safe and practical containers for hydration and healthy meals</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-headphone-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tech Accessories</h3>
              <p className="text-gray-600">Kid-safe headphones, tablet cases, and educational tech accessories</p>
            </div>
          </div>

          {/* Product Categories */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Complete Daily Essentials
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything your child needs for school, play, and adventures, organized by daily activities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-school-line text-2xl text-red-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">School Essentials</h4>
                <p className="text-sm text-gray-600">Backpacks, lunch boxes, pencil cases</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-football-line text-2xl text-blue-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Sports & Activity</h4>
                <p className="text-sm text-gray-600">Sports bags, water bottles, gear</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-sun-line text-2xl text-yellow-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Outdoor Fun</h4>
                <p className="text-sm text-gray-600">Hats, sunglasses, adventure gear</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-smartphone-line text-2xl text-indigo-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Tech & Learning</h4>
                <p className="text-sm text-gray-600">Tablet cases, headphones, organizers</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Complete Your Child's Collection
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get notified when our accessories collection launches and receive a special bundle discount for multiple items.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors whitespace-nowrap">
                Get Bundle Deals
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              to="/"
              className="bg-white text-green-600 border border-green-200 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors text-center"
            >
              Back to Home
            </Link>
            <Link
              to="/categories"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors text-center"
            >
              Browse All Categories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessoriesPage;