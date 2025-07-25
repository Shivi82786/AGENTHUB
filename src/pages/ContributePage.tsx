import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Code, Bot, Save, Share2, Github, ExternalLink, CheckCircle } from 'lucide-react';
import { useNotificationStore } from '../stores/useNotificationStore';
import { agentService } from '../lib/supabase';

const ContributePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    capabilities: '',
    requirements: '',
    documentation: '',
    githubUrl: '',
    demoUrl: '',
    integrations: '',
    difficulty: '',
    tags: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { addNotification } = useNotificationStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate required fields
      if (!formData.name || !formData.description || !formData.category || !formData.githubUrl) {
        addNotification({
          type: 'error',
          message: 'Please fill in all required fields.'
        });
        setIsSubmitting(false);
        return;
      }

      // Validate GitHub URL
      if (!formData.githubUrl.includes('github.com')) {
        addNotification({
          type: 'error',
          message: 'Please provide a valid GitHub repository URL.'
        });
        setIsSubmitting(false);
        return;
      }

      // Simulate API submission (in production, use agentService.create)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      addNotification({
        type: 'success',
        message: 'Your AI agent has been submitted successfully! Our team will review it shortly.'
      });
      
      setIsSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          description: '',
          category: '',
          capabilities: '',
          requirements: '',
          documentation: '',
          githubUrl: '',
          demoUrl: '',
          integrations: '',
          difficulty: '',
          tags: '',
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      addNotification({
        type: 'error',
        message: 'Failed to submit agent. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="neon-card p-12"
          >
            <CheckCircle className="mx-auto mb-6 text-success" size={64} />
            <h1 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Agent Submitted!</span>
            </h1>
            <p className="text-gray-400 mb-6">
              Thank you for contributing to our community! Your AI agent has been submitted and will be reviewed by our team.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/marketplace'}
                className="neon-button bg-primary text-dark"
              >
                Browse Agents
              </button>
              <button
                onClick={() => setIsSubmitted(false)}
                className="neon-button"
              >
                Submit Another
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Contribute Your AI Agent</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Share your AI agent with the community and help others automate their processes. 
            All agents are open source and freely available to everyone.
          </p>
        </motion.div>

        {/* Contribution Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="neon-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Bot className="text-primary" />
            Contribution Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">What to Include:</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Complete agent source code and configuration</li>
                <li>• Detailed documentation and setup instructions</li>
                <li>• List of required integrations and credentials</li>
                <li>• Example use cases and screenshots</li>
                <li>• Clear description of agent functionality</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Quality Standards:</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Agent must be tested and functional</li>
                <li>• Include error handling where appropriate</li>
                <li>• Use meaningful variable names and descriptions</li>
                <li>• Provide comprehensive documentation</li>
                <li>• Follow AI development best practices</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="neon-card p-8 space-y-8"
        >
          {/* Basic Information */}
          <div>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Bot className="text-primary" />
              Basic Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Agent Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  placeholder="e.g., Advanced AI Customer Support Agent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="automation">Automation</option>
                  <option value="ai-framework">AI Framework</option>
                  <option value="chatbot-framework">Chatbot Framework</option>
                  <option value="multi-agent">Multi-Agent System</option>
                  <option value="autonomous-agents">Autonomous Agents</option>
                  <option value="conversational-ai">Conversational AI</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Difficulty Level *</label>
                <select
                  value={formData.difficulty}
                  onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  required
                >
                  <option value="">Select difficulty</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Tags</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  placeholder="e.g., email, automation, ai, gmail (comma-separated)"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 h-32"
                placeholder="Provide a detailed description of what your agent does and how it can help others..."
                required
              />
            </div>
          </div>

          {/* Technical Details */}
          <div>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Code className="text-primary" />
              Technical Details
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Key Capabilities *</label>
                <textarea
                  value={formData.capabilities}
                  onChange={(e) => setFormData({ ...formData, capabilities: e.target.value })}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 h-32"
                  placeholder="List the main features and capabilities of your agent (one per line)..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Required Integrations *</label>
                <input
                  type="text"
                  value={formData.integrations}
                  onChange={(e) => setFormData({ ...formData, integrations: e.target.value })}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  placeholder="e.g., Gmail, Slack, OpenAI, Webhook (comma-separated)"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">System Requirements *</label>
                <textarea
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  placeholder="Specify Python version, required libraries, API keys, and any other prerequisites..."
                  required
                />
              </div>
            </div>
          </div>

          {/* Links & Resources */}
          <div>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Share2 className="text-primary" />
              Links & Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">GitHub Repository URL *</label>
                <input
                  type="url"
                  value={formData.githubUrl}
                  onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  placeholder="https://github.com/username/workflow-repo"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Demo/Video URL (Optional)</label>
                <input
                  type="url"
                  value={formData.demoUrl}
                  onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  placeholder="https://youtube.com/watch?v=..."
                />
              </div>
            </div>
          </div>

          {/* Documentation */}
          <div>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Upload className="text-primary" />
              Documentation
            </h2>
            <div>
              <label className="block text-sm font-medium mb-2">Setup Instructions & Documentation *</label>
              <textarea
                value={formData.documentation}
                onChange={(e) => setFormData({ ...formData, documentation: e.target.value })}
                className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 h-64"
                placeholder="Provide comprehensive setup instructions, configuration steps, usage examples, and any other helpful information..."
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 neon-button bg-primary text-dark flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-dark"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Save size={20} />
                  Submit Agent
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => window.open('https://github.com/Zie619/n8n-workflows', '_blank')}
              className="neon-button flex items-center gap-2"
            >
              <Github size={20} />
              View Examples
            </button>
          </div>
        </motion.form>
      </div>
    </main>
  );
};

export default ContributePage;