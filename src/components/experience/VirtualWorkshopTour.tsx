
import { motion } from 'framer-motion';
import { Camera, Compass } from 'lucide-react';

const VirtualWorkshopTour = () => {
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
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-10">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Virtual Atelier Tour</h3>
              <p className="text-foreground/70 mb-6">
                Step inside our Saint-Pierre-des-Corps workshop where centuries-old craftsmanship meets cutting-edge technology in an immersive 360° experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#virtual-tour" className="button-primary inline-flex items-center">
                  <Camera className="mr-2 h-4 w-4" />
                  Start Virtual Tour
                </a>
                <a href="#behind-scenes" className="button-ghost inline-flex items-center">
                  <Compass className="mr-2 h-4 w-4" />
                  Behind the Scenes
                </a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <TourPreview />
            </div>
          </div>
          
          <TourHighlights />
        </div>
      </div>
    </motion.div>
  );
};

const TourPreview = () => {
  return (
    <div className="aspect-video bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden relative shadow-xl">
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
          alt="Atelier Tour" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div 
            className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
              <Camera className="h-6 w-6 text-spotlight" />
            </div>
          </motion.div>
        </div>
        
        {/* 360 Indicator */}
        <div className="absolute top-4 right-4 bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
          360° View
        </div>
        
        {/* Hotspots */}
        {[
          { left: "25%", top: "40%" },
          { left: "60%", top: "70%" },
          { left: "80%", top: "30%" },
        ].map((point, index) => (
          <motion.div 
            key={index}
            className="absolute w-4 h-4 rounded-full border-2 border-white"
            style={{ left: point.left, top: point.top }}
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: index * 0.7
            }}
          >
            <div className="absolute inset-0.5 bg-white rounded-full"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const TourHighlights = () => {
  const highlights = [
    { 
      title: "Craftsmanship Area", 
      description: "Watch our master tailors hand-stitch premium denim garments" 
    },
    { 
      title: "Tech Integration Lab", 
      description: "See how electronic components are seamlessly embedded" 
    },
    { 
      title: "Material Innovation Center", 
      description: "Explore our sustainable fiber development process" 
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {highlights.map((highlight, index) => (
        <motion.div 
          key={index}
          className="bg-white/50 dark:bg-black/30 rounded-lg p-4 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h4 className="font-medium mb-1">{highlight.title}</h4>
          <p className="text-sm text-foreground/70">{highlight.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default VirtualWorkshopTour;
