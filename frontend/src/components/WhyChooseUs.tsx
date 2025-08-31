import React from 'react';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      id: '1',
      icon: 'ri-shield-check-line',
      title: 'Safe & Tested',
      description: 'All products are safety tested and certified for children. We prioritize your child\'s wellbeing.',
      color: 'text-green-500'
    },
    {
      id: '2',
      icon: 'ri-truck-line',
      title: 'Free Shipping',
      description: 'Free delivery on orders over ₹999. Fast and secure shipping to your doorstep.',
      color: 'text-blue-500'
    },
    {
      id: '3',
      icon: 'ri-medal-line',
      title: 'Premium Quality',
      description: 'Hand-picked products from trusted brands. Quality guaranteed or your money back.',
      color: 'text-yellow-500'
    },
    {
      id: '4',
      icon: 'ri-customer-service-line',
      title: '24/7 Support',
      description: 'Our friendly customer support team is always ready to help you with any questions.',
      color: 'text-purple-500'
    },
    {
      id: '5',
      icon: 'ri-refresh-line',
      title: 'Easy Returns',
      description: 'Not satisfied? Return within 30 days for a full refund. No questions asked.',
      color: 'text-red-500'
    },
    {
      id: '6',
      icon: 'ri-gift-line',
      title: 'Bundle Savings',
      description: 'Create custom bundles and save more. Mix and match products for better deals.',
      color: 'text-pink-500'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Parents Choose Kidora
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best shopping experience for you and your children.
            Here's what makes us special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <i className={`${feature.icon} text-2xl ${feature.color}`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-purple-100">Happy Families</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-purple-100">Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.5%</div>
              <div className="text-purple-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5★</div>
              <div className="text-purple-100">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;