'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update header style based on scroll position
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header
      className={cn('w-full fixed top-0 z-50 transition-all duration-300')}
    >
      <div className='max-w-7xl mx-auto px-4 py-3'>
        <div
          className={cn(
            'border rounded-lg flex items-center justify-between px-4 py-2',
            isScrolled ? 'bg-background/80 backdrop-blur-md ' : 'bg-background'
          )}
        >
          <a
            href='#home'
            className='font-bold  text-lg'
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            Diinsaalow
          </a>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-6'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={cn(
                  'text-lg font-medium transition-colors hover:text-primary',
                  activeSection === item.href.substring(1)
                    ? 'text-primary   '
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className='flex items-center gap-2'>
            <ModeToggle />

            {/* Mobile Menu Toggle */}
            <Button
              variant='ghost'
              size='icon'
              className='md:hidden'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-background border-b shadow-lg'>
          <nav className='container mx-auto px-4 py-4 flex flex-col space-y-3'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={cn(
                  'py-2 px-3 rounded-md transition-colors hover:bg-muted',
                  activeSection === item.href.substring(1)
                    ? 'text-primary font-medium'
                    : 'text-foreground'
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
