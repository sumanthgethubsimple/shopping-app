import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Star, ShoppingBag, Heart, Share2, Check, Truck, Shield, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return <Navigate to="/products\" replace />;
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-blue-50 rounded-2xl overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-blue-500' : 'border-blue-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="text-blue-600 font-medium">{product.category}</span>
              <h1 className="text-3xl font-bold text-blue-900 mt-2">{product.name}</h1>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-blue-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-4xl font-bold text-blue-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-blue-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-semibold text-blue-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span className="text-blue-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border border-blue-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-medium text-blue-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    +
                  </button>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Heart className="h-5 w-5" />
                  <span>Add to Wishlist</span>
                </button>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <Truck className="h-6 w-6 text-blue-500" />
                <span className="text-sm text-blue-600">Free shipping</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-blue-500" />
                <span className="text-sm text-blue-600">2-year warranty</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-6 w-6 text-blue-500" />
                <span className="text-sm text-blue-600">30-day returns</span>
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="font-semibold text-blue-900 mb-4">Specifications</h3>
              <div className="bg-blue-50 rounded-lg p-4">
                <dl className="grid grid-cols-1 gap-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-blue-200 last:border-0">
                      <dt className="font-medium text-blue-900">{key}</dt>
                      <dd className="text-blue-600">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};