import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const location = useLocation();
  const [cartCount] = useState(3);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white text-sm">M</span>
            </div>
            <span className="text-lg tracking-tight text-neutral-900">Minimal</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/shop"
              className={`transition-colors ${
                isActive('/shop')
                  ? 'text-neutral-900'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/shop"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              About
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="text-neutral-600 hover:text-neutral-900 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              className="relative text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="md:hidden text-neutral-600 hover:text-neutral-900 transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
