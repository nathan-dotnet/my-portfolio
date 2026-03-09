import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { projects } from "../data/projects";

export default function ProjectPage() {
  const { name } = useParams();
  const [content, setContent] = useState("");

  const project = projects.find(
    (p) => p.name === decodeURIComponent(name || ""),
  );

  useEffect(() => {
    if (project) {
      fetch(project.readme)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [project]);

  if (!project) return <div>Project not found</div>;
  if (!content) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto py-10">
      <div className="prose prose-neutral dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
