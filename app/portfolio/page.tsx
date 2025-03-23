import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  link: string
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Tailwind CSS.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    category: "web",
    link: "/portfolio/project-1",
  },
  {
    id: "project-2",
    title: "Dashboard UI",
    description: "A responsive admin dashboard with dark mode support.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "shadcn/ui", "Chart.js"],
    category: "web",
    link: "/portfolio/project-2",
  },
  {
    id: "project-3",
    title: "Mobile App",
    description: "A cross-platform mobile application built with React Native.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Expo", "Firebase"],
    category: "mobile",
    link: "/portfolio/project-3",
  },
  {
    id: "project-4",
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    category: "web",
    link: "/portfolio/project-4",
  },
  {
    id: "project-5",
    title: "Blog Platform",
    description: "A content management system for bloggers with markdown support.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "MDX", "Prisma"],
    category: "web",
    link: "/portfolio/project-5",
  },
  {
    id: "project-6",
    title: "Weather App",
    description: "A weather application with real-time updates and location tracking.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "OpenWeather API", "Geolocation"],
    category: "web",
    link: "/portfolio/project-6",
  },
]

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">My Portfolio</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse through my projects and see what I've been working on.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12">
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="web" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => project.category === "web")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="mobile" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => project.category === "mobile")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden group">
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
          <Link href={project.link}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

