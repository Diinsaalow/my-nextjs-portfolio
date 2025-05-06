import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";





export function ProjectsSection() {
  return (
    <div>
      <div className="space-y-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          My Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Check out some of my recent work
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
