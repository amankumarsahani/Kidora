import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Bubbles from './Bubbles';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: HeroSlide[] = [
    {
      id: 1,
      title: "Magical Products for",
      subtitle: "Little Dreamers",
      description: "Discover a world of imagination with our carefully curated collection of children's stationery, toys, and accessories. Quality products that inspire creativity and joy.",
      backgroundImage: "/assets/Hero-bg.jpg",
      primaryButton: {
        text: "Shop Now",
        href: "/products"
      },
      secondaryButton: {
        text: "Browse Categories",
        href: "/categories"
      }
    },
    {
      id: 2,
      title: "Educational Toys for",
      subtitle: "Bright Minds",
      description: "Fuel your child's curiosity with our collection of educational toys and games. From building blocks to science kits, every product is designed to make learning fun.",
      backgroundImage: "/assets/Hero-bg.jpg",
      primaryButton: {
        text: "Explore Toys",
        href: "/categories/toys"
      },
      secondaryButton: {
        text: "View All Products",
        href: "/products"
      }
    },
    {
      id: 3,
      title: "Art Supplies for",
      subtitle: "Creative Souls",
      description: "Unleash your child's artistic potential with our premium art supplies and stationery. From colorful crayons to professional sketch pads, create masterpieces together.",
      backgroundImage: "/assets/Hero-bg.jpg",
      primaryButton: {
        text: "Shop Art Supplies",
        href: "/categories/stationery"
      },
      secondaryButton: {
        text: "See Collections",
        href: "/categories"
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden" style={{ height: 'calc(100vh - 64px)' }}>
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="relative h-full flex items-center justify-start bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(
                  to right,
                  rgba(255, 255, 255, 0.95) 0%,
                  rgba(255, 255, 255, 0.9) 50%,
                  rgba(255, 255, 255, 0.3) 70%,
                  transparent 100%
                ),
                url('${slide.backgroundImage}')`
              }}
            >
              <Bubbles />
              
              <div className="w-full px-4 sm:px-6 lg:px-8 z-10 relative">
                <div className="max-w-7xl mx-auto">
                  <div className="w-full lg:w-1/2">
                    <div className="animate-fadeInUp">
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        {slide.title}
                        <span className="text-purple-600 block">{slide.subtitle}</span>
                      </h1>
                      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          to={slide.primaryButton.href}
                          className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors text-center whitespace-nowrap cursor-pointer"
                        >
                          {slide.primaryButton.text}
                        </Link>
                        <Link
                          to={slide.secondaryButton.href}
                          className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors text-center whitespace-nowrap cursor-pointer"
                        >
                          {slide.secondaryButton.text}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-purple-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <i className="ri-arrow-left-s-line text-2xl"></i>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-purple-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <i className="ri-arrow-right-s-line text-2xl"></i>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-purple-600 scale-125'
                : 'bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;