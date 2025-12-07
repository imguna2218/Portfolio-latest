import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      name: 'EvalX - Online Code Execution Engine',
      logo: 'https://via.placeholder.com/50?text=EvalX',
      description: [
        'Engineered a distributed, low-latency code evaluation engine in Rust',
        'Processing 120+ concurrent tests/sec with high reliability',
        'Deployed on AWS using Docker containers for scalability',
        'Implemented Redis for caching and queue management',
      ],
      techStack: ['Rust', 'Isolate', 'Docker', 'AWS', 'Redis'],
      github: 'https://github.com/imguna2218',
      demo: '#',
    },
    {
      name: 'PatrolX - Patrol Monitoring App',
      logo: 'https://via.placeholder.com/50?text=PatrolX',
      description: [
        'Architected a patrol monitoring app in React Native',
        'End-to-end incident management system with real-time updates',
        'Integrated PostgreSQL database with Prisma ORM',
        'Built responsive UI with TypeScript for type safety',
      ],
      techStack: ['React Native', 'TypeScript', 'PostgreSQL', 'Prisma'],
      github: 'https://github.com/imguna2218',
      demo: '#',
    },
    {
      name: 'SyncStream - Social Audio Streaming Platform',
      logo: 'https://via.placeholder.com/50?text=SyncStream',
      description: [
        'Developed a full-stack social audio streaming platform',
        'Real-time features using WebSockets for live interactions',
        'Built with TypeScript and Node.js backend',
        'Scalable architecture supporting multiple concurrent streams',
      ],
      techStack: ['TypeScript', 'Node.js', 'WebSockets'],
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
                  className="w-16 h-16 rounded-xl border-2 border-primary"
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
                <a
                  href={currentProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-primary text-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/10 transition-colors"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
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
