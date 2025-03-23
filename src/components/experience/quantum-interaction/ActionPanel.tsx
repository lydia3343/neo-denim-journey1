
import React from 'react';
import { Upload, Share2, Sparkles } from 'lucide-react';

interface ActionPanelProps {
  isAvatarGenerated: boolean;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ActionPanel = ({ isAvatarGenerated, onFileChange }: ActionPanelProps) => {
  return (
    <div className="space-y-6">
      {!isAvatarGenerated ? (
        <div className="space-y-4">
          <label className="button-primary cursor-pointer inline-flex items-center">
            <Upload className="mr-2 h-4 w-4" />
            Upload Your Photo
            <input 
              type="file" 
              className="hidden" 
              accept="image/*" 
              onChange={onFileChange}
            />
          </label>
          <p className="text-sm text-foreground/60">
            Upload a clear front-facing photo to create your digital avatar
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex space-x-4">
            <button className="button-primary inline-flex items-center">
              <Sparkles className="mr-2 h-4 w-4" />
              Try Different Styles
            </button>
            <button className="button-ghost inline-flex items-center">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </button>
          </div>
          <p className="text-sm text-foreground/60">
            Your digital avatar is ready. Try on different color-changing styles or share to social media.
          </p>
        </div>
      )}
    </div>
  );
};

export default ActionPanel;
