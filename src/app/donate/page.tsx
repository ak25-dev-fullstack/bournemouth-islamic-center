import type { Metadata } from "next";
import Image from "next/image";
import geoTexture from "@/assets/geo-texture.jpg";

import Container from "@/components/ui/Container";
import BankDetailsCard from "@/components/ui/BankDetailsCard";

import { donationAccount } from "@/data/donations";
import { charity, latestAccounts } from "@/data/charity";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Bournemouth Islamic Centre with a donation. Bank transfer details for donations, Sadaqah and Zakat.",
};

const charityFacts = [
  { title: `Registered since ${charity.registeredYear}`, desc: "With the Charity Commission for England and Wales." },
  { title: "Accounts filed on time", desc: "Our annual accounts and reports are published on the public register." },
  { title: `${charity.trustees} volunteer trustees`, desc: "They oversee the charity\u2019s money. No trustee is paid by the charity." },
  { title: "For worship and learning", desc: "Your gift keeps the mosque open and funds Islamic education for children and adults." },
];

const steps = [
  { title: "Open your banking app", desc: "Or visit your bank branch, or use online banking." },
  { title: "Add a new payee", desc: "Copy the account name, sort code and account number from the box." },
  { title: "Enter your amount", desc: "Add a reference such as \u201cSadaqah\u201d or \u201cZakat\u201d if you like, then send." },
];

const formatPounds = (n: number) => `\u00a3${n.toLocaleString("en-GB")}`;
const reserve = latestAccounts.received - latestAccounts.spent;
const spending = latestAccounts.spending.map((item) => ({
  ...item,
  pct: Math.round((item.amount / latestAccounts.spent) * 100),
}));

export default function DonatePage() {
  return (
    <div className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-white border-b border-ink/10 py-12">
        <Container>
          <p className="text-sm font-semibold text-mosque mb-3">Give generously</p>
          <h1 className="text-[clamp(2.25rem,6vw,3rem)] text-ink">Donate to BIC</h1>
          <p className="text-lg text-muted mt-3 max-w-lg leading-relaxed">
            Your generosity sustains our mosque and community. Alhamdulillah — Bournemouth Islamic
            Centre has served our community for over 25 years.
          </p>
        </Container>
      </div>

      <Container className="py-16">
        {/* Bank transfer — the main thing visitors come for, so it goes first */}
        <section aria-labelledby="bank-transfer-heading" className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-14">
          <div className="lg:col-span-3">
            <BankDetailsCard account={donationAccount} />
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-[1.5rem] text-ink mb-5">How to give</h2>
            <ol className="space-y-5">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-mosque text-white text-lg font-semibold"
                  >
                    {i + 1}
                  </span>
                  <div className="pt-1.5">
                    <p className="text-lg font-semibold text-ink">{step.title}</p>
                    <p className="text-base text-muted mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-base text-muted mt-6 leading-relaxed">
              Questions about donating? Email{" "}
              <a href="mailto:bic.sendmessage@gmail.com" className="font-semibold text-mosque underline underline-offset-4 decoration-2 hover:text-mosque-deep transition-colors duration-150">
                bic.sendmessage@gmail.com
              </a>
              .
            </p>
          </div>
        </section>

        {/* Registered charity */}
        <section aria-labelledby="charity-heading" className="bg-white border border-ink/10 rounded-xl p-6 sm:p-8 mb-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-base font-semibold text-mosque mb-1">Your donation is in safe hands</p>
              <h2 id="charity-heading" className="text-[1.5rem] text-ink">A registered charity</h2>
              <p className="text-lg text-muted mt-2 max-w-xl leading-relaxed">
                {charity.registeredName} is registered with the Charity Commission for England and Wales.
              </p>
            </div>
            <div className="flex-shrink-0 rounded-lg bg-mosque-deep px-6 py-4 text-center self-start">
              <p className="text-base text-white/85">Charity number</p>
              <p className="font-mono text-[1.75rem] font-semibold tracking-wider text-gold-light">{charity.number}</p>
            </div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {charityFacts.map((item) => (
              <li key={item.title} className="bg-ivory border border-ink/10 rounded-lg p-5">
                <div className="w-2 h-2 rounded-full bg-gold mb-4" aria-hidden="true" />
                <p className="text-lg font-semibold text-ink mb-1">{item.title}</p>
                <p className="text-base text-muted leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ul>

          <a
            href={charity.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-11 mt-6 text-lg font-semibold text-mosque underline underline-offset-4 decoration-2 hover:text-mosque-deep transition-colors duration-150"
          >
            See our record on the Charity Commission website
            <span className="sr-only">(opens in a new tab)</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </section>

        {/* Where your money goes — real figures from the latest filed accounts */}
        <section className="bg-white border border-ink/10 rounded-xl p-6 sm:p-8 relative overflow-hidden" aria-labelledby="impact-heading">
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.03]">
            <Image src={geoTexture} alt="" fill sizes="800px" className="object-cover" />
          </div>
          <div className="relative">
            <h2 id="impact-heading" className="text-[1.5rem] text-ink">Where your money goes</h2>
            <p className="text-lg text-muted mt-2 max-w-2xl leading-relaxed">
              From our accounts for {latestAccounts.period}, checked by an independent examiner and filed with
              the Charity Commission.
            </p>

            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[
                { label: "Given by our community", value: latestAccounts.received },
                { label: "Spent running the mosque", value: latestAccounts.spent },
                { label: "Kept for the mosque\u2019s future", value: reserve },
              ].map((stat) => (
                <div key={stat.label} className="bg-ivory border border-ink/10 rounded-lg p-5">
                  <dt className="text-base text-muted">{stat.label}</dt>
                  <dd className="text-[clamp(1.75rem,5vw,2.25rem)] font-semibold text-mosque-deep mt-1">
                    {formatPounds(stat.value)}
                  </dd>
                </div>
              ))}
            </dl>

            <h3 className="text-[1.25rem] text-ink mt-10 mb-5">How it was spent</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {spending.map((item) => (
                <li key={item.label}>
                  <div className="flex justify-between items-baseline gap-3 text-lg mb-2">
                    <span className="font-medium text-ink">{item.label}</span>
                    <span className="text-mosque font-semibold whitespace-nowrap">
                      {formatPounds(item.amount)} <span className="text-muted font-normal">({item.pct}%)</span>
                    </span>
                  </div>
                  <div className="h-2.5 bg-ink/10 rounded-full overflow-hidden" aria-hidden="true">
                    <div className="h-full bg-gold rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                  <p className="text-base text-muted mt-2">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Charity register link */}
        <p className="text-base text-muted text-center max-w-2xl mx-auto mt-10 leading-relaxed">
          {charity.registeredName} is a registered charity in England and Wales, number {charity.number}.{" "}
          <a
            href={charity.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-mosque underline underline-offset-4 decoration-2 hover:text-mosque-deep transition-colors duration-150"
          >
            View our entry on the Charity Commission register
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </Container>
    </div>
  );
}
