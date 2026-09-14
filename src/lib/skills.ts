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
    level: 97,
    category: "Frontend",
    status: "Primary",
  },
  {
    name: "Figma / UI/UX",
    level: 90,
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
    level: 65,
    category: "Backend",
    status: "Learning",
  },
  {
    name: "Flutter",
    level: 35,
    category: "Mobile",
    status: "Exploring",
  },
  {
    name: "Python",
    level: 35,
    category: "Backend",
    status: "Exploring",
  },
];