import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigation } from '../data/portfolioData';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navigation.map(item => item.href.replace('#', ''));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-300 ${
          isScrolled ? 'top-4' : 'top-6'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="glass rounded-full px-6 py-3 border border-white/10 glow-border">
          <ul className="flex items-center gap-1">
            {navigation.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-primary'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {activeSection === item.href.replace('#', '') && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.div
        className="fixed top-4 right-4 z-50 md:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="glass p-3 rounded-full border border-white/10 glow-border"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="absolute top-20 right-4 glass rounded-2xl border border-white/10 p-4 min-w-[200px]"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
            >
              <ul className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        activeSection === item.href.replace('#', '')
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
