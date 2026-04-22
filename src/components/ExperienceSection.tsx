const experiences = [
  { title: "Full Stack Developer", company: "Sanyo Denki", year: "2025" },
  {
    title: "BS Information Technology",
    company: "President Ramon Magsaysay State University",
    year: "2025",
  },
  {
    title: "Hello World! 👋🏻",
    company: "Wrote my first line of code",
    year: "2021",
  },
];

const ExperienceSection = () => {
  return (
    <section className="">
      <h2 className="text-xl font-bold mb-6">Experience</h2>
      <div className="relative">
        <div className="absolute left-1.75 top-2 bottom-2 w-px bg-border" />
        <div className="space-y-5">
          {experiences.map((exp, i) => {
            const isLatest = i === 0;

            return (
              <div
                key={i}
                className={`
                  flex items-start gap-4 relative group cursor-pointer
                  ${!isLatest ? "hover-trigger" : ""}
                `}
              >
                {/* Square */}
                <div
                  className={`
                    z-10 shrink-0 mt-0.5 transition-colors duration-200
                    ${
                      isLatest
                        ? "w-3.5 h-3.5 border-2 border-foreground bg-foreground"
                        : "w-3 h-3 border border-gray-400 bg-background ml-0.5 mt-1.25 group-hover:bg-black dark:group-hover:bg-white"
                    }
                  `}
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold">{exp.title}</h3>
                  <p className="text-xs text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-xs pt-4 text-muted-foreground shrink-0">
                  {exp.year}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
