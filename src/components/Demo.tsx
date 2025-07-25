import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send } from 'lucide-react';

const Demo = () => {
  return (
    <section id="demo" className="py-20 px-4 bg-dark/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">See It In Action</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the power of AI agents firsthand with our interactive demo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="neon-card p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="text-primary" />
              <h3 className="font-mono text-lg">Agent Console</h3>
            </div>
            <div className="font-mono text-sm bg-dark/50 p-4 rounded-lg">
              <p className="text-primary">&gt; Initializing AI agent...</p>
              <p className="text-gray-400">&gt; Agent ready for deployment</p>
              <p className="text-success">&gt; Running system diagnostics...</p>
              <p className="text-accent">&gt; All systems operational</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="neon-card p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Send className="text-primary" />
              <h3 className="font-mono text-lg">Chat Interface</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-dark/50 p-3 rounded-lg">
                <p className="text-sm text-gray-400">User:</p>
                <p>Can you analyze this dataset?</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg">
                <p className="text-sm text-primary">Agent:</p>
                <p>I'll analyze the dataset and provide insights...</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;