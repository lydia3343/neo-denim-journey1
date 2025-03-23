
import { motion } from 'framer-motion';
import { Zap, Wifi, Globe, CloudOff } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const EdgeComputing = () => {
  return (
    <motion.div
      className="glass-effect p-8 rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
          <Zap className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Edge Computing Optimization</h3>
          <p className="text-foreground/70">Faster loading with distributed computing</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-secondary/30 p-4 rounded-lg">
          <div className="flex items-start mb-4">
            <div className="mr-3 mt-1">
              <Globe className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Cloudflare Argo Smart Routing</h4>
              <p className="text-sm text-foreground/70">
                Our edge network uses Cloudflare's intelligent routing to deliver content in under 1.5 seconds for European users.
              </p>
              <div className="mt-3 bg-background/50 p-2 rounded text-xs">
                <div className="flex justify-between items-center">
                  <span>Average load time:</span>
                  <span className="font-semibold">1.2s</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-3 mt-1">
              <CloudOff className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Progressive Web App Support</h4>
              <p className="text-sm text-foreground/70">
                Core features are available offline, including the AR try-on module.
              </p>
              <div className="flex gap-2 mt-3">
                <div className="flex items-center bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                  <Wifi className="h-3 w-3 mr-1" />
                  Offline Access
                </div>
                <div className="flex items-center bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                  <span className="mr-1">⚡</span>
                  Fast Installation
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-foreground/60 flex justify-between">
          <span>Cache hit ratio: 94.3%</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="underline">
                API latency: 68ms
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">95th percentile response time from our edge servers</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </motion.div>
  );
};

export default EdgeComputing;
