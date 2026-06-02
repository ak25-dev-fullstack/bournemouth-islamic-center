import type { Metadata } from "next";
import Image from "next/image";
import geoTexture from "@/assets/geo-texture.jpg";

import Container from "@/components/ui/Container";
import DonatePanel from "@/components/ui/DonatePanel";

import { donationOptions } from "@/data/donations";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Bournemouth Islamic Centre with a donation. Bank transfer details for General, Sadaqah, Zakat, and project-specific funds.",
};

const trustCues = [
  { title: "Registered charity", desc: "BIC is a registered UK charity. All funds are managed and audited by our trustees." },
  { title: "Full transparency", desc: "Annual accounts available on request. We publish updates on all major spending." },
  { title: "Community impact", desc: "Every donation directly supports worship, education, and community welfare." },
  { title: "Zakat verified", desc: "Our Zakat distribution follows proper Islamic guidelines and is reviewed annually." },
];

export default function DonatePage() {
  return (
    <div className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-white border-b border-ink/8 py-12">
        <Container>
          <p className="text-xs font-medium text-gold uppercase tracking-wider mb-3">Give generously</p>
          <h1 className="text-[48px] text-ink">Donate to BIC</h1>
          <p className="text-sm text-muted mt-3 max-w-lg leading-relaxed">
            Your generosity sustains our mosque and community. Alhamdulillah — Bournemouth Islamic
            Centre has served our community for over 25 years.
          </p>
        </Container>
      </div>

      <Container className="py-16">
        {/* Trust cues */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {trustCues.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-ink/8 rounded-lg p-5 hover:border-gold/30 transition-colors duration-150"
            >
              <div className="w-2 h-2 rounded-full bg-gold mb-4" aria-hidden="true" />
              <p className="text-sm font-medium text-ink mb-1">{item.title}</p>
              <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bank transfer */}
        <section aria-labelledby="bank-transfer-heading" className="mb-14">
          <h2 id="bank-transfer-heading" className="text-[24px] text-ink mb-2">Bank transfer</h2>
          <p className="text-sm text-muted mb-6 leading-relaxed">
            The easiest way to donate is by bank transfer. Use the account details below —
            click any field to copy it to your clipboard.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {donationOptions.map((option) => (
              <DonatePanel key={option.id} option={option} />
            ))}
          </div>
        </section>

        {/* Where your money goes */}
        <section className="bg-white border border-ink/8 rounded-lg p-8 mb-8 relative overflow-hidden" aria-labelledby="impact-heading">
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.03]">
            <Image src={geoTexture} alt="" fill sizes="800px" className="object-cover" />
          </div>
          <div className="relative">
            <h2 id="impact-heading" className="text-[24px] text-ink mb-6">Where your money goes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { label: "Mosque operations", pct: 40, desc: "Utilities, maintenance, insurance, and cleaning." },
                { label: "Education & programmes", pct: 35, desc: "Weekend school, adult classes, youth activities." },
                { label: "Community welfare", pct: 25, desc: "Food bank, hardship support, revert services." },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-ink">{item.label}</span>
                    <span className="text-gold font-medium">{item.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-ink/8 rounded-full overflow-hidden">
                    <div className="h-full bg-gold rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                  <p className="text-xs text-muted mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regular giving */}
        <div className="bg-white border border-ink/8 rounded-lg p-8 text-center">
          <h3 className="text-[24px] text-ink mb-2">Set up a regular gift</h3>
          <p className="text-sm text-muted max-w-lg mx-auto mb-2 leading-relaxed">
            Regular giving — even a small monthly amount — allows us to plan ahead and serve the
            community more effectively. You can set up a standing order to our General Fund using
            the bank details above.
          </p>
          <p className="text-xs text-muted mt-3">
            For Gift Aid enquiries, please contact{" "}
            <a href="mailto:bic.sendmessage@gmail.com" className="text-gold hover:text-copper transition-colors duration-150">
              bic.sendmessage@gmail.com
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}
