'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Palette, Rocket, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GridPattern } from './magicui/grid-pattern';
import { cn } from '@/lib/utils';

export function HeroSection3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Code2, value: '20+', label: 'Projects Built' },
    { icon: Sparkles, value: '3+', label: 'Years Experience' },
    { icon: Palette, value: '200+', label: 'Designs Created' },
  ];

  return (
    <section
      id='home'
      ref={containerRef}
      className='relative h-screen w-full flex items-center justify-center overflow-hidden'
    >
      {/* Grid Pattern Background */}
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

      {/* Animated background shapes */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-primary/35 rounded-full blur-3xl'
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-primary/20 to-primary/20 rounded-full blur-3xl'
        />

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [-20, -100, -20],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            className='absolute w-2 h-2 bg-primary rounded-full'
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className='container mx-auto px-4 relative z-10 w-full h-full'
      >
        <div className='grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto h-full'>
          {/* Left Content */}
          <div className='space-y-8 flex flex-col justify-center'>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm'>
                <Rocket className='w-4 h-4 text-primary' />
                <span className='text-sm font-medium'>Available for work</span>
              </div>
            </motion.div>

            {/* Main Heading with Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='space-y-4'
            >
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                <span className='block'>Building the</span>
                <span className='block bg-gradient-to-r from-primary via-primary/50 to-primary bg-clip-text text-transparent  bg-[length:200%_auto]'>
                  Future of Web
                </span>
              </h1>
              <p className='text-xl md:text-2xl text-muted-foreground'>
                Hi, I'm{' '}
                <span className='font-semibold text-foreground'>
                  Ismail Abdifadil
                </span>
                , a Full Stack Developer passionate about creating exceptional
                digital experiences.
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-lg text-muted-foreground max-w-xl'
            >
              Transforming ideas into elegant, scalable solutions using modern
              technologies. Specialized in React, Next.js, and full-stack
              development.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='flex flex-wrap gap-4'
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size='lg'
                  className='gap-2 px-8 shadow-lg shadow-primary/20'
                  onClick={() => scrollToSection('#portfolio')}
                >
                  Explore Projects
                  <ArrowRight className='w-4 h-4' />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size='lg'
                  variant='outline'
                  className='gap-2 px-8 border-2'
                  onClick={() => scrollToSection('#contact')}
                >
                  Let's Talk
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='grid grid-cols-3 gap-4 pt-8'
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className='relative group'
                >
                  <div className='border absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg  group-hover:blur-md transition-all' />
                  <div className='relative p-4 rounded-lg border border-border/50 bg-background/50 '>
                    <stat.icon className='w-5 h-5 text-primary mb-2' />
                    <div className='text-2xl font-bold'>{stat.value}</div>
                    <div className='text-xs text-muted-foreground'>
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='relative lg:flex hidden items-end h-full'
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className='relative w-full h-[85vh] rounded-t-3xl overflow-hidden'
            >
              <Image
                src='/images/mine-4.png'
                alt='Ismail Abdifadil'
                fill
                className='object-cover object-top'
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent'
      />
    </section>
  );
}
