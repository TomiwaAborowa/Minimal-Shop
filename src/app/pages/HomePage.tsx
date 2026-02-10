import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  const featuredProducts = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 299,
      image: 'https://images.unsplash.com/photo-1651905714402-f4fbbc075a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbW9kZXJuJTIwaGVhZHBob25lcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzA1OTEyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Audio',
      isNew: true,
    },
    {
      id: '2',
      name: 'Minimalist Smart Watch',
      price: 399,
      image: 'https://images.unsplash.com/photo-1758887953059-ca6f8e454207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXRjaCUyMG1pbmltYWwlMjBkZXNpZ258ZW58MXx8fHwxNzcwNTkxMjE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Accessories',
      isNew: true,
    },
    {
      id: '3',
      name: 'Premium Wireless Earbuds',
      price: 199,
      image: 'https://images.unsplash.com/photo-1591923271591-478bb32b57ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzcwNTQzMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Audio',
    },
    {
      id: '4',
      name: 'Modern Camera Kit',
      price: 899,
      image: 'https://images.unsplash.com/photo-1750891892490-db905b7ff7cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudCUyMG1pbmltYWx8ZW58MXx8fHwxNzcwNTkxMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Photography',
    },
  ];

  const categories = [
    {
      name: 'Audio',
      image: 'https://images.unsplash.com/photo-1651905714402-f4fbbc075a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbW9kZXJuJTIwaGVhZHBob25lcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzA1OTEyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      count: 24,
    },
    {
      name: 'Wearables',
      image: 'https://images.unsplash.com/photo-1758887953059-ca6f8e454207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXRjaCUyMG1pbmltYWwlMjBkZXNpZ258ZW58MXx8fHwxNzcwNTkxMjE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      count: 18,
    },
    {
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1683921377994-928bd73b889f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYmFja3BhY2slMjBkZXNpZ258ZW58MXx8fHwxNzcwNTkxMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      count: 32,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Designer',
      content: 'The quality and attention to detail in every product is outstanding. Exactly what I was looking for.',
      rating: 5,
    },
    {
      name: 'Michael Park',
      role: 'Photographer',
      content: 'Clean design, premium feel. The products speak for themselves. Highly recommend.',
      rating: 5,
    },
    {
      name: 'Emma Wilson',
      role: 'Creative Director',
      content: 'Finally, a store that gets minimalism right. Every purchase has been perfect.',
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                New Collection 2026
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-neutral-900 leading-tight">
                Premium Design for Modern Living
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed max-w-md">
                Carefully curated products that combine exceptional quality with timeless design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors group"
                >
                  Shop Collection
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center px-8 py-4 border border-neutral-300 text-neutral-900 rounded-xl hover:border-neutral-900 transition-colors"
                >
                  Explore
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-neutral-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1651905714402-f4fbbc075a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbW9kZXJuJTIwaGVhZHBob25lcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzA1OTEyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Featured Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-neutral-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-indigo-600 fill-indigo-600" />
                  </div>
                  <div>
                    <div className="text-2xl text-neutral-900">4.9</div>
                    <div className="text-sm text-neutral-600">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl text-neutral-900 mb-2">Featured Products</h2>
              <p className="text-neutral-600">Handpicked favorites from our collection</p>
            </div>
            <Link
              to="/shop"
              className="hidden sm:inline-flex items-center text-neutral-900 hover:gap-3 transition-all group"
            >
              View All
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-neutral-900 mb-4">Shop by Category</h2>
            <p className="text-neutral-600">Explore our curated collections</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="/shop"
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden"
              >
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl mb-1">{category.name}</h3>
                  <p className="text-white/80">{category.count} Products</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
            <div className="relative px-8 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
                  Limited Time Offer
                </h2>
                <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                  Get 20% off on all new arrivals. Premium quality at an exceptional value.
                </p>
                <Link
                  to="/shop"
                  className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors group"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-neutral-900 mb-4">What Our Customers Say</h2>
            <p className="text-neutral-600">Real experiences from real people</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="text-neutral-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
