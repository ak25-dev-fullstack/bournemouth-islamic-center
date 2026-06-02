"use client";

import { useRef, useState } from "react";
import Container from "@/components/ui/Container";

const WEB3FORMS_KEY = "dac677a1-7c36-430c-9325-bb524572ba6c";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const payload = {
      access_key: WEB3FORMS_KEY,
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("topic") as HTMLSelectElement).value || "General Enquiry",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-3 py-2.5 border border-muted/40 rounded text-sm text-ink bg-white placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors duration-150";

  return (
    <div className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-white border-b border-ink/8 py-12">
        <Container>
          <p className="text-xs font-medium text-gold uppercase tracking-wider mb-3">Get in touch</p>
          <h1 className="text-[48px] text-ink">Contact &amp; visit</h1>
          <p className="text-sm text-muted mt-3">Get in touch or plan your visit to Bournemouth Islamic Centre</p>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: info */}
          <div className="space-y-8">
            {/* Address & contact */}
            <div>
              <h2 className="text-xs font-medium text-gold uppercase tracking-wider mb-4">Find us</h2>
              <div className="bg-white border border-ink/8 rounded-lg p-6 space-y-5">
                {[
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: "Address",
                    content: <address className="not-italic text-sm text-ink">4 St Stephen&apos;s Rd, Bournemouth, BH2 6JJ</address>,
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: "Phone",
                    content: <a href="tel:+441202557072" className="text-sm text-ink hover:text-gold transition-colors duration-150">01202 557 072</a>,
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: "Email",
                    content: <a href="mailto:bic.sendmessage@gmail.com" className="text-sm text-ink hover:text-gold transition-colors duration-150">bic.sendmessage@gmail.com</a>,
                  },
                ].map(({ icon, label, content }) => (
                  <div key={label} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gold/10 rounded flex items-center justify-center text-gold">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted mb-0.5">{label}</p>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-xs font-medium text-gold uppercase tracking-wider mb-3">Map</h2>
              <div className="rounded-lg overflow-hidden border border-ink/8 h-72">
                <iframe
                  title="Bournemouth Islamic Centre location"
                  src="https://www.google.com/maps?q=Bournemouth+Islamic+Centre+%26+Central+Mosque&output=embed"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Visiting info */}
            <div>
              <h2 className="text-xs font-medium text-gold uppercase tracking-wider mb-4">Visiting information</h2>
              <div className="space-y-3">
                {[
                  { title: "Parking", desc: "Free parking available on-site for up to 40 cars. Street parking also available nearby." },
                  { title: "Public transport", desc: "Bournemouth town centre buses stop within 5 minutes' walk. Routes 1, 5, and 21." },
                  { title: "Accessibility", desc: "The mosque is fully wheelchair accessible with ramp access and an accessible ablution room." },
                  { title: "Visiting times", desc: "Visitors are welcome at any prayer time. For a guided tour, please contact us in advance." },
                ].map((item) => (
                  <div key={item.title} className="bg-white border border-ink/8 rounded-lg p-4 hover:border-gold/30 transition-colors duration-150">
                    <p className="text-sm font-medium text-ink mb-0.5">{item.title}</p>
                    <p className="text-xs text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <h2 className="text-xs font-medium text-gold uppercase tracking-wider mb-4">Send a message</h2>
            <div className="bg-white border border-ink/8 rounded-lg p-6">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[20px] text-ink mb-2">Message sent</h3>
                  <p className="text-sm text-muted">JazakAllah khayran. We will be in touch as soon as possible.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm text-gold hover:text-copper font-medium transition-colors duration-150"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <p className="text-sm text-danger bg-danger/6 border border-danger/20 rounded px-3 py-2">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-ink mb-1.5">
                        Full name <span className="text-danger" aria-hidden="true">*</span>
                      </label>
                      <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-ink mb-1.5">
                        Email address <span className="text-danger" aria-hidden="true">*</span>
                      </label>
                      <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="topic" className="block text-xs font-medium text-ink mb-1.5">Subject</label>
                    <select id="topic" name="topic" className={inputClass}>
                      <option value="">Select a topic</option>
                      <option value="General Enquiry">General enquiry</option>
                      <option value="Events & Bookings">Events &amp; bookings</option>
                      <option value="Education & Classes">Education &amp; classes</option>
                      <option value="New Muslim Support">New Muslim support</option>
                      <option value="Donation Enquiry">Donation enquiry</option>
                      <option value="Media & Press">Media &amp; press</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-ink mb-1.5">
                      Message <span className="text-danger" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded text-sm font-medium bg-gold text-ink hover:opacity-88 transition-opacity duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending…" : "Send message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
