
import { motion } from 'framer-motion';
import { Film } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DocumentarySeries = () => {
  return (
    <motion.div
      className="glass-effect rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="p-8 md:p-10">
        <h3 className="text-2xl font-bold mb-6">纪录片系列</h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Film className="h-6 w-6 text-spotlight" />
            <h4 className="text-xl font-semibold">《Tech Tress》系列</h4>
          </div>
          
          <p className="text-foreground/70">
            每季聚焦一个技术伦理话题（如"算法与手工的边界"），在Arte TV同步播出。
          </p>
          
          <div className="mt-6">
            <div className="relative rounded-xl overflow-hidden aspect-video mb-6 bg-gradient-to-r from-purple-500/30 to-blue-500/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="ghost" className="rounded-full w-16 h-16 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h5 className="text-lg font-semibold text-white">S1E1: 算法与手工的边界</h5>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {['S1E2: 可持续时尚', 'S1E3: 隐私与时尚', 'S1E4: 未来面料'].map((episode, index) => (
                <div 
                  key={episode}
                  className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative group"
                >
                  <span className="text-xs text-center p-2">{episode}</span>
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" className="text-white">
                      预告片
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-between">
              <span className="text-sm text-foreground/70">在 Arte TV 同步播出</span>
              <Button variant="link" size="sm">
                查看全部剧集
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DocumentarySeries;
