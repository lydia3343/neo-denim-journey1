
import { motion } from 'framer-motion';
import AIContentWorkshop from './AIContentWorkshop';
import DocumentarySeries from './DocumentarySeries';

const ContentStrategy = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Content Strategy</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Innovative content creation and distribution strategies powered by AI and multimedia storytelling.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AIContentWorkshop />
          <DocumentarySeries />
        </div>
      </div>
    </section>
  );
};

export default ContentStrategy;
