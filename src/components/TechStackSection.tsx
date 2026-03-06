const techStack = {
  Frontend: [
    "Razor",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  Backend: ["ASP.NET Core", "Node.js", "Python", "PHP", "MS SQL Server"],
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

const TechStackSection = () => {
  return (
    <section className="">
      <h2 className="text-xl font-bold mb-6">Tech Stack</h2>
      <div className="space-y-5">
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
