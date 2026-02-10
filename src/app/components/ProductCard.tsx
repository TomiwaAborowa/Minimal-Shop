import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  isNew?: boolean;
}

export function ProductCard({ id, name, price, image, category, isNew }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link to={`/product/${id}`}>
      <div
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-neutral-100 rounded-2xl overflow-hidden mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {isNew && (
              <span className="px-3 py-1 bg-white text-neutral-900 text-xs rounded-full shadow-sm">
                New
              </span>
            )}
          </div>

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              isHovered || isFavorite
                ? 'bg-white shadow-md opacity-100'
                : 'bg-white/90 opacity-0 group-hover:opacity-100'
            }`}
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorite ? 'fill-red-500 text-red-500' : 'text-neutral-600'
              }`}
            />
          </button>

          {/* Quick Add Button */}
          <div
            className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            <button
              onClick={(e) => e.preventDefault()}
              className="w-full py-3 bg-white text-neutral-900 rounded-xl hover:bg-neutral-900 hover:text-white transition-colors shadow-lg"
            >
              Quick Add
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          {category && (
            <p className="text-xs text-neutral-500 uppercase tracking-wider">{category}</p>
          )}
          <h3 className="text-neutral-900 line-clamp-1">{name}</h3>
          <p className="text-neutral-900">${price}</p>
        </div>
      </div>
    </Link>
  );
}
