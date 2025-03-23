
import { motion } from 'framer-motion';

const AmbassadorProgram = () => {
  const perks = [
    { 
      title: "Create", 
      description: "Design patterns, share styling ideas, review products" 
    },
    { 
      title: "Connect", 
      description: "Join exclusive events, connect with designers and engineers" 
    },
    { 
      title: "Earn", 
      description: "Receive carbon credits, exclusive products, and royalties" 
    }
  ];

  return (
    <>
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-2">Join Our Ambassador Program</h3>
        <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
          Become part of our ecosystem of creators, innovators, and sustainable fashion champions.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {perks.map((perk, index) => (
          <motion.div 
            key={index}
            className="bg-white/70 dark:bg-black/30 rounded-xl p-6 text-center backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-2">{perk.title}</h4>
            <p className="text-foreground/70 mb-4">{perk.description}</p>
            <motion.button 
              className="text-spotlight font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Learn More →
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-10">
        <a href="#ambassador-apply" className="button-primary">Apply Now</a>
      </div>
    </>
  );
};

export default AmbassadorProgram;
