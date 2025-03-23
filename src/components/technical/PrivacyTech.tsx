
import { motion } from 'framer-motion';
import { Shield, Lock, Fingerprint, Server } from 'lucide-react';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";

const PrivacyTech = () => {
  return (
    <motion.div
      className="glass-effect p-8 rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
          <Shield className="h-6 w-6 text-violet-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Privacy-Enhancing Technologies</h3>
          <p className="text-foreground/70">Safeguarding user data with advanced cryptography</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-secondary/30 p-4 rounded-lg">
          <div className="flex items-start mb-4">
            <div className="mr-3 mt-1">
              <Fingerprint className="h-5 w-5 text-violet-500" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Zero-Knowledge Proof Login</h4>
              <p className="text-sm text-foreground/70">
                Users can authenticate with biometric data (such as Face ID) without storing passwords or email on our servers.
              </p>
              <div className="flex gap-2 mt-3">
                <span className="bg-violet-100 text-violet-800 text-xs px-2 py-1 rounded">No Password Storage</span>
                <span className="bg-violet-100 text-violet-800 text-xs px-2 py-1 rounded">Biometric Verification</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-3 mt-1">
              <Server className="h-5 w-5 text-indigo-500" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Federated Learning Analytics</h4>
              <p className="text-sm text-foreground/70">
                Behavior data is pre-processed locally on user devices, with only aggregated results sent to our servers (Apple Private Relay model).
              </p>
              <div className="mt-3 bg-background/50 p-2 rounded text-xs">
                <div className="flex flex-wrap gap-2">
                  <div className="px-2 py-1 rounded bg-indigo-100 text-indigo-800">
                    Local Processing
                  </div>
                  <div className="px-2 py-1 rounded bg-indigo-100 text-indigo-800">
                    Anonymized Data
                  </div>
                  <div className="px-2 py-1 rounded bg-indigo-100 text-indigo-800">
                    Aggregated Insights
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center px-4 py-3 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 rounded-lg">
          <Lock className="h-4 w-4 mr-2 text-violet-500" />
          <span className="text-sm">Enhanced with E2E encryption for all sensitive communications</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="ml-1">
                <span className="text-violet-500 text-xs underline">Info</span>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">Using the latest TLS 1.3 protocol with perfect forward secrecy</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyTech;
