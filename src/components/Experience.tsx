
import { motion } from 'framer-motion';
import VirtualWorkshopTour from './experience/VirtualWorkshopTour';
import ColorPatternDesigner from './experience/ColorPatternDesigner';
import AmbassadorProgram from './experience/AmbassadorProgram';
import QuantumInteractionDesign from './experience/quantum-interaction/QuantumInteractionDesign';
import TechDemocratizationLab from './experience/TechDemocratizationLab';

export interface ExperienceProps {
  fullPage?: boolean;
}

const Experience = ({ fullPage }: ExperienceProps) => {
  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-3 py-1 bg-spotlight/10 text-spotlight text-sm font-medium rounded-full mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Immerse Yourself</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore our virtual workshop tours, exclusive behind-the-scenes content, and community initiatives.
          </p>
        </motion.div>

        <VirtualWorkshopTour />
        <QuantumInteractionDesign />
        <TechDemocratizationLab />
        <ColorPatternDesigner />
        <AmbassadorProgram />
      </div>
    </section>
  );
};

export default Experience;
