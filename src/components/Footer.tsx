import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-primary/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-mono text-xl font-bold text-primary mb-4">AgentHub</h3>
            <p className="text-gray-400">
              The premier marketplace for AI agents and automation solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-primary">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-primary">Pricing</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-primary">Demo</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/tarunsoni2112"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://x.com/TarunSoni574746"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/tarun-soni-a61642247/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:contact@agenthub.com"
                className="text-gray-400 hover:text-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AgentHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;