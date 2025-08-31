import React, { useState } from 'react';

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  product: string;
  avatar: string;
  verified: boolean;
}

const CustomerReviews: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews: Review[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'My daughter absolutely loves the art kit we got from Kidora! The quality is amazing and she spends hours creating beautiful drawings. The bundle deal saved us so much money too!',
      product: 'Creative Artist Bundle',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
      verified: true
    },
    {
      id: '2',
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      comment: 'Excellent service and fast delivery! The back to school bundle had everything we needed. My son is so excited to start the new school year with his new supplies.',
      product: 'Back to School Bundle',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
      verified: true
    },
    {
      id: '3',
      name: 'Ananya Patel',
      location: 'Bangalore',
      rating: 4,
      comment: 'Great quality products and the kids love them. The customer service was very helpful when I had questions about sizing. Will definitely shop here again!',
      product: 'Adventure Explorer Pack',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
      verified: true
    },
    {
      id: '4',
      name: 'Vikram Singh',
      location: 'Pune',
      rating: 5,
      comment: 'The bundle creation feature is genius! We mixed stationery with toys and got a great discount. My kids got exactly what they wanted, and I saved money. Win-win!',
      product: 'Custom Bundle',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
      verified: true
    },
    {
      id: '5',
      name: 'Meera Gupta',
      location: 'Chennai',
      rating: 5,
      comment: 'Love the eco-friendly packaging and the thoughtful product selection. Everything is age-appropriate and safe for kids. Kidora has become our go-to for all children\'s needs.',
      product: 'Premium Art Kit',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
      verified: true
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`ri-star-${i <= rating ? 'fill' : 'line'} text-yellow-400 text-lg`}
        />
      );
    }
    return stars;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Parents Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what thousands of happy parents
            have to say about their Kidora experience.
          </p>
        </div>

        {/* Featured Review Carousel */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevReview}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <i className="ri-arrow-left-line text-gray-600"></i>
            </button>
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentReview ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextReview}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <i className="ri-arrow-right-line text-gray-600"></i>
            </button>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img
                src={reviews[currentReview].avatar}
                alt={reviews[currentReview].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-purple-100"
              />
            </div>
            
            <div className="flex items-center justify-center mb-4">
              {renderStars(reviews[currentReview].rating)}
            </div>

            <blockquote className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
              "{reviews[currentReview].comment}"
            </blockquote>

            <div className="text-center">
              <div className="font-semibold text-gray-900 mb-1 flex items-center justify-center">
                {reviews[currentReview].name}
                {reviews[currentReview].verified && (
                  <i className="ri-verified-badge-fill text-blue-500 ml-2"></i>
                )}
              </div>
              <div className="text-gray-600 text-sm mb-2">
                {reviews[currentReview].location} • Purchased: {reviews[currentReview].product}
              </div>
            </div>
          </div>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900 flex items-center">
                    {review.name}
                    {review.verified && (
                      <i className="ri-verified-badge-fill text-blue-500 ml-1 text-sm"></i>
                    )}
                  </div>
                  <div className="text-gray-600 text-sm">{review.location}</div>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {renderStars(review.rating)}
              </div>

              <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                {review.comment}
              </p>

              <div className="text-xs text-gray-500">
                Purchased: {review.product}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 inline-block shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join 50,000+ Happy Families
            </h3>
            <p className="text-gray-600 mb-6">
              Start your journey with Kidora today and see why parents love shopping with us.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Shop Now & Join the Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;