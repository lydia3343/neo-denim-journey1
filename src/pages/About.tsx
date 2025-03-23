
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-16 md:pb-24 relative overflow-hidden"
        variants={pageVariants}
        initial="initial"
        animate="animate"
      >
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-spotlight/30 to-purple-500/20 blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-400/20 to-spotlight/30 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 text-center">
          <motion.span 
            className="inline-block px-3 py-1 bg-spotlight/10 text-spotlight text-sm font-medium rounded-full mb-4"
            variants={itemVariants}
          >
            Our Story
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            About <span className="text-gradient">Néoloom</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10"
            variants={itemVariants}
          >
            We're reinventing denim with cutting-edge technology, sustainable materials, and timeless design principles.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-[500px] max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-product"
          >
            <img 
              src="https://images.unsplash.com/photo-1512551980823-a8b83a98ff6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Néoloom team" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.section>
      
      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 py-1 bg-spotlight/10 text-spotlight text-sm font-medium rounded-full mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Visible Technology</h2>
              <p className="text-lg text-foreground/70 mb-6">
                At Néoloom, our mission is to create tech-enhanced sustainable denim that revolutionizes both comfort and style. We believe in "Visible Technology" — innovations that customers can feel and appreciate in everyday wear.
              </p>
              <p className="text-lg text-foreground/70 mb-6">
                Our unique ability to bridge technology development with aesthetic design allows us to transform technical specifications into tangible design language that enhances the wearer's experience.
              </p>
              <p className="text-lg text-foreground/70">
                We're not just making jeans; we're reinventing what denim can be in the 21st century.
              </p>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-20" />
                <div className="relative rounded-2xl overflow-hidden shadow-product">
                  <img 
                    src="https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Our mission" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section id="sustainability" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-spotlight/10 text-spotlight text-sm font-medium rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainability Commitment</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Our approach to sustainability goes beyond materials to encompass our entire production process and business model.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="glass-effect rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-spotlight/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-spotlight" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Recycled Materials</h3>
              <p className="text-foreground/70">
                We use grape waste fibers, recycled cotton, and other sustainable materials to reduce our environmental footprint while maintaining premium quality.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-effect rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-spotlight/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-spotlight" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Reduced Water Usage</h3>
              <p className="text-foreground/70">
                Our innovative production processes use 80% less water than traditional denim manufacturing, helping preserve this precious resource.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-effect rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-spotlight/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-spotlight" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Closed Loop System</h3>
              <p className="text-foreground/70">
                We've established a circular production model that recycles old garments, reducing waste and extending the lifecycle of our materials.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section id="technology" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-spotlight/10 text-spotlight text-sm font-medium rounded-full mb-4">
              Our Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Innovations</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Discover the groundbreaking technologies that set our products apart from traditional denim.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {/* Tech Innovation 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                className="w-full md:w-1/2 order-2 md:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-4">Electrochromic Fabric</h3>
                <p className="text-lg text-foreground/70 mb-6">
                  Our proprietary electrochromic fabric technology allows our denim to change color subtly in response to environmental conditions or user preferences via a companion app.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-3 text-spotlight">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>0.3 second response time</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-spotlight">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Bordeaux grape tannin-based color medium</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-spotlight">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Piezoelectric fiber power generation</p>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="w-full md:w-1/2 order-1 md:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-20" />
                  <div className="relative rounded-2xl overflow-hidden shadow-product">
                    <img 
                      src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="Electrochromic Fabric" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Tech Innovation 2 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-20" />
                  <div className="relative rounded-2xl overflow-hidden shadow-product">
                    <img 
                      src="https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80" 
                      alt="AI Pattern Optimization" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-4">AI Pattern Optimization</h3>
                <p className="text-lg text-foreground/70 mb-6">
                  Using machine learning algorithms trained on thousands of body scans, we create patterns that optimize fit and comfort for diverse body types while minimizing fabric waste.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-3 text-spotlight">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Fabric waste reduced by 18%</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-spotlight">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Based on French body type database</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-spotlight">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Continuous learning from customer feedback</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-spotlight/10 text-spotlight text-sm font-medium rounded-full mb-4">
              Meet The Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              A diverse group of innovators, designers, and technologists committed to revolutionizing the denim industry.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div 
              className="glass-effect rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="relative aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=961&q=80" 
                  alt="Sophie Laurent" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">Sophie Laurent</h3>
                <p className="text-spotlight mb-3">Founder & CEO</p>
                <p className="text-foreground/70 text-sm">
                  Materials scientist with expertise in sustainable textiles and a passion for merging technology with fashion.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 2 */}
            <motion.div 
              className="glass-effect rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="relative aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                  alt="Thomas Lefèvre" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">Thomas Lefèvre</h3>
                <p className="text-spotlight mb-3">CTO</p>
                <p className="text-foreground/70 text-sm">
                  Electronics engineer specializing in wearable technology and smart textiles with over 15 years of experience.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 3 */}
            <motion.div 
              className="glass-effect rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="relative aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80" 
                  alt="Claire Dubois" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">Claire Dubois</h3>
                <p className="text-spotlight mb-3">Head of Design</p>
                <p className="text-foreground/70 text-sm">
                  Former haute couture designer bringing luxury aesthetics to sustainable and technical denim innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
