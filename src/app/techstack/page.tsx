import Link from "next/link";

const techStack = {
  Frontend: [
    "Razor",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "Vite",
    "ESLint",
    "Prettier",
  ],
  Backend: [
    "ASP.NET Core MVC",
    "ASP.NET Core Web API",
    "C#",
    "Node.js",
    "Python",
    "PHP",
    "MS SQL Server",
    "Entity Framework Core",
    "Express.js",
    "JWT",
    "REST",
  ],
  DeveloperTools: [
    "Git",
    "GitHub",
    "Visual Studio",
    "VS Code",
    "SQL Server Management Studio",
  ],
};

const Tag = ({ children }: { children: string }) => (
  <span className="inline-block border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-medium text-zinc-900 transition hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-100">
    {children}
  </span>
);

export default function TechStackPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 sm:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-primary transition hover:text-primary/80"
            >
              ← Back to Home
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Tech Stack</h1>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400"></p>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-8 bg-white/90 p-8 shadow-sm backdrop-blur dark:bg-zinc-950/80">
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category}>
              <h2 className="text-xl font-semibold mb-4">{category}</h2>
              <div className="flex flex-wrap gap-3">
                {techs.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
