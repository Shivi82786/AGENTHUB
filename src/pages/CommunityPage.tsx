import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Share2, ThumbsUp, Github, ExternalLink, Star, TrendingUp } from 'lucide-react';
import { stats } from '../data/agents';
import { useAgents } from '../hooks/useAgents';
import { useDiscussions } from '../hooks/useDiscussions';

const CommunityPage = () => {
  const { agents } = useAgents();
  const { discussions, loading: discussionsLoading, likeDiscussion } = useDiscussions();
  const [activeTab, setActiveTab] = React.useState('discussions');


  const topContributors = [
    {
      name: 'Zie619',
      avatar: 'https://github.com/Zie619.png',
      workflows: agents.filter(a => a.source === 'n8n-workflows').length,
      downloads: stats.totalDownloads,
      rating: parseFloat(stats.averageRating),
      githubUrl: 'https://github.com/Zie619'
    },
    {
      name: 'Hugging Face',
      avatar: 'https://github.com/huggingface.png',
      workflows: agents.filter(a => a.source.includes('huggingface')).length,
      downloads: agents.filter(a => a.source.includes('huggingface')).reduce((sum, agent) => sum + agent.downloads, 0),
      rating: 4.8,
      githubUrl: 'https://github.com/huggingface'
    },
    {
      name: 'Microsoft',
      avatar: 'https://github.com/microsoft.png',
      workflows: agents.filter(a => a.author.name === 'Microsoft').length,
      downloads: agents.filter(a => a.author.name === 'Microsoft').reduce((sum, agent) => sum + agent.downloads, 0),
      rating: 4.7,
      githubUrl: 'https://github.com/microsoft'
    }
  ];

  const featuredWorkflows = agents.slice(0, 3);

  return (
    <main className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Community Hub</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with AI agent developers, share experiences, and collaborate on intelligent automation solutions.
          </p>
        </motion.div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="neon-card p-6 text-center"
          >
            <Users className="mx-auto mb-3 text-primary" size={32} />
            <h3 className="text-2xl font-bold mb-1">1,200+</h3>
            <p className="text-gray-400">Active Members</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="neon-card p-6 text-center"
          >
            <Share2 className="mx-auto mb-3 text-primary" size={32} />
            <h3 className="text-2xl font-bold mb-1">{stats.totalWorkflows}</h3>
            <p className="text-gray-400">AI Agents</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="neon-card p-6 text-center"
          >
            <TrendingUp className="mx-auto mb-3 text-primary" size={32} />
            <h3 className="text-2xl font-bold mb-1">{stats.totalDownloads.toLocaleString()}</h3>
            <p className="text-gray-400">Total Downloads</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="neon-card p-6 text-center"
          >
            <Star className="mx-auto mb-3 text-primary" size={32} />
            <h3 className="text-2xl font-bold mb-1">{stats.averageRating}</h3>
            <p className="text-gray-400">Average Rating</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[1fr,350px] gap-8">
          <div>
            {/* Tabs */}
            <div className="flex space-x-4 mb-8">
              {[
                { id: 'discussions', label: 'Discussions', icon: MessageSquare },
                { id: 'featured', label: 'Featured Agents', icon: Star },
                { id: 'contributors', label: 'Top Contributors', icon: Users },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium ${
                    activeTab === tab.id
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'hover:bg-primary/10 border border-transparent'
                  }`}
                >
                  <tab.icon size={20} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="space-y-6">
              {activeTab === 'discussions' && discussions.map((discussion) => (
                <motion.div
                  key={discussion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="neon-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={discussion.avatar}
                      alt={discussion.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg">{discussion.title}</h3>
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                          {discussion.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-medium">{discussion.author}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-400">{discussion.timeAgo}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{discussion.content}</p>
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                          <ThumbsUp size={16} />
                          <span>{discussion.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                          <MessageSquare size={16} />
                          <span>{discussion.replies} replies</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                          <Share2 size={16} />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {activeTab === 'featured' && featuredWorkflows.map((agent, index) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="neon-card p-6"
                >
                  <div className="flex gap-6">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{agent.name}</h3>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{agent.description}</p>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="text-warning" size={16} fill="#ff6b35" />
                          <span className="font-bold">{agent.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp size={16} className="text-primary" />
                          <span>{agent.downloads.toLocaleString()} downloads</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={agent.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="neon-button bg-primary text-dark flex items-center gap-2"
                        >
                          <Github size={16} />
                          View Code
                        </a>
                        <button className="neon-button flex items-center gap-2">
                          <ExternalLink size={16} />
                          Use Agent
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {activeTab === 'contributors' && topContributors.map((contributor, index) => (
                <motion.div
                  key={contributor.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="neon-card p-6"
                >
                  <div className="flex items-center gap-6">
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2">{contributor.name}</h3>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-2xl font-bold text-primary">{contributor.workflows}</p>
                          <p className="text-sm text-gray-400">Agents</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-secondary">{contributor.downloads.toLocaleString()}</p>
                          <p className="text-sm text-gray-400">Downloads</p>
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <Star className="text-warning" size={16} fill="#ff6b35" />
                            <p className="text-2xl font-bold text-warning">{contributor.rating}</p>
                          </div>
                          <p className="text-sm text-gray-400">Avg Rating</p>
                        </div>
                      </div>
                      <a
                        href={contributor.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neon-button bg-primary text-dark flex items-center gap-2 w-fit"
                      >
                        <Github size={16} />
                        View Profile
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="neon-card p-6"
            >
              <h3 className="font-bold mb-4">Popular Topics</h3>
              <div className="space-y-2">
                {[
                  'AI Agent Optimization',
                  'API Integrations',
                  'Data Processing',
                  'Automation Tips',
                  'Agent Debugging',
                  'Best Practices'
                ].map((topic) => (
                  <button
                    key={topic}
                    className="block w-full text-left px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    #{topic}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="neon-card p-6"
            >
              <h3 className="font-bold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { user: 'AgentPro', action: 'shared a new agent', time: '5 min ago' },
                  { user: 'AutomationGuru', action: 'commented on a discussion', time: '12 min ago' },
                  { user: 'DataWizard', action: 'liked an agent', time: '1 hour ago' },
                  { user: 'IntegrationMaster', action: 'started a discussion', time: '2 hours ago' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Users size={14} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>{' '}
                        <span className="text-gray-400">{activity.action}</span>
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="neon-card p-6"
            >
              <h3 className="font-bold mb-4">Join the Discussion</h3>
              <p className="text-gray-400 text-sm mb-4">
                Connect with other AI agent enthusiasts and share your automation experiences.
              </p>
              <div className="space-y-3">
                <button className="w-full neon-button bg-primary text-dark">
                  Start a Discussion
                </button>
                <button className="w-full neon-button">
                  Share Your Agent
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CommunityPage;