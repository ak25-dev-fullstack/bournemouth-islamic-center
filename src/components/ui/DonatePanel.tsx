"use client";

import { useState } from "react";
import { DonationOption } from "@/types";

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
    <div className="bg-white border border-ink/10 rounded-lg p-6 hover:border-gold/40 transition-colors duration-150">
      <h3 className="text-[1.25rem] text-ink mb-1">{option.label}</h3>
      <p className="text-base text-muted mb-5">{option.description}</p>

      <div className="space-y-2.5">
        {[
          { label: "Account name", value: option.accountName },
          { label: "Sort code", value: option.sortCode },
          { label: "Account number", value: option.accountNumber },
          ...(option.reference ? [{ label: "Reference", value: option.reference }] : []),
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex items-center justify-between gap-3 bg-ivory rounded border border-ink/10 px-4 py-3"
          >
            <div>
              <p className="text-base text-muted mb-0.5">{label}</p>
              <p className="text-lg font-mono font-medium text-ink [overflow-wrap:anywhere]">{value}</p>
            </div>
            <button
              onClick={() => copy(value, `${option.id}-${label}`)}
              className="flex-shrink-0 inline-flex items-center justify-center min-h-11 min-w-[5rem] px-4 rounded border-2 border-mosque text-base font-semibold text-mosque hover:bg-mosque hover:text-white transition-colors duration-150"
              aria-label={`Copy ${label}`}
            >
              {copied === `${option.id}-${label}` ? "Copied" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
