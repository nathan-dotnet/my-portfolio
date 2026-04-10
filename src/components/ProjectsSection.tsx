import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "../data/projects";

const ProjectsSection = () => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-6">Recent Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={`/project/${project.slug}`}
            className="inline-block px-3 py-1 bg-tag text-tag-foreground text-xs font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_6px_14px_rgba(0,0,0,0.06)]"
          >
            <h3 className="font-semibold text-sm">{project.name}</h3>

            <p className="text-xs text-muted-foreground mt-1">{project.desc}</p>

            <span className="inline-flex items-center gap-1 mt-2 text-xs text-muted-foreground font-mono group-hover:text-foreground transition-colors">
              {project.url}
              <ExternalLink className="w-3 h-3" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
