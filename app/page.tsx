import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ExperienceSection } from '@/components/experience-section';
import { EducationSection } from '@/components/education-section';

import { Header } from '@/components/header';
import Contact from '@/components/contact';
import { HeroSection2 } from '@/components/hero-section-2';
import { HeroSection3 } from '@/components/hero-section-3';

export default function Home() {
  return (
    <>
      <Header />
      <main className='overflow-x-hidden'>
        <HeroSection3 />

        <section id='about' className='py-16 md:py-24 bg-muted/30'>
          <div className='container mx-auto px-4'>
            <AboutSection />
          </div>
        </section>

        <section id='skills' className='py-16 md:py-24'>
          <div className='container mx-auto px-4'>
            <SkillsSection />
          </div>
        </section>

        <section id='experience' className='py-16 md:py-24 bg-muted/30'>
          <div className='container mx-auto px-4'>
            <ExperienceSection />
          </div>
        </section>

        <section id='education' className='py-16 md:py-24'>
          <div className='container mx-auto px-4'>
            <EducationSection />
          </div>
        </section>

        <section id='portfolio' className='py-16 md:py-24 bg-muted/30'>
          <div className='container mx-auto px-4'>
            <ProjectsSection />
          </div>
        </section>

        {/* <Contact /> */}
      </main>
    </>
  );
}
