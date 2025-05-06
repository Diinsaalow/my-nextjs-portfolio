export interface TechIcon {
  name?: string;
  type: "letter" | "image";
  content?: string;
  icon?: string;
}
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  techIcons: TechIcon[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Yoom - Video Conferencing App",
    description:
      "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    longDescription:
      "Yoom is a modern video conferencing platform designed for seamless communication. It features HD video quality, screen sharing, virtual backgrounds, breakout rooms, and end-to-end encryption. The intuitive interface makes it easy to schedule, join, and manage meetings from any device.",
    image: "/images/property.png",
    technologies: ["React", "WebRTC", "Node.js", "Socket.io", "TypeScript"],
    techIcons: [
      { type: "letter", content: "R", name: "React" },
      { type: "letter", content: "N", name: "Node.js" },
      { type: "letter", content: "TS", name: "TypeScript" },
      { type: "letter", content: "W", name: "WebRTC" },
      { type: "letter", content: "S", name: "Socket.io" },
    ],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "TaskFlow - Project Management",
    description:
      "Streamline your workflow with TaskFlow. Organize, track, and collaborate on projects with ease.",
    longDescription:
      "TaskFlow is a comprehensive project management tool that helps teams stay organized and productive. It features task boards, sprint planning, time tracking, file sharing, and detailed reporting. The intuitive interface makes it easy to manage complex projects across distributed teams.",
    image: "/images/property.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    techIcons: [
      { type: "letter", content: "R", name: "React" },
      { type: "letter", content: "N", name: "Node.js" },
      { type: "letter", content: "M", name: "MongoDB" },
      { type: "letter", content: "E", name: "Express" },
    ],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "FitTrack - Fitness Companion",
    description:
      "Achieve your fitness goals with FitTrack. Personalized workouts, nutrition tracking, and progress analytics.",
    longDescription:
      "FitTrack is a comprehensive fitness application that helps users achieve their health goals. It features workout planning, exercise demonstrations, nutrition tracking, progress visualization, and community challenges. The app adapts to each user's fitness level and goals for a personalized experience.",
    image: "/images/property.png",
    technologies: ["React Native", "Firebase", "Chart.js", "Node.js"],
    techIcons: [
      { type: "letter", content: "RN", name: "React Native" },
      { type: "letter", content: "F", name: "Firebase" },
      { type: "letter", content: "N", name: "Node.js" },
      { type: "letter", content: "C", name: "Chart.js" },
    ],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "HomeHub - Real Estate Platform",
    description:
      "Find your perfect home with HomeHub. Browse listings, schedule viewings, and connect with agents all in one place.",
    longDescription:
      "HomeHub is a comprehensive real estate platform that simplifies the home buying and selling process. It features property listings with virtual tours, neighborhood insights, mortgage calculators, agent connections, and saved searches. The platform uses AI to recommend properties based on user preferences.",
    image: "/images/property.png",
    technologies: ["Next.js", "PostgreSQL", "Google Maps API", "Tailwind CSS"],
    techIcons: [
      { type: "letter", content: "N", name: "Next.js" },
      { type: "letter", content: "P", name: "PostgreSQL" },
      { type: "letter", content: "G", name: "Google Maps" },
      { type: "letter", content: "T", name: "Tailwind CSS" },
    ],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];
