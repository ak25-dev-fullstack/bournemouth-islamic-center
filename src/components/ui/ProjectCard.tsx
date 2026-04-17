import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

const statusConfig = {
  active: { label: "Active", color: "bg-emerald-100 text-emerald-800" },
  planning: { label: "Planning", color: "bg-blue-100 text-blue-800" },
  completed: { label: "Completed", color: "bg-stone-100 text-stone-600" },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const progress =
    project.fundingGoal && project.fundingRaised
      ? Math.min((project.fundingRaised / project.fundingGoal) * 100, 100)
      : null;

  const status = statusConfig[project.status];

  const formatAmount = (n: number) =>
    n.toLocaleString("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });

  return (
    <article className="bg-white rounded-xl border border-stone-200 p-6 flex flex-col hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-bold text-stone-800 text-base leading-snug">
          {project.title}
        </h3>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${status.color}`}
        >
          {status.label}
        </span>
      </div>

      <p className="text-stone-500 text-sm leading-relaxed flex-grow mb-5">
        {project.summary}
      </p>

      {/* Funding progress */}
      {progress !== null && project.fundingGoal && project.fundingRaised && (
        <div className="mb-5">
          <div className="flex justify-between text-xs text-stone-500 mb-1.5">
            <span className="font-medium text-stone-700">
              {formatAmount(project.fundingRaised)} raised
            </span>
            <span>Goal: {formatAmount(project.fundingGoal)}</span>
          </div>
          <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={project.fundingRaised}
              aria-valuemin={0}
              aria-valuemax={project.fundingGoal}
            />
          </div>
          <p className="text-xs text-stone-400 mt-1">
            {Math.round(progress)}% funded
          </p>
        </div>
      )}

      {project.completed && project.completedYear && (
        <p className="text-xs text-stone-400 mb-4">
          Completed in {project.completedYear}
        </p>
      )}

      {project.cta && !project.completed && (
        <Link
          href="/donate"
          className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 transition-colors"
        >
          {project.cta}
        </Link>
      )}
    </article>
  );
}
