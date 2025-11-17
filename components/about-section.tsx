'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DownloadIcon, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TextAnimate } from "./magicui/text-animate";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center mb-0 md:mb-12"
      >
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
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.3 }}
            className="relative w-64 h-64 hidden md:block md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary shadow-xl"
          >
            <Image
              src="/my-pic.jpg"
              alt="Profile"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="mt-6" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
