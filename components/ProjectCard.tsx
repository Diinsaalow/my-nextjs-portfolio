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

interface ProjectCardProps {
  project: Project;
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

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='group relative overflow-hidden rounded-lg bg-white dark:bg-[#0A0E1A] border border-gray-200 dark:border-[#1A1E2E] transition-all duration-300 flex flex-col h-full hover:shadow-lg'>
      <div className='relative aspect-video overflow-hidden'>
        <Image
          src={project.image}
          alt={project.title}
          height={1200}
          width={1200}
          className='object-cover'
        />
      </div>

      <div className='p-4 flex flex-col flex-1'>
        <h3 className='text-2xl font-bold mb-2 text-gray-900 dark:text-white'>
          {project.title}
        </h3>
        <p className='text-gray-600 dark:text-gray-400 mb-auto'>
          {project.description}
        </p>

        <div className='mt-8 flex justify-between items-center'>
          <div className='flex -space-x-2'>
            {project.technologies.slice(0, 4).map((tech, index) => {
              const Icon = getTechIcon(tech);
              return (
                <div
                  key={index}
                  className='w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-[#151A2D] border-2 border-white dark:border-[#0A0E1A] overflow-hidden'
                  title={tech}
                >
                  {Icon ? (
                    <Icon className='w-5 h-5 text-gray-900 dark:text-white' />
                  ) : (
                    <span className='text-gray-900 dark:text-white font-bold text-xs'>
                      {tech.substring(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className='flex items-center gap-4'>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-gray-600 dark:text-[#A8B3CF] hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium'
                onClick={(e) => e.stopPropagation()}
              >
                Check Live Site <ExternalLink className='ml-1 h-4 w-4' />
              </a>
            )}
            {project.githubUrl && !project.private && (
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-gray-600 dark:text-[#A8B3CF] hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium'
                onClick={(e) => e.stopPropagation()}
              >
                Github Repo <Github className='ml-1 h-4 w-4' />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
