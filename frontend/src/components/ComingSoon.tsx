import React from 'react';

interface ComingSoonItem {
  id: string;
  title: string;
  description: string;
  launchDate: string;
  category: string;
  image: string;
  features: string[];
  categoryColor: string;
}

const ComingSoon: React.FC = () => {
  const comingSoonItems: ComingSoonItem[] = [
    {
      id: '1',
      title: 'Cozy Winter Essentials',
      description: 'Warm sweaters, mittens, and winter accessories',
      launchDate: 'November 2024',
      category: 'Winter Collection',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      features: ['Warm Sweaters', 'Cozy Mittens', 'Winter Hats', 'Thermal Socks'],
      categoryColor: 'bg-indigo-500'
    },
    {
      id: '2',
      title: 'Fresh Spring Wardrobe',
      description: 'Light jackets, colorful dresses, and spring accessories',
      launchDate: 'March 2025',
      category: 'Spring Essentials',
      image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc63a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      features: ['Light Jackets', 'Colorful Dresses', 'Spring Shoes', 'Fun Accessories'],
      categoryColor: 'bg-green-500'
    },
    {
      id: '3',
      title: 'Summer Adventure Gear',
      description: 'Beach toys, swimwear, and outdoor play equipment',
      launchDate: 'May 2025',
      category: 'Summer Fun',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      features: ['Beach Toys', 'Swimwear', 'Sun Hats', 'Water Games'],
      categoryColor: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <i className="ri-time-line text-2xl text-indigo-500"></i>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Coming Soon
            </h2>
            <i className="ri-time-line text-2xl text-indigo-500"></i>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exciting new collections are on their way! Be the first to know
            when these amazing products launch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {comingSoonItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden relative hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-4 left-4 z-10">
                <span className={`${item.categoryColor} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                  {item.category}
                </span>
              </div>
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {item.launchDate}
                </span>
              </div>

              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">
                    What to expect:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get Early Access
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter and be the first to shop new collections.
              Plus, get 10% off your first order!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              No spam, only exciting updates about new products and exclusive offers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;