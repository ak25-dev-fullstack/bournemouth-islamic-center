interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  action,
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 ${
        align === "center" ? "text-center sm:text-left" : ""
      }`}
    >
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1.5 text-stone-500 text-sm sm:text-base">{subtitle}</p>
        )}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}
