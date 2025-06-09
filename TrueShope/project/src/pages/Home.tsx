import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowRight, Star, Shield, Truck, RefreshCw } from 'lucide-react';

export const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Free Shipping</h3>
              <p className="text-blue-600">Free shipping on all orders over $99</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Secure Payment</h3>
              <p className="text-blue-600">Your payment information is safe with us</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <RefreshCw className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">30-Day Returns</h3>
              <p className="text-blue-600">Easy returns within 30 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-2">Featured Products</h2>
              <p className="text-blue-600">Discover our handpicked selection of premium items</p>
            </div>
            <Link 
              to="/products"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              <span>View All</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products, exclusive offers, and style tips.
          </p>
          
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button 
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};