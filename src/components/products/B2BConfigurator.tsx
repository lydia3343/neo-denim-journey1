
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Database, Cog, Download, Upload, Repeat } from 'lucide-react';
import { Input } from "@/components/ui/input";

const B2BConfigurator = () => {
  const [width, setWidth] = useState(3.5);
  const [colorChangeArea, setColorChangeArea] = useState(80);
  const [logoPosition, setLogoPosition] = useState(50);
  const [quantity, setQuantity] = useState(100);
  const [erp, setErp] = useState("none");

  // Calculate price based on parameters
  const calculatePrice = () => {
    const basePrice = 199.99;
    const widthFactor = width / 3.5;
    const colorChangeFactor = colorChangeArea / 100;
    const quantityDiscount = quantity >= 500 ? 0.85 : quantity >= 250 ? 0.9 : quantity >= 100 ? 0.95 : 1;
    
    const unitPrice = basePrice * widthFactor * (0.9 + (colorChangeFactor * 0.2)) * quantityDiscount;
    const totalPrice = unitPrice * quantity;
    
    return {
      unitPrice: unitPrice.toFixed(2),
      totalPrice: totalPrice.toFixed(2)
    };
  };

  const { unitPrice, totalPrice } = calculatePrice();

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-500 text-sm font-medium rounded-full mb-4">
            For Business Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">B2B Intelligent Configurator</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Create customized Smart Belt solutions for your company or team
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Model Visualization */}
          <motion.div
            className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden relative bg-gradient-to-br from-spotlight/10 to-spotlight/30 p-8 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute w-full h-full top-0 left-0">
              {/* Simulated belt visualization */}
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" 
                style={{
                  width: `${width * 70}px`,
                  height: `${width * 70}px`,
                  border: `${width * 10}px solid rgba(0,0,0,0.2)`,
                  background: `conic-gradient(
                    from 0deg,
                    rgba(123, 97, 255, 0.8) 0%,
                    rgba(123, 97, 255, 0.8) ${colorChangeArea}%,
                    rgba(50, 50, 50, 0.3) ${colorChangeArea}%,
                    rgba(50, 50, 50, 0.3) 100%
                  )`
                }}
              >
                {/* Logo indicator */}
                <div 
                  className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${logoPosition * 3.6}deg) translate(${width * 35}px, 0) rotate(-${logoPosition * 3.6}deg)`
                  }}
                >
                  <span className="text-xs font-bold">LOGO</span>
                </div>
              </div>
            </div>
            
            <div className="text-center text-foreground/50 z-10 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
              Drag handles to customize
            </div>
          </motion.div>
          
          {/* Configuration Panel */}
          <motion.div
            className="glass-effect p-8 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Parametric Customization</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  Belt Width (cm): {width.toFixed(1)}
                </label>
                <input
                  type="range"
                  min="2"
                  max="5"
                  step="0.1"
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value))}
                  className="w-full h-2 bg-spotlight/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  Color-Changing Area (%): {colorChangeArea}
                </label>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="1"
                  value={colorChangeArea}
                  onChange={(e) => setColorChangeArea(parseInt(e.target.value))}
                  className="w-full h-2 bg-spotlight/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  Logo Position (°): {logoPosition * 3.6}°
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={logoPosition}
                  onChange={(e) => setLogoPosition(parseInt(e.target.value))}
                  className="w-full h-2 bg-spotlight/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  Quantity
                </label>
                <Input
                  type="number"
                  min="50"
                  step="10"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 100)}
                  className="w-full"
                />
              </div>
              
              <div className="bg-secondary/50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground/70">Unit Price:</span>
                  <span className="font-semibold">€{unitPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Total Price ({quantity} units):</span>
                  <span className="font-bold text-lg">€{totalPrice}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  ERP Integration
                </label>
                <select
                  value={erp}
                  onChange={(e) => setErp(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-spotlight"
                >
                  <option value="none">None</option>
                  <option value="sap">SAP</option>
                  <option value="salesforce">Salesforce</option>
                  <option value="oracle">Oracle</option>
                  <option value="dynamics">Microsoft Dynamics</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="button-primary flex items-center justify-center">
                  <Cog className="mr-2 h-5 w-5" />
                  Generate Quote
                </button>
                <button className="button-ghost flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Export 3D Model
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* API Ecosystem */}
        <motion.div
          className="mt-16 glass-effect p-8 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Database className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold">API Ecosystem</h3>
              <p className="text-foreground/70">Connect your existing systems with our open APIs</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Settings className="h-5 w-5 text-spotlight mr-2" />
                <h4 className="font-semibold">ERP Integration</h4>
              </div>
              <p className="text-sm text-foreground/70">
                Automatically sync orders with your SAP or Salesforce system
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Upload className="h-5 w-5 text-spotlight mr-2" />
                <h4 className="font-semibold">Data Export</h4>
              </div>
              <p className="text-sm text-foreground/70">
                Extract carbon footprint data for sustainability reporting
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Repeat className="h-5 w-5 text-spotlight mr-2" />
                <h4 className="font-semibold">Webhook Events</h4>
              </div>
              <p className="text-sm text-foreground/70">
                Subscribe to real-time notifications for order status changes
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="button-ghost inline-flex items-center">
              <Settings className="mr-2 h-5 w-5" />
              Request API Documentation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default B2BConfigurator;
