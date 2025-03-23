
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: 0.6
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.15 }
    }
  };

  const backgroundDecoration = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.5 }
    }
  };

  // Color-changing animation for the dynamic belt/jeans effect
  const colorChangeAnimation = {
    animate: {
      background: [
        'linear-gradient(90deg, #3d72fe 0%, #4d82fe 100%)',
        'linear-gradient(90deg, #6b46c1 0%, #805ad5 100%)',
        'linear-gradient(90deg, #e53e3e 0%, #f56565 100%)',
        'linear-gradient(90deg, #3d72fe 0%, #4d82fe 100%)'
      ],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background decorations */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-30"
        variants={backgroundDecoration}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-spotlight/30 to-purple-500/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-400/20 to-spotlight/30 blur-3xl" />
        
        {/* Dynamic color-changing background element to simulate the product color change */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-96 rounded-full opacity-20 blur-3xl"
          variants={colorChangeAnimation}
          animate="animate"
        />
      </motion.div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <motion.div 
          className="w-full md:w-1/2 pt-12 md:pt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex items-center space-x-2 mb-6"
            variants={itemVariants}
          >
            <span className="inline-block px-3 py-1 bg-spotlight/10 text-spotlight text-sm font-medium rounded-full">
              The Future of Denim
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            variants={itemVariants}
          >
            <span className="block">Reinventing</span>
            <span className="text-gradient">The Classics</span>
          </motion.h1>

          <motion.p 
            className="text-lg text-foreground/80 mb-4 max-w-xl"
            variants={itemVariants}
          >
            Where Gallic Craftsmanship Meets Quantum Innovation
          </motion.p>
          
          <motion.p 
            className="text-lg text-foreground/80 mb-8 max-w-xl"
            variants={itemVariants}
          >
            Tech-enhanced sustainable denim that revolutionizes comfort, style, and functionality. 
            Experience the perfect blend of tradition and innovation.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="#explore"
              className="button-primary inline-flex items-center"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
            
            <motion.a
              href="#virtual-try-on"
              className="button-ghost"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Virtual Try-On
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Featured Image with color-changing effect overlay */}
        <motion.div 
          className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.2 }
          }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-20" />
            <div className="relative overflow-hidden rounded-2xl shadow-product bg-white">
              <motion.div
                className="absolute inset-0 z-10 opacity-30"
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(61, 114, 254, 0) 0%, rgba(77, 130, 254, 0.4) 100%)',
                    'linear-gradient(45deg, rgba(107, 70, 193, 0) 0%, rgba(128, 90, 213, 0.4) 100%)',
                    'linear-gradient(45deg, rgba(229, 62, 62, 0) 0%, rgba(245, 101, 101, 0.4) 100%)',
                    'linear-gradient(45deg, rgba(61, 114, 254, 0) 0%, rgba(77, 130, 254, 0.4) 100%)'
                  ],
                  transition: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80"
                alt="Premium Denim"
                className="w-full h-full object-cover object-center"
                style={{ maxHeight: '600px', minHeight: '400px' }}
                initial={{ scale: 1.2 }}
                animate={{ 
                  scale: 1, 
                  transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1.0] } 
                }}
                loading="lazy"
                onLoad={(e) => e.currentTarget.classList.add('loaded')}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/60"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          transition: { duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1.0] } 
        }}
      >
        <span className="text-sm font-medium mb-2">Scroll to discover</span>
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-1 bg-foreground/60 rounded-full"
            animate={{ 
              y: [0, 12, 0], 
              opacity: [0.5, 1, 0.5],
              transition: { 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              } 
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
