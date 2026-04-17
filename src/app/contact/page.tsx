"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeading
        title="Contact &amp; Visit"
        subtitle="Get in touch or plan your visit to Bournemouth Islamic Centre"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: info */}
        <div className="space-y-8">
          {/* Address & hours */}
          <div>
            <h2 className="text-base font-bold text-stone-800 mb-4">
              Find Us
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-5 space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400 mb-0.5">Address</p>
                  <address className="not-italic text-sm text-stone-700">
                    123 Mosque Road, Bournemouth, BH1 1AA
                  </address>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400 mb-0.5">Phone</p>
                  <a
                    href="tel:+441202000000"
                    className="text-sm text-stone-700 hover:text-emerald-700 transition-colors"
                  >
                    01202 000 000
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400 mb-0.5">Email</p>
                  <a
                    href="mailto:info@bournemouth-ic.org.uk"
                    className="text-sm text-stone-700 hover:text-emerald-700 transition-colors"
                  >
                    info@bournemouth-ic.org.uk
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div>
            <h2 className="text-base font-bold text-stone-800 mb-3">Map</h2>
            <div className="bg-stone-200 rounded-xl h-52 flex items-center justify-center">
              <p className="text-stone-400 text-sm">Map embed placeholder</p>
            </div>
          </div>

          {/* Visiting info */}
          <div>
            <h2 className="text-base font-bold text-stone-800 mb-4">
              Visiting Information
            </h2>
            <div className="space-y-3">
              {[
                {
                  title: "Parking",
                  desc: "Free parking available on-site for up to 40 cars. Street parking also available nearby.",
                },
                {
                  title: "Public Transport",
                  desc: "Bournemouth town centre buses stop within 5 minutes' walk. Routes 1, 5, and 21.",
                },
                {
                  title: "Accessibility",
                  desc: "The mosque is fully wheelchair accessible with ramp access and an accessible ablution room.",
                },
                {
                  title: "Visiting Times",
                  desc: "Visitors are welcome at any prayer time. For a guided tour or questions, please contact us in advance.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-stone-200 p-4"
                >
                  <p className="text-sm font-semibold text-stone-800 mb-0.5">
                    {item.title}
                  </p>
                  <p className="text-xs text-stone-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Contact form */}
        <div>
          <h2 className="text-base font-bold text-stone-800 mb-4">
            Send a Message
          </h2>
          <div className="bg-white rounded-xl border border-stone-200 p-6">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-emerald-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-stone-800 mb-2">
                  Message Sent
                </h3>
                <p className="text-stone-500 text-sm">
                  JazakAllah khayran. We will be in touch as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-stone-700 mb-1"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-stone-700 mb-1"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-stone-700 mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Enquiry</option>
                    <option value="events">Events & Bookings</option>
                    <option value="education">Education & Classes</option>
                    <option value="revert">New Muslim Support</option>
                    <option value="donation">Donation Enquiry</option>
                    <option value="media">Media & Press</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-stone-700 mb-1"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-3 rounded-lg bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
