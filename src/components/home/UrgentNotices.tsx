import Link from "next/link";
import Container from "@/components/ui/Container";
import { notices } from "@/data/notices";

export default function UrgentNotices() {
  if (notices.length === 0) return null;

  return (
    <section aria-labelledby="urgent-notices-heading" className="bg-[#FBF1DC] border-b-2 border-gold">
      <Container className="py-6 sm:py-8">
        <h2 id="urgent-notices-heading" className="flex items-center gap-2 text-xl font-semibold text-ink mb-4">
          <svg className="w-7 h-7 text-copper flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
          {notices.length === 1 ? "Important notice" : "Important notices"}
        </h2>
        <ul className="space-y-4">
          {notices.map((notice) => (
            <li key={notice.id} className="bg-white border-l-4 border-copper rounded-r-lg px-5 py-4">
              <p className="text-xl font-semibold text-ink">{notice.title}</p>
              <p className="text-lg text-ink mt-1 leading-relaxed max-w-prose">{notice.message}</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-2">
                <time dateTime={notice.date} className="text-base text-muted">
                  Posted{" "}
                  {new Date(notice.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </time>
                {notice.link && (
                  <Link
                    href={notice.link.href}
                    className="inline-flex items-center min-h-11 text-lg font-semibold text-mosque underline underline-offset-4 decoration-2 hover:text-mosque-deep"
                  >
                    {notice.link.label} →
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
