
import { useState } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import ActionPanel from './ActionPanel';
import AvatarUploader from './AvatarUploader';

const QuantumInteractionDesign = () => {
  const [isAvatarGenerated, setIsAvatarGenerated] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedAvatar, setGeneratedAvatar] = useState<string | null>(null);

  // Handle file selection for avatar generation
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        // In a real implementation, we would call an AI model here
        // For demo purposes, we'll simulate AI processing with a timeout
        setTimeout(() => {
          setGeneratedAvatar(e.target?.result as string);
          setIsAvatarGenerated(true);
        }, 2000);
      };
      reader.readAsDataURL(file);
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
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-500 text-sm font-medium rounded-full mb-2">
                  量子化交互设计
                </span>
                <h3 className="text-2xl font-bold mb-4">Quantum Interaction Design</h3>
                <p className="text-foreground/70 mb-6">
                  Experience our cutting-edge quantum interaction features that blend AI with your personal style. Upload a photo to generate your digital avatar and try on our color-changing apparel.
                </p>
              </div>

              <ActionPanel 
                isAvatarGenerated={isAvatarGenerated}
                onFileChange={handleFileChange}
              />
            </div>

            <div className="lg:w-1/2 relative">
              {/* Particle Background */}
              <ParticleBackground />
              
              {/* Avatar Uploader Component */}
              <AvatarUploader 
                selectedImage={selectedImage}
                isAvatarGenerated={isAvatarGenerated}
                generatedAvatar={generatedAvatar}
                onFileChange={handleFileChange}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuantumInteractionDesign;
