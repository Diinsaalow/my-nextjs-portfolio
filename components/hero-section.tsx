'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { GridPattern } from './magicui/grid-pattern';
import { cn } from '@/lib/utils';
import { TextAnimate } from './magicui/text-animate';
import { motion } from 'framer-motion';

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex flex-col md:flex-row items-center justify-between py-16 px-4 md:py-24 gap-8 max-w-7xl mx-auto'>
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
        ]}
        className={cn(
          '[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]',
          '-inset-x-12 inset-y-[-60%] h-[170%] skew-y-12'
        )}
      />
      {/* Left side content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='flex flex-col items-start text-left space-y-6 '
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='inline-block border border-gray-700 px-6 py-2 rounded-[10px]'
        >
          <h2 className='text-2xl md:text-3xl font-medium text-primary '>
            <TextAnimate animation='blurInUp' by='character' once>
              Hello!
            </TextAnimate>
          </h2>
        </motion.div>

        <div>
          <h1 className='text-4xl md:text-5xl lg:text-7xl flex gap-2'>
            <TextAnimate animation='blurInUp' by='character' once>
              I'm
            </TextAnimate>
            <TextAnimate
              animation='blurInUp'
              by='character'
              className='text-primary font-bold'
              once
            >
              Ismail Abdifadil
            </TextAnimate>
          </h1>
        </div>

        <p className='text-lg md:text-2xl text-muted-foreground max-w-xl'>
          <TextAnimate
            animation='blurInUp'
            by='character'
            as='p'
            className='text-muted-foreground'
            once
          >
            A passionate full stack web developer creating beautiful,
            responsive, and user-friendly websites
          </TextAnimate>
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className='flex flex-wrap gap-4 mt-4'
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className='bg-primary hover:bg-primary/90 text-white px-8'
              onClick={() => scrollToSection('#portfolio')}
            >
              View My Work
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant='outline'
              className='border-primary text-primary hover:bg-primary/10'
              onClick={() => scrollToSection('#contact')}
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right side with image and tech icons */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        className='r'
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
          className='relative w-72 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden border-4 dark:bg-gray-800 border-gray-700/10 dark:border-slate-100/20'
        >
          <Image
            src='/images/mine.png'
            alt='Profile'
            fill
            className=' object-cover object-top'
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
