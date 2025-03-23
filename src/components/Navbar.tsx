
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Products', 
      path: '/products',
      dropdown: true,
      items: [
        { name: 'All Products', path: '/products' },
        { name: 'Smart Belt', path: '/products/smart-belt' },
        { name: 'Temperature-Control Jeans', path: '/products/temp-control-jeans' },
        { name: 'Digital Twin', path: '/products/digital-twin' },
      ] 
    },
    { name: 'Tech Dossier', path: '/tech-dossier' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Experience', path: '/experience' },
    { name: 'About', path: '/about' },
  ];

  // Animation variants
  const navVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.1 + i * 0.1
      }
    })
  };

  return (
    <motion.header
      variants={navVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight flex items-center hover:opacity-80 transition-opacity"
        >
          <span className="text-primary">N</span>éoloom
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <motion.div 
              key={link.name}
              custom={index}
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              className="relative"
            >
              {link.dropdown ? (
                <div>
                  <button
                    onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                    className={`relative px-1 py-2 font-medium text-sm hover:text-primary transition-colors duration-300 flex items-center
                      ${location.pathname.includes(link.path) 
                        ? 'text-primary' 
                        : 'text-foreground/80'
                      }`}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {isProductsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-lg rounded-lg py-2 min-w-[200px] z-50">
                      {link.items?.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`relative px-1 py-2 font-medium text-sm hover:text-primary transition-colors duration-300 
                    ${(location.pathname === link.path || (link.path !== '/' && location.pathname.includes(link.path)))
                      ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' 
                      : 'text-foreground/80'
                    }`}
                >
                  {link.name}
                </Link>
              )}
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span 
            className={`block w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-out ${
              isMobileMenuOpen ? 'transform rotate-45 translate-y-1' : 'mb-1.5'
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-foreground rounded-full transition-opacity duration-300 ease-out ${
              isMobileMenuOpen ? 'opacity-0' : 'mb-1.5'
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-out ${
              isMobileMenuOpen ? 'transform -rotate-45 -translate-y-1' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 shadow-lg' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <div>
                  <button
                    onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                    className={`flex items-center justify-between w-full px-2 py-2 font-medium text-base hover:text-primary transition-colors ${
                      location.pathname.includes(link.path) ? 'text-primary' : 'text-foreground/80'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isProductsDropdownOpen && (
                    <div className="pl-4 mt-2 border-l-2 border-primary/20">
                      {link.items?.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-2 py-2 text-sm hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`block px-2 py-2 font-medium text-base hover:text-primary transition-colors ${
                    (location.pathname === link.path || (link.path !== '/' && location.pathname.includes(link.path))) 
                      ? 'text-primary' 
                      : 'text-foreground/80'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
