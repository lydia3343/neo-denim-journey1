
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Download, Sliders, Share2 } from 'lucide-react';

const TechDemocratizationLab = () => {
  const [voltage, setVoltage] = useState<number>(3.3);
  const [resistance, setResistance] = useState<number>(220);
  const [colorHue, setColorHue] = useState<number>(240); // Blue hue by default

  // Calculate new color based on circuit parameters
  const updateSimulation = () => {
    // Simple simulation: voltage affects hue, resistance affects saturation
    const newHue = (voltage * 30) % 360; // Map voltage to hue (0-360)
    setColorHue(newHue);
  };

  // Handle parameter changes
  const handleVoltageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setVoltage(newValue);
    updateSimulation();
  };

  const handleResistanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setResistance(newValue);
    updateSimulation();
  };

  return (
    <motion.div 
      className="mb-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="glass-effect rounded-2xl p-8 md:p-12 overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-green-500/10 text-green-500 text-sm font-medium rounded-full mb-2">
                  技术民主化实验室
                </span>
                <h3 className="text-2xl font-bold mb-4">Technical Democratization Lab</h3>
                <p className="text-foreground/70 mb-6">
                  Access open-source hardware designs, experiment with our circuit simulator, and join our community of makers and innovators.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Open Source Hardware Library</h4>
                  <p className="text-sm text-foreground/70">
                    Download 3D print files and Arduino code for our smart belt's core module to create your own prototypes.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://github.com/neoloom/smart-belt-hardware" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="button-ghost inline-flex items-center text-sm py-2"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub Repository
                    </a>
                    <button className="button-ghost inline-flex items-center text-sm py-2">
                      <Download className="mr-2 h-4 w-4" />
                      Download STEP Files
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-black/10 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <h4 className="font-semibold mb-4 flex items-center">
                  <Sliders className="mr-2 h-4 w-4" />
                  Circuit Simulator
                </h4>
                <p className="text-sm text-foreground/70 mb-4">
                  Experiment with different electrical parameters to preview color-changing effects in real-time.
                </p>
                
                <div className="space-y-6 mb-6">
                  {/* Voltage Slider */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm">Voltage: {voltage.toFixed(1)}V</label>
                      <span className="text-xs text-foreground/60">1.0V - 5.0V</span>
                    </div>
                    <input
                      type="range"
                      min="1.0"
                      max="5.0"
                      step="0.1"
                      value={voltage}
                      onChange={handleVoltageChange}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  
                  {/* Resistance Slider */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm">Resistance: {resistance}Ω</label>
                      <span className="text-xs text-foreground/60">100Ω - 1000Ω</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="1000"
                      step="10"
                      value={resistance}
                      onChange={handleResistanceChange}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
                
                {/* Color Simulation Display */}
                <div className="relative rounded-lg overflow-hidden border border-white/10">
                  <div className="aspect-video relative">
                    {/* Circuit Diagram Background */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <svg width="200" height="100" viewBox="0 0 200 100" className="opacity-40">
                        <path d="M30,50 L70,50" stroke="white" strokeWidth="2" />
                        <rect x="70" y="40" width="20" height="20" stroke="white" strokeWidth="2" fill="none" />
                        <path d="M90,50 L110,50" stroke="white" strokeWidth="2" />
                        <path d="M110,30 L110,70 M105,35 L115,35 M105,65 L115,65" stroke="white" strokeWidth="2" fill="none" />
                        <path d="M110,50 L150,50" stroke="white" strokeWidth="2" />
                        <circle cx="150" cy="50" r="10" stroke="white" strokeWidth="2" fill="none" />
                        <path d="M150,50 L170,50" stroke="white" strokeWidth="2" />
                      </svg>
                    </div>
                    
                    {/* Dynamic Color Effect */}
                    <div 
                      className="absolute inset-0 opacity-60 mix-blend-screen"
                      style={{ 
                        background: `radial-gradient(circle, hsl(${colorHue}, 100%, 70%) 0%, transparent 70%)`,
                        animation: "pulse 4s infinite" 
                      }}
                    />
                    
                    {/* Current calculation */}
                    <div className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 rounded text-xs">
                      Current: {(voltage / resistance * 1000).toFixed(2)}mA
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <button className="button-ghost inline-flex items-center text-sm py-2">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Configuration
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechDemocratizationLab;
