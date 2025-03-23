import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  { category: "Frontend", items: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Adobe XD"] },
  { category: "Other", items: ["Responsive Design", "SEO", "Performance Optimization", "Accessibility"] },
]

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description:
      "Lead frontend development for multiple client projects, implementing modern web technologies and best practices.",
  },
  {
    title: "Web Developer",
    company: "Digital Agency",
    period: "2018 - 2021",
    description: "Developed responsive websites and web applications for various clients across different industries.",
  },
  {
    title: "Junior Developer",
    company: "Startup Hub",
    period: "2016 - 2018",
    description:
      "Assisted in the development of web applications and gained experience in frontend and backend technologies.",
  },
]

const education = [
  {
    degree: "Master of Computer Science",
    institution: "Tech University",
    period: "2014 - 2016",
    description: "Specialized in Web Technologies and User Experience Design.",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "State University",
    period: "2010 - 2014",
    description: "Focused on Software Engineering and Database Systems.",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Learn more about my background, skills, and experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
            <Image src="/placeholder.svg?height=320&width=320" alt="Profile" fill className="object-cover" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-6">Hello, I'm Dilnsaalow</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm a passionate web developer with over 5 years of experience in creating beautiful, responsive, and
              user-friendly websites and applications. My journey in web development began during my university years,
              and I've been hooked ever since.
            </p>
            <p>
              I specialize in frontend development with a focus on React and Next.js, but I'm also comfortable working
              with backend technologies. I believe in writing clean, maintainable code and creating intuitive user
              experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge through blog posts and tutorials.
            </p>
          </div>
          <Button className="mt-6" asChild>
            <Link href="/resume.pdf" target="_blank">
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <Card key={skillGroup.category}>
              <CardHeader>
                <CardTitle>{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{exp.company}</span>
                  <span>{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{edu.institution}</span>
                  <span>{edu.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

