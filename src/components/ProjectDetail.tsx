import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  const project = projects.find((p) => p.slug === projectName);

  useEffect(() => {
    if (project) {
      fetch(project.readme)
        .then((res) => {
          if (!res.ok) throw new Error("Markdown not found");
          return res.text();
        })
        .then((text) => setContent(text))
        .catch((err) => console.error(err));
    }
  }, [project]);

  if (!project) return <div className="p-10">Project not found</div>;

  if (!content) return <div className="p-10">Loading project...</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-base text-black hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-6">{project.name}</h1>

      <div className="prose prose-neutral dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
