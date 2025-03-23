
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TechDossier from '@/components/TechDossier';

const TechDossierPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-spotlight/30 to-purple-500/20 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-400/20 to-spotlight/30 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-spotlight/10 text-spotlight text-sm font-medium rounded-full mb-4">
              Tech Dossier
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Technological Innovation</h1>
            <p className="text-lg text-foreground/70">
              Explore the scientific foundations behind our smart textiles and sustainable manufacturing processes.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Main Content */}
      <TechDossier fullPage={true} />
      
      <Footer />
    </div>
  );
};

export default TechDossierPage;
