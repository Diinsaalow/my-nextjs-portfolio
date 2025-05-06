import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DownloadIcon, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TextAnimate } from "./magicui/text-animate";

const skills = [
  {
    category: "Frontend",
    items: [
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma", "Adobe XD"],
  },
  {
    category: "Other",
    items: [
      "Responsive Design",
      "SEO",
      "Performance Optimization",
      "Accessibility",
    ],
  },
];

export function AboutSection() {
  return (
    <div>
      <div className="space-y-4 text-center mb-0 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          <TextAnimate animation="blurInUp" by="character" once>
            About Me
          </TextAnimate>
        </h2>
        <TextAnimate
          animation="blurInUp"
          by="character"
          as="p"
          className="text-muted-foreground max-w-2xl mx-auto"
          once
        >
          Know more about who I am and what I do.
        </TextAnimate>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="flex justify-center">
          <div className="relative w-64 h-64 hidden md:block md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary">
            <Image
              src="/my-pic.jpg"
              alt="Profile"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold tracking-tight mb-6 flex gap-2">
            <TextAnimate animation="blurInUp" by="character" once>
              Hello,
            </TextAnimate>
            <TextAnimate
              animation="blurInUp"
              by="character"
              className="text-primary "
              once
            >
              I'm Ismail Abdifadil
            </TextAnimate>
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <TextAnimate animation="blurInUp" by="character" as="p" once>
              I'm a passionate full stack web developer with over 2+ years of
              experience in creating beautiful, responsive, and user-friendly
              websites and applications. My journey in web development began
              during my university years, and I've been hooked ever since.
            </TextAnimate>
            <TextAnimate animation="blurInUp" by="character" as="p" once>
              I specialize in frontend development with a focus on React and
              Next.js, but I'm also comfortable working with backend
              technologies. I believe in writing clean, maintainable code and
              creating intuitive user experiences.
            </TextAnimate>
            <TextAnimate animation="blurInUp" by="character" as="p" once>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through blog posts and tutorials.
            </TextAnimate>
          </div>
          <Button className="mt-6" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
