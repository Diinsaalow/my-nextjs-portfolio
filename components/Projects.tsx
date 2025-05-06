import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";
import { Project } from "@/lib/data";
const Projects = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
