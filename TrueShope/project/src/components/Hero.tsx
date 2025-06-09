import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1566909/pexels-photo-1566909.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Discover Premium
            <span className="block text-blue-300">Products</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
            Curated collection of the finest products for the modern lifestyle. 
            Quality, style, and innovation in every piece.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Shop Now</span>
            </Link>
            
            <Link
              to="/categories"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:-translate-y-1"
            >
              <span>Browse Categories</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};