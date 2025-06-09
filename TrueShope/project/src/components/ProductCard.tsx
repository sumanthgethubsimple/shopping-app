import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-blue-100 hover:border-blue-200">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.originalPrice && (
            <div className="absolute top-3 left-3 bg-blue-500 text-white text-sm font-medium px-2 py-1 rounded-lg">
              Sale
            </div>
          )}
          <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-50">
            <Heart className="h-4 w-4 text-blue-600" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>
          
          <h3 className="font-semibold text-blue-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          
          <p className="text-blue-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};