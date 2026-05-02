"use client";

import { useState, useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

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

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950" />
      <div aria-hidden="true" className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-700/8 blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-emerald-600/6 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading
          title="Contact &amp; Visit"
          subtitle="Get in touch or plan your visit to Bournemouth Islamic Centre"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: info */}
          <div className="space-y-8">
            {/* Address & hours */}
            <div>
              <h2 className="text-sm font-bold text-stone-300 uppercase tracking-wide mb-4">Find Us</h2>
              <div className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-5 space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-9 h-9 bg-emerald-900/60 rounded-xl flex items-center justify-center border border-emerald-700/30">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 mb-0.5">Address</p>
                    <address className="not-italic text-sm text-stone-200">4 St Stephen's Rd, Bournemouth, BH2 6JJ</address>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-9 h-9 bg-emerald-900/60 rounded-xl flex items-center justify-center border border-emerald-700/30">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 mb-0.5">Phone</p>
                    <a href="tel:+441202557072" className="text-sm text-stone-200 hover:text-emerald-400 transition-colors">01202 557 072</a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-9 h-9 bg-emerald-900/60 rounded-xl flex items-center justify-center border border-emerald-700/30">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 mb-0.5">Email</p>
                    <a href="mailto:bic.sendmessage@gmail.com" className="text-sm text-stone-200 hover:text-emerald-400 transition-colors">bic.sendmessage@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-sm font-bold text-stone-300 uppercase tracking-wide mb-3">Map</h2>
              <div className="rounded-2xl overflow-hidden border border-white/10 h-80">
                <iframe
                  title="Bournemouth Islamic Centre location"
                  src="https://www.google.com/maps?q=Bournemouth+Islamic+Centre+%26+Central+Mosque&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Visiting info */}
            <div>
              <h2 className="text-sm font-bold text-stone-300 uppercase tracking-wide mb-4">Visiting Information</h2>
              <div className="space-y-3">
                {[
                  { title: "Parking", desc: "Free parking available on-site for up to 40 cars. Street parking also available nearby." },
                  { title: "Public Transport", desc: "Bournemouth town centre buses stop within 5 minutes' walk. Routes 1, 5, and 21." },
                  { title: "Accessibility", desc: "The mosque is fully wheelchair accessible with ramp access and an accessible ablution room." },
                  { title: "Visiting Times", desc: "Visitors are welcome at any prayer time. For a guided tour or questions, please contact us in advance." },
                ].map((item) => (
                  <div key={item.title} className="bg-white/5 rounded-xl border border-white/10 p-4">
                    <p className="text-sm font-semibold text-white mb-0.5">{item.title}</p>
                    <p className="text-xs text-stone-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <h2 className="text-sm font-bold text-stone-300 uppercase tracking-wide mb-4">Send a Message</h2>
            <div className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-6">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 bg-emerald-900/60 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-700/40">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">Message Sent</h3>
                  <p className="text-stone-400 text-sm">JazakAllah khayran. We will be in touch as soon as possible.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <p className="text-sm text-rose-400 bg-rose-950/50 border border-rose-800/50 rounded-lg px-3 py-2">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-stone-300 mb-1">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-3 py-2 border border-white/10 rounded-lg text-sm text-white bg-white/5 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-stone-300 mb-1">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full px-3 py-2 border border-white/10 rounded-lg text-sm text-white bg-white/5 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="topic" className="block text-xs font-medium text-stone-300 mb-1">Subject</label>
                    <select
                      id="topic"
                      name="topic"
                      className="w-full px-3 py-2 border border-white/10 rounded-lg text-sm text-white bg-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="" className="bg-stone-900">Select a topic</option>
                      <option value="General Enquiry" className="bg-stone-900">General Enquiry</option>
                      <option value="Events & Bookings" className="bg-stone-900">Events &amp; Bookings</option>
                      <option value="Education & Classes" className="bg-stone-900">Education &amp; Classes</option>
                      <option value="New Muslim Support" className="bg-stone-900">New Muslim Support</option>
                      <option value="Donation Enquiry" className="bg-stone-900">Donation Enquiry</option>
                      <option value="Media & Press" className="bg-stone-900">Media &amp; Press</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-stone-300 mb-1">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-3 py-2 border border-white/10 rounded-lg text-sm text-white bg-white/5 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
