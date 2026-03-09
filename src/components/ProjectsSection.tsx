import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export interface Project {
  name: string;
  desc: string;
  url: string;
  fullDesc: string;
  images: string[];
}

export const projects: Project[] = [
  {
    name: "CodeCred",
    desc: "Online certifications for programmers",
    url: "codecred.dev",
    fullDesc:
      "A comprehensive platform offering industry-recognized certifications for software developers. Features interactive coding challenges, peer review systems, and blockchain-verified credentials.",
    images: ["bg-blue-500", "bg-indigo-500", "bg-purple-500"],
  },
  {
    name: "BASE404",
    desc: "Online coding bootcamp",
    url: "base-404.com",
    fullDesc:
      "An immersive coding bootcamp platform with live instruction, real-time collaborative coding environments, and AI-powered code review.",
    images: ["bg-orange-500", "bg-red-500", "bg-pink-500"],
  },
  {
    name: "DIIN.PH",
    desc: "AI-powered wardrobe assistant",
    url: "diin.ph",
    fullDesc:
      "Smart fashion assistant using computer vision to analyze your wardrobe and suggest outfits based on weather and calendar events.",
    images: ["bg-emerald-500", "bg-teal-500", "bg-cyan-500"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="">
      <h2 className="text-xl font-bold mb-6">Recent Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
        {projects.map((project) => (
          <Link
            key={project.name}
            to={`/project/${encodeURIComponent(project.name)}`}
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
