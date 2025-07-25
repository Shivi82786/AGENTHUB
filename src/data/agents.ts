// Comprehensive AI Agent and Workflow Collection
// This collection includes agents from multiple sources with proper attribution

export interface Agent {
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

export const agents: Agent[] = [
  // Original n8n Workflows by Zie619
  {
    id: 'advanced-email-automation',
    name: 'Advanced Email Automation Suite',
    description: 'Comprehensive email processing system with AI categorization, auto-responses, and multi-provider support. Handles complex email workflows with attachment processing.',
    category: 'automation',
    capabilities: [
      'AI Email Categorization',
      'Multi-provider Support (Gmail, Outlook, Yahoo)',
      'Attachment Processing',
      'Template-based Responses',
      'Email Threading',
      'Spam Detection',
      'Priority Scoring'
    ],
    requirements: 'n8n instance, Email provider APIs, OpenAI API (optional), Webhook endpoints',
    documentation: `# Advanced Email Automation Suite

Complete email automation solution with AI-powered categorization and intelligent responses.

## Features
- **Smart Categorization**: AI-powered email classification
- **Multi-provider Support**: Works with Gmail, Outlook, Yahoo, and custom SMTP
- **Attachment Handling**: Process and save attachments automatically
- **Template Engine**: Dynamic response templates with variables
- **Priority Scoring**: Automatic priority assignment based on content
- **Thread Management**: Maintain conversation context

## Setup Instructions
1. Import workflow JSON into n8n
2. Configure email provider credentials
3. Set up OpenAI API for AI features (optional)
4. Configure webhook endpoints
5. Customize response templates
6. Set up attachment storage

## Integrations
- Gmail API
- Microsoft Graph (Outlook)
- OpenAI GPT
- Webhook endpoints
- File storage systems

## Usage Examples
- Customer support automation
- Lead qualification
- Newsletter management
- Internal communication routing`,
    githubUrl: 'https://github.com/Zie619/n8n-workflows',
    rating: 4.9,
    reviews: 156,
    downloads: 3420,
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=600&h=400',
    author: {
      name: 'Zie619',
      githubProfile: 'https://github.com/Zie619',
      avatar: 'https://github.com/Zie619.png'
    },
    tags: ['email', 'automation', 'ai', 'communication', 'gmail', 'outlook'],
    lastUpdated: '2024-01-15',
    difficulty: 'Advanced',
    integrations: ['Gmail', 'Outlook', 'OpenAI', 'Webhook'],
    nodeCount: 45,
    source: 'n8n-workflows'
  },

  // Hugging Face SmolAgents
  {
    id: 'smolagents-framework',
    name: 'SmolAgents - Lightweight AI Agent Framework',
    description: 'A simple, lightweight framework for building AI agents with tool calling capabilities. Perfect for creating custom AI assistants with minimal overhead.',
    category: 'ai-framework',
    capabilities: [
      'Tool Calling Interface',
      'Multi-model Support',
      'Custom Agent Creation',
      'Memory Management',
      'Plugin Architecture',
      'Conversation Handling'
    ],
    requirements: 'Python 3.8+, Hugging Face Transformers, OpenAI API (optional)',
    documentation: `# SmolAgents Framework

A lightweight framework for building AI agents with tool calling capabilities.

## Key Features
- **Simple API**: Easy-to-use interface for agent creation
- **Tool Integration**: Built-in support for various tools and APIs
- **Multi-model Support**: Works with different language models
- **Extensible**: Plugin architecture for custom functionality

## Quick Start
\`\`\`python
from smolagents import Agent, Tool

# Create a simple agent
agent = Agent(model="gpt-3.5-turbo")

# Add tools
agent.add_tool(Tool("calculator", calculator_function))

# Run the agent
response = agent.run("What is 2 + 2?")
\`\`\`

## Use Cases
- Custom AI assistants
- Automated workflows
- Tool integration
- Conversational AI`,
    githubUrl: 'https://github.com/huggingface/smolagents',
    rating: 4.7,
    reviews: 89,
    downloads: 2156,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&h=400',
    author: {
      name: 'Hugging Face',
      githubProfile: 'https://github.com/huggingface',
      avatar: 'https://github.com/huggingface.png'
    },
    tags: ['ai-framework', 'python', 'agents', 'huggingface', 'tools'],
    lastUpdated: '2024-02-20',
    difficulty: 'Intermediate',
    integrations: ['Hugging Face', 'OpenAI', 'Python'],
    nodeCount: 25,
    source: 'huggingface/smolagents'
  },

  // Peak AI Agent Stack
  {
    id: 'peak-ai-agent-stack',
    name: 'Peak AI Agent Stack',
    description: 'Enterprise-grade AI agent infrastructure with advanced orchestration, monitoring, and deployment capabilities for production environments.',
    category: 'ai-infrastructure',
    capabilities: [
      'Agent Orchestration',
      'Production Monitoring',
      'Scalable Deployment',
      'Multi-agent Coordination',
      'Performance Analytics',
      'Enterprise Security'
    ],
    requirements: 'Docker, Kubernetes, Python 3.9+, Redis, PostgreSQL',
    documentation: `# Peak AI Agent Stack

Enterprise-grade infrastructure for deploying and managing AI agents at scale.

## Architecture
- **Orchestration Layer**: Manages multiple agents and workflows
- **Monitoring System**: Real-time performance and health monitoring
- **Deployment Pipeline**: Automated CI/CD for agent deployment
- **Security Framework**: Enterprise-grade security and compliance

## Features
- Multi-agent coordination
- Load balancing and scaling
- Comprehensive logging and metrics
- API gateway and rate limiting
- Role-based access control

## Deployment
\`\`\`bash
# Deploy with Docker Compose
docker-compose up -d

# Or use Kubernetes
kubectl apply -f k8s/
\`\`\``,
    githubUrl: 'https://github.com/dleerdefi/peak-ai-agent-stack',
    rating: 4.8,
    reviews: 67,
    downloads: 1234,
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=600&h=400',
    author: {
      name: 'dleerdefi',
      githubProfile: 'https://github.com/dleerdefi',
      avatar: 'https://github.com/dleerdefi.png'
    },
    tags: ['infrastructure', 'enterprise', 'orchestration', 'kubernetes', 'docker'],
    lastUpdated: '2024-02-18',
    difficulty: 'Advanced',
    integrations: ['Docker', 'Kubernetes', 'Redis', 'PostgreSQL'],
    nodeCount: 156,
    source: 'dleerdefi/peak-ai-agent-stack'
  },

  // VoltAgent
  {
    id: 'voltagent-framework',
    name: 'VoltAgent - High-Performance AI Agent Framework',
    description: 'Lightning-fast AI agent framework optimized for high-throughput applications with advanced caching and parallel processing capabilities.',
    category: 'ai-framework',
    capabilities: [
      'High-Performance Processing',
      'Parallel Execution',
      'Advanced Caching',
      'Real-time Analytics',
      'Auto-scaling',
      'Memory Optimization'
    ],
    requirements: 'Python 3.10+, FastAPI, Redis, Celery, Docker',
    documentation: `# VoltAgent Framework

High-performance AI agent framework designed for speed and scalability.

## Performance Features
- **Parallel Processing**: Execute multiple agents simultaneously
- **Smart Caching**: Intelligent caching for faster responses
- **Memory Management**: Optimized memory usage for large-scale deployments
- **Auto-scaling**: Automatic scaling based on load

## Quick Setup
\`\`\`python
from voltagent import VoltAgent, Config

# Configure high-performance agent
config = Config(
    workers=8,
    cache_enabled=True,
    parallel_execution=True
)

agent = VoltAgent(config)
\`\`\`

## Use Cases
- High-traffic applications
- Real-time processing
- Batch operations
- Performance-critical systems`,
    githubUrl: 'https://github.com/VoltAgent/voltagent',
    rating: 4.6,
    reviews: 45,
    downloads: 987,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&h=400',
    author: {
      name: 'VoltAgent',
      githubProfile: 'https://github.com/VoltAgent',
      avatar: 'https://github.com/VoltAgent.png'
    },
    tags: ['performance', 'high-throughput', 'caching', 'parallel', 'fastapi'],
    lastUpdated: '2024-02-15',
    difficulty: 'Advanced',
    integrations: ['FastAPI', 'Redis', 'Celery', 'Docker'],
    nodeCount: 89,
    source: 'VoltAgent/voltagent'
  },

  // ONIO AI Agent V2
  {
    id: 'onio-ai-agent-v2',
    name: 'ONIO AI Agent V2',
    description: 'Advanced conversational AI agent with natural language understanding, context awareness, and multi-modal capabilities for enterprise applications.',
    category: 'conversational-ai',
    capabilities: [
      'Natural Language Understanding',
      'Context Awareness',
      'Multi-modal Processing',
      'Conversation Memory',
      'Intent Recognition',
      'Entity Extraction'
    ],
    requirements: 'Python 3.9+, TensorFlow/PyTorch, NLTK, spaCy, OpenAI API',
    documentation: `# ONIO AI Agent V2

Advanced conversational AI agent with enterprise-grade capabilities.

## Core Features
- **NLU Engine**: Advanced natural language understanding
- **Context Management**: Maintains conversation context across sessions
- **Multi-modal Support**: Text, voice, and image processing
- **Intent Classification**: Accurate intent recognition and routing
- **Entity Extraction**: Named entity recognition and extraction

## Configuration
\`\`\`python
from onio_ai import OnioAgent

agent = OnioAgent(
    model="gpt-4",
    context_window=4000,
    memory_enabled=True,
    multimodal=True
)
\`\`\`

## Enterprise Features
- Role-based access control
- Audit logging
- Performance monitoring
- Custom model training`,
    githubUrl: 'https://github.com/ONIO-AI/OnioAIagent-V2',
    rating: 4.5,
    reviews: 78,
    downloads: 1567,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&h=400',
    author: {
      name: 'ONIO-AI',
      githubProfile: 'https://github.com/ONIO-AI',
      avatar: 'https://github.com/ONIO-AI.png'
    },
    tags: ['conversational-ai', 'nlu', 'multimodal', 'enterprise', 'context'],
    lastUpdated: '2024-02-12',
    difficulty: 'Advanced',
    integrations: ['OpenAI', 'TensorFlow', 'PyTorch', 'NLTK', 'spaCy'],
    nodeCount: 134,
    source: 'ONIO-AI/OnioAIagent-V2'
  },

  // Chatbot Framework Examples
  {
    id: 'rasa-chatbot-framework',
    name: 'Rasa Open Source Chatbot Framework',
    description: 'Industry-leading open source framework for building conversational AI assistants with advanced NLU and dialogue management.',
    category: 'chatbot-framework',
    capabilities: [
      'Advanced NLU',
      'Dialogue Management',
      'Custom Actions',
      'Multi-language Support',
      'Integration APIs',
      'Training Pipeline'
    ],
    requirements: 'Python 3.7+, TensorFlow, spaCy, Docker (optional)',
    documentation: `# Rasa Open Source Framework

Build contextual AI assistants and chatbots with advanced NLU capabilities.

## Key Components
- **NLU Pipeline**: Intent classification and entity extraction
- **Dialogue Management**: Context-aware conversation handling
- **Custom Actions**: Integrate with external APIs and databases
- **Training Data**: Version-controlled training data management

## Quick Start
\`\`\`bash
# Install Rasa
pip install rasa

# Initialize project
rasa init

# Train model
rasa train

# Run assistant
rasa shell
\`\`\`

## Production Deployment
- Docker containerization
- Kubernetes orchestration
- API endpoints
- Analytics and monitoring`,
    githubUrl: 'https://github.com/RasaHQ/rasa',
    rating: 4.8,
    reviews: 234,
    downloads: 5678,
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=600&h=400',
    author: {
      name: 'Rasa Technologies',
      githubProfile: 'https://github.com/RasaHQ',
      avatar: 'https://github.com/RasaHQ.png'
    },
    tags: ['chatbot', 'nlu', 'dialogue', 'rasa', 'conversational-ai'],
    lastUpdated: '2024-02-25',
    difficulty: 'Intermediate',
    integrations: ['TensorFlow', 'spaCy', 'Docker', 'REST API'],
    nodeCount: 78,
    source: 'chatbot-frameworks'
  },

  {
    id: 'botframework-composer',
    name: 'Microsoft Bot Framework Composer',
    description: 'Visual authoring canvas for building sophisticated conversational experiences using Microsoft Bot Framework with drag-and-drop interface.',
    category: 'chatbot-framework',
    capabilities: [
      'Visual Bot Building',
      'Multi-channel Deployment',
      'LUIS Integration',
      'QnA Maker Support',
      'Adaptive Dialogs',
      'Language Generation'
    ],
    requirements: 'Node.js 14+, .NET Core 3.1+, Azure subscription (optional)',
    documentation: `# Microsoft Bot Framework Composer

Visual authoring tool for building conversational AI experiences.

## Features
- **Visual Designer**: Drag-and-drop bot building interface
- **Multi-channel**: Deploy to Teams, Slack, Facebook, etc.
- **LUIS Integration**: Advanced language understanding
- **QnA Maker**: Knowledge base integration
- **Adaptive Dialogs**: Dynamic conversation flows

## Getting Started
1. Download Bot Framework Composer
2. Create new bot project
3. Design conversation flows visually
4. Test in Bot Framework Emulator
5. Deploy to Azure Bot Service

## Deployment Options
- Azure Bot Service
- On-premises deployment
- Container deployment
- Multi-region scaling`,
    githubUrl: 'https://github.com/microsoft/BotFramework-Composer',
    rating: 4.6,
    reviews: 156,
    downloads: 3456,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400',
    author: {
      name: 'Microsoft',
      githubProfile: 'https://github.com/microsoft',
      avatar: 'https://github.com/microsoft.png'
    },
    tags: ['microsoft', 'visual-builder', 'azure', 'luis', 'qna-maker'],
    lastUpdated: '2024-02-20',
    difficulty: 'Beginner',
    integrations: ['Azure', 'LUIS', 'QnA Maker', 'Teams', 'Slack'],
    nodeCount: 45,
    source: 'chatbot-frameworks'
  },

  // Awesome AI Agents Collections
  {
    id: 'langchain-agents',
    name: 'LangChain Agent Framework',
    description: 'Powerful framework for building LLM-powered agents with tool calling, memory, and chain-of-thought reasoning capabilities.',
    category: 'ai-framework',
    capabilities: [
      'LLM Integration',
      'Tool Calling',
      'Memory Systems',
      'Chain-of-Thought',
      'Multi-step Reasoning',
      'Custom Chains'
    ],
    requirements: 'Python 3.8+, OpenAI API, LangChain, Vector Database (optional)',
    documentation: `# LangChain Agent Framework

Build sophisticated LLM-powered agents with advanced reasoning capabilities.

## Core Concepts
- **Agents**: Autonomous entities that can use tools
- **Tools**: Functions that agents can call
- **Memory**: Persistent storage for conversation history
- **Chains**: Sequences of operations for complex tasks

## Agent Types
- **Zero-shot ReAct**: Reasoning and acting agent
- **Conversational**: Memory-enabled conversational agent
- **Plan-and-Execute**: Strategic planning agent
- **Custom**: Build your own agent logic

## Example Usage
\`\`\`python
from langchain.agents import initialize_agent
from langchain.tools import Tool

agent = initialize_agent(
    tools=[search_tool, calculator_tool],
    llm=llm,
    agent="zero-shot-react-description"
)
\`\`\``,
    githubUrl: 'https://github.com/langchain-ai/langchain',
    rating: 4.9,
    reviews: 456,
    downloads: 12345,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&h=400',
    author: {
      name: 'LangChain',
      githubProfile: 'https://github.com/langchain-ai',
      avatar: 'https://github.com/langchain-ai.png'
    },
    tags: ['langchain', 'llm', 'agents', 'reasoning', 'tools'],
    lastUpdated: '2024-02-28',
    difficulty: 'Intermediate',
    integrations: ['OpenAI', 'Anthropic', 'Vector Databases', 'APIs'],
    nodeCount: 234,
    source: 'awesome-ai-agents'
  },

  {
    id: 'autogen-framework',
    name: 'AutoGen Multi-Agent Framework',
    description: 'Microsoft\'s framework for creating multi-agent conversations where AI agents collaborate to solve complex tasks through structured dialogue.',
    category: 'multi-agent',
    capabilities: [
      'Multi-agent Conversations',
      'Role-based Agents',
      'Code Generation',
      'Collaborative Problem Solving',
      'Human-in-the-loop',
      'Custom Agent Roles'
    ],
    requirements: 'Python 3.8+, OpenAI API, Docker (optional)',
    documentation: `# AutoGen Multi-Agent Framework

Enable multiple AI agents to collaborate and solve complex problems together.

## Key Features
- **Multi-agent Conversations**: Agents communicate and collaborate
- **Role Specialization**: Different agents for different tasks
- **Code Generation**: Automated code writing and execution
- **Human Integration**: Human oversight and intervention
- **Flexible Workflows**: Customizable agent interactions

## Agent Types
- **Assistant Agent**: General-purpose helper
- **User Proxy**: Represents human user
- **Code Executor**: Runs and validates code
- **Custom Agents**: Domain-specific specialists

## Example Setup
\`\`\`python
import autogen

# Create agents
assistant = autogen.AssistantAgent("assistant")
user_proxy = autogen.UserProxyAgent("user")

# Start conversation
user_proxy.initiate_chat(assistant, message="Solve this problem...")
\`\`\``,
    githubUrl: 'https://github.com/microsoft/autogen',
    rating: 4.8,
    reviews: 289,
    downloads: 8765,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400',
    author: {
      name: 'Microsoft',
      githubProfile: 'https://github.com/microsoft',
      avatar: 'https://github.com/microsoft.png'
    },
    tags: ['microsoft', 'multi-agent', 'collaboration', 'code-generation', 'autogen'],
    lastUpdated: '2024-02-26',
    difficulty: 'Advanced',
    integrations: ['OpenAI', 'Azure', 'Docker', 'Jupyter'],
    nodeCount: 167,
    source: 'awesome-ai-agents'
  },

  {
    id: 'crewai-framework',
    name: 'CrewAI - Role-Playing Multi-Agent Framework',
    description: 'Framework for orchestrating role-playing autonomous AI agents to work together as a crew to accomplish complex tasks with defined roles and goals.',
    category: 'multi-agent',
    capabilities: [
      'Role-based Agents',
      'Task Orchestration',
      'Autonomous Collaboration',
      'Goal-oriented Planning',
      'Process Management',
      'Result Validation'
    ],
    requirements: 'Python 3.10+, OpenAI API, LangChain',
    documentation: `# CrewAI Framework

Orchestrate role-playing AI agents to work together as a cohesive crew.

## Core Concepts
- **Agents**: Autonomous entities with specific roles
- **Tasks**: Defined objectives for agents to accomplish
- **Crew**: Collection of agents working together
- **Process**: Workflow for task execution

## Agent Roles
- **Researcher**: Gathers and analyzes information
- **Writer**: Creates content and documentation
- **Reviewer**: Quality assurance and validation
- **Manager**: Coordinates and oversees work

## Example Crew
\`\`\`python
from crewai import Agent, Task, Crew

# Define agents
researcher = Agent(role="Researcher", goal="Research topic")
writer = Agent(role="Writer", goal="Write article")

# Create crew
crew = Crew(agents=[researcher, writer], tasks=[research_task, write_task])
result = crew.kickoff()
\`\`\``,
    githubUrl: 'https://github.com/joaomdmoura/crewAI',
    rating: 4.7,
    reviews: 178,
    downloads: 4567,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&h=400',
    author: {
      name: 'João Moura',
      githubProfile: 'https://github.com/joaomdmoura',
      avatar: 'https://github.com/joaomdmoura.png'
    },
    tags: ['crewai', 'role-playing', 'orchestration', 'autonomous', 'collaboration'],
    lastUpdated: '2024-02-24',
    difficulty: 'Intermediate',
    integrations: ['OpenAI', 'LangChain', 'Python'],
    nodeCount: 98,
    source: 'awesome-ai-agents'
  },

  {
    id: 'superagi-framework',
    name: 'SuperAGI - Autonomous Agent Framework',
    description: 'Open-source framework for building, managing and running autonomous AI agents with GUI, action marketplace, and performance insights.',
    category: 'autonomous-agents',
    capabilities: [
      'Autonomous Operation',
      'GUI Management',
      'Action Marketplace',
      'Performance Analytics',
      'Multi-model Support',
      'Resource Management'
    ],
    requirements: 'Python 3.9+, PostgreSQL, Redis, Docker',
    documentation: `# SuperAGI Framework

Build and manage autonomous AI agents with comprehensive tooling and insights.

## Features
- **Web GUI**: User-friendly interface for agent management
- **Action Marketplace**: Pre-built actions and tools
- **Performance Insights**: Detailed analytics and monitoring
- **Resource Management**: Efficient resource allocation
- **Multi-model Support**: Various LLM integrations

## Getting Started
\`\`\`bash
# Clone and setup
git clone https://github.com/TransformerOptimus/SuperAGI
cd SuperAGI
docker-compose up
\`\`\`

## Agent Capabilities
- Web browsing and research
- File operations and management
- API integrations
- Code generation and execution
- Image generation and processing`,
    githubUrl: 'https://github.com/TransformerOptimus/SuperAGI',
    rating: 4.6,
    reviews: 234,
    downloads: 6789,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&h=400',
    author: {
      name: 'TransformerOptimus',
      githubProfile: 'https://github.com/TransformerOptimus',
      avatar: 'https://github.com/TransformerOptimus.png'
    },
    tags: ['superagi', 'autonomous', 'gui', 'marketplace', 'analytics'],
    lastUpdated: '2024-02-22',
    difficulty: 'Advanced',
    integrations: ['PostgreSQL', 'Redis', 'Docker', 'Multiple LLMs'],
    nodeCount: 189,
    source: 'awesome-ai-agents'
  },

  {
    id: 'agentgpt-platform',
    name: 'AgentGPT - Autonomous AI Agent Platform',
    description: 'Web-based platform for creating and deploying autonomous AI agents that can think, plan, and execute tasks to achieve user-defined goals.',
    category: 'autonomous-agents',
    capabilities: [
      'Goal-oriented Planning',
      'Autonomous Execution',
      'Web Interface',
      'Task Decomposition',
      'Progress Tracking',
      'Result Synthesis'
    ],
    requirements: 'Node.js 16+, Next.js, OpenAI API, Prisma, PostgreSQL',
    documentation: `# AgentGPT Platform

Deploy autonomous AI agents through an intuitive web interface.

## How It Works
1. **Goal Setting**: Define what you want the agent to achieve
2. **Planning**: Agent creates a step-by-step plan
3. **Execution**: Agent executes tasks autonomously
4. **Monitoring**: Track progress in real-time
5. **Results**: Review completed tasks and outcomes

## Features
- **Web-based Interface**: No coding required
- **Autonomous Operation**: Agents work independently
- **Goal Decomposition**: Complex goals broken into tasks
- **Progress Visualization**: Real-time execution tracking

## Deployment
\`\`\`bash
# Local development
npm install
npm run dev

# Production deployment
npm run build
npm start
\`\`\``,
    githubUrl: 'https://github.com/reworkd/AgentGPT',
    rating: 4.5,
    reviews: 345,
    downloads: 9876,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&h=400',
    author: {
      name: 'Reworkd',
      githubProfile: 'https://github.com/reworkd',
      avatar: 'https://github.com/reworkd.png'
    },
    tags: ['agentgpt', 'web-platform', 'autonomous', 'goal-oriented', 'nextjs'],
    lastUpdated: '2024-02-21',
    difficulty: 'Beginner',
    integrations: ['OpenAI', 'Next.js', 'Prisma', 'PostgreSQL'],
    nodeCount: 67,
    source: 'awesome-ai-agents'
  },

  // Additional frameworks from awesome lists
  {
    id: 'semantic-kernel',
    name: 'Microsoft Semantic Kernel',
    description: 'Lightweight SDK for integrating AI Large Language Models with conventional programming languages and enterprise systems.',
    category: 'ai-framework',
    capabilities: [
      'LLM Integration',
      'Skill Orchestration',
      'Memory Management',
      'Planning Engine',
      'Multi-language Support',
      'Enterprise Integration'
    ],
    requirements: '.NET 6+, Python 3.8+, or Java 11+, OpenAI/Azure OpenAI API',
    documentation: `# Microsoft Semantic Kernel

Integrate AI capabilities into existing applications with enterprise-grade SDK.

## Key Features
- **Multi-language**: .NET, Python, Java support
- **Skills**: Reusable AI functions and capabilities
- **Planners**: Automatic task orchestration
- **Memory**: Persistent and semantic memory systems
- **Connectors**: Integration with various AI services

## Quick Start (.NET)
\`\`\`csharp
var kernel = Kernel.Builder
    .WithOpenAIChatCompletionService("gpt-3.5-turbo", apiKey)
    .Build();

var skill = kernel.ImportSkill(new MySkill());
var result = await kernel.RunAsync("Hello world", skill["MyFunction"]);
\`\`\`

## Enterprise Features
- Security and compliance
- Scalable architecture
- Monitoring and logging
- Integration patterns`,
    githubUrl: 'https://github.com/microsoft/semantic-kernel',
    rating: 4.7,
    reviews: 198,
    downloads: 5432,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400',
    author: {
      name: 'Microsoft',
      githubProfile: 'https://github.com/microsoft',
      avatar: 'https://github.com/microsoft.png'
    },
    tags: ['microsoft', 'sdk', 'enterprise', 'multi-language', 'semantic-kernel'],
    lastUpdated: '2024-02-27',
    difficulty: 'Intermediate',
    integrations: ['.NET', 'Python', 'Java', 'Azure OpenAI', 'OpenAI'],
    nodeCount: 123,
    source: 'awesome-ai-agents'
  },

  {
    id: 'haystack-framework',
    name: 'Haystack - NLP Framework for AI Agents',
    description: 'End-to-end framework for building search systems and question-answering applications powered by large language models and transformers.',
    category: 'nlp-framework',
    capabilities: [
      'Document Search',
      'Question Answering',
      'Information Extraction',
      'Semantic Search',
      'RAG Implementation',
      'Pipeline Orchestration'
    ],
    requirements: 'Python 3.7+, Elasticsearch/OpenSearch, Transformers, FastAPI',
    documentation: `# Haystack Framework

Build production-ready search and QA systems with LLMs and transformers.

## Core Components
- **Document Stores**: Store and index documents
- **Retrievers**: Find relevant documents
- **Readers**: Extract answers from documents
- **Generators**: Generate responses using LLMs
- **Pipelines**: Orchestrate components

## Use Cases
- **Document QA**: Answer questions from document collections
- **Semantic Search**: Find semantically similar content
- **Information Extraction**: Extract structured data
- **RAG Systems**: Retrieval-augmented generation

## Example Pipeline
\`\`\`python
from haystack import Pipeline
from haystack.nodes import BM25Retriever, FARMReader

pipeline = Pipeline()
pipeline.add_node(component=retriever, name="Retriever", inputs=["Query"])
pipeline.add_node(component=reader, name="Reader", inputs=["Retriever"])
\`\`\``,
    githubUrl: 'https://github.com/deepset-ai/haystack',
    rating: 4.6,
    reviews: 167,
    downloads: 4321,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=400',
    author: {
      name: 'deepset',
      githubProfile: 'https://github.com/deepset-ai',
      avatar: 'https://github.com/deepset-ai.png'
    },
    tags: ['haystack', 'nlp', 'search', 'qa', 'rag', 'transformers'],
    lastUpdated: '2024-02-25',
    difficulty: 'Intermediate',
    integrations: ['Elasticsearch', 'OpenSearch', 'Transformers', 'FastAPI'],
    nodeCount: 145,
    source: 'awesome-ai-agents'
  },

  // Continue with original n8n workflows...
  {
    id: 'slack-teams-integration',
    name: 'Slack & Teams Integration Hub',
    description: 'Unified communication workflow connecting Slack and Microsoft Teams with automated message routing, file sharing, and status synchronization.',
    category: 'automation',
    capabilities: [
      'Cross-platform Messaging',
      'File Synchronization',
      'Status Updates',
      'Channel Management',
      'User Presence Sync',
      'Automated Notifications'
    ],
    requirements: 'n8n instance, Slack API token, Microsoft Teams API, Webhook endpoints',
    documentation: `# Slack & Teams Integration Hub

Bridge the gap between Slack and Microsoft Teams with seamless integration.

## Key Features
- **Message Routing**: Automatically route messages between platforms
- **File Sharing**: Sync files and attachments across platforms
- **Status Synchronization**: Keep user status updated on both platforms
- **Channel Management**: Create and manage channels programmatically
- **Notification Hub**: Centralized notification system

## Setup Process
1. Configure Slack API credentials
2. Set up Microsoft Teams API access
3. Define routing rules
4. Configure file storage locations
5. Set up webhook endpoints

## Use Cases
- Multi-platform team communication
- Client communication management
- Project status updates
- File sharing automation`,
    githubUrl: 'https://github.com/Zie619/n8n-workflows',
    rating: 4.7,
    reviews: 89,
    downloads: 2156,
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&h=400',
    author: {
      name: 'Zie619',
      githubProfile: 'https://github.com/Zie619',
      avatar: 'https://github.com/Zie619.png'
    },
    tags: ['slack', 'teams', 'communication', 'integration', 'messaging'],
    lastUpdated: '2024-01-20',
    difficulty: 'Intermediate',
    integrations: ['Slack', 'Microsoft Teams', 'Webhook'],
    nodeCount: 32,
    source: 'n8n-workflows'
  }
];

export const categories = [
  { id: 'automation', name: 'Automation', icon: 'Bot', count: agents.filter(a => a.category === 'automation').length },
  { id: 'ai-framework', name: 'AI Frameworks', icon: 'Brain', count: agents.filter(a => a.category === 'ai-framework').length },
  { id: 'chatbot-framework', name: 'Chatbot Frameworks', icon: 'MessageSquare', count: agents.filter(a => a.category === 'chatbot-framework').length },
  { id: 'multi-agent', name: 'Multi-Agent Systems', icon: 'Users', count: agents.filter(a => a.category === 'multi-agent').length },
  { id: 'autonomous-agents', name: 'Autonomous Agents', icon: 'Zap', count: agents.filter(a => a.category === 'autonomous-agents').length },
  { id: 'ai-infrastructure', name: 'AI Infrastructure', icon: 'Server', count: agents.filter(a => a.category === 'ai-infrastructure').length },
  { id: 'conversational-ai', name: 'Conversational AI', icon: 'MessageCircle', count: agents.filter(a => a.category === 'conversational-ai').length },
  { id: 'nlp-framework', name: 'NLP Frameworks', icon: 'FileText', count: agents.filter(a => a.category === 'nlp-framework').length },
];

export const stats = {
  totalWorkflows: agents.length,
  totalIntegrations: [...new Set(agents.flatMap(a => a.integrations))].length,
  totalNodes: agents.reduce((sum, agent) => sum + agent.nodeCount, 0),
  totalDownloads: agents.reduce((sum, agent) => sum + agent.downloads, 0),
  averageRating: (agents.reduce((sum, agent) => sum + agent.rating, 0) / agents.length).toFixed(1)
};

// Source statistics
export const sourceStats = {
  'n8n-workflows': agents.filter(a => a.source === 'n8n-workflows').length,
  'huggingface/smolagents': agents.filter(a => a.source === 'huggingface/smolagents').length,
  'awesome-ai-agents': agents.filter(a => a.source === 'awesome-ai-agents').length,
  'chatbot-frameworks': agents.filter(a => a.source === 'chatbot-frameworks').length,
  'github-repositories': agents.filter(a => a.source.includes('/')).length
};