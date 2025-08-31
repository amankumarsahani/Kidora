import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCategories from '../components/ProductCategories';
import ProductShowcase from '../components/ProductShowcase';
import BundleCreation from '../components/BundleCreation';
import ExclusiveDeals from '../components/ExclusiveDeals';
import WhyChooseUs from '../components/WhyChooseUs';
import CustomerReviews from '../components/CustomerReviews';
import ComingSoon from '../components/ComingSoon';

const HomePage: React.FC = () => {
  // Sample product data
  const bestsellerProducts = [
    {
      id: '1',
      name: 'Premium Art Kit with Wooden Box',
      price: 1299,
      originalPrice: 1599,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
      rating: 5,
      reviewCount: 127,
      isBestseller: true
    },
    {
      id: '2',
      name: 'Adventure Explorer Backpack',
      price: 899,
      originalPrice: 1199,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
      rating: 4,
      reviewCount: 89,
      isBestseller: true
    },
    {
      id: '3',
      name: 'Educational Building Blocks Set',
      price: 699,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
      rating: 5,
      reviewCount: 156,
      isBestseller: true
    },
    {
      id: '4',
      name: 'Princess Dress-Up Collection',
      price: 1499,
      originalPrice: 1799,
      image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc63a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
      rating: 4,
      reviewCount: 73,
      isBestseller: true
    }
  ];

  const newArrivals = [
    {
      id: '5',
      name: 'Space Adventure Journal',
      price: 449,
      image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
      rating: 4,
      reviewCount: 24,
      isNew: true
    },
    {
      id: '6',
      name: 'Dinosaur Excavation Kit',
      price: 799,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
      rating: 5,
      reviewCount: 18,
      isNew: true
    },
    {
      id: '7',
      name: 'Unicorn Cozy Hoodie',
      price: 899,
      image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc63a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
      rating: 4,
      reviewCount: 12,
      isNew: true
    },
    {
      id: '8',
      name: 'Ocean Adventure Playset',
      price: 1199,
      originalPrice: 1399,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
      rating: 5,
      reviewCount: 31,
      isNew: true
    }
  ];

  return (
    <main>
      <HeroSection />
      <ProductCategories />
      <ProductShowcase 
        title="Bestsellers"
        subtitle="Most loved products by kids and parents - these are our top performers!"
        products={bestsellerProducts}
      />
      <BundleCreation />
      <ProductShowcase 
        title="New Arrivals"
        subtitle="Fresh additions to spark creativity and joy - discover the latest in children's products"
        products={newArrivals}
        backgroundColor="bg-gradient-to-br from-blue-50 to-cyan-50"
      />
      <ExclusiveDeals />
      <WhyChooseUs />
      <CustomerReviews />
      <ComingSoon />
    </main>
  );
};

export default HomePage;