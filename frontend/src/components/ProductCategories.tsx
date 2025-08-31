import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  href: string;
  available: boolean;
}

const ProductCategories: React.FC = () => {
  const categories: Category[] = [
    {
      id: 'stationery',
      name: 'Stationery',
      description: 'Colorful pens, notebooks, and art supplies',
      icon: 'ri-pencil-line',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      href: '/categories/stationery',
      available: true
    },
    {
      id: 'clothes',
      name: 'Clothes',
      description: 'Fun outfits and comfortable wear',
      icon: 'ri-shirt-line',
      image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc63a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      href: '/categories/clothes',
      available: true
    },
    {
      id: 'toys',
      name: 'Toys',
      description: 'Educational and fun toys for all ages',
      icon: 'ri-gamepad-line',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      href: '/categories/toys',
      available: true
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Bags, bottles, and daily essentials',
      icon: 'ri-briefcase-line',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      href: '/categories/accessories',
      available: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our carefully organized collections designed to make
            shopping for your little ones easy and fun.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <Link to={category.href}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full">
                      <i className={`${category.icon} text-2xl text-purple-600`}></i>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center text-purple-600 font-semibold">
                      View Products
                      <i className="ri-arrow-right-line ml-1"></i>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;