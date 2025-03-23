
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Globe, Recycle, Camera, ThumbsUp } from 'lucide-react';

const MetaverseChallenges = () => {
  return (
    <motion.div 
      className="mb-16 mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MetaverseFashionWeek />
        <UpcyclingMarathon />
      </div>
    </motion.div>
  );
};

const MetaverseFashionWeek = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const fashionDesigns = [
    {
      designer: "AetherDreamer",
      design: "Nebula Shift Jacket",
      votes: 187,
      image: "https://images.unsplash.com/photo-1618053733337-6444e0fadcfe?q=80&w=400&auto=format&fit=crop"
    },
    {
      designer: "DigitalStitch",
      design: "Circuit Weave Pants",
      votes: 145,
      image: "https://images.unsplash.com/photo-1561526116-e2460f4d40b3?q=80&w=400&auto=format&fit=crop"
    },
    {
      designer: "VoxelTailor",
      design: "Quantum Fold Dress",
      votes: 203,
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <Card className="overflow-hidden bg-white/10 backdrop-blur-md border-purple-500/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl font-bold">
          <Globe className="h-5 w-5 text-purple-500" />
          Metaverse Fashion Week
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/70 mb-4">
          Join our quarterly virtual runway shows in Decentraland. Showcase your NFT garment designs
          and vote for the best ones to be produced physically.
        </p>
        
        <div className="relative h-48 rounded-lg overflow-hidden mb-4">
          <img
            src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=600&auto=format&fit=crop"
            alt="Metaverse Fashion Week"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white font-bold">Spring Collection 2024</h3>
            <div className="flex justify-between items-center">
              <span className="text-white/80 text-sm">Next show in 12 days</span>
              <Button size="sm" variant="outline" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                Register
              </Button>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Top Voted Designs</h4>
          
          <div className="space-y-2">
            {fashionDesigns.map((design, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-2 rounded-lg border border-purple-500/20 hover:bg-purple-500/5 transition-colors"
              >
                <img 
                  src={design.image} 
                  alt={design.design} 
                  className="w-12 h-12 rounded-md object-cover"
                />
                <div className="flex-1">
                  <div className="font-medium text-sm">{design.design}</div>
                  <div className="text-xs text-foreground/60">by {design.designer}</div>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <ThumbsUp className="h-3 w-3 text-purple-500" />
                  <span>{design.votes}</span>
                </div>
                <Button size="sm" variant="ghost" className="h-7">Vote</Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const UpcyclingMarathon = () => {
  const upcyclingProjects = [
    {
      user: "EcoReviver",
      title: "Denim Jacket to Tote Conversion",
      votes: 86,
      image: "https://images.unsplash.com/photo-1600247354058-a55ae70191e7?q=80&w=400&auto=format&fit=crop",
      aiSuggestion: "Add smart temperature sensors along the handles and integrate with recycled tech components."
    },
    {
      user: "GreenStitcher",
      title: "T-shirt Patchwork Quilt",
      votes: 73,
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=400&auto=format&fit=crop",
      aiSuggestion: "Incorporate conductive thread to create a touch-responsive smart blanket that can control smart home devices."
    },
    {
      user: "ReFabCreator",
      title: "Sweater to Beanie Transformation",
      votes: 92,
      image: "https://images.unsplash.com/photo-1556015048-4d3aa10df74c?q=80&w=400&auto=format&fit=crop",
      aiSuggestion: "Add a thin layer of our grape-based thermal material inside for temperature regulation."
    }
  ];

  return (
    <Card className="overflow-hidden bg-white/10 backdrop-blur-md border-purple-500/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl font-bold">
          <Recycle className="h-5 w-5 text-purple-500" />
          Upcycling Marathon
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/70 mb-4">
          Upload photos of your old clothes and receive AI-generated smart upgrade suggestions.
          The most liked designs receive free transformation services.
        </p>
        
        <Dialog>
          <DialogTrigger asChild>
            <div className="border-2 border-dashed border-purple-500/30 rounded-lg p-5 text-center mb-5 cursor-pointer hover:bg-purple-500/5 transition-colors">
              <Camera className="h-6 w-6 mx-auto mb-2 text-purple-500" />
              <p className="text-sm font-medium">Upload your garment photo</p>
              <p className="text-xs text-foreground/60">Get AI upgrade suggestions</p>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Upload your garment</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="border-2 border-dashed border-purple-500/30 rounded-lg p-6 text-center">
                <Camera className="h-8 w-8 mx-auto mb-2 text-purple-500/70" />
                <p className="text-sm">Drag and drop your photo here</p>
                <p className="text-xs text-foreground/60 mb-3">or</p>
                <Button size="sm">Select File</Button>
              </div>
              <p className="text-xs text-foreground/60">
                Our AI will analyze your garment and suggest smart technology upgrades 
                that can be integrated during the upcycling process.
              </p>
            </div>
          </DialogContent>
        </Dialog>
        
        <div className="space-y-3">
          <h4 className="font-medium text-sm flex items-center justify-between">
            <span>Community Projects</span>
            <span className="text-xs text-purple-500">View all</span>
          </h4>
          
          <div className="space-y-3">
            {upcyclingProjects.map((project, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="flex items-start gap-3 p-2 rounded-lg border border-purple-500/20 hover:bg-purple-500/5 transition-colors cursor-pointer">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-sm">{project.title}</div>
                      <div className="text-xs text-foreground/60">by {project.user}</div>
                      <div className="flex items-center gap-1 mt-1">
                        <ThumbsUp className="h-3 w-3 text-purple-500" />
                        <span className="text-xs">{project.votes} likes</span>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-40 rounded-md object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-medium mb-1">AI Smart Upgrade Suggestion:</h4>
                      <p className="text-sm bg-purple-500/10 border border-purple-500/20 p-3 rounded-md">
                        {project.aiSuggestion}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" size="sm">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        Like ({project.votes})
                      </Button>
                      <Button size="sm">Apply for Free Transformation</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetaverseChallenges;
