
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Leaf, Coins, Factory, ArrowRight, Blocks, Badge } from 'lucide-react';

const CarbonFootprintDashboard = () => {
  const [carbonSaved, setCarbonSaved] = useState(1428);
  const [creditPoints, setCreditPoints] = useState(350);
  
  // In a real implementation, these would be fetched from a blockchain API
  const supplyChainData = [
    { stage: "Raw Material", source: "Bordeaux Vineyard", emissions: 0.42, verified: true },
    { stage: "Processing", source: "Lyon Workshop", emissions: 0.31, verified: true },
    { stage: "Coloring", source: "Eco-Pigment Lab", emissions: 0.24, verified: true },
    { stage: "Assembly", source: "Paris Studio", emissions: 0.35, verified: true },
    { stage: "Shipping", source: "Electric Fleet", emissions: 0.18, verified: false },
  ];

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
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-green-500/10 text-green-500 text-sm font-medium rounded-full mb-2">
              实时碳足迹仪表盘
            </span>
            <h3 className="text-2xl font-bold mb-4">Real-Time Carbon Footprint Dashboard</h3>
            <p className="text-foreground/70 mb-6">
              Track the environmental impact of each product with blockchain-verified data and earn rewards for sustainable choices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Blockchain Visualization */}
            <div>
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center">
                      <Blocks className="mr-2 h-5 w-5 text-green-500" />
                      Blockchain Carbon Tracking
                    </CardTitle>
                    <span className="text-xs text-foreground/60 flex items-center">
                      Powered by Polygon
                      <img src="https://cryptologos.cc/logos/polygon-matic-logo.png" alt="Polygon" className="h-4 ml-1" />
                    </span>
                  </div>
                  <CardDescription>
                    Verified carbon emissions from grape pomace to delivery
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {supplyChainData.map((stage, index) => (
                      <div key={index} className="mb-4">
                        <div className="flex justify-between items-center mb-1 text-sm">
                          <div className="flex items-center">
                            <Factory className="h-4 w-4 mr-2 text-foreground/70" />
                            <span>{stage.stage}</span>
                            {stage.verified && (
                              <span className="ml-2 bg-green-500/10 text-green-500 text-xs px-2 py-0.5 rounded-full">
                                Verified
                              </span>
                            )}
                          </div>
                          <span className="font-medium">{stage.emissions} kg CO₂</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Progress value={100 - (stage.emissions * 100)} className="h-2" />
                          <span className="text-xs text-foreground/60">{stage.source}</span>
                        </div>
                        {index < supplyChainData.length - 1 && (
                          <div className="flex justify-center my-1">
                            <ArrowRight className="h-3 w-3 text-foreground/30" />
                          </div>
                        )}
                      </div>
                    ))}
                    
                    <div className="pt-2 border-t border-border mt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Total Carbon Emissions</span>
                        <span className="text-lg font-bold">1.5 kg CO₂</span>
                      </div>
                      <p className="text-xs text-foreground/60 mt-1">
                        76% lower than industry average
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Carbon Credits Exchange */}
            <div>
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center">
                      <Coins className="mr-2 h-5 w-5 text-green-500" />
                      Carbon Credits Exchange
                    </CardTitle>
                    <span className="font-medium text-sm text-green-500">{creditPoints} Points</span>
                  </div>
                  <CardDescription>
                    Earn points for sustainable actions and redeem for rewards
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-500/5 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Leaf className="h-6 w-6 text-green-500 mr-2" />
                        <div>
                          <h4 className="font-medium">Your Carbon Impact</h4>
                          <p className="text-sm text-foreground/70">
                            You've helped save {carbonSaved} kg of CO₂ this year
                          </p>
                        </div>
                      </div>
                      <Progress value={85} className="h-2 mb-2" />
                      <p className="text-xs text-foreground/60">
                        85% towards your annual goal of 1,680 kg CO₂
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-sm font-medium">Redeem Your Points</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="border border-border rounded-lg p-3 hover:bg-accent transition-colors cursor-pointer">
                          <Badge className="h-5 w-5 mb-2 text-green-500" />
                          <div className="text-sm font-medium">Free Cleaning Service</div>
                          <div className="text-xs text-foreground/60">200 points</div>
                        </div>
                        <div className="border border-border rounded-lg p-3 hover:bg-accent transition-colors cursor-pointer">
                          <Badge className="h-5 w-5 mb-2 text-green-500" />
                          <div className="text-sm font-medium">Special NFT Box</div>
                          <div className="text-xs text-foreground/60">500 points</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-sm font-medium">Earn More Points</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span>Cycling to work (check-in)</span>
                          <span className="font-medium">+15 points</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Repairing instead of replacing</span>
                          <span className="font-medium">+50 points</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Referring a friend</span>
                          <span className="font-medium">+100 points</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarbonFootprintDashboard;
