import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Bot, Brain, MessageSquare, Database, PenTool, Shield, Github, ExternalLink, Download, Calendar, User, TrendingUp, Award, Zap, Users, Server, MessageCircle, FileText } from 'lucide-react';
import { categories, stats } from '../data/agents';
import { useAgents } from '../hooks/useAgents';
import AgentCard from '../components/AgentCard';
import AgentCard from '../components/AgentCard';

const MarketplacePage = () => {
  const { agents, loading, error, searchAgents, filterByCategory, filterByDifficulty, sortAgents } = useAgents();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const getIcon = (iconName: string) => {
    const icons = {
      Bot,
      Database,
      PenTool,
      MessageSquare,
      Shield,
      Brain,
      Users,
      Zap,
      Server,
      MessageCircle,
      FileText,
    };
    return icons[iconName as keyof typeof icons] || Bot;
  };

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         agent.integrations.some(integration => integration.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || agent.category === selectedCategory;
    const matchesDifficulty = !selectedDifficulty || agent.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const sortedAgents = [...filteredAgents].sort((a, b) => {
    switch (sortBy) {
      case 'downloads':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      case 'recent':
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      case 'nodes':
        return b.nodeCount - a.nodeCount;
      default:
        return b.downloads - a.downloads;
    }
  });

  // Handle search with debouncing
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        searchAgents(searchTerm);
      }
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  // Handle category filter
  React.useEffect(() => {
    filterByCategory(selectedCategory);
  }, [selectedCategory]);

  // Handle difficulty filter
  React.useEffect(() => {
    filterByDifficulty(selectedDifficulty);
  }, [selectedDifficulty]);

  // Handle sorting
  React.useEffect(() => {
    sortAgents(sortBy);
  }, [sortBy]);

  if (loading) {
    return (
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading agents...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="neon-card p-8">
            <h2 className="text-2xl font-bold mb-4 text-red-500">Error Loading Agents</h2>
            <p className="text-gray-400 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="neon-button bg-primary text-dark"
            >
              Retry
            </button>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">n8n Workflow Marketplace</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-6">
            Discover and use professional n8n workflows and automation solutions contributed by our community
          </p>
          
          {/* Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="neon-card p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Bot className="text-primary" size={20} />
                <span className="text-2xl font-bold">{stats.totalWorkflows}</span>
              </div>
              <p className="text-sm text-gray-400">AI Agents</p>
            </div>
            <div className="neon-card p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="text-primary" size={20} />
                <span className="text-2xl font-bold">{stats.totalIntegrations}</span>
              </div>
              <p className="text-sm text-gray-400">Integrations</p>
            </div>
            <div className="neon-card p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="text-primary" size={20} />
                <span className="text-2xl font-bold">{stats.totalNodes.toLocaleString()}</span>
              </div>
              <p className="text-sm text-gray-400">Total Nodes</p>
            </div>
            <div className="neon-card p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="text-primary" size={20} />
                <span className="text-2xl font-bold">{stats.averageRating}</span>
              </div>
              <p className="text-sm text-gray-400">Avg Rating</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
            <span>Featuring agents from multiple sources including</span>
            <a 
              href="https://github.com/Zie619" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
            >
              <Github size={16} />
              Zie619
            </a>
            <span>•</span>
            <a 
              href="https://github.com/huggingface" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
            >
              <Github size={16} />
              Hugging Face
            </a>
            <span>•</span>
            <a 
              href="https://github.com/microsoft" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
            >
              <Github size={16} />
              Microsoft
            </a>
            <span>and more</span>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <div className="grid md:grid-cols-[300px,1fr] gap-8 mb-12">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="neon-card p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Filter size={20} className="text-primary" />
                Filters
              </h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3">Categories</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors ${
                      selectedCategory === ''
                        ? 'bg-primary/20 text-primary'
                        : 'hover:bg-primary/10'
                    }`}
                  >
                    <span>All Categories</span>
                    <span className="text-xs bg-primary/20 px-2 py-1 rounded-full">
                      {agents.length}
                    </span>
                  </button>
                  {categories.map((category) => {
                    const IconComponent = getIcon(category.icon);
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-primary/20 text-primary'
                            : 'hover:bg-primary/10'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <IconComponent size={16} />
                          {category.name}
                        </div>
                        <span className="text-xs bg-primary/20 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Difficulty */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3">Difficulty</h4>
                <div className="space-y-2">
                  {['', 'Beginner', 'Intermediate', 'Advanced'].map((difficulty) => {
                    const count = difficulty ? agents.filter(a => a.difficulty === difficulty).length : agents.length;
                    return (
                      <button
                        key={difficulty}
                        onClick={() => setSelectedDifficulty(difficulty)}
                        className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors ${
                          selectedDifficulty === difficulty
                            ? 'bg-primary/20 text-primary'
                            : 'hover:bg-primary/10'
                        }`}
                      >
                        <span>{difficulty || 'All Levels'}</span>
                        <span className="text-xs bg-primary/20 px-2 py-1 rounded-full">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="neon-card p-6"
            >
              <h3 className="font-bold mb-4">Community Impact</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Downloads</span>
                  <span className="font-bold">{stats.totalDownloads.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="text-warning" size={14} fill="#ff6b35" />
                    <span className="font-bold">{stats.averageRating}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Reviews</span>
                  <span className="font-bold">{agents.reduce((sum, agent) => sum + agent.reviews, 0)}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <div>
            {/* Search and Sort */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search workflows, integrations, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg pl-10 pr-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 min-w-[180px]"
              >
                <option value="popular">Most Popular</option>
                <option value="downloads">Most Downloads</option>
                <option value="rating">Highest Rated</option>
                <option value="recent">Recently Updated</option>
                <option value="nodes">Most Complex</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-400">
                Showing {sortedAgents.length} of {agents.length} workflows
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>

            {/* Workflows Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {sortedAgents.map((agent, index) => (
                <AgentCard key={agent.id} agent={agent} index={index} />
              )
              )
              }
  )
}