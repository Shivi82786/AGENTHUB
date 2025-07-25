import React from 'react';
import { motion } from 'framer-motion';
import { Book, Video, Award, BookOpen } from 'lucide-react';

const LearnPage = () => {
  return (
    <main className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Learning Center</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Master AI agent development and deployment with our comprehensive learning resources.
          </p>
        </motion.div>

        {/* Learning Paths */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Beginner Path',
              icon: BookOpen,
              description: 'Start your journey in AI agent development',
              modules: 12,
              hours: 20,
            },
            {
              title: 'Advanced Development',
              icon: Book,
              description: 'Deep dive into complex AI implementations',
              modules: 8,
              hours: 30,
            },
            {
              title: 'Expert Certification',
              icon: Award,
              description: 'Become a certified AI agent developer',
              modules: 15,
              hours: 40,
            },
          ].map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="neon-card p-6"
            >
              <path.icon className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">{path.title}</h3>
              <p className="text-gray-400 mb-4">{path.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{path.modules} modules</span>
                <span>{path.hours} hours</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full neon-button"
              >
                Start Learning
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Featured Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Featured Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((course) => (
              <motion.div
                key={course}
                whileHover={{ scale: 1.02 }}
                className="neon-card overflow-hidden"
              >
                <img
                  src={`https://images.unsplash.com/photo-${1500000000000 + course}?auto=format&fit=crop&w=600&h=300`}
                  alt="Course thumbnail"
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold mb-2">AI Development Course {course}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Learn essential concepts and practical applications in AI development.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Video size={16} className="text-primary" />
                      <span className="text-sm">12 lessons</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-primary hover:text-primary/80"
                    >
                      Start Course
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="neon-card p-6">
            <h3 className="font-bold mb-4">Documentation</h3>
            <ul className="space-y-2">
              {['Getting Started', 'API Reference', 'Best Practices', 'Tutorials'].map((doc) => (
                <li key={doc}>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    {doc}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="neon-card p-6">
            <h3 className="font-bold mb-4">Community Resources</h3>
            <ul className="space-y-2">
              {['Forums', 'Discord Server', 'GitHub Repository', 'Blog'].map((resource) => (
                <li key={resource}>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default LearnPage;