import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Truck, ArrowRight } from 'lucide-react';

export const OrderConfirmation: React.FC = () => {
  const orderNumber = `TS${Date.now().toString().slice(-8)}`;

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-blue-500" />
          </div>
          
          <h1 className="text-2xl font-bold text-blue-900 mb-2">Order Confirmed!</h1>
          <p className="text-blue-600 mb-6">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-600 mb-1">Order Number</p>
            <p className="font-mono font-bold text-lg text-blue-900">{orderNumber}</p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-blue-600 mb-8">
            <Truck className="h-5 w-5" />
            <span className="font-medium">Estimated delivery: 3-5 business days</span>
          </div>
          
          <div className="space-y-3">
            <Link
              to="/orders"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors block"
            >
              Track Your Order
            </Link>
            
            <Link
              to="/products"
              className="w-full text-blue-600 hover:text-blue-700 py-3 px-6 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};