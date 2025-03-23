
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TempControlJeans = () => {
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
                Thermal Regulation
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Temperature-Control Jeans</h1>
              <p className="text-lg text-foreground/70 mb-6">
                Self-regulating denim that adjusts to your body temperature throughout the day. Stay comfortable no matter the weather conditions or activity level.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                  <p className="text-sm text-foreground/60 mb-1">Price</p>
                  <p className="text-xl font-semibold">€249.99</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                  <p className="text-sm text-foreground/60 mb-1">Temperature Range</p>
                  <p className="text-xl font-semibold">18°C - 28°C</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                  <p className="text-sm text-foreground/60 mb-1">Material</p>
                  <p className="text-xl font-semibold">Smart Denim</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="button-primary">Add to Cart</button>
                <button className="button-ghost">Size Guide</button>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1604176424472-9d69a5b14bf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80" 
                  alt="Temperature-Control Jeans" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 flex items-end">
                  <div className="p-6 w-full">
                    <div className="w-full bg-white/20 backdrop-blur-md rounded-full h-2 mb-2">
                      <div className="bg-blue-500 h-2 rounded-full w-2/3 transition-all duration-1000"></div>
                    </div>
                    <div className="flex justify-between text-white text-sm">
                      <span>Cool</span>
                      <span>Neutral</span>
                      <span>Warm</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Phase-Change Material Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Phase-Change Material Technology</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              See how our microscopic phase-change capsules work to regulate your body temperature.
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
                <p className="text-center text-foreground/70">Phase-Change Material Microscope View</p>
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
                  <h4 className="text-xl font-semibold mb-2">Microscopic PCM Capsules</h4>
                  <p className="text-foreground/70">
                    Millions of bio-based phase-change material capsules are embedded within the fabric fibers, absorbing and releasing heat as needed.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2">Thermoregulation</h4>
                  <p className="text-foreground/70">
                    When you get too warm, the PCM absorbs excess heat and liquefies. When you cool down, it solidifies and releases stored heat back to your body.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2">Moisture Management</h4>
                  <p className="text-foreground/70">
                    Our smart fibers also wick away moisture while the temperature regulation works, keeping you dry and comfortable throughout the day.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* AI Sizing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Optimized Fit</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our algorithm designs the perfect fit for your unique body measurements and movement patterns.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto glass-effect rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-4">Input Your Measurements</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">Height (cm)</label>
                    <input type="number" className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20" placeholder="175" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Waist (cm)</label>
                    <input type="number" className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20" placeholder="82" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Hip (cm)</label>
                    <input type="number" className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20" placeholder="96" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Inseam (cm)</label>
                    <input type="number" className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20" placeholder="82" />
                  </div>
                  <button className="button-primary w-full mt-2">Generate 3D Model</button>
                </div>
              </motion.div>
              
              <motion.div
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl aspect-[3/4] flex items-center justify-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-center text-foreground/70">3D Model Preview</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TempControlJeans;
