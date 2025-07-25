import React from 'react';
import { motion } from 'framer-motion';
import { Star, Download, MessageSquare, Calendar, Github, ExternalLink } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  capabilities: string[];
  requirements: string;
  documentation: string;
  githubUrl: string;
  demoUrl?: string;
  rating: number;
  reviews: number;
  downloads: number;
  image: string;
  author: {
    name: string;
    githubProfile: string;
    avatar: string;
  };
  tags: string[];
  lastUpdated: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  integrations: string[];
  nodeCount: number;
  source: string;
}

interface AgentCardProps {
  agent: Agent;
  index: number;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, index }) => {
  const handleViewCode = () => {
    window.open(agent.githubUrl, '_blank', 'noopener,noreferrer');
  };

  const handleUseAgent = () => {
    window.open(agent.githubUrl, '_blank', 'noopener,noreferrer');
  };

  const handleAuthorClick = () => {
    window.open(agent.author.githubProfile, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="neon-card p-6 group h-full flex flex-col"
    >
      <div className="relative mb-4">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-full h-48 object-cover rounded-lg"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&h=400';
          }}
        />
        <div className="absolute top-2 right-2 bg-dark/80 rounded-full px-3 py-1 flex items-center gap-1">
          <Star className="text-warning" size={16} fill="#ff6b35" />
          <span className="font-bold">{agent.rating}</span>
        </div>
        <div className="absolute top-2 left-2 bg-primary/20 text-primary rounded-full px-3 py-1 text-xs font-medium">
          {agent.difficulty}
        </div>
        <div className="absolute bottom-2 right-2 bg-dark/80 rounded-full px-3 py-1 text-xs">
          {agent.nodeCount} nodes
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {agent.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">{agent.description}</p>
        
        {/* Author Info */}
        <div className="flex items-center gap-2 mb-4 p-3 bg-dark/30 rounded-lg">
          <img
            src={agent.author.avatar}
            alt={agent.author.name}
            className="w-8 h-8 rounded-full cursor-pointer hover:ring-2 hover:ring-primary transition-all"
            onClick={handleAuthorClick}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://github.com/github.png';
            }}
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">by</span>
              <button
                onClick={handleAuthorClick}
                className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
              >
                {agent.author.name}
              </button>
              <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded-full">
                {agent.source}
              </span>
            </div>
          </div>
        </div>
        
        {/* Integrations */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-400 mb-2">INTEGRATIONS</h4>
          <div className="flex flex-wrap gap-1">
            {agent.integrations.slice(0, 4).map((integration, idx) => (
              <span
                key={idx}
                className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full"
              >
                {integration}
              </span>
            ))}
            {agent.integrations.length > 4 && (
              <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded-full">
                +{agent.integrations.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {agent.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Download size={14} />
              <span>{agent.downloads.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare size={14} />
              <span>{agent.reviews}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{new Date(agent.lastUpdated).toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="flex gap-2 mt-auto">
          <button
            onClick={handleViewCode}
            className="flex-1 neon-button bg-primary text-dark flex items-center justify-center gap-2 font-semibold"
          >
            <Github size={16} />
            View Code
          </button>
          <button 
            onClick={handleUseAgent}
            className="flex-1 neon-button flex items-center justify-center gap-2"
          >
            <ExternalLink size={16} />
            Use Agent
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AgentCard;