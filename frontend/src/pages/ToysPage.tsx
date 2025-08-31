import React from 'react';
import { Link } from 'react-router-dom';

const ToysPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
              <i className="ri-gamepad-line text-4xl text-white"></i>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Educational Toys & Games
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Spark curiosity and imagination with our carefully selected educational toys. 
              Learning has never been this fun and engaging for young minds.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <i className="ri-time-line text-3xl text-blue-600"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Play, Learn, and Grow
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're curating the finest educational toys that combine fun with learning. 
              Every toy is selected for safety, durability, and developmental value.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-puzzle-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Puzzles & Building</h3>
              <p className="text-gray-600">Develop problem-solving skills with engaging puzzles and building sets</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-microscope-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">STEM Learning</h3>
              <p className="text-gray-600">Science, technology, engineering, and math toys for curious minds</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-gamepad-2-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Games</h3>
              <p className="text-gray-600">Board games and interactive toys that promote social skills</p>
            </div>
          </div>

          {/* Age Groups */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Age-Appropriate Learning
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our toys are carefully categorized by age groups to ensure optimal developmental benefits.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-bear-smile-line text-2xl text-yellow-600"></i>
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">0-2 Years</div>
                <p className="text-sm text-gray-600">Sensory toys and soft blocks</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-plant-line text-2xl text-green-600"></i>
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">3-5 Years</div>
                <p className="text-sm text-gray-600">Creative building and art toys</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-book-open-line text-2xl text-blue-600"></i>
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">6-8 Years</div>
                <p className="text-sm text-gray-600">Educational games and puzzles</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-rocket-line text-2xl text-purple-600"></i>
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">9+ Years</div>
                <p className="text-sm text-gray-600">Advanced STEM and strategy games</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Early Access to New Toys
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Be the first to discover new educational toys and get exclusive previews of our latest collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                Get Access
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              to="/"
              className="bg-white text-blue-600 border border-blue-200 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              Back to Home
            </Link>
            <Link
              to="/categories"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Browse All Categories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToysPage;