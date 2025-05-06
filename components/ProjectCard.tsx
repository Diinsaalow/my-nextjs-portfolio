"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "./projects-section";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-[#0A0E1A] border border-[#1A1E2E] transition-all duration-300">
      <div className="p-4 flex flex-col h-full">
        <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
          <Image
            src={project.image}
            alt={project.title}
            // fill
            height={1200}
            width={1200}
            className="object-cover"
          />
        </div>

        <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-auto">{project.description}</p>

        <div className="mt-8 flex justify-between items-center">
          <div className="flex -space-x-2">
            {project.techIcons.map((icon, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#151A2D] border-2 border-[#0A0E1A] overflow-hidden"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {icon.type === "letter" ? (
                    <span className="text-white font-bold text-sm">
                      {icon.content}
                    </span>
                  ) : (
                    <Image
                      src={icon.icon || "/placeholder.svg?height=24&width=24"}
                      alt={icon.name || `Tech ${index}`}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#A8B3CF] hover:text-white transition-colors text-sm font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                Check Live Site <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#A8B3CF] hover:text-white transition-colors text-sm font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                Github Repo <Github className="ml-1 h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
