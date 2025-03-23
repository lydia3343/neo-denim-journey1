
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Award, Vote, TrendingUp } from 'lucide-react';

const DecentralizedOrganization = () => {
  const [voteCount, setVoteCount] = useState<Record<string, number>>({
    "Mood-reactive color": 32,
    "Sound-responsive patterns": 28,
    "Temperature-adaptive tones": 24
  });

  const handleVote = (option: string) => {
    setVoteCount(prev => ({
      ...prev,
      [option]: prev[option] + 1
    }));
  };

  return (
    <motion.div 
      className="mb-16 mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GovernanceTokenSection />
        <AchievementSystemSection />
      </div>
    </motion.div>
  );
};

const GovernanceTokenSection = () => {
  return (
    <Card className="overflow-hidden bg-white/10 backdrop-blur-md border-green-500/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl font-bold">
          <Coins className="h-5 w-5 text-green-500" />
          $NEOL Governance Token
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/70 mb-4">
          Earn tokens by creating content, providing feedback, and participating in our ecosystem.
          Use your tokens to vote on future technology roadmaps.
        </p>
        
        <div className="space-y-3 mt-6">
          <h4 className="font-medium text-sm">Current Technology Voting</h4>
          
          <Dialog>
            <DialogTrigger asChild>
              <div className="cursor-pointer border border-green-500/20 rounded-lg p-3 hover:bg-green-500/5 transition-colors">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Next-Gen Color-Changing Mode</span>
                  <Vote className="h-4 w-4 text-green-500" />
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-foreground/60 mt-1">
                    <span>2,481 votes</span>
                    <span>3 days left</span>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Vote for Next-Gen Color Technology</DialogTitle>
              </DialogHeader>
              <div className="space-y-3 py-4">
                {[
                  "Mood-reactive color",
                  "Sound-responsive patterns",
                  "Temperature-adaptive tones"
                ].map((option) => (
                  <div key={option} className="flex justify-between items-center p-3 border rounded-lg hover:bg-secondary/20 transition-colors">
                    <span>{option}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-foreground/70">{32 + Math.floor(Math.random() * 10)} votes</span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => {}}
                      >
                        Vote
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-foreground/60 italic">You have 12 $NEOL tokens available for voting</p>
            </DialogContent>
          </Dialog>
        </div>

        <div className="mt-6 flex justify-between">
          <div>
            <div className="text-xs text-foreground/60">Your Balance</div>
            <div className="font-bold text-green-500 flex items-center gap-1">
              <Coins className="h-3 w-3" />
              <span>142 $NEOL</span>
            </div>
          </div>
          <Button size="sm" variant="outline" className="border-green-500/20 text-green-500">
            <TrendingUp className="h-4 w-4 mr-1" />
            Earn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const AchievementSystemSection = () => {
  const achievements = [
    { 
      name: "Design Week Participant", 
      date: "April 2023", 
      image: "https://images.unsplash.com/photo-1633526543814-9718c8922b7a?q=80&w=100&auto=format&fit=crop"
    },
    { 
      name: "Sustainability Summit", 
      date: "January 2024", 
      image: "https://images.unsplash.com/photo-1592492152545-9695d3f473f4?q=80&w=100&auto=format&fit=crop"
    },
    { 
      name: "Product Tester", 
      date: "Ongoing", 
      image: "https://images.unsplash.com/photo-1610395219861-7d04c393fc5c?q=80&w=100&auto=format&fit=crop"
    }
  ];

  return (
    <Card className="overflow-hidden bg-white/10 backdrop-blur-md border-green-500/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl font-bold">
          <Award className="h-5 w-5 text-green-500" />
          On-Chain Achievements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/70 mb-4">
          Earn Proof of Attendance Protocol (POAP) badges by participating in community events.
          Unlock exclusive access to offline launch events.
        </p>
        
        <div className="space-y-3 mt-6">
          <h4 className="font-medium text-sm">Your Badges</h4>
          
          <div className="flex overflow-x-auto pb-2 gap-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="min-w-[120px] flex-none rounded-lg border border-green-500/20 overflow-hidden">
                <div className="h-16 overflow-hidden">
                  <img src={achievement.image} alt={achievement.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-2">
                  <div className="text-xs font-medium truncate">{achievement.name}</div>
                  <div className="text-[10px] text-foreground/60">{achievement.date}</div>
                </div>
              </div>
            ))}
            <div className="min-w-[120px] flex-none rounded-lg border border-dashed border-green-500/20 flex items-center justify-center p-4">
              <div className="text-center">
                <span className="text-xs text-foreground/60">Next event in 2 days</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
          <div className="flex items-center gap-2">
            <div className="bg-green-500 text-white p-1 rounded-full">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-medium">Paris Fashion Week Access</div>
              <div className="text-xs text-foreground/70">Collect 5 more badges to unlock</div>
            </div>
          </div>
          <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
            <div className="bg-green-500 h-full rounded-full" style={{ width: '40%' }}></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DecentralizedOrganization;
