import { projects } from "@/data/projects";
import fs from "fs/promises";
import "github-markdown-css/github-markdown.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const filePath = path.join(process.cwd(), "public", project.readme);

  const content = await fs.readFile(filePath, "utf-8");

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
        >
          ← Back
        </Link>
        <div className="mt-6">
          {/* GitHub-style container */}
          <article className="markdown-body prose dark:prose-invert max-w-none p-6 rounded-xl shadow-sm bg-white dark:bg-zinc-950">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}
