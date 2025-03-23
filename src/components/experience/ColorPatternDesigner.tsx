
import { motion } from 'framer-motion';
import { Code, Users } from 'lucide-react';

const ColorPatternDesigner = () => {
  return (
    <motion.div 
      className="mb-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="glass-effect rounded-2xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-20 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <DesignerPreview />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">Custom Color Pattern Designer</h3>
              <p className="text-foreground/70 mb-6">
                Design your own color-changing patterns for our smart denim products. Your creations can be shared, saved as NFTs, and even earn you royalties when others use them.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#design-studio" className="button-primary inline-flex items-center">
                  <Code className="mr-2 h-4 w-4" />
                  Open Design Studio
                </a>
                <a href="#community-gallery" className="button-ghost inline-flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  Community Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const DesignerPreview = () => {
  return (
    <div className="aspect-square max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl overflow-hidden relative shadow-xl">
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-2">
        {Array(9).fill(0).map((_, i) => (
          <motion.div 
            key={i} 
            className="rounded-md overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="w-full h-full" 
              style={{ 
                background: `linear-gradient(${45 * i}deg, ${
                  ['#3d72fe', '#4d82fe', '#6b46c1', '#805ad5', '#e53e3e', '#f56565'][i % 6]
                } 0%, ${
                  ['#4d82fe', '#6b46c1', '#805ad5', '#e53e3e', '#f56565', '#3d72fe'][i % 6]
                } 100%)` 
              }}
            ></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ColorPatternDesigner;
