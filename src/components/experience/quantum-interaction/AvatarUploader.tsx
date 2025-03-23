
import React from 'react';
import { Upload, Share2, Sparkles } from 'lucide-react';

interface AvatarUploaderProps {
  selectedImage: string | null;
  isAvatarGenerated: boolean;
  generatedAvatar: string | null;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AvatarUploader = ({
  selectedImage,
  isAvatarGenerated,
  generatedAvatar,
  onFileChange
}: AvatarUploaderProps) => {
  return (
    <div className="lg:w-1/2 relative">
      {/* Avatar Display Area */}
      <div className="relative aspect-square max-w-md mx-auto">
        {selectedImage ? (
          <div className="relative">
            {!isAvatarGenerated && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl z-10">
                <div className="text-white text-center">
                  <div className="spinner mb-4"></div>
                  <p>Generating your digital avatar...</p>
                </div>
              </div>
            )}
            <div className="overflow-hidden rounded-xl border-2 border-spotlight/20 shadow-xl">
              <img 
                src={generatedAvatar || selectedImage} 
                alt="User uploaded or generated avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-black/5 rounded-xl border-2 border-dashed border-foreground/20 flex items-center justify-center">
            <div className="text-center p-8">
              <Upload className="mx-auto h-10 w-10 text-foreground/40 mb-4" />
              <p className="text-foreground/60">
                Upload a photo to create your digital avatar and try on our color-changing apparel
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarUploader;
