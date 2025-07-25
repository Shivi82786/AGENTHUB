import { useState, useEffect } from 'react';
import { agents as staticAgents } from '../data/agents';
import { agentService, Agent } from '../lib/supabase';

export const useAgents = () => {
  const [agents, setAgents] = useState(staticAgents);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAgents = async () => {
    setLoading(true);
    setError(null);
    try {
      // For now, use static data. In production, uncomment the line below:
      // const data = await agentService.getAll();
      // setAgents(data);
      setAgents(staticAgents);
    } catch (err) {
      console.error('Error fetching agents:', err);
      setError('Failed to fetch agents');
      // Fallback to static data
      setAgents(staticAgents);
    } finally {
      setLoading(false);
    }
  };

  const searchAgents = async (query: string) => {
    if (!query.trim()) {
      setAgents(staticAgents);
      return;
    }

    setLoading(true);
    try {
      // For now, use static filtering. In production, use API search:
      const filtered = staticAgents.filter(agent =>
        agent.name.toLowerCase().includes(query.toLowerCase()) ||
        agent.description.toLowerCase().includes(query.toLowerCase()) ||
        agent.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
        agent.integrations.some(integration => integration.toLowerCase().includes(query.toLowerCase()))
      );
      setAgents(filtered);
    } catch (err) {
      console.error('Error searching agents:', err);
      setError('Search failed');
    } finally {
      setLoading(false);
    }
  };

  const filterByCategory = (category: string) => {
    if (!category) {
      setAgents(staticAgents);
      return;
    }

    const filtered = staticAgents.filter(agent => agent.category === category);
    setAgents(filtered);
  };

  const filterByDifficulty = (difficulty: string) => {
    if (!difficulty) {
      setAgents(staticAgents);
      return;
    }

    const filtered = staticAgents.filter(agent => agent.difficulty === difficulty);
    setAgents(filtered);
  };

  const sortAgents = (sortBy: string) => {
    const sorted = [...agents].sort((a, b) => {
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
    setAgents(sorted);
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  return {
    agents,
    loading,
    error,
    searchAgents,
    filterByCategory,
    filterByDifficulty,
    sortAgents,
    refetch: fetchAgents
  };
};