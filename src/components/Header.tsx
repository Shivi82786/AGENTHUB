import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Cuboid as Cube3d, Menu, X, Plus, Lock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        // Use Lenis for smooth scrolling
        window.lenis?.scrollTo(element, { duration: 1.2 });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-primary/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2 text-2xl font-mono font-bold text-primary"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Cube3d className="animate-glow" />
              <span className="animate-glow">AgentHub</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks scrollToSection={scrollToSection} />
            <div className="flex items-center space-x-4">
              <motion.button
                className="neon-button bg-primary text-dark flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contribute')}
              >
                <Plus size={16} />
                Contribute Agent
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="py-4 space-y-4">
            <NavLinks mobile scrollToSection={scrollToSection} />
            <motion.button
              className="w-full neon-button bg-primary text-dark"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigate('/contribute');
                setIsMenuOpen(false);
              }}
            >
              Contribute Agent
            </motion.button>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

const NavLinks = ({ mobile = false, scrollToSection }: { mobile?: boolean, scrollToSection: (sectionId: string) => void }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Community', path: '/community' },
    { name: 'Learn', path: '/learn', locked: true },
    { name: 'Features', path: '/#features', section: 'features' },
  ];

  const handleClick = (link: { path: string, section?: string }) => {
    if (link.locked) {
      // Do nothing for locked items
      return;
    } else if (link.section) {
      scrollToSection(link.section);
    } else {
      navigate(link.path);
    }
  };

  const baseClasses = "font-mono text-white hover:text-primary transition-colors duration-300";
  const mobileClasses = "block py-2";
  const classes = mobile ? `${baseClasses} ${mobileClasses}` : baseClasses;

  return (
    <>
      {links.map((link) => (
        <div
          key={link.path}
          className={`${link.locked ? 'relative' : ''}`}
        >
          <button
            onClick={() => handleClick(link)}
            disabled={link.locked}
            className={`${classes} ${location.pathname === link.path ? 'text-primary' : ''} ${
              link.locked ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {link.name}
            {link.locked && <Lock size={14} className="inline ml-1" />}
          </button>
        </div>
      ))}
    </>
  );
};

export default Header;