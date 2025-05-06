import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";

import { Header } from "@/components/header";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section id="home">
          <div>
            <HeroSection />
          </div>
        </section>
        <section id="about" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <AboutSection />
          </div>
        </section>

        <section id="portfolio" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <ProjectsSection />
          </div>
        </section>
        <Contact />
      </main>
    </>
  );
}
