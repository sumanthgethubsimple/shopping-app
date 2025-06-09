import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, User, Heart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { itemCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-blue-900">True Shope</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
              Home
            </Link>
            <Link to="/products" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
              Products
            </Link>
            <Link to="/categories" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
              Categories
            </Link>
            <Link to="/about" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
              About
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-blue-400" />
            </div>
          </form>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-blue-600 hover:text-blue-800 transition-colors">
              <Heart className="h-6 w-6" />
            </button>
            
            <Link to="/cart" className="relative p-2 text-blue-600 hover:text-blue-800 transition-colors">
              <ShoppingBag className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-blue-600 hover:text-blue-800 transition-colors">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                  ) : (
                    <User className="h-6 w-6" />
                  )}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50">
                    Profile
                  </Link>
                  <Link to="/orders" className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50">
                    Orders
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-blue-700 hover:bg-blue-50"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="p-2 text-blue-600 hover:text-blue-800 transition-colors">
                <User className="h-6 w-6" />
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-blue-200 py-4">
            <div className="flex flex-col space-y-4">
              <form onSubmit={handleSearch} className="px-2">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-blue-400" />
                </div>
              </form>
              <Link to="/" className="block px-2 py-2 text-blue-600 hover:text-blue-800 transition-colors font-medium">
                Home
              </Link>
              <Link to="/products" className="block px-2 py-2 text-blue-600 hover:text-blue-800 transition-colors font-medium">
                Products
              </Link>
              <Link to="/categories" className="block px-2 py-2 text-blue-600 hover:text-blue-800 transition-colors font-medium">
                Categories
              </Link>
              <Link to="/about" className="block px-2 py-2 text-blue-600 hover:text-blue-800 transition-colors font-medium">
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};