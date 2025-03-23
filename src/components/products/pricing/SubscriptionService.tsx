
import { motion } from 'framer-motion';
import { Recycle } from 'lucide-react';
import { useState } from 'react';

const SubscriptionService = () => {
  const [isSubscription, setIsSubscription] = useState(false);
  
  return (
    <motion.div
      className="glass-effect p-8 rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
          <Recycle className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Subscription Service</h3>
          <p className="text-foreground/70">Lower upfront cost with premium benefits</p>
        </div>
      </div>
      
      <div className="mb-6">
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            value="" 
            className="sr-only peer" 
            checked={isSubscription}
            onChange={() => setIsSubscription(!isSubscription)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-spotlight"></div>
          <span className="ms-3 text-sm font-medium text-foreground/70">
            {isSubscription ? 'Subscription (€19/month)' : 'One-time Purchase (€314.49)'}
          </span>
        </label>
      </div>
      
      {isSubscription && (
        <div className="bg-secondary/30 p-4 rounded-lg mb-6">
          <h4 className="font-semibold mb-2">Subscription Benefits:</h4>
          <ul className="text-foreground/70 space-y-2">
            <li className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-spotlight/20 text-spotlight flex items-center justify-center text-xs mr-2">✓</span>
              Access to color scheme library
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-spotlight/20 text-spotlight flex items-center justify-center text-xs mr-2">✓</span>
              Exclusive maintenance service
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-spotlight/20 text-spotlight flex items-center justify-center text-xs mr-2">✓</span>
              Priority access to new products
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-spotlight/20 text-spotlight flex items-center justify-center text-xs mr-2">✓</span>
              Free replacements if damaged
            </li>
          </ul>
        </div>
      )}
      
      <button className={`w-full py-3 rounded-lg font-medium ${isSubscription ? 'bg-spotlight text-white' : 'bg-secondary text-foreground'}`}>
        {isSubscription ? 'Subscribe Now' : 'Purchase Now'}
      </button>
    </motion.div>
  );
};

export default SubscriptionService;
