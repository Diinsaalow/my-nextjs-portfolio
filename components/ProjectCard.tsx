'use client';

import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/lib/data';
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiExpress,
  SiPrisma,
  SiGraphql,
} from 'react-icons/si';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

// Map technology names to their icons
const techIconMap: Record<string, IconType> = {
  'Next.js': SiNextdotjs,
  React: SiReact,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Firebase: SiFirebase,
  Express: SiExpress,
  Prisma: SiPrisma,
  GraphQL: SiGraphql,
};

const getTechIcon = (techName: string): IconType | null => {
  return techIconMap[techName] || null;
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

const techIconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (index: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3 + index * 0.1,
      duration: 0.3,
      ease: 'backOut',
    },
  }),
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      custom={index}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-50px' }}
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className='group relative overflow-hidden rounded-lg bg-white dark:bg-[#0A0E1A] border border-gray-200 dark:border-[#1A1E2E] flex flex-col h-full hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-blue-900/20 transition-shadow duration-300'
    >
      <motion.div
        className='relative aspect-video overflow-hidden'
        whileHover='hover'
      >
        <motion.div variants={imageVariants}>
          <Image
            src={project.image}
            alt={project.title}
            height={1200}
            width={1200}
            className='object-cover'
          />
        </motion.div>
      </motion.div>

      <div className='p-4 flex flex-col flex-1'>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className='text-2xl font-bold mb-2 text-gray-900 dark:text-white'
        >
          {project.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className='text-gray-600 dark:text-gray-400 mb-auto'
        >
          {project.description}
        </motion.p>

        <div className='mt-8 flex justify-between items-center'>
          <div className='flex -space-x-2'>
            {project.technologies.slice(0, 4).map((tech, techIndex) => {
              const Icon = getTechIcon(tech);
              return (
                <motion.div
                  key={techIndex}
                  custom={techIndex}
                  initial='hidden'
                  whileInView='visible'
                  whileHover='hover'
                  viewport={{ once: true }}
                  variants={techIconVariants}
                  className='w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-[#151A2D] border-2 border-white dark:border-[#0A0E1A] overflow-hidden cursor-pointer'
                  title={tech}
                >
                  {Icon ? (
                    <Icon className='w-5 h-5 text-gray-900 dark:text-white' />
                  ) : (
                    <span className='text-gray-900 dark:text-white font-bold text-xs'>
                      {tech.substring(0, 2).toUpperCase()}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className='flex items-center gap-4'
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium px-4 py-2 rounded-md'
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Check Live Site <ExternalLink className='ml-1 h-4 w-4' />
              </motion.a>
            )}
            {project.githubUrl && !project.private && (
              <motion.a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-gray-600 dark:text-[#A8B3CF] hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium'
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Github Repo <Github className='ml-1 h-4 w-4' />
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
