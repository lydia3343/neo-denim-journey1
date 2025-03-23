
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Search, Filter, ChevronDown } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulated product data
  useEffect(() => {
    // Simulate API fetch delay
    setTimeout(() => {
      const productData: Product[] = [
        {
          id: '1',
          name: 'Tech-Enhanced Denim Jacket',
          description: 'Temperature-regulating denim with moisture-wicking properties and 4-way stretch.',
          price: 299.99,
          image: 'https://images.unsplash.com/photo-1590500724572-2ebc57043ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
          category: 'Premium',
          tags: ['jacket', 'tech', 'premium']
        },
        {
          id: '2',
          name: 'Adaptive Comfort Jeans',
          description: 'Smart fabric that adapts to your body temperature and movement throughout the day.',
          price: 189.99,
          image: 'https://images.unsplash.com/photo-1604176424472-9d69a5b14bf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
          category: 'Tech',
          tags: ['jeans', 'adaptive', 'comfort']
        },
        {
          id: '3',
          name: 'Eco-Friendly Denim Shirt',
          description: 'Made from recycled materials and grape-waste fibers with natural dyes.',
          price: 149.99,
          image: 'https://images.unsplash.com/photo-1598522370973-83e389d4d7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
          category: 'Sustainable',
          tags: ['shirt', 'eco-friendly', 'recycled']
        },
        {
          id: '4',
          name: 'Smart-Fit Denim Pants',
          description: 'AI-optimized pattern that adapts to your unique body shape for maximum comfort.',
          price: 219.99,
          image: 'https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=999&q=80',
          category: 'Premium',
          tags: ['pants', 'smart-fit', 'AI']
        },
        {
          id: '5',
          name: 'Electrochromic Denim Jacket',
          description: 'Color-changing technology allows this jacket to adapt to your style or environment.',
          price: 349.99,
          image: 'https://images.unsplash.com/photo-1577155848406-b53ebd277db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
          category: 'Tech',
          tags: ['jacket', 'electrochromic', 'innovative']
        },
        {
          id: '6',
          name: 'Classic Fit Jeans',
          description: 'Traditional style with modern sustainable materials for everyday comfort.',
          price: 159.99,
          image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2009&q=80',
          category: 'Classic',
          tags: ['jeans', 'classic', 'everyday']
        },
        {
          id: '7',
          name: 'Grape Waste Fiber Shirt',
          description: 'Innovative shirt made from fibers derived from Bordeaux wine industry waste.',
          price: 129.99,
          image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
          category: 'Sustainable',
          tags: ['shirt', 'grape waste', 'innovative']
        },
        {
          id: '8',
          name: 'Piezoelectric Energy Jeans',
          description: 'Harvest energy from your movement to power small devices or the integrated color-changing elements.',
          price: 279.99,
          image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1997&q=80',
          category: 'Tech',
          tags: ['jeans', 'energy', 'piezoelectric']
        }
      ];
      
      setProducts(productData);
      setFilteredProducts(productData);
      setIsLoading(false);
    }, 800);
  }, []);

  // Filter products based on category and search query
  useEffect(() => {
    let filtered = [...products];
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, products]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 }
    }
  };

  const categories = ['all', 'Premium', 'Tech', 'Sustainable', 'Classic'];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-spotlight/30 to-purple-500/20 blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-400/20 to-spotlight/30 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 text-center">
          <motion.span 
            className="inline-block px-3 py-1 bg-spotlight/10 text-spotlight text-sm font-medium rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover Our Collection
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Innovative <span className="text-gradient">Products</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our collection of tech-enhanced sustainable denim products that blend innovation with style.
          </motion.p>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <motion.div 
            className="mb-12 flex flex-col sm:flex-row gap-4 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Search */}
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg shadow-input border border-gray-200 focus:outline-none focus:ring-2 focus:ring-spotlight/50"
              />
            </div>
            
            {/* Category Filter */}
            <div className="relative w-full sm:w-auto">
              <button
                className="w-full sm:w-auto flex items-center justify-between px-4 py-2 rounded-lg shadow-input border border-gray-200 focus:outline-none focus:ring-2 focus:ring-spotlight/50"
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
              >
                <div className="flex items-center">
                  <Filter className="mr-2 h-4 w-4 text-foreground/50" />
                  <span className="capitalize">
                    {selectedCategory === 'all' ? 'All Categories' : selectedCategory}
                  </span>
                </div>
                <ChevronDown className="h-4 w-4 text-foreground/50" />
              </button>
              
              {isCategoryDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`w-full text-left px-4 py-2 hover:bg-spotlight/10 ${
                        selectedCategory === category.toLowerCase() ? 'bg-spotlight/5 text-spotlight' : ''
                      }`}
                      onClick={() => {
                        setSelectedCategory(category.toLowerCase());
                        setIsCategoryDropdownOpen(false);
                      }}
                    >
                      <span className="capitalize">
                        {category === 'all' ? 'All Categories' : category}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
          
          {/* Products Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="bg-gray-100 rounded-xl animate-pulse">
                  <div className="aspect-square w-full"></div>
                  <div className="p-5 space-y-3">
                    <div className="h-5 bg-gray-200 rounded-md"></div>
                    <div className="h-10 bg-gray-200 rounded-md"></div>
                    <div className="h-5 bg-gray-200 rounded-md w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <AnimatePresence mode="wait">
                {filteredProducts.length > 0 ? (
                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    key="product-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {filteredProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        variants={itemVariants}
                        layout
                      >
                        <ProductCard {...product} />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div 
                    className="text-center py-20"
                    key="no-products"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold mb-4">No products found</h3>
                    <p className="text-foreground/70 mb-6">
                      Try adjusting your search or filter to find what you're looking for.
                    </p>
                    <button 
                      onClick={() => {
                        setSelectedCategory('all');
                        setSearchQuery('');
                      }}
                      className="button-primary"
                    >
                      Clear Filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <p className="text-foreground/60 mb-4">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </motion.div>
            </>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 relative overflow-hidden bg-secondary/30">
        <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-6">
          <motion.div 
            className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-spotlight/40 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-blue-400/20 to-spotlight/40 rounded-full blur-3xl"></div>
            
            <div className="text-center mb-8 relative z-10">
              <h2 className="text-3xl font-bold mb-4">Get Exclusive Access</h2>
              <p className="text-foreground/70 max-w-lg mx-auto">
                Subscribe to receive updates on new products, limited editions, and special offers.
              </p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-white/70 backdrop-blur-md rounded-lg shadow-input border border-white/30 focus:outline-none focus:ring-2 focus:ring-spotlight/50"
                required
              />
              <button 
                type="submit"
                className="button-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
