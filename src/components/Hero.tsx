import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">The Future of AI</span>
              <br />
              <span className="font-mono">
                <Typewriter
                  options={{
                    strings: ['Agents', 'Automation', 'Innovation'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8">
              A community-driven platform where you can discover, share, and use AI agents.
              Contribute your own agents or find the perfect solution for your needs.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                className="neon-button bg-primary text-dark flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/marketplace')}
              >
                Explore Agents
              </motion.button>
              <motion.button
                className="neon-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contribute')}
              >
                Contribute Agent
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="w-full h-[600px] relative">
              <Spline scene="https://prod.spline.design/3tImTY4b0haIjZg8/scene.splinecode" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;