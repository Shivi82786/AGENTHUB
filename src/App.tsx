import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cuboid as Cube3d } from 'lucide-react';
import { useLenis } from './hooks/useLenis';

import Header from './components/Header';
import Footer from './components/Footer';
import NotificationSystem from './components/NotificationSystem';
import HomePage from './pages/HomePage';
import MarketplacePage from './pages/MarketplacePage';
import ContributePage from './pages/ContributePage';
import CommunityPage from './pages/CommunityPage';
import LearnPage from './pages/LearnPage';
import { useThemeStore } from './stores/useThemeStore';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  
  // Initialize Lenis smooth scrolling
  useLenis();

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
        <div className={isDarkMode ? 'dark' : ''}>
          <AnimatePresence>
            {isLoading ? (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-dark flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  className="text-primary"
                >
                  <Cube3d size={48} />
                </motion.div>
              </motion.div>
            ) : (
              <div className="min-h-screen bg-dark">
                <Header />
                <NotificationSystem />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/marketplace" element={<MarketplacePage />} />
                  <Route path="/contribute" element={<ContributePage />} />
                  <Route path="/community" element={<CommunityPage />} />
                  <Route path="/learn" element={<LearnPage />} />
                </Routes>
                <Footer />
              </div>
            )}
          </AnimatePresence>
        </div>
    </Router>
  );
}

export default App;