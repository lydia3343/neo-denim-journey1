
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DigitalTwin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Product Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-purple-600/30 to-blue-500/20 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-600/30 blur-3xl" />
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
                Digital Fashion
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">NFT Digital Twin</h1>
              <p className="text-lg text-foreground/70 mb-6">
                Each physical Néoloom product comes with a digital twin NFT, unlocking exclusive metaverse experiences and authenticating your product on the blockchain.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                  <p className="text-sm text-foreground/60 mb-1">Blockchain</p>
                  <p className="text-xl font-semibold">Polygon</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                  <p className="text-sm text-foreground/60 mb-1">Metaverse Ready</p>
                  <p className="text-xl font-semibold">Yes</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                  <p className="text-sm text-foreground/60 mb-1">Resellable</p>
                  <p className="text-xl font-semibold">Yes</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="button-primary">View in Metaverse</button>
                <button className="button-ghost">Blockchain Details</button>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-3xl blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1598522370973-83e389d4d7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                  alt="NFT Digital Twin" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white text-sm">Token ID</p>
                      <p className="text-white font-mono">#24601</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1">
                      <p className="text-white text-sm">Verified</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Blockchain Traceability Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Blockchain Traceability</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Verify the authenticity and trace the journey of your Néoloom product from creation to ownership.
            </p>
          </motion.div>
          
          <motion.div
            className="max-w-4xl mx-auto glass-effect rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute h-full left-8 border-l-2 border-dashed border-white/20"></div>
              <div className="space-y-10">
                {[
                  { date: "June 10, 2023", title: "Materials Sourced", description: "Organic cotton harvested from certified farms in southern France." },
                  { date: "July 15, 2023", title: "Production Started", description: "Cut and sewn in our Saint-Pierre-des-Corps workshop by master craftspeople." },
                  { date: "August 2, 2023", title: "Quality Testing", description: "Passed 17 rigorous durability and performance tests." },
                  { date: "August 20, 2023", title: "NFT Minted", description: "Digital twin created on Polygon blockchain with unique identifiers." },
                  { date: "August 25, 2023", title: "Shipped from Workshop", description: "Packaged in compostable materials and shipped using carbon-neutral delivery." }
                ].map((event, index) => (
                  <div key={index} className="relative pl-16">
                    <div className="absolute left-7 -translate-x-1/2 w-4 h-4 rounded-full bg-spotlight"></div>
                    <p className="text-sm text-foreground/60 mb-1">{event.date}</p>
                    <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                    <p className="text-foreground/70">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Metaverse Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Metaverse Wearables</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Preview how your digital twin will look in popular metaverse platforms and games.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Decentraland', 'The Sandbox', 'Roblox'].map((platform, index) => (
              <motion.div
                key={platform}
                className="glass-effect hover-glass-effect rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <p className="text-center text-foreground/70">Platform Preview</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{platform}</h3>
                  <p className="text-foreground/70 mb-4">
                    Your Néoloom digital twin is ready to wear in {platform}'s virtual environments.
                  </p>
                  <button className="text-spotlight hover:underline">View Details</button>
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

export default DigitalTwin;
