'use client';

import { motion } from 'framer-motion';
import { education } from '@/lib/data';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

export function EducationSection() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className='space-y-4 text-center mb-12'
      >
        <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
          Education
        </h2>
        <p className='text-muted-foreground max-w-2xl mx-auto'>
          My academic background and qualifications
        </p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            custom={index}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-50px' }}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className='bg-card border border-border rounded-lg p-6 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-primary/10 transition-shadow duration-300'
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
              className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4'
            >
              <GraduationCap className='w-6 h-6 text-primary' />
            </motion.div>

            <h3 className='text-xl font-bold text-foreground mb-2'>
              {edu.degree}
            </h3>

            {edu.field && (
              <p className='text-primary font-medium mb-3'>{edu.field}</p>
            )}

            <p className='text-foreground font-medium mb-3'>{edu.institution}</p>

            <div className='space-y-2 text-sm text-muted-foreground'>
              <div className='flex items-center'>
                <Calendar className='w-4 h-4 mr-2' />
                {edu.period}
              </div>

              {edu.location && (
                <div className='flex items-center'>
                  <MapPin className='w-4 h-4 mr-2' />
                  {edu.location}
                </div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
              className='mt-4'
            >
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  edu.status === 'In Progress'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                    : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                }`}
              >
                {edu.status}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

