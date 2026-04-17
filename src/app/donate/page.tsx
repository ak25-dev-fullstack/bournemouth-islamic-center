import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import DonatePanel from "@/components/ui/DonatePanel";
import { donationOptions } from "@/data/donations";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Bournemouth Islamic Centre with a donation. Bank transfer details for General, Sadaqah, Zakat, and project-specific funds.",
};

const trustCues = [
  {
    icon: "🏛️",
    title: "Registered Charity",
    desc: "BIC is a registered UK charity. All funds are managed and audited by our trustees.",
  },
  {
    icon: "📊",
    title: "Full Transparency",
    desc: "Annual accounts available on request. We publish updates on all major spending.",
  },
  {
    icon: "🤲",
    title: "Community Impact",
    desc: "Every donation directly supports worship, education, and community welfare.",
  },
  {
    icon: "✅",
    title: "Zakat Verified",
    desc: "Our Zakat distribution follows proper Islamic guidelines and is reviewed annually.",
  },
];

export default function DonatePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mb-10">
        <SectionHeading
          title="Donate to BIC"
          subtitle="Your generosity sustains our mosque and community"
        />
        <p className="text-stone-500 text-sm leading-relaxed">
          Alhamdulillah — Bournemouth Islamic Centre has served our community
          for over 25 years. Your donations keep our doors open, our programmes
          running, and our facilities in good order. Whether it is a one-off
          gift or regular giving, every contribution is deeply appreciated.
        </p>
      </div>

      {/* Trust cues */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {trustCues.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl border border-stone-200 p-5"
          >
            <span className="text-2xl mb-3 block" aria-hidden="true">
              {item.icon}
            </span>
            <p className="text-sm font-semibold text-stone-800 mb-1">
              {item.title}
            </p>
            <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Donation options */}
      <section aria-labelledby="bank-transfer-heading">
        <h2
          id="bank-transfer-heading"
          className="text-lg font-bold text-stone-800 mb-2"
        >
          Bank Transfer
        </h2>
        <p className="text-stone-500 text-sm mb-6">
          The easiest way to donate is by bank transfer. Use the account details
          below — click any field to copy it to your clipboard.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {donationOptions.map((option) => (
            <DonatePanel key={option.id} option={option} />
          ))}
        </div>
      </section>

      {/* Where your money goes */}
      <section
        className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mb-12"
        aria-labelledby="impact-heading"
      >
        <h2 id="impact-heading" className="text-lg font-bold text-stone-800 mb-6">
          Where Your Money Goes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              label: "Mosque Operations",
              pct: 40,
              desc: "Utilities, maintenance, insurance, and cleaning.",
            },
            {
              label: "Education &amp; Programmes",
              pct: 35,
              desc: "Weekend school, adult classes, youth activities.",
            },
            {
              label: "Community Welfare",
              pct: 25,
              desc: "Food bank, hardship support, revert services.",
            },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-sm mb-1.5">
                <span
                  className="font-medium text-stone-800"
                  dangerouslySetInnerHTML={{ __html: item.label }}
                />
                <span className="text-emerald-700 font-semibold">
                  {item.pct}%
                </span>
              </div>
              <div className="h-2 bg-white rounded-full overflow-hidden border border-emerald-200">
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
              <p className="text-xs text-stone-500 mt-1.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recurring donation note */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-stone-800 mb-2">
          Set Up a Regular Gift
        </h3>
        <p className="text-stone-500 text-sm max-w-lg mx-auto mb-2">
          Regular giving — even a small monthly amount — allows us to plan ahead
          and serve the community more effectively. You can set up a standing
          order to our General Fund using the bank details above.
        </p>
        <p className="text-xs text-stone-400">
          For Gift Aid enquiries, please contact us at{" "}
          <a
            href="mailto:finance@bournemouth-ic.org.uk"
            className="text-emerald-700 hover:underline"
          >
            finance@bournemouth-ic.org.uk
          </a>
        </p>
      </div>
    </div>
  );
}
