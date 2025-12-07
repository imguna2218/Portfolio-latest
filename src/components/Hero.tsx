import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-primary rounded-full opacity-60 animate-float-stars"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-30" />
              <img
                src="https://res.cloudinary.com/di4cyrn81/image/upload/v1765107938/WhatsApp_Image_2025-12-07_at_5.14.07_PM_vbjwr0.jpg"
                alt="Parisa Gunasekhar"
                className="relative w-48 h-48 rounded-full border-4 border-primary object-cover glow-effect"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4 gradient-text">
              Software Developer
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              Full-Stack Developer / 2026 GRAD
            </h2>
            <p className="text-lg md:text-xl mb-6 text-muted-foreground animate-fade-in">
              Bridging the gap between complex backend logic and seamless user experiences.
            </p>
            <p className="text-base md:text-lg italic text-primary mb-8 animate-slide-up">
              "Building robust, scalable platforms where performance meets usability."
            </p>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform glow-effect animate-pulse-glow">
                Explore My Work
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
