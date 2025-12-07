import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase } from 'lucide-react';

const Internship = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const internship = {
    company: 'Leantech Labs Pvt. Ltd.',
    logo: 'https://via.placeholder.com/80?text=Leantech',
    title: 'Software Developer Intern',
    duration: 'Jan 2025 - Sep 2025',
    description: [
      'Engineered REST API using ExpressJS for scalable backend services',
      'Authored 150 DSA questions for coding assessment platform',
      'Enhanced UI/UX with TailwindCSS for responsive web applications',
      'Collaborated with cross-functional teams on feature development',
      'Implemented best practices for code quality and performance optimization',
    ],
  };

  return (
    <section id="internship" className="relative min-h-screen py-20 px-4">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div
            onClick={() => setIsModalOpen(true)}
            className="glass-effect rounded-2xl p-8 cursor-pointer hover:scale-105 transition-transform hover:shadow-[0_0_30px_rgba(167,139,250,0.3)]"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={internship.logo}
                alt={internship.company}
                className="w-20 h-20 rounded-full border-2 border-primary mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">{internship.company}</h3>
              <p className="text-lg text-primary font-semibold mb-2">{internship.title}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Briefcase size={16} />
                {internship.duration}
              </p>
              <p className="text-xs text-muted-foreground mt-4">Click to view details</p>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setIsModalOpen(false)}
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
                    <img
                      src={internship.logo}
                      alt={internship.company}
                      className="w-16 h-16 rounded-full border-2 border-primary"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{internship.company}</h3>
                      <p className="text-lg text-primary font-semibold">{internship.title}</p>
                      <p className="text-sm text-muted-foreground">{internship.duration}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">Key Responsibilities</h4>
                  <ul className="space-y-3">
                    {internship.description.map((item, index) => (
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

export default Internship;
