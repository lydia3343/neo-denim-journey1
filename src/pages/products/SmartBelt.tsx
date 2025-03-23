import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingStrategies from '@/components/products/PricingStrategies';
import B2BConfigurator from '@/components/products/B2BConfigurator';

const SmartBelt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Product Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-blue-600/30 to-purple-500/20 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-400/20 to-blue-600/30 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6">
          <Link to="/products" className="inline-flex items-center text-foreground/70 hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 py-1 bg-spotlight/10 text-spotlight text-sm font-medium rounded-full mb-4">
                Smart Wearable
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart Color-Changing Belt</h1>
              <p className="text-lg text-foreground/70 mb-6">
                Featuring electrochromic technology that adapts to your outfit, mood, or environment. Control the color of your belt through our mobile app or let it automatically complement your attire.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                  <p className="text-sm text-foreground/60 mb-1">Price</p>
                  <p className="text-xl font-semibold">€299.99</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                  <p className="text-sm text-foreground/60 mb-1">Battery Life</p>
                  <p className="text-xl font-semibold">3 weeks</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                  <p className="text-sm text-foreground/60 mb-1">Colors</p>
                  <p className="text-xl font-semibold">Infinite</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="button-primary">Add to Cart</button>
                <button className="button-ghost">Customize</button>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl"></div>
              <motion.div 
                className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl aspect-[4/3]"
                animate={{
                  background: [
                    'linear-gradient(90deg, #3d72fe 0%, #4d82fe 100%)',
                    'linear-gradient(90deg, #6b46c1 0%, #805ad5 100%)',
                    'linear-gradient(90deg, #e53e3e 0%, #f56565 100%)',
                    'linear-gradient(90deg, #3d72fe 0%, #4d82fe 100%)'
                  ],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1590500724572-2ebc57043ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80" 
                  alt="Smart Color-Changing Belt" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Pricing Strategies Section */}
      <PricingStrategies />
      
      {/* Technical Breakdown Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Breakdown</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Discover the revolutionary technology behind our color-changing smart belt.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 p-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                <p className="text-center text-foreground/70">Interactive Technical Animation</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">How It Works</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Electrochromic Layer</h4>
                  <p className="text-foreground/70">
                    Our proprietary electrochromic film contains millions of microscopic color cells that change their light-reflecting properties when an electrical current is applied.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2">Self-Powering System</h4>
                  <p className="text-foreground/70">
                    Integrated kinetic energy harvesters capture motion from your everyday movements to power the color-changing technology, supplemented by an ultra-thin battery.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2">Smart Control</h4>
                  <p className="text-foreground/70">
                    Bluetooth connectivity allows you to control colors through our app, while embedded sensors can automatically adapt colors based on temperature, outfit, or music.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* B2B Configurator Section */}
      <B2BConfigurator />
      
      {/* Wearing Scenarios Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Adaptable to Every Occasion</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              One belt, infinite possibilities. Seamlessly transition between different environments.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Business', 'Social', 'Active'].map((scenario, index) => (
              <motion.div
                key={scenario}
                className="glass-effect hover-glass-effect rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <p className="text-center text-foreground/70">Scenario Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{scenario} Mode</h3>
                  <p className="text-foreground/70">
                    Perfect color transitions for your {scenario.toLowerCase()} environment, automatically adapting to your needs.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SmartBelt;
