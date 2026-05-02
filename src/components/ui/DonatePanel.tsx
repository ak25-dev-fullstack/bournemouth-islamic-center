"use client";

import Link from "next/link";
import { DonationOption } from "@/types";
import { useState } from "react";

interface DonatePanelProps {
  option: DonationOption;
}

export default function DonatePanel({ option }: DonatePanelProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (value: string, field: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-6">
      <h3 className="font-bold text-white text-base mb-1">{option.label}</h3>
      <p className="text-stone-400 text-sm mb-5">{option.description}</p>

      <div className="space-y-3">
        {[
          { label: "Account Name", value: option.accountName },
          { label: "Sort Code", value: option.sortCode },
          { label: "Account Number", value: option.accountNumber },
          ...(option.reference
            ? [{ label: "Reference", value: option.reference }]
            : []),
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex items-center justify-between bg-stone-900/60 rounded-xl px-4 py-3 border border-white/5"
          >
            <div>
              <p className="text-xs text-stone-500 mb-0.5">{label}</p>
              <p className="text-sm font-mono font-semibold text-stone-100">
                {value}
              </p>
            </div>
            <button
              onClick={() => copy(value, `${option.id}-${label}`)}
              className="text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors px-2 py-1 rounded hover:bg-emerald-900/40"
              aria-label={`Copy ${label}`}
            >
              {copied === `${option.id}-${label}` ? "Copied!" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DonationCTAStrip() {
  return (
    <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white rounded-3xl px-6 py-10 text-center border border-emerald-700/30">
      <h2 className="text-2xl font-bold mb-2">Support Bournemouth Islamic Centre</h2>
      <p className="text-emerald-300 text-sm max-w-xl mx-auto mb-6">
        Your generosity keeps our doors open, our programmes running, and our community thriving. Every contribution — large or small — makes a difference.
      </p>
      <Link
        href="/donate"
        className="inline-flex items-center px-6 py-3 rounded-full bg-amber-500 text-white font-semibold text-sm hover:bg-amber-400 transition-colors"
      >
        Donate Now
      </Link>
    </section>
  );
}
