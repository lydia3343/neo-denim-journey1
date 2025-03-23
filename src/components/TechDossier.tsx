
import { motion } from 'framer-motion';
import { File, Cpu, Award, Download } from 'lucide-react';

export interface TechDossierProps {
  fullPage?: boolean;
}

const TechDossier = ({ fullPage }: TechDossierProps) => {
  const stats = [
    { 
      label: "Recycled Materials", 
      value: "85%", 
      description: "of our fibers come from recycled sources",
      icon: <File className="w-6 h-6" />
    },
    { 
      label: "Energy Efficiency", 
      value: "40%", 
      description: "less energy used compared to traditional production",
      icon: <Cpu className="w-6 h-6" />
    },
    { 
      label: "Patents Filed", 
      value: "12", 
      description: "unique technologies developed by our team",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="tech-dossier" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-3 py-1 bg-spotlight/10 text-spotlight text-sm font-medium rounded-full mb-4">
            Tech Dossier
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technical Innovation</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore the cutting-edge technologies that power our sustainable smart denim products.
          </p>
        </motion.div>

        {/* Data Dashboard */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="glass-effect rounded-xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4 text-spotlight">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg font-medium mb-1">{stat.label}</p>
              <p className="text-foreground/60 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Whitepaper */}
        <motion.div 
          className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-3">Smart Textile Technology Whitepaper</h3>
              <p className="text-foreground/70 mb-4 max-w-md">
                Download our comprehensive technical documentation on sustainable smart textile innovations.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#download-pdf" 
                  className="button-primary inline-flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" />
                  PDF Version
                </a>
                <a 
                  href="#download-epub" 
                  className="button-ghost inline-flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" />
                  EPUB Version
                </a>
              </div>
            </div>
            <div className="relative w-48 h-64">
              <div className="absolute inset-0 rounded-lg shadow-md overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 opacity-20"></div>
              </div>
              <div className="relative w-full h-full bg-white/80 backdrop-blur-sm rounded-lg p-4 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="w-12 h-1 bg-spotlight mb-2"></div>
                  <div className="w-20 h-1 bg-spotlight/60 mb-8"></div>
                  <div className="flex flex-col gap-2">
                    <div className="w-full h-1.5 bg-gray-300 rounded-full"></div>
                    <div className="w-3/4 h-1.5 bg-gray-300 rounded-full"></div>
                    <div className="w-5/6 h-1.5 bg-gray-300 rounded-full"></div>
                    <div className="w-2/3 h-1.5 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-full h-1.5 bg-gray-300 rounded-full"></div>
                  <div className="w-5/6 h-1.5 bg-gray-300 rounded-full"></div>
                  <div className="flex justify-center mt-4">
                    <div className="w-12 h-12 rounded-full bg-spotlight/20 flex items-center justify-center">
                      <Download className="h-5 w-5 text-spotlight" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Patent Wall */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-2">Our Patents & Innovations</h3>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
            Protecting our innovations while pushing the boundaries of sustainable fashion.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            "Color-changing electrochromic fabric technology",
            "Self-regulating temperature control denim",
            "Grape waste fiber conversion process",
            "AI-driven pattern optimization algorithm"
          ].map((patent, index) => (
            <motion.div 
              key={index}
              className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <Award className="h-8 w-8 text-spotlight" />
                <span className="text-xs font-medium text-foreground/50">EP{3564000 + index}A1</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">{patent}</h4>
              <div className="flex items-center mt-6">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/European_Patent_Office_logo.svg/1200px-European_Patent_Office_logo.svg.png" 
                    alt="EPO" 
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <span className="text-xs ml-2 text-foreground/60">European Patent Office</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Logos */}
        <motion.div 
          className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {["CEA", "Bordeaux University", "IFM"].map((partner, index) => (
            <motion.div 
              key={index}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-12 w-32 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center">
                <span className="font-semibold text-sm">{partner}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechDossier;
