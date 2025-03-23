
import { motion } from 'framer-motion';
import { Leaf, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const CarbonPricing = () => {
  return (
    <motion.div
      className="glass-effect p-8 rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
          <Leaf className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Carbon-Sensitive Pricing</h3>
          <p className="text-foreground/70">Prices adjusted based on real-time carbon costs</p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="ml-auto">
                <Info className="h-5 w-5 text-foreground/50 hover:text-foreground/70" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">Excess charges are donated to Sea Shepherd and other environmental organizations</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="bg-secondary/30 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-foreground/70">Base Price:</span>
          <span className="font-semibold">€299.99</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-foreground/70">Carbon Offset:</span>
          <span className="font-semibold text-green-600">+€14.50</span>
        </div>
        <div className="border-t border-foreground/10 my-2"></div>
        <div className="flex justify-between items-center">
          <span className="text-foreground/70">Total Price:</span>
          <span className="font-bold text-lg">€314.49</span>
        </div>
      </div>
      
      <div className="flex items-center text-sm text-foreground/60">
        <Leaf className="h-4 w-4 mr-2 text-green-500" />
        <span>5% of carbon offset donations go to Sea Shepherd</span>
      </div>
    </motion.div>
  );
};

export default CarbonPricing;
