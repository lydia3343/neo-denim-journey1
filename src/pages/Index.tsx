import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TechDossier from '@/components/TechDossier';
import Sustainability from '@/components/Sustainability';
import Experience from '@/components/Experience';
import ContentStrategy from '@/components/content/ContentStrategy';

const featuredProducts = [
  {
    id: '1',
    name: 'Smart Color-Changing Belt',
    description: 'Electrochromic technology that adapts to your outfit, mood, or environment.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1590500724572-2ebc57043ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
    category: 'Smart',
  },
  {
    id: '2',
    name: 'Temperature-Control Jeans',
    description: 'Self-regulating denim that adjusts to your body temperature throughout the day.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1604176424472-9d69a5b14bf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    category: 'Tech',
  },
  {
    id: '3',
    name: 'Grape-Fiber Denim Shirt',
    description: 'Made from recycled Bordeaux grape waste with natural dyes from wine by-products.',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1598522370973-83e389d4d7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'Sustainable',
  },
  {
    id: '4',
    name: 'AI-Optimized Denim Pants',
    description: 'Algorithmic pattern designed for your unique body measurements and movement.',
    price: 219.99,
    image: 'https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=999&q=80',
    category: 'Premium',
  }
];

const Index = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Hero />
      
      <Features />
      
      {/* Featured Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-3 py-1 bg-spotlight/10 text-spotlight text-sm font-medium rounded-full mb-4">
              Featured Collection
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Innovative Products</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore our latest innovations that combine premium materials, smart technology, and sustainable practices.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a 
              href="/products" 
              className="button-ghost inline-flex items-center"
            >
              View All Products
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Technical Innovation Section */}
      <TechDossier />
      
      {/* Sustainability Section */}
      <Sustainability />
      
      {/* Experience Section */}
      <Experience />
      
      {/* Content Strategy Section */}
      <ContentStrategy />
      
      {/* Newsletter Section */}
      <section className="py-20 relative overflow-hidden">
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
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-foreground/70 max-w-lg mx-auto">
                Subscribe to our newsletter for exclusive updates on new releases, tech innovations, and special offers.
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
            
            <p className="text-foreground/60 text-xs mt-4 text-center relative z-10">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
