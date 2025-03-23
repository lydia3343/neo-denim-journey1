
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
}

const ProductCard = ({ id, name, description, price, image, category }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    initial: {
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  const cardVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    },
    initial: {
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <motion.div 
      className="overflow-hidden rounded-xl shadow-md relative bg-white"
      initial="initial"
      whileHover="hover"
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="overflow-hidden relative aspect-square">
        {category && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        )}
        <motion.img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          variants={imageVariants}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse" />
        )}
        
        {/* Overlay with actions */}
        <motion.div 
          className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center space-x-4 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="bg-white text-black rounded-full p-3"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Quick view"
          >
            <Eye className="h-5 w-5" />
          </motion.button>
          <motion.button
            className="bg-spotlight text-white rounded-full p-3"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-1 truncate">{name}</h3>
        <p className="text-foreground/60 text-sm mb-3 line-clamp-2 h-10">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold">${price.toFixed(2)}</span>
          <span className="text-sm text-foreground/60">Free shipping</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
