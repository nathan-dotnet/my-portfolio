// src/components/ProjectDetail.tsx
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "./ProjectsSection";

const ProjectDetail = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const project = projects.find(
    (p) => p.name === decodeURIComponent(projectName || ""),
  );

  if (!project) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold">Project not found</h1>
        <Link
          to="/"
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to projects
      </Link>

      {/* Header */}
      <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
      <p className="text-sm text-muted-foreground font-mono mb-6">
        {project.url}
      </p>

      {/* Description */}
      <p className="text-base text-foreground leading-relaxed mb-8">
        {project.fullDesc}
      </p>

      {/* Images */}
      <h2 className="text-lg font-semibold mb-4">Screenshots</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {project.images.map((img: string, idx: number) => (
          <div
            key={idx}
            className={`aspect-video rounded-lg ${img} shadow-md`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
