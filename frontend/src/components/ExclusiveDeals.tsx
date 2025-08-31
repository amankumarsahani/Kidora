import React from 'react';

interface Deal {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  image: string;
  daysLeft: number;
  items: string[];
}

const ExclusiveDeals: React.FC = () => {
  const deals: Deal[] = [
    {
      id: '1',
      name: 'Back to School Bundle',
      description: 'Everything your child needs for a successful school year',
      originalPrice: 2999,
      discountedPrice: 1999,
      discount: 33,
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
      daysLeft: 2,
      items: ['Premium Notebook Set', 'Colorful Pencil Kit', 'Stylish Backpack', 'Lunch Box']
    },
    {
      id: '2',
      name: 'Creative Artist Bundle',
      description: 'Unleash your child\'s creativity with this complete art set',
      originalPrice: 3499,
      discountedPrice: 2499,
      discount: 29,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
      daysLeft: 5,
      items: ['Watercolor Set', 'Sketch Pads', 'Brush Collection', 'Art Storage Box']
    },
    {
      id: '3',
      name: 'Adventure Explorer Pack',
      description: 'Perfect for little explorers and outdoor adventures',
      originalPrice: 2599,
      discountedPrice: 1899,
      discount: 27,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
      daysLeft: 7,
      items: ['Explorer Backpack', 'Binoculars', 'Compass', 'Adventure Journal']
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <i className="ri-flashlight-line text-2xl text-red-500"></i>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Exclusive Deals
            </h2>
            <i className="ri-flashlight-line text-2xl text-red-500"></i>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Limited time offers! Get amazing bundles at unbeatable prices.
            These deals won't last long!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-red-200 relative transform hover:scale-105"
            >
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Save {deal.discount}%
                </div>
              </div>
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {deal.daysLeft} days left
                </div>
              </div>

              <div className="h-48 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {deal.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {deal.description}
                </p>

                {/* Items included */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Includes:</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                    {deal.items.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <i className="ri-check-line text-green-500 mr-1"></i>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{deal.discountedPrice}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ₹{deal.originalPrice}
                      </span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      You save ₹{deal.originalPrice - deal.discountedPrice}
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
                  Grab This Deal
                </button>

                {/* Countdown or urgency indicator */}
                <div className="mt-3 text-center">
                  <span className="text-xs text-red-600 font-medium">
                    ⏰ Limited time offer - Only {deal.daysLeft} days left!
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all deals button */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Deals
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveDeals;