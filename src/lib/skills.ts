export interface Skill {
  name: string;
  level: number;
  category: "Frontend" | "Design" | "Backend" | "Mobile";
  status: "Primary" | "Learning" | "Exploring";
}

export const skills: Skill[] = [
  {
    name: "HTML / CSS",
    level: 100,
    category: "Frontend",
    status: "Primary",
  },
  {
    name: "JavaScript",
    level: 98,
    category: "Frontend",
    status: "Primary",
  },
  {
    name: "React",
    level: 85,
    category: "Frontend",
    status: "Primary",
  },
  {
    name: "Next.js",
    level: 98,
    category: "Frontend",
    status: "Primary",
  },
  {
    name: "TypeScript",
    level: 96,
    category: "Frontend",
    status: "Primary",
  },
  {
    name: "Figma / UI/UX",
    level: 95,
    category: "Design",
    status: "Primary",
  },
  {
    name: "Golang",
    level: 10,
    category: "Backend",
    status: "Learning",
  },
  {
    name: "SQL / MySQL",
    level: 55,
    category: "Backend",
    status: "Learning",
  },
  {
    name: "Flutter",
    level: 40,
    category: "Mobile",
    status: "Exploring",
  },
  {
    name: "Python",
    level: 35,
    category: "Backend",
    status: "Exploring",
  },
  {
    name: "Express.js",
    level: 60,
    category: "Backend",
    status: "Learning",
  },
];