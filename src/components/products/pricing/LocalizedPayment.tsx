
import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';
import { useState } from 'react';

type PaymentMethodsType = {
  [key: string]: {
    methods: string[];
    provider: string;
    icon: string;
  };
};

const LocalizedPayment = () => {
  const [selectedRegion, setSelectedRegion] = useState('france');

  const paymentMethods: PaymentMethodsType = {
    france: {
      methods: ['Lyf Pay (Contactless)', 'Credit Card', 'Apple Pay'],
      provider: 'Stripe Local Plugin',
      icon: '🇫🇷'
    },
    germany: {
      methods: ['Giropay', 'SOFORT', 'Bank Transfer'],
      provider: 'Adyen',
      icon: '🇩🇪'
    },
    nordic: {
      methods: ['MobilePay', 'Swish', 'Credit Card'],
      provider: 'Klarna',
      icon: '🇸🇪'
    },
    global: {
      methods: ['ETH/USDC', 'Credit Card', 'PayPal'],
      provider: 'Coinbase Commerce',
      icon: '🌎'
    }
  };

  return (
    <motion.div
      className="glass-effect p-8 rounded-xl lg:col-span-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
          <CreditCard className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Localized Payment Methods</h3>
          <p className="text-foreground/70">Choose your preferred payment option based on your region</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {Object.entries(paymentMethods).map(([region, { icon }]) => (
          <button
            key={region}
            className={`p-3 rounded-lg text-center ${selectedRegion === region ? 'bg-spotlight/10 border-2 border-spotlight' : 'bg-white border border-gray-200'}`}
            onClick={() => setSelectedRegion(region)}
          >
            <span className="text-2xl mb-1 block">{icon}</span>
            <span className="capitalize text-sm font-medium">
              {region === 'nordic' ? 'Nordic' : region === 'global' ? 'Global' : region}
            </span>
          </button>
        ))}
      </div>
      
      <div className="bg-secondary/30 p-4 rounded-lg">
        <h4 className="font-semibold mb-3">Available Payment Methods:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-foreground/70 mb-2">Methods:</p>
            <ul className="space-y-1">
              {paymentMethods[selectedRegion].methods.map((method, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-4 h-4 rounded-full bg-spotlight/20 text-spotlight flex items-center justify-center text-xs mr-2">✓</span>
                  {method}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-foreground/70 mb-2">Payment Provider:</p>
            <p className="font-medium">{paymentMethods[selectedRegion].provider}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LocalizedPayment;
