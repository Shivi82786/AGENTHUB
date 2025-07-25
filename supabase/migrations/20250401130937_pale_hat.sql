/*
  # Create tables for developer features

  1. New Tables
    - `developers`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `name` (text)
      - `bio` (text)
      - `website` (text)
      - `created_at` (timestamp)
      
    - `ai_agents`
      - `id` (uuid, primary key)
      - `developer_id` (uuid, references developers)
      - `name` (text)
      - `description` (text)
      - `category` (text)
      - `price` (integer)
      - `capabilities` (text[])
      - `requirements` (text)
      - `documentation` (text)
      - `status` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      
    - `agent_deployments`
      - `id` (uuid, primary key)
      - `agent_id` (uuid, references ai_agents)
      - `user_id` (uuid, references auth.users)
      - `status` (text)
      - `created_at` (timestamp)
      
    - `agent_reviews`
      - `id` (uuid, primary key)
      - `agent_id` (uuid, references ai_agents)
      - `user_id` (uuid, references auth.users)
      - `rating` (integer)
      - `review` (text)
      - `created_at` (timestamp)
      
  2. Security
    - Enable RLS on all tables
    - Add policies for developers to manage their agents
    - Add policies for users to view and deploy agents
*/

-- Create developers table
CREATE TABLE IF NOT EXISTS developers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  name text NOT NULL,
  bio text,
  website text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Create ai_agents table
CREATE TABLE IF NOT EXISTS ai_agents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  developer_id uuid REFERENCES developers NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  price integer NOT NULL,
  capabilities text[] NOT NULL,
  requirements text,
  documentation text,
  status text NOT NULL DEFAULT 'draft',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_status CHECK (status IN ('draft', 'published', 'archived'))
);

-- Create agent_deployments table
CREATE TABLE IF NOT EXISTS agent_deployments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id uuid REFERENCES ai_agents NOT NULL,
  user_id uuid REFERENCES auth.users NOT NULL,
  status text NOT NULL DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_status CHECK (status IN ('active', 'inactive', 'suspended'))
);

-- Create agent_reviews table
CREATE TABLE IF NOT EXISTS agent_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id uuid REFERENCES ai_agents NOT NULL,
  user_id uuid REFERENCES auth.users NOT NULL,
  rating integer NOT NULL,
  review text,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_rating CHECK (rating BETWEEN 1 AND 5),
  UNIQUE(agent_id, user_id)
);

-- Enable Row Level Security
ALTER TABLE developers ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_deployments ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_reviews ENABLE ROW LEVEL SECURITY;

-- Policies for developers table
CREATE POLICY "Developers can view their own profile"
  ON developers
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Developers can update their own profile"
  ON developers
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Policies for ai_agents table
CREATE POLICY "Anyone can view published agents"
  ON ai_agents
  FOR SELECT
  TO authenticated
  USING (status = 'published');

CREATE POLICY "Developers can manage their own agents"
  ON ai_agents
  FOR ALL
  TO authenticated
  USING (developer_id IN (
    SELECT id FROM developers WHERE user_id = auth.uid()
  ));

-- Policies for agent_deployments table
CREATE POLICY "Users can view their own deployments"
  ON agent_deployments
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create deployments"
  ON agent_deployments
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Policies for agent_reviews table
CREATE POLICY "Anyone can view reviews"
  ON agent_reviews
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create reviews for deployed agents"
  ON agent_reviews
  FOR INSERT
  TO authenticated
  WITH CHECK (
    user_id = auth.uid() AND
    EXISTS (
      SELECT 1 FROM agent_deployments
      WHERE agent_id = agent_reviews.agent_id
      AND user_id = auth.uid()
    )
  );