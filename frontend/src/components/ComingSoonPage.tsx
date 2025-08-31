import React from 'react';
import { Link } from 'react-router-dom';

interface ComingSoonPageProps {
  category?: string;
  icon?: string;
  description?: string;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ 
  category = "This Page", 
  icon = "ri-time-line",
  description = "We're working hard to bring you an amazing experience. Stay tuned!"
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
              <i className={`${icon} text-4xl text-white`}></i>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {category}
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
              <i className="ri-rocket-line text-3xl text-indigo-600"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We're Building Something Amazing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team is working around the clock to create the best possible experience for you and your family. 
              Every detail is being carefully crafted with love and attention.
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Only the finest products make it to our collection</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Child Safety First</h3>
              <p className="text-gray-600">All products meet the highest safety standards</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-truck-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and secure shipping to your doorstep</p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 lg:p-12 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Be the First to Know
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our newsletter and get early access to new features, exclusive deals, and special promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors whitespace-nowrap">
                Notify Me
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-center"
            >
              <i className="ri-home-line mr-2"></i>
              Back to Home
            </Link>
            <Link
              to="/categories"
              className="bg-white text-indigo-600 border border-indigo-200 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-center"
            >
              <i className="ri-grid-line mr-2"></i>
              Browse Categories
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-8">
              Join thousands of happy families who trust Kidora
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">1000+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-sm font-medium text-gray-600">98% Satisfaction Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-sm font-medium text-gray-600">5-Star Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoonPage;