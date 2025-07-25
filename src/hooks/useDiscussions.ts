import { useState, useEffect } from 'react';

interface Discussion {
  id: number;
  title: string;
  author: string;
  avatar: string;
  content: string;
  likes: number;
  replies: number;
  timeAgo: string;
  category: string;
}

const mockDiscussions: Discussion[] = [
  {
    id: 1,
    title: 'Best practices for AI agent optimization',
    author: 'AgentMaster',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=50&h=50',
    content: 'I\'ve been working with AI agents for over a year now and wanted to share some optimization techniques that have significantly improved agent performance...',
    likes: 45,
    replies: 12,
    timeAgo: '2 hours ago',
    category: 'Tips & Tricks'
  },
  {
    id: 2,
    title: 'How to handle large datasets in AI agent processing',
    author: 'DataEngineer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&h=50',
    content: 'Working with large datasets can be challenging in AI agents. Here are some strategies I\'ve found effective for processing millions of records efficiently...',
    likes: 67,
    replies: 23,
    timeAgo: '4 hours ago',
    category: 'Data Processing'
  },
  {
    id: 3,
    title: 'New integration ideas for the community',
    author: 'IntegrationExpert',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=50&h=50',
    content: 'I\'ve been thinking about some new integrations that would be valuable for the community. What platforms would you like to see integrated next?',
    likes: 34,
    replies: 18,
    timeAgo: '6 hours ago',
    category: 'Feature Requests'
  }
];

export const useDiscussions = () => {
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDiscussions = async () => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setDiscussions(mockDiscussions);
    } catch (err) {
      console.error('Error fetching discussions:', err);
      setError('Failed to fetch discussions');
    } finally {
      setLoading(false);
    }
  };

  const likeDiscussion = async (id: number) => {
    try {
      setDiscussions(prev => 
        prev.map(discussion => 
          discussion.id === id 
            ? { ...discussion, likes: discussion.likes + 1 }
            : discussion
        )
      );
    } catch (err) {
      console.error('Error liking discussion:', err);
    }
  };

  const createDiscussion = async (newDiscussion: Omit<Discussion, 'id' | 'likes' | 'replies' | 'timeAgo'>) => {
    try {
      const discussion: Discussion = {
        ...newDiscussion,
        id: Date.now(),
        likes: 0,
        replies: 0,
        timeAgo: 'just now'
      };
      setDiscussions(prev => [discussion, ...prev]);
      return discussion;
    } catch (err) {
      console.error('Error creating discussion:', err);
      throw err;
    }
  };

  useEffect(() => {
    fetchDiscussions();
  }, []);

  return {
    discussions,
    loading,
    error,
    likeDiscussion,
    createDiscussion,
    refetch: fetchDiscussions
  };
};