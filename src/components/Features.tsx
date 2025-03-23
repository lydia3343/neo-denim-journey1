
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Fingerprint, Activity, RefreshCw, Zap } from 'lucide-react';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const features = [
    {
      icon: <Fingerprint className="h-10 w-10" />,
      title: "Unique Technology",
      description: "Our proprietary technology enhances comfort while maintaining style and durability."
    },
    {
      icon: <Activity className="h-10 w-10" />,
      title: "Adaptive Fit",
      description: "Smart fabrics that adjust to your body temperature and movement throughout the day."
    },
    {
      icon: <RefreshCw className="h-10 w-10" />,
      title: "Sustainable Production",
      description: "Eco-friendly materials and processes that reduce environmental impact by up to 80%."
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Innovative Design",
      description: "Contemporary aesthetics merged with timeless craftsmanship for lasting appeal."
    }
  ];

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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="explore" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-3 py-1 bg-spotlight/10 text-spotlight text-sm font-medium rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Innovative Features</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover how our technology-enhanced design elevates everyday denim to extraordinary levels of comfort and functionality.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-effect hover-glass-effect rounded-xl p-6 group"
              variants={itemVariants}
            >
              <div className="mb-4 text-spotlight transition-all duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-spotlight transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
