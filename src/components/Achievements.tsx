import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    {
      id: 1,
      image: 'https://via.placeholder.com/200x150?text=Achievement+1',
      description: "Won 1st Prize at Siddartha Academy of Higher Education's Innovation Day for EvalX project.",
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/200x150?text=Achievement+2',
      description: 'Won 1st prize in VR Siddartha International Hackathon, Code Geeks track.',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/200x150?text=Achievement+3',
      description: 'Won 1st prize in HackIT (college) in WEB DEVELOPMENT domain.',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/200x150?text=Achievement+4',
      description: 'Won 2nd Prize in MERN Stack Hackathon (Team Lead).',
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/200x150?text=Achievement+5',
      description: 'Awarded 100 Days, 50 Days badges on LeetCode for consistent performance.',
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/200x150?text=Achievement+6',
      description: 'TBD – User to fill',
    },
    {
      id: 7,
      image: 'https://via.placeholder.com/200x150?text=Achievement+7',
      description: 'TBD – User to fill',
    },
    {
      id: 8,
      image: 'https://via.placeholder.com/200x150?text=Achievement+8',
      description: 'TBD – User to fill',
    },
    {
      id: 9,
      image: 'https://via.placeholder.com/200x150?text=Achievement+9',
      description: 'TBD – User to fill',
    },
    {
      id: 10,
      image: 'https://via.placeholder.com/200x150?text=Achievement+10',
      description: 'TBD – User to fill',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [achievements.length]);

  const nextAchievement = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const prevAchievement = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const currentAchievement = achievements[currentIndex];

  return (
    <section id="achievements" className="relative min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="glass-effect rounded-3xl p-8 md:p-12"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-primary rounded-xl blur-xl opacity-20" />
                  <img
                    src={currentAchievement.image}
                    alt={`Achievement ${currentAchievement.id}`}
                    className="relative w-full max-w-md h-auto rounded-xl border-2 border-primary object-cover"
                  />
                </div>
                <p className="text-lg md:text-xl text-foreground max-w-2xl">
                  {currentAchievement.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevAchievement}
              className="p-3 glass-effect rounded-full hover:bg-primary/20 transition-colors"
              aria-label="Previous achievement"
            >
              <ChevronLeft className="text-primary" size={24} />
            </button>

            <div className="flex gap-2">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-muted'
                  }`}
                  aria-label={`Go to achievement ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextAchievement}
              className="p-3 glass-effect rounded-full hover:bg-primary/20 transition-colors"
              aria-label="Next achievement"
            >
              <ChevronRight className="text-primary" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
