import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiPython, SiJavascript, SiTypescript, SiRust,
  SiSpring, SiFastapi, SiNodedotjs, SiExpress, SiNestjs,
  SiReact, SiNextdotjs, SiHtml5, SiCss,
  SiPostgresql, SiMongodb, SiRedis, SiApachekafka,
  SiPostman, SiGit, SiGithub,
  SiDocker, SiKubernetes,
} from 'react-icons/si';
import { FaJava, FaAws, FaCode, FaDatabase, FaBrain, FaRobot } from 'react-icons/fa';

type Skill = {
  name: string;
  icon: React.ElementType | null;
  color: string;
};

type Category = {
  title: string;
  accent: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: 'Languages',
    accent: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'Java',           icon: FaJava,         color: '#f89820' },
      { name: 'Python',         icon: SiPython,       color: '#3776ab' },
      { name: 'JavaScript',     icon: SiJavascript,   color: '#f7df1e' },
      { name: 'TypeScript',     icon: SiTypescript,   color: '#3178c6' },
      { name: 'Rust',           icon: SiRust,         color: '#ce422b' },
      { name: 'C',              icon: FaCode,         color: '#a8b9cc' },
    ],
  },
  {
    title: 'Backend & Frontend',
    accent: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'Spring Boot',    icon: SiSpring,       color: '#6db33f' },
      { name: 'FastAPI',        icon: SiFastapi,      color: '#009688' },
      { name: 'Node.js',        icon: SiNodedotjs,    color: '#339933' },
      { name: 'Express.js',     icon: SiExpress,      color: '#ffffff' },
      { name: 'NestJS',         icon: SiNestjs,       color: '#e0234e' },
      { name: 'React.js',       icon: SiReact,        color: '#61dafb' },
      { name: 'Next.js',        icon: SiNextdotjs,    color: '#ffffff' },
      { name: 'HTML5',          icon: SiHtml5,        color: '#e34f26' },
      { name: 'CSS3',           icon: SiCss,          color: '#1572b6' },
      { name: 'REST APIs',      icon: FaCode,         color: '#a7b4c9' },
    ],
  },
  {
    title: 'Databases & Tools',
    accent: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'PostgreSQL',     icon: SiPostgresql,   color: '#336791' },
      { name: 'MongoDB',        icon: SiMongodb,      color: '#47a248' },
      { name: 'SQL',            icon: FaDatabase,     color: '#f29111' },
      { name: 'PL/SQL',        icon: FaDatabase,     color: '#f80000' },
      { name: 'Kafka',          icon: SiApachekafka,  color: '#231f20' },
      { name: 'Redis',          icon: SiRedis,        color: '#dc382d' },
      { name: 'Postman',        icon: SiPostman,      color: '#ff6c37' },
      { name: 'VS Code',        icon: FaCode,         color: '#007acc' },
      { name: 'Git',            icon: SiGit,          color: '#f05032' },
      { name: 'GitHub',         icon: SiGithub,       color: '#ffffff' },
      { name: 'Data Structures',icon: FaCode,         color: '#a78bfa' },
    ],
  },
  {
    title: 'Cloud & AI',
    accent: 'from-orange-500 to-rose-600',
    skills: [
      { name: 'AWS',            icon: FaAws,          color: '#ff9900' },
      { name: 'Docker',         icon: SiDocker,       color: '#2496ed' },
      { name: 'Kubernetes',     icon: SiKubernetes,   color: '#326ce5' },
      { name: 'CI/CD',          icon: SiGithub,       color: '#a78bfa' },
      { name: 'Generative AI',  icon: FaBrain,        color: '#f472b6' },
      { name: 'LLMs',           icon: FaBrain,        color: '#c084fc' },
      { name: 'AI Agents',      icon: FaRobot,        color: '#34d399' },
      { name: 'RAG',            icon: FaRobot,        color: '#fb923c' },
    ],
  },
];

const floatVariants = [
  'animate-float-a',
  'animate-float-b',
  'animate-float-c',
  'animate-float-d',
];

const SkillChip = ({ skill, index }: { skill: Skill; index: number }) => {
  const Icon = skill.icon;
  const floatClass = floatVariants[index % floatVariants.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.15, y: -6 }}
      className={`${floatClass} group relative flex flex-col items-center gap-2 px-4 py-3 rounded-2xl
        bg-white/5 border border-white/10 cursor-default
        hover:border-white/30 hover:bg-white/10
        transition-colors duration-300 min-w-[80px]`}
      style={{
        boxShadow: `0 0 0 0 ${skill.color}`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 18px 2px ${skill.color}55`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 transparent';
      }}
    >
      {Icon ? (
        <Icon style={{ color: skill.color }} className="text-2xl transition-transform duration-300 group-hover:scale-110" />
      ) : (
        <span style={{ color: skill.color }} className="text-2xl font-bold leading-none">M</span>
      )}
      <span className="text-xs font-medium text-foreground/80 text-center leading-tight whitespace-nowrap">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-24 px-4" ref={ref}>
      {/* Ambient background blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground text-sm">Hover a skill to see it glow</p>
        </motion.div>

        {/* Category grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="glass-effect rounded-3xl p-6 relative overflow-hidden"
            >
              {/* Category accent strip */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.accent} rounded-t-3xl`} />

              <h3 className="text-lg font-bold text-foreground/90 mb-5 mt-1">{cat.title}</h3>

              {/* Floating chips */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <SkillChip key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
