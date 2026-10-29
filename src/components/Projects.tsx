import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      name: 'EvalX - Distributed Online Code Execution Engine',
      logo: 'https://res.cloudinary.com/di4cyrn81/image/upload/v1765108066/Upfoto_NpBlfTpHCOfAdkA81guvoMXeNwnLxWrk2atF5mxFvMsnt_1_tnvuet.jpg',
      description: [
        'Engineered a distributed, event-driven microservices code evaluation engine in Rust',
        'Optimized concurrency algorithms to process 120+ concurrent test cases per second',
        'Architected a fault-tolerant storage layer using PostgreSQL and Redis',
        'Integrated Amazon SQS to manage asynchronous workload queues and decouple execution state',
      ],
      techStack: ['Rust', 'Isolate', 'Docker', 'Amazon SQS', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/imguna2218/The-EvalX',
      demo: '#',
    },
    {
      name: 'IgnisOps - AI Powered Cloud Development Environment',
      logo: 'https://res.cloudinary.com/di4cyrn81/image/upload/v1765108066/Upfoto_NpBlfTpHCOfAdkA81guvoMXeNwnLxWrk2atF5mxFvMsnt_1_tnvuet.jpg',
      description: [
        'Architected a secure Node.js backend using Firecracker MicroVMs for sub-200ms cold starts',
        'Developed a 3-tier LLM-powered Agentic AI pipeline (Planner, Coder, Verifier)',
        'Utilized PostgreSQL and Redis to drive AI automation and context-aware state management',
        'Engineered a Next.js/React frontend for provisioning multi-language workspaces (Java, Python)',
      ],
      techStack: ['Node.js', 'Firecracker MicroVMs', 'Next.js', 'WebSockets', 'LLMs'],
      github: 'https://github.com/imguna2218',
      demo: '#',
    },
    {
      name: 'PatrolX - Mobile Patrol Monitoring Platform',
      logo: 'https://res.cloudinary.com/di4cyrn81/image/upload/v1765108308/Screenshot_2025-12-07_172123_fdosyf.png',
      description: [
        'Architected a cross-platform mobile patrol monitoring app in React Native',
        'Engineered an end-to-end incident management system with real-time GPS tracking',
        'Integrated a relational PostgreSQL database utilizing Prisma ORM',
        'Built responsive, typed UIs with TypeScript for maximum runtime safety',
      ],
      techStack: ['React Native', 'TypeScript', 'PostgreSQL', 'Prisma'],
      github: 'https://github.com/imguna2218',
      demo: '#',
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="relative min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-effect rounded-3xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                <img
                  src={currentProject.logo}
                  alt={currentProject.name}
                  className="w-16 h-16 rounded-xl border-2 border-primary object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {currentProject.name}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {currentProject.description.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-foreground">
                        <span className="text-primary mt-1">⚡</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 border border-primary/50 rounded-full text-sm text-foreground hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform glow-effect"
                >
                  <Github size={20} />
                  View on GitHub
                </a>
                {/* Live Demo hidden as per spec */}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevProject}
              className="p-3 glass-effect rounded-full hover:bg-primary/20 transition-colors disabled:opacity-50"
              aria-label="Previous project"
            >
              <ChevronLeft className="text-primary" size={24} />
            </button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-muted'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="p-3 glass-effect rounded-full hover:bg-primary/20 transition-colors disabled:opacity-50"
              aria-label="Next project"
            >
              <ChevronRight className="text-primary" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
