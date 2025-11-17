'use client';

import { motion } from 'framer-motion';
import { workExperience } from '@/lib/data';
import { Briefcase, Calendar } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export function ExperienceSection() {
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
          Work Experience
        </h2>
        <p className='text-muted-foreground max-w-2xl mx-auto'>
          My professional journey and roles
        </p>
      </motion.div>

      <div className='space-y-6 max-w-4xl mx-auto'>
        {workExperience.map((experience, index) => (
          <motion.div
            key={experience.id}
            custom={index}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-50px' }}
            variants={cardVariants}
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
            className='relative pl-8 pb-8 border-l-2 border-primary/20 last:pb-0'
          >
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.3 }}
              className='absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background'
            />

            <div className='bg-card border border-border rounded-lg p-6 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-primary/10 transition-shadow duration-300'>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-3'>
                <div>
                  <h3 className='text-xl font-bold text-foreground mb-1'>
                    {experience.position}
                  </h3>
                  <div className='flex items-center text-primary font-medium'>
                    <Briefcase className='w-4 h-4 mr-2' />
                    {experience.company}
                  </div>
                </div>
                <div className='flex items-center text-muted-foreground mt-2 md:mt-0'>
                  <Calendar className='w-4 h-4 mr-2' />
                  {experience.period}
                </div>
              </div>

              <p className='text-muted-foreground mb-4'>
                {experience.description}
              </p>

              <div className='flex flex-wrap gap-2'>
                {experience.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15 + 0.4 + techIndex * 0.05,
                      duration: 0.3,
                    }}
                    whileHover={{ scale: 1.1 }}
                    className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium cursor-default'
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

