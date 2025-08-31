import React from 'react';

const BundleCreation: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden">
      {/* Fun Background Elements */}
      <div className="absolute top-10 left-10 animate-spin" style={{ animationDuration: '10s' }}>
        <div className="w-20 h-20 bg-yellow-300 rounded-full opacity-20"></div>
      </div>
      <div className="absolute top-20 right-20 animate-bounce">
        <span className="text-4xl">🎁</span>
      </div>
      <div className="absolute bottom-20 left-20 animate-pulse">
        <span className="text-3xl">⭐</span>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            🎨 Mix & Match Your Dream Pack! 🎨
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Hey awesome kids! Want to create your very own super cool bundle? 
            Pick your favorite things and we'll give you an amazing discount! 
            The more you choose, the more you save! 🌟💰
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Bundle Creation"
                  className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-600/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Happy Bundle</h3>
                  <p className="text-white/90">Save up to 25% on bundles</p>
                  <div className="flex items-center mt-2">
                    <i className="ri-star-fill text-yellow-400 mr-1"></i>
                    <i className="ri-star-fill text-yellow-400 mr-1"></i>
                    <i className="ri-star-fill text-yellow-400 mr-1"></i>
                    <i className="ri-star-fill text-yellow-400 mr-1"></i>
                    <i className="ri-star-fill text-yellow-400 mr-2"></i>
                    <span className="text-white/80 text-sm">4.9/5</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl border-2 border-pink-200 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Mix & Match Magic!</h4>
                  <p className="text-gray-600 font-medium">Pick anything you want - it's like building your own treasure box! 🎁</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Super Savings!</h4>
                  <p className="text-gray-600 font-medium">The more stuff you pick, the more money you save! It's like magic! ✨</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl border-2 border-blue-200 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🎉</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Perfect Surprise Packs!</h4>
                  <p className="text-gray-600 font-medium">Great for birthdays, holidays, or just because you're awesome! 🌟</p>
                </div>
              </div>

              <div className="pt-6">
                <button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white py-5 px-8 rounded-full font-bold text-xl hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 hover:rotate-1 shadow-xl hover:shadow-2xl">
                  🚀 Let's Build My Bundle! 🚀
                </button>
                <p className="text-center text-gray-600 text-lg font-medium mt-3">
                  🆓 Free shipping on bundles over ₹999 • No boring rules! 🎈
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Bundle Examples */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Popular Bundle Ideas
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Back to School",
                items: "Notebook + Pencil Set + Backpack",
                savings: "₹150",
                image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
              },
              {
                name: "Art Explorer",
                items: "Drawing Kit + Coloring Books + Crayons",
                savings: "₹200",
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
              },
              {
                name: "Outdoor Adventure",
                items: "Water Bottle + Hat + Activity Set",
                savings: "₹120",
                image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
              }
            ].map((bundle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4">
                <img
                  src={bundle.image}
                  alt={bundle.name}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold text-gray-900 mb-1">{bundle.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{bundle.items}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold text-sm">Save {bundle.savings}</span>
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                    Create Similar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundleCreation;