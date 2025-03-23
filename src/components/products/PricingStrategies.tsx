
import { motion } from 'framer-motion';
import CarbonPricing from './pricing/CarbonPricing';
import SubscriptionService from './pricing/SubscriptionService';
import LocalizedPayment from './pricing/LocalizedPayment';

const PricingStrategies = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Purchasing Options</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose the pricing model and payment method that works best for you.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Carbon-Sensitive Pricing Strategy */}
          <CarbonPricing />
          
          {/* Subscription Service */}
          <SubscriptionService />
          
          {/* Localized Payment Matrix */}
          <LocalizedPayment />
        </div>
      </div>
    </section>
  );
};

export default PricingStrategies;
