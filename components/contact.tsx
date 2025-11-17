'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(
    null
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section id='contact' className='py-16 md:py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'>
            Get In Touch
          </h2>
          <div className='mt-2 h-1 w-20 bg-primary mx-auto'></div>
          <p className='mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
              Contact Information
            </h3>

            <div className='space-y-6'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                whileHover={{ x: 5 }}
                className='flex items-start'
              >
                <div className='flex-shrink-0 bg-primary/10 p-3 rounded-full'>
                  <Mail className='h-6 w-6 text-primary' />
                </div>
                <div className='ml-4'>
                  <h4 className='text-lg font-medium text-gray-900 dark:text-white'>
                    Email
                  </h4>
                  <a
                    href='mailto:ismail.haabare@gmail.com'
                    className='text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors'
                  >
                    ismail.haabare@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                whileHover={{ x: 5 }}
                className='flex items-start'
              >
                <div className='flex-shrink-0 bg-primary/10 p-3 rounded-full'>
                  <Phone className='h-6 w-6 text-primary' />
                </div>
                <div className='ml-4'>
                  <h4 className='text-lg font-medium text-gray-900 dark:text-white'>
                    Phone
                  </h4>
                  <a
                    href='tel:+252616056570'
                    className='text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors'
                  >
                    +252 61 6056570
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                whileHover={{ x: 5 }}
                className='flex items-start'
              >
                <div className='flex-shrink-0 bg-primary/10 p-3 rounded-full'>
                  <MapPin className='h-6 w-6 text-primary' />
                </div>
                <div className='ml-4'>
                  <h4 className='text-lg font-medium text-gray-900 dark:text-white'>
                    Location
                  </h4>
                  <p className='text-gray-600 dark:text-gray-400'>
                    Mogadishu, Somalia
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className='mt-8'
            >
              <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
                Follow Me
              </h3>
              <div className='flex space-x-4'>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href='#'
                    className='bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors inline-block'
                    aria-label='Twitter'
                  >
                    <svg
                      className='h-5 w-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                    </svg>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href='#'
                    className='bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors inline-block'
                    aria-label='LinkedIn'
                  >
                    <svg
                      className='h-5 w-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                    </svg>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href='#'
                    className='bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors inline-block'
                    aria-label='GitHub'
                  >
                    <svg
                      className='h-5 w-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                >
                  Your Name
                </label>
                <Input
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className='w-full border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'
                  placeholder='Enter your name'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                >
                  Your Email
                </label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className='w-full border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'
                  placeholder='Enter your email'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                >
                  Message
                </label>
                <Textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className='w-full border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'
                  placeholder='Tell me about your project...'
                />
              </div>

              <Button
                type='submit'
                className='w-full bg-primary hover:bg-[#1579c0] text-white'
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className='flex items-center'>
                    <svg
                      className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className='flex items-center'>
                    <Send className='mr-2 h-4 w-4' />
                    Send Message
                  </span>
                )}
              </Button>

              {submitStatus === 'success' && (
                <div className='p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-md'>
                  Your message has been sent successfully! I&apos;ll get back to
                  you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className='p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-md'>
                  There was an error sending your message. Please try again
                  later.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
