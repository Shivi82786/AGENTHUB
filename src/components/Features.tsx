import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, Zap, Lock, Gauge, Cloud } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Community Agents',
    description: 'Access a growing library of AI agents and workflows shared by the community.',
  },
  {
    icon: Brain,
    title: 'Open Source',
    description: 'All agents are open source with full documentation and source code access.',
  },
  {
    icon: Zap,
    title: 'Easy Integration',
    description: 'Download and integrate workflows into your n8n instance with ease.',
  },
  {
    icon: Lock,
    title: 'Trusted Contributors',
    description: 'All workflows are created by verified community contributors.',
  },
  {
    icon: Gauge,
    title: 'Production Ready',
    description: 'Battle-tested workflows ready for production environments.',
  },
  {
    icon: Cloud,
    title: 'Multi-Platform',
    description: 'Works with various platforms and services through n8n integrations.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the tools and capabilities that make AgentHub the leading platform for AI agent deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="neon-card p-6"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;