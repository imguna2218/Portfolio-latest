import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase } from 'lucide-react';

type ExperienceRole = {
  company: string;
  logo: string | null;
  title: string;
  duration: string;
  description: string[];
};

const Experience = () => {
  const [selectedRole, setSelectedRole] = useState<ExperienceRole | null>(null);

  const experiences: ExperienceRole[] = [
    {
      company: 'Aksi Aerospace Group',
      logo: null,
      title: 'Software Engineer',
      duration: 'Mar 2026 - Present',
      description: [
        'Led end-to-end architectural design of an automated data processing pipeline using Python (FastAPI) and SQL',
        'Designed backend architecture and PostgreSQL schemas for a 4-tier billing system with encrypted RESTful APIs',
        'Secured core applications by implementing custom OAuth 2.0 schemas in MongoDB and Multi-Factor Authentication',
        'Debugged state desynchronization under peak workloads by implementing cross-service logging and telemetry',
      ],
    },
    {
      company: 'LeanTech Labs Pvt. Ltd.',
      logo: 'https://res.cloudinary.com/di4cyrn81/image/upload/v1765108571/Screenshot_2025-12-07_172602_urcdju.png',
      title: 'Software Developer Intern',
      duration: 'Jan 2025 - Sep 2025',
      description: [
        'Applied system design principles to build modular vendor management solutions with React.js and Node.js REST APIs',
        'Authored 150+ Data Structures and Algorithms questions for an enterprise LMS coding platform',
        'Conducted peer code reviews and unit testing via Test-Driven Development (TDD)',
        'Debugged and resolved critical application defects across the stack to prevent service degradation',
      ],
    },
  ];

  return (
    <section id="experience" className="relative min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {experiences.map((role, index) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex-1 max-w-md"
            >
              <div
                onClick={() => setSelectedRole(role)}
                className="glass-effect rounded-2xl p-8 cursor-pointer hover:scale-105 transition-transform hover:shadow-[0_0_30px_rgba(167,139,250,0.3)] h-full"
              >
                <div className="flex flex-col items-center text-center">
                  {role.logo ? (
                    <img
                      src={role.logo}
                      alt={role.company}
                      className="w-20 h-20 rounded-full border-2 border-primary mb-4 object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full border-2 border-primary mb-4 bg-primary/10 flex items-center justify-center">
                      <Briefcase size={32} className="text-primary" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-foreground mb-2">{role.company}</h3>
                  <p className="text-lg text-primary font-semibold mb-2">{role.title}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Briefcase size={16} />
                    {role.duration}
                  </p>
                  <p className="text-xs text-muted-foreground mt-4">Click to view details</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedRole && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedRole(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="glass-effect rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    {selectedRole.logo ? (
                      <img
                        src={selectedRole.logo}
                        alt={selectedRole.company}
                        className="w-16 h-16 rounded-full border-2 border-primary object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center">
                        <Briefcase size={28} className="text-primary" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{selectedRole.company}</h3>
                      <p className="text-lg text-primary font-semibold">{selectedRole.title}</p>
                      <p className="text-sm text-muted-foreground">{selectedRole.duration}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedRole(null)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">Key Responsibilities</h4>
                  <ul className="space-y-3">
                    {selectedRole.description.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground">
                        <span className="text-primary mt-1 flex-shrink-0">⚡</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;
