import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ArrowRight, Tag, Lock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  color?: string;
}

export function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 299,
      image:
        'https://images.unsplash.com/photo-1651905714402-f4fbbc075a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbW9kZXJuJTIwaGVhZHBob25lcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzA1OTEyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quantity: 1,
      color: 'Midnight Black',
    },
    {
      id: '2',
      name: 'Minimalist Smart Watch',
      price: 399,
      image:
        'https://images.unsplash.com/photo-1758887953059-ca6f8e454207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXRjaCUyMG1pbmltYWwlMjBkZXNpZ258ZW58MXx8fHwxNzcwNTkxMjE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      quantity: 1,
      color: 'Silver',
    },
    {
      id: '3',
      name: 'Premium Wireless Earbuds',
      price: 199,
      image:
        'https://images.unsplash.com/photo-1591923271591-478bb32b57ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzcwNTQzMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      quantity: 1,
      color: 'White',
    },
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'save20') {
      setAppliedPromo('save20');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = appliedPromo === 'save20' ? subtotal * 0.2 : 0;
  const shipping = subtotal > 500 ? 0 : 15;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h2 className="text-2xl text-neutral-900 mb-2">Your cart is empty</h2>
          <p className="text-neutral-600 mb-8">Add some products to get started</p>
          <Link
            to="/shop"
            className="inline-flex items-center px-8 py-4 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors"
          >
            Continue Shopping
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl text-neutral-900 mb-2">Shopping Cart</h1>
          <p className="text-neutral-600">{cartItems.length} items in your cart</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 p-6 bg-white border border-neutral-200 rounded-2xl"
              >
                {/* Image */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-neutral-100 rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-4 mb-2">
                    <div>
                      <Link
                        to={`/product/${item.id}`}
                        className="text-lg text-neutral-900 hover:underline line-clamp-1"
                      >
                        {item.name}
                      </Link>
                      {item.color && (
                        <p className="text-sm text-neutral-500 mt-1">{item.color}</p>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors flex-shrink-0"
                    >
                      <X className="w-5 h-5 text-neutral-600" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity */}
                    <div className="inline-flex items-center border border-neutral-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-sm text-neutral-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Price */}
                    <p className="text-lg text-neutral-900">${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Summary Card */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 space-y-6">
                <h2 className="text-xl text-neutral-900">Order Summary</h2>

                {/* Promo Code */}
                <div>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                      <input
                        type="text"
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 transition-all"
                      />
                    </div>
                    <button
                      onClick={applyPromoCode}
                      className="px-6 py-3 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {appliedPromo && (
                    <p className="text-sm text-green-600 mt-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                      Promo code "SAVE20" applied
                    </p>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 pt-6 border-t border-neutral-300">
                  <div className="flex justify-between text-neutral-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (20%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-neutral-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl text-neutral-900 pt-3 border-t border-neutral-300">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full py-4 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
                  <Lock className="w-5 h-5" />
                  Secure Checkout
                </button>

                {/* Benefits */}
                <div className="space-y-3 pt-6 border-t border-neutral-300">
                  <div className="flex items-start gap-3 text-sm text-neutral-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 flex-shrink-0" />
                    <span>Free shipping on orders over $500</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-neutral-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 flex-shrink-0" />
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-neutral-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 flex-shrink-0" />
                    <span>Secure payment processing</span>
                  </div>
                </div>
              </div>

              {/* Continue Shopping */}
              <Link
                to="/shop"
                className="block text-center py-4 border border-neutral-300 text-neutral-900 rounded-xl hover:border-neutral-900 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
