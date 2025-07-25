import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="neon-card p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Join Our Community</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Be part of a growing community of AI enthusiasts. Share your agents, discover new solutions, and collaborate with others.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              className="neon-button bg-primary text-dark inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/marketplace')}
            >
              Explore Agents
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              className="neon-button inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contribute')}
            >
              <Plus size={20} />
              Contribute
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;