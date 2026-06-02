interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  light?: boolean;
}

/* Geometric ornament — thin gold 8-pointed star fragment */
function GoldOrnament() {
  return (
    <div className="flex items-center gap-3 mb-4" aria-hidden="true">
      <div className="h-px w-8 bg-gold/40" />
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gold/60" aria-hidden="true">
        <rect x="1" y="1" width="10" height="10" stroke="currentColor" strokeWidth="0.75" transform="rotate(45 6 6)" />
        <rect x="1" y="1" width="10" height="10" stroke="currentColor" strokeWidth="0.75" />
      </svg>
      <div className="h-px w-8 bg-gold/40" />
    </div>
  );
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  action,
  light = false,
}: SectionHeadingProps) {
  const centerClass = align === "center" ? "items-center text-center" : "";

  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 ${align === "center" ? "items-center" : ""}`}>
      <div className={`flex flex-col ${align === "center" ? "items-center" : ""}`}>
        <GoldOrnament />
        <h2
          className={`text-[36px] leading-[1.2] ${
            light ? "text-white" : "text-ink"
          } ${centerClass}`}
        >
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-2 text-sm leading-relaxed ${light ? "text-white/55" : "text-muted"}`}>
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}
