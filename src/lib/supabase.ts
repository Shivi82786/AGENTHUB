import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  capabilities: string[];
  requirements: string;
  documentation: string;
  github_url: string;
  demo_url?: string;
  rating: number;
  reviews: number;
  downloads: number;
  image_url: string;
  author_name: string;
  author_github: string;
  author_avatar: string;
  tags: string[];
  last_updated: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  integrations: string[];
  node_count: number;
  source: string;
  created_at: string;
}

export interface Discussion {
  id: string;
  title: string;
  content: string;
  author_name: string;
  author_avatar: string;
  category: string;
  likes: number;
  replies: number;
  created_at: string;
}

export interface Contributor {
  id: string;
  name: string;
  avatar_url: string;
  github_url: string;
  agent_count: number;
  total_downloads: number;
  average_rating: number;
}

// API functions
export const agentService = {
  async getAll() {
    const { data, error } = await supabase
      .from('agents')
      .select('*')
      .order('downloads', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getByCategory(category: string) {
    const { data, error } = await supabase
      .from('agents')
      .select('*')
      .eq('category', category)
      .order('downloads', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async search(query: string) {
    const { data, error } = await supabase
      .from('agents')
      .select('*')
      .or(`name.ilike.%${query}%,description.ilike.%${query}%,tags.cs.{${query}}`)
      .order('downloads', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async create(agent: Omit<Agent, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('agents')
      .insert([agent])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

export const discussionService = {
  async getAll() {
    const { data, error } = await supabase
      .from('discussions')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async create(discussion: Omit<Discussion, 'id' | 'created_at' | 'likes' | 'replies'>) {
    const { data, error } = await supabase
      .from('discussions')
      .insert([{ ...discussion, likes: 0, replies: 0 }])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

export const contributorService = {
  async getTop() {
    const { data, error } = await supabase
      .from('contributors')
      .select('*')
      .order('total_downloads', { ascending: false })
      .limit(10);
    
    if (error) throw error;
    return data;
  }
};