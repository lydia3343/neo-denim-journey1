
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <motion.footer 
      className="bg-white dark:bg-black pt-16 pb-8 border-t border-gray-200 dark:border-gray-800"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <Link to="/" className="block text-2xl font-bold mb-4">
              <span className="text-primary">N</span>éoloom
            </Link>
            <p className="text-foreground/70 mb-6 max-w-xs">
              Tech-enhanced sustainable denim innovator, merging cutting-edge technology with timeless style.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          {/* Products Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/products" 
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  All Collections
                </Link>
              </li>
              <li>
                <Link 
                  to="/products?category=premium" 
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Premium Line
                </Link>
              </li>
              <li>
                <Link 
                  to="/products?category=sustainable" 
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Eco Collection
                </Link>
              </li>
              <li>
                <Link 
                  to="/products?category=tech" 
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Tech-Enhanced
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/about#sustainability" 
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link 
                  to="/about#technology" 
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Our Technology
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-foreground/70">
                Paris, France
              </li>
              <li>
                <a 
                  href="mailto:contact@neoloom.com" 
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  contact@neoloom.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+33123456789" 
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  +33 1 23 45 67 89
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-foreground/60 text-sm mb-4 md:mb-0"
            variants={itemVariants}
          >
            © {currentYear} Néoloom. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center space-x-4 text-sm"
            variants={itemVariants}
          >
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              Shipping & Returns
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-xl"
        aria-label="Scroll to top"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </motion.footer>
  );
};

export default Footer;
