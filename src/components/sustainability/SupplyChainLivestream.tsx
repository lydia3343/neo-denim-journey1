
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Video, Hand, MessageSquare, User, Send } from 'lucide-react';

const SupplyChainLivestream = () => {
  const [activeStream, setActiveStream] = useState<'workshop' | 'farm'>('workshop');
  const [showArtisanStory, setShowArtisanStory] = useState(false);
  const [message, setMessage] = useState('');
  
  const artisans = [
    {
      id: 1,
      name: "Claire Fontaine",
      role: "Master Tailor",
      story: "With 25 years of experience, Claire brings traditional tailoring techniques to our high-tech fabrics.",
      videoUrl: "https://example.com/claire-diary",
      imageSrc: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Michel Laurent",
      role: "Textile Engineer",
      story: "Michel developed our proprietary color-changing technique after 5 years of research at École Polytechnique.",
      videoUrl: "https://example.com/michel-diary",
      imageSrc: "/placeholder.svg"
    }
  ];
  
  const [selectedArtisan, setSelectedArtisan] = useState(artisans[0]);

  const handleStreamChange = (stream: 'workshop' | 'farm') => {
    setActiveStream(stream);
    setShowArtisanStory(false);
  };
  
  const handleArtisanClick = (artisan: typeof artisans[0]) => {
    setSelectedArtisan(artisan);
    setShowArtisanStory(true);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
      // In a real implementation, this would send the message to a chat API
    }
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
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-500 text-sm font-medium rounded-full mb-2">
              供应链直播窗口
            </span>
            <h3 className="text-2xl font-bold mb-4">Supply Chain Livestream</h3>
            <p className="text-foreground/70 mb-6">
              Watch our Lyon workshop and Bordeaux vineyard in real-time, connect with our artisans, and learn about the craftsmanship behind each product.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="relative">
              {/* Stream Controls */}
              <div className="flex gap-4 mb-4">
                <Button 
                  variant={activeStream === 'workshop' ? 'default' : 'outline'} 
                  onClick={() => handleStreamChange('workshop')}
                >
                  <Video className="mr-2 h-4 w-4" />
                  Lyon Workshop
                </Button>
                <Button 
                  variant={activeStream === 'farm' ? 'default' : 'outline'} 
                  onClick={() => handleStreamChange('farm')}
                >
                  <Video className="mr-2 h-4 w-4" />
                  Bordeaux Vineyard
                </Button>
              </div>

              {/* Livestream Window */}
              <div className="relative rounded-lg overflow-hidden">
                {/* If this were a real implementation, we would integrate with Twitch API here */}
                <div className="aspect-video bg-gray-950 relative">
                  {/* Placeholder image for stream */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {activeStream === 'workshop' ? (
                      <img 
                        src="/placeholder.svg" 
                        alt="Lyon Workshop Stream" 
                        className="w-full h-full object-cover opacity-30"
                      />
                    ) : (
                      <img 
                        src="/placeholder.svg" 
                        alt="Bordeaux Vineyard Stream" 
                        className="w-full h-full object-cover opacity-30"
                      />
                    )}
                    
                    {/* Live indicator */}
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-xs font-medium">LIVE</span>
                    </div>
                    
                    {/* Stream title */}
                    <div className="absolute top-4 right-4 bg-black/50 px-2 py-1 rounded text-xs text-white">
                      {activeStream === 'workshop' ? 'Lyon Workshop - 24/7 Live' : 'Bordeaux Vineyard - 24/7 Live'}
                    </div>
                    
                    {/* Clickable artisan icons */}
                    {activeStream === 'workshop' && (
                      <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <button 
                          onClick={() => handleArtisanClick(artisans[0])}
                          className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <Hand className="h-5 w-5" />
                        </button>
                      </div>
                    )}
                    
                    {activeStream === 'workshop' && (
                      <div className="absolute right-1/3 bottom-1/3 transform -translate-x-1/2 -translate-y-1/2">
                        <button 
                          onClick={() => handleArtisanClick(artisans[1])}
                          className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <Hand className="h-5 w-5" />
                        </button>
                      </div>
                    )}
                    
                    {/* Stream description overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">
                        {activeStream === 'workshop' 
                          ? 'Watch our artisans craft electrochromic garments in our Lyon workshop.' 
                          : 'See how we collect and process grape pomace at our Bordeaux vineyard.'}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Chat Section */}
                <div className="bg-black/10 backdrop-blur-sm p-4 border-t border-white/10">
                  <div className="flex space-x-3">
                    <Textarea 
                      placeholder="Ask our artisans a question..." 
                      className="min-h-0"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-foreground/60 mt-2">
                    Questions are answered by our artisans during their shifts. Your message will be visible to everyone watching.
                  </p>
                </div>
              </div>
              
              {/* Artisan Story Card (Popup) */}
              {showArtisanStory && (
                <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-10">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gray-900 relative">
                      <img 
                        src={selectedArtisan.imageSrc} 
                        alt={selectedArtisan.name} 
                        className="w-full h-full object-cover opacity-50"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button variant="outline" className="bg-black/50 border-white/20 text-white">
                          <Video className="mr-2 h-4 w-4" />
                          Watch Video Diary
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center mr-3">
                            <User className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <h4 className="font-medium">{selectedArtisan.name}</h4>
                            <p className="text-sm text-foreground/70">{selectedArtisan.role}</p>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0"
                          onClick={() => setShowArtisanStory(false)}
                        >
                          &times;
                        </Button>
                      </div>
                      
                      <p className="mt-3 text-sm">{selectedArtisan.story}</p>
                      
                      <div className="mt-4 text-xs text-foreground/60">
                        Updated weekly • With English & French subtitles
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SupplyChainLivestream;
