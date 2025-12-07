import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiJavascript, 
  SiPython, 
  SiRust, 
  SiNodedotjs, 
  SiReact, 
  SiPostgresql, 
  SiRedis, 
  SiDocker, 
  SiAmazon,
  SiTypescript,
  SiExpress,
  SiPrisma
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: FaJava, level: 90 },
        { name: 'Python', icon: SiPython, level: 85 },
        { name: 'JavaScript', icon: SiJavascript, level: 95 },
        { name: 'TypeScript', icon: SiTypescript, level: 90 },
        { name: 'Rust', icon: SiRust, level: 80 },
        { name: 'C', icon: FaCode, level: 75 },
      ],
    },
    {
      title: 'Backend & Frameworks',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 90 },
        { name: 'Express.js', icon: SiExpress, level: 90 },
        { name: 'React', icon: SiReact, level: 95 },
        { name: 'React Native', icon: SiReact, level: 85 },
        { name: 'Prisma', icon: SiPrisma, level: 85 },
      ],
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, level: 85 },
        { name: 'Redis', icon: SiRedis, level: 80 },
        { name: 'Docker', icon: SiDocker, level: 85 },
        { name: 'AWS', icon: SiAmazon, level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative min-h-screen py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-effect rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="text-primary text-xl hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut'
                        }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="glass-effect rounded-2xl p-6 inline-block">
            <h4 className="text-xl font-semibold text-primary mb-3">Core Expertise</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {['REST APIs', 'WebSockets', 'Distributed Systems', 'Real-time Processing'].map((concept) => (
                <span
                  key={concept}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-foreground hover:bg-primary/20 transition-colors"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
