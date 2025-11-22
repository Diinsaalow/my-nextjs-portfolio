'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: [
      'HTML/CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Adobe XD'],
  },
  {
    category: 'Other',
    items: [
      'Responsive Design',
      'SEO',
      'Performance Optimization',
      'Accessibility',
    ],
  },
];

export function AboutSection() {
  return (
    <div className='max-w-[100vw] overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className='space-y-4 text-center mb-0 md:mb-12'
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className='text-3xl md:text-4xl font-bold tracking-tight'
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className='text-muted-foreground max-w-2xl mx-auto'
        >
          Know more about who I am and what I do.
        </motion.p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16'>
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='flex justify-center'
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.3 }}
            className='relative w-64 h-64 hidden md:block md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary shadow-xl bg-muted'
          >
            <Image
              src='/my-pic.jpg'
              alt='Ismail Abdifadil - Profile Picture'
              fill
              sizes='(max-width: 768px) 0vw, 320px'
              className='object-cover grayscale hover:grayscale-0 transition-all duration-500'
              quality={90}
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className='text-2xl font-bold tracking-tight mb-6'
          >
            Hello, <span className='text-primary'>I'm Ismail Abdifadil</span>
          </motion.h3>
          <div className='space-y-4 text-muted-foreground'>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              I'm a passionate full stack web developer with over 3+ years of
              experience in creating beautiful, responsive, and user-friendly
              websites and applications. My journey in web development began
              during my university years, and I've been hooked ever since.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              I specialize in frontend development with a focus on React and
              Next.js, but I'm also comfortable working with backend
              technologies. I believe in writing clean, maintainable code and
              creating intuitive user experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through blog posts and tutorials.
            </motion.p>
          </div>
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className='mt-6' asChild>
              <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
                <DownloadIcon className='mr-2 h-4 w-4' />
                Download Resume
              </a>
            </Button>
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
}
