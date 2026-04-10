export interface Project {
  name: string;
  slug: string;
  desc: string;
  url: string;
  readme?: string;
}

export const projects: Project[] = [
  {
    name: "SMD Tower",
    slug: "smd-tower",
    desc: "Tape and Reel Cabinet",
    url: "published locally",
    readme: "projects/smd-tower/smd-tower.md",
  },
  {
    name: "IoT Engineering Dashboard",
    slug: "iot-engineering-dashboard",
    desc: "Master Dashboard",
    url: "published locally",
    readme: "projects/iot-dashboard/iot-dashboard.md",
  },
  {
    name: "BudgetElly",
    slug: "budgetelly",
    desc: "Personal Finance Management App",
    url: "https://nathan-dotnet.github.io/budgetElly/",
  },
];
