interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  action,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 ${
        align === "center" ? "text-center sm:text-left" : ""
      }`}
    >
      <div>
        <h2
          className={`text-2xl sm:text-3xl font-bold tracking-tight ${
            light ? "text-white" : "text-stone-800"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-1.5 text-sm sm:text-base ${
              light ? "text-stone-400" : "text-stone-500"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}
