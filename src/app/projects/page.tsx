import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Discover current and completed projects at Bournemouth Islamic Centre and support our community initiatives.",
};

export default function ProjectsPage() {
  const active = projects.filter((p) => p.status !== "completed");
  const completed = projects.filter((p) => p.status === "completed");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeading
        title="Our Projects"
        subtitle="Community-funded initiatives that make a real difference"
      />

      {/* Impact banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {[
          { label: "Active Projects", value: `${active.length}` },
          { label: "Projects Completed", value: `${completed.length}+` },
          { label: "Families Supported", value: "200+" },
          { label: "Years Serving", value: "25+" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-stone-200 p-5 text-center"
          >
            <p className="text-3xl font-bold text-emerald-700">{stat.value}</p>
            <p className="text-xs text-stone-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Active projects */}
      <section className="mb-14" aria-labelledby="active-heading">
        <h2
          id="active-heading"
          className="text-lg font-bold text-stone-800 mb-5 flex items-center gap-2"
        >
          <span className="w-1.5 h-6 bg-emerald-600 rounded-full inline-block" />
          Current Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {active.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Completed projects */}
      {completed.length > 0 && (
        <section aria-labelledby="completed-heading">
          <h2
            id="completed-heading"
            className="text-lg font-bold text-stone-800 mb-5 flex items-center gap-2"
          >
            <span className="w-1.5 h-6 bg-stone-300 rounded-full inline-block" />
            Completed Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {completed.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Transparency note */}
      <div className="mt-12 bg-stone-50 border border-stone-200 rounded-2xl p-8">
        <h3 className="text-base font-bold text-stone-800 mb-2">
          Transparency &amp; Accountability
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed">
          Bournemouth Islamic Centre is a registered charity. All project funds
          are managed by the trustees and independently audited. Annual accounts
          are available on request. We are committed to being open and
          accountable to our community.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
        >
          Request accounts or ask a question &rarr;
        </Link>
      </div>
    </div>
  );
}
