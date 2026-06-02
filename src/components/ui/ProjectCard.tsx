import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

const statusStyles = {
  active:    { label: "Active",     cls: "bg-mosque/10 text-mosque" },
  planning:  { label: "Planning",   cls: "bg-info/10 text-info" },
  completed: { label: "Completed",  cls: "bg-ink/8 text-muted" },
};

const formatAmount = (n: number) =>
  n.toLocaleString("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });

export default function ProjectCard({ project }: ProjectCardProps) {
  const progress =
    project.fundingGoal && project.fundingRaised
      ? Math.min((project.fundingRaised / project.fundingGoal) * 100, 100)
      : null;

  const { label, cls } = statusStyles[project.status];

  return (
    <article className="bg-white border border-ink/8 rounded-lg overflow-hidden flex flex-col hover:border-gold/40 transition-colors duration-150 group">
      {project.image && (
        <div className="relative h-44 flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-center"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-[20px] text-ink leading-snug group-hover:text-gold transition-colors duration-150">
            {project.title}
          </h3>
          <span className={`text-xs font-medium px-2 py-0.5 rounded flex-shrink-0 ${cls}`}>
            {label}
          </span>
        </div>

        <p className="text-sm text-muted leading-relaxed flex-grow mb-5">
          {project.summary}
        </p>

        {/* Funding progress */}
        {progress !== null && project.fundingGoal && project.fundingRaised && (
          <div className="mb-5">
            <div className="flex justify-between text-xs text-muted mb-1.5">
              <span className="font-medium text-ink">{formatAmount(project.fundingRaised)} raised</span>
              <span>Goal: {formatAmount(project.fundingGoal)}</span>
            </div>
            <div className="h-1.5 bg-ink/8 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold rounded-full transition-all"
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuenow={project.fundingRaised}
                aria-valuemin={0}
                aria-valuemax={project.fundingGoal}
              />
            </div>
            <p className="text-xs text-muted mt-1">{Math.round(progress)}% funded</p>
          </div>
        )}

        {project.completedYear && (
          <p className="text-xs text-muted mb-4">Completed {project.completedYear}</p>
        )}

        {project.cta && !project.completed && (
          <Link
            href="/donate"
            className="mt-auto inline-flex items-center justify-center px-5 py-2.5 rounded text-sm font-medium bg-gold text-ink hover:opacity-88 transition-opacity duration-150"
          >
            {project.cta}
          </Link>
        )}
      </div>
    </article>
  );
}
