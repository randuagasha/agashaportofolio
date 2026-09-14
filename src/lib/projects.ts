export interface Project {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  type: string;
  role: string;
  year: string;
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Revion Management System",
    shortTitle: "REVION",
    description:
      "A web-based management system designed for automotive workshops, covering workshop operations, bookings, services, and customer management.",
    image: "/images/projects/revion.png",
    type: "Personal",
    role: "Fullstack Development",
    year: "2026",
    stack: ["Next.js", "Express.js", "MySQL"],
    demoUrl: "https://revion.co.id/",
    githubUrl: "https://github.com/randuagasha/Revion-FE-Project-SAS",
  },
  {
    id: 2,
    title: "Food Rescue",
    shortTitle: "FOOD RESCUE",
    description:
      "A digital marketplace designed to reduce food waste by connecting food providers, local businesses, and consumers.",
    image: "/images/projects/foodrescue.png",
    type: "Competition",
    role: "Frontend Development",
    year: "2025",
    stack: ["Next.js", "React", "TypeScript"],
    demoUrl: "https://foodrescue.web.id/",
    githubUrl: "https://github.com/RezaAdityaRamadhan26/food-rescue-fe",
  },
  {
    id: 3,
    title: "Cashbhak Cashier",
    shortTitle: "CASHBHAK",
    description:
      "A cashier management platform focused on product inventory, financial records, and transaction management.",
    image: "/images/projects/cashbhak.png",
    type: "Competition",
    role: "Frontend Development",
    year: "2025",
    stack: ["React", "JavaScript", "CSS"],
    demoUrl: "https://cashbhak.vercel.app/",
    githubUrl: "https://github.com/RezaAdityaRamadhan26/CashBhak",
  },
  {
    id: 4,
    title: "Starmate Learning App",
    shortTitle: "STARMATE",
    description:
      "A mobile learning application concept focused on creating a simple and accessible learning experience through UI/UX design.",
    image: "/images/projects/starmate.png",
    type: "Competition",
    role: "UI/UX Designer",
    year: "2025",
    stack: ["Figma", "UI/UX", "Prototyping"],
    demoUrl:
      "https://www.figma.com/proto/ju3XV3O5yJfbFMJpkJEnRN/STARMATE-LEARNING?page-id=0%3A1&node-id=695-2310&starting-point-node-id=695%3A2310",
    figmaUrl:
      "https://www.figma.com/design/ju3XV3O5yJfbFMJpkJEnRN/STARMATE-LEARNING?node-id=0-1",
  },
  {
    id: 5,
    title: "Library Management System",
    shortTitle: "LIBRARY",
    description:
      "A library management website created for a school project, featuring digital library operations and database integration.",
    image: "/images/projects/notranlibrary.png",
    type: "Personal",
    role: "Fullstack Development",
    year: "2025",
    stack: ["Next.js", "MySQL", "TypeScript"],
    demoUrl: "https://librarywebaas.vercel.app/",
    githubUrl: "https://github.com/randuagasha/library-web-aas",
  },
];