import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Cart: React.FC = () => {
  const { items, total, itemCount, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Your cart is empty</h2>
          <p className="text-blue-600 mb-8">Add some products to get started!</p>
          <Link
            to="/products"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-blue-200">
              {items.map((item) => (
                <div key={item.id} className="flex items-center p-6 border-b border-blue-200 last:border-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1 ml-6">
                    <h3 className="font-semibold text-blue-900 mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-blue-600 text-sm mb-2">
                      {item.product.category}
                    </p>
                    <p className="text-xl font-bold text-blue-900">
                      ${item.product.price}
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-blue-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 font-medium text-blue-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-sm border border-blue-200 p-6">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-blue-600">Items ({itemCount})</span>
                  <span className="font-medium text-blue-900">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-600">Shipping</span>
                  <span className="font-medium text-blue-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-600">Tax</span>
                  <span className="font-medium text-blue-900">${(total * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-blue-200 pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-blue-900">Total</span>
                    <span className="text-blue-900">${(total * 1.08).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center block"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/products"
                className="w-full text-blue-600 hover:text-blue-700 py-3 px-6 text-center block mt-4 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};