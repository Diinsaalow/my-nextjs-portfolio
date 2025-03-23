import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

const featuredProjects: Project[] = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Tailwind CSS.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://example.com/project-1",
  },
  {
    id: "project-2",
    title: "Dashboard UI",
    description: "A responsive admin dashboard with dark mode support.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "shadcn/ui", "Chart.js"],
    link: "https://example.com/project-2",
  },
  {
    id: "project-3",
    title: "Mobile App",
    description: "A cross-platform mobile application built with React Native.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Expo", "Firebase"],
    link: "https://example.com/project-3",
  },
  {
    id: "project-4",
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    link: "https://example.com/project-4",
  },
  {
    id: "project-5",
    title: "Blog Platform",
    description: "A content management system for bloggers with markdown support.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "MDX", "Prisma"],
    link: "https://example.com/project-5",
  },
  {
    id: "project-6",
    title: "Weather App",
    description: "A weather application with real-time updates and location tracking.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "OpenWeather API", "Geolocation"],
    link: "https://example.com/project-6",
  },
]

export function ProjectsSection() {
  return (
    <div>
      <div className="space-y-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Check out some of my recent work that showcases my skills and expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

