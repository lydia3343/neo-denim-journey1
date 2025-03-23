
import { motion } from 'framer-motion';
import CarbonFootprintDashboard from './CarbonFootprintDashboard';
import SupplyChainLivestream from './SupplyChainLivestream';
import DecentralizedOrganization from './DecentralizedOrganization';
import MetaverseChallenges from './MetaverseChallenges';

export interface SustainabilityContentProps {
  fullPage?: boolean;
}

const SustainabilityContent = ({ fullPage = false }: SustainabilityContentProps) => {
  return (
    <section id="sustainability" className={fullPage ? "py-12" : "py-24 bg-secondary/20"}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-3 py-1 bg-green-500/10 text-green-500 text-sm font-medium rounded-full mb-4">
            Sustainability
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Eco-Innovation in Every Thread</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            From grape pomace fibers to carbon-neutral production, discover how we're reimagining sustainable fashion.
          </p>
        </motion.div>

        {/* Original content would be here */}
        
        {/* Trust System */}
        <div className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 bg-green-500/10 text-green-500 text-sm font-medium rounded-full mb-2">
              Transparency
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Deepening Trust Systems</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Track our environmental impact and connect with our artisans through blockchain-verified data and live access.
            </p>
          </motion.div>
          
          {/* New sustainability modules */}
          <CarbonFootprintDashboard />
          <SupplyChainLivestream />
        </div>
        
        {/* Community Co-Creation */}
        <div>
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-500 text-sm font-medium rounded-full mb-2">
              Community
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Community Co-Creation Ecosystem</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Join our DAO, earn tokens, participate in virtual fashion shows and upcycling challenges.
            </p>
          </motion.div>
          
          {/* New community co-creation modules */}
          <DecentralizedOrganization />
          <MetaverseChallenges />
        </div>
      </div>
    </section>
  );
};

export default SustainabilityContent;
