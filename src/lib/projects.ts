export interface Project {
  id: number;
  title: string;
  category: string;
  type: string;
  year: string;
  description: string;
  image: string;
  technologies: string[];
  demo?: string;
  github?: string;
  design?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Fixlane",
    category: "Personal",
    type: "Fullstack",
    year: "2026",
    description:
      "A multi-vendor automotive workshop platform designed to connect customers with workshops through service booking, vehicle management, workshop discovery, and maintenance features.",
    image: "/images/projects/revion.png",
    technologies: ["Next.js", "TypeScript", "Express", "MySQL"],
    demo: "https://revion.co.id",
    github: "https://github.com/randuagasha",
  },
  {
    id: 2,
    title: "Food Rescue",
    category: "Competition",
    type: "Frontend",
    year: "2025",
    description:
      "A digital platform concept focused on reducing food waste through a simple and accessible user experience.",
    image: "/images/projects/foodrescue.png",
    technologies: ["Next.js", "React", "TypeScript"],
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Cashbhak",
    category: "Competition",
    type: "Frontend",
    year: "2025",
    description:
      "A cashier interface designed to simplify transaction management and provide a clean operational workflow.",
    image: "/images/projects/cashbhak.png",
    technologies: ["React", "JavaScript", "CSS"],
    demo: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Starmate",
    category: "Competition",
    type: "UI/UX",
    year: "2025",
    description:
      "A learning application concept designed around accessible navigation, structured learning content, and interactive user flows.",
    image: "/images/projects/STARMATE2.PNG",
    technologies: ["Figma", "UI/UX", "Prototyping"],
    design: "#",
  },
  {
    id: 5,
    title: "Library Management System",
    category: "Personal",
    type: "Fullstack",
    year: "2025",
    description:
      "A web-based library management system for handling books, users, and borrowing workflows.",
    image: "/images/projects/notranlibrary.png",
    technologies: ["Next.js", "TypeScript", "MySQL"],
    demo: "#",
    github: "#",
  },
];