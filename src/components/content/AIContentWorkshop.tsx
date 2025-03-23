
import { motion } from 'framer-motion';
import { Sparkles, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AIContentWorkshop = () => {
  return (
    <motion.div
      className="glass-effect rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-8 md:p-10">
        <h3 className="text-2xl font-bold mb-6">生成式AI内容工坊</h3>
        
        <div className="space-y-8">
          <AIDesignAssistant />
          <AutoLocalization />
        </div>
      </div>
    </motion.div>
  );
};

const AIDesignAssistant = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Sparkles className="h-6 w-6 text-spotlight" />
        <h4 className="text-xl font-semibold">AI设计助手</h4>
      </div>
      
      <p className="text-foreground/70">
        用户输入关键词（如"赛博哥特"），生成配套变色方案并一键订购面料。
      </p>
      
      <div className="mt-4 bg-secondary/20 rounded-lg p-5">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="design-prompt" className="text-sm font-medium">输入设计灵感关键词</label>
            <div className="flex gap-2">
              <input 
                id="design-prompt"
                type="text" 
                placeholder="赛博哥特, 未来主义, 生物科技..." 
                className="flex-1 px-3 py-2 bg-background rounded-md border border-input"
              />
              <Button variant="default" className="bg-spotlight hover:bg-spotlight/90">
                生成方案
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-2 mt-2">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className="aspect-square rounded-md"
                style={{
                  background: `linear-gradient(45deg, ${
                    ['#6b46c1', '#805ad5', '#3d72fe', '#4d82fe'][i]
                  }, ${
                    ['#805ad5', '#3d72fe', '#4d82fe', '#6b46c1'][i]
                  })`,
                }}
              />
            ))}
          </div>
          
          <Button variant="outline" className="mt-3">一键订购面料样品</Button>
        </div>
      </div>
    </div>
  );
};

const AutoLocalization = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Languages className="h-6 w-6 text-spotlight" />
        <h4 className="text-xl font-semibold">自动本地化文案</h4>
      </div>
      
      <p className="text-foreground/70">
        DeepL+GPT-4实时翻译产品描述，适配英/法/德/西语语境。
      </p>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        {['English', 'Français', 'Deutsch', 'Español'].map((language, index) => (
          <div 
            key={language}
            className="bg-secondary/20 rounded-lg p-4 flex items-center justify-between"
          >
            <span>{language}</span>
            <Button variant="ghost" size="sm">
              预览
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIContentWorkshop;
