const techStack = {
  Frontend: [
    "Razor",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  Backend: [
    "ASP.NET Core MVC",
    "ASP.NET Core Web API",
    "C#",
    "Node.js",
    "Python",
  ],
};

const Tag = ({ children }: { children: string }) => (
  <span
    className="
      inline-block px-3 py-1
      bg-tag text-tag-foreground text-xs font-medium
      transition-all duration-300 ease-out
      hover:-translate-y-0.5
      hover:shadow-[0_6px_14px_rgba(0,0,0,0.06)]
    "
  >
    {children}
  </span>
);

import Link from "next/link";

const TechStackSection = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold">Tech Stack</h2>
        <Link
          href="/techstack"
          className="text-sm font-medium text-primary transition hover:text-primary/80"
        >
          View all →
        </Link>
      </div>
      <div className="space-y-5 mt-6">
        {Object.entries(techStack).map(([category, techs]) => (
          <div key={category}>
            <h3 className="text-sm font-semibold mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
