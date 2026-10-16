"use client";

import { useState } from "react";
import { BankAccount } from "@/types";

interface BankDetailsCardProps {
  account: BankAccount;
}

async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    // Clipboard API is unavailable on non-HTTPS origins (e.g. testing over Wi-Fi).
    return false;
  }
}

export default function BankDetailsCard({ account }: BankDetailsCardProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (value: string, field: string) => {
    if (await copyText(value)) {
      setCopied(field);
      setTimeout(() => setCopied(null), 2500);
    }
  };

  const fields = [
    { id: "name", label: "Account name", value: account.accountName, copyValue: account.accountName, mono: false },
    // Banking apps expect the sort code as six digits, so copy it without dashes.
    { id: "sort", label: "Sort code", value: account.sortCode, copyValue: account.sortCode.replace(/\D/g, ""), mono: true },
    { id: "number", label: "Account number", value: account.accountNumber, copyValue: account.accountNumber, mono: true },
  ];

  const allDetails = [
    `Account name: ${account.accountName}`,
    `Sort code: ${account.sortCode}`,
    `Account number: ${account.accountNumber}`,
    `Bank: ${account.bankName}`,
  ].join("\n");

  return (
    <div className="bg-white rounded-xl border border-ink/10 shadow-sm overflow-hidden">
      {/* Header band */}
      <div className="bg-mosque-deep px-6 py-6 sm:px-8">
        <p className="text-base font-semibold text-gold-light mb-1">Bank transfer</p>
        <h2 id="bank-transfer-heading" className="text-[clamp(1.5rem,4vw,1.875rem)] text-white leading-snug">
          Our bank details
        </h2>
        <p className="text-base text-white/85 mt-2">
          {account.bankName} · {account.branch}
        </p>
      </div>

      {/* Details */}
      <dl className="divide-y divide-ink/10">
        {fields.map((field) => (
          <div
            key={field.id}
            className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8"
          >
            <div className="min-w-0">
              <dt className="text-base text-muted mb-1">{field.label}</dt>
              <dd
                className={
                  field.mono
                    ? "font-mono text-[clamp(1.625rem,5vw,2rem)] font-semibold tracking-wider text-ink"
                    : "text-xl font-semibold text-ink leading-snug"
                }
              >
                {field.value}
              </dd>
            </div>
            <button
              type="button"
              onClick={() => copy(field.copyValue, field.id)}
              className={`flex-shrink-0 inline-flex items-center justify-center gap-2 min-h-12 min-w-[7.5rem] px-5 rounded-lg border-2 text-lg font-semibold transition-colors duration-150 self-start sm:self-auto ${
                copied === field.id
                  ? "bg-mosque border-mosque text-white"
                  : "border-mosque text-mosque hover:bg-mosque hover:text-white"
              }`}
              aria-label={`Copy ${field.label.toLowerCase()}`}
            >
              {copied === field.id ? (
                <>
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Copied
                </>
              ) : (
                "Copy"
              )}
            </button>
          </div>
        ))}
      </dl>

      {/* Footer */}
      <div className="bg-ivory border-t border-ink/10 px-6 py-5 sm:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-base text-muted max-w-md">
          In the payment reference you can write what your gift is for, e.g. &ldquo;Sadaqah&rdquo; or
          &ldquo;Zakat&rdquo;.
        </p>
        <button
          type="button"
          onClick={() => copy(allDetails, "all")}
          className="flex-shrink-0 inline-flex items-center justify-center min-h-12 px-6 rounded-lg bg-gold text-ink text-lg font-semibold hover:bg-gold/85 transition-colors duration-150"
        >
          {copied === "all" ? "All details copied" : "Copy all details"}
        </button>
      </div>

      {/* Screen-reader announcement */}
      <p className="sr-only" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </p>
    </div>
  );
}
