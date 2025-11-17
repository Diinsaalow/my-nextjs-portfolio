'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { Code, Server, Palette, Wrench } from 'lucide-react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGraphql,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiDocker,
  SiPostman,
  SiVercel,
} from 'react-icons/si';
import { IconType } from 'react-icons';
import { Api, Shield, TestTube, LucideIcon } from 'lucide-react';

// Map skill names to their corresponding icons
const skillIconMap: Record<string, IconType | LucideIcon> = {
  HTML5: SiHtml5,
  CSS3: SiCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Material UI': SiMui,
  Redux: SiRedux,
  'REST APIs': Api,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Firebase: SiFirebase,
  GraphQL: SiGraphql,
  'JWT Authentication': Shield,
  'API Design': Api,
  Figma: SiFigma,
  'Adobe XD': SiAdobexd,
  'Adobe Photoshop': SiAdobephotoshop,
  'Adobe Illustrator': SiAdobeillustrator,
  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': SiVisualstudiocode,
  Docker: SiDocker,
  Postman: SiPostman,
  Vercel: SiVercel,
  Testing: TestTube,
};

const getTechIcon = (skillName: string): IconType | LucideIcon | null => {
  return skillIconMap[skillName] || null;
};

const categoryIcons = {
  frontend: Code,
  backend: Server,
  design: Palette,
  tools: Wrench,
};

const categoryTitles = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  design: 'Design Tools',
  tools: 'Development Tools',
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.3,
    },
  }),
};

export function SkillsSection() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='space-y-4 text-center mb-12'
      >
        <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
          Skills & Technologies
        </h2>
        <p className='text-muted-foreground max-w-2xl mx-auto'>
          Technologies and tools I work with
        </p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {Object.entries(skills).map(([category, skillList], categoryIndex) => {
          const Icon =
            categoryIcons[category as keyof typeof categoryIcons] || Code;
          const title =
            categoryTitles[category as keyof typeof categoryTitles] || category;

          return (
            <motion.div
              key={category}
              custom={categoryIndex}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className='bg-card border border-border rounded-lg p-6 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-primary/10 transition-shadow duration-300'
            >
              <div className='flex items-center mb-4'>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: categoryIndex * 0.1 + 0.2,
                    duration: 0.5,
                    ease: 'backOut',
                  }}
                  className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3'
                >
                  <Icon className='w-5 h-5 text-primary' />
                </motion.div>
                <h3 className='text-xl font-bold text-foreground'>{title}</h3>
              </div>

              <div className='flex flex-wrap gap-3'>
                {skillList.map((skill, skillIndex) => {
                  const SkillIcon = getTechIcon(skill);
                  return (
                    <motion.div
                      key={skillIndex}
                      custom={skillIndex}
                      initial='hidden'
                      whileInView='visible'
                      viewport={{ once: true }}
                      variants={skillVariants}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                      className='group relative'
                    >
                      <div className='flex items-center gap-2 px-4 py-2 bg-muted hover:bg-primary text-foreground hover:text-primary-foreground rounded-md text-sm font-medium cursor-default transition-all duration-200'>
                        {SkillIcon ? (
                          <SkillIcon className='w-5 h-5' />
                        ) : (
                          <Code className='w-5 h-5' />
                        )}
                        <span>{skill}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

