"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

const inputClass =
  "mt-1 block w-full rounded-xl border border-brand-navy/20 bg-white px-3 py-2.5 text-sm text-brand-black shadow-sm placeholder:text-brand-black/40 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-gold/40";

const labelClass = "block text-sm font-medium text-brand-navy";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-lg border border-brand-gold/40 bg-brand-gold/10 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <p className="font-serif text-xl font-bold text-brand-navy">Message received.</p>
        <p className="mt-2 text-sm text-brand-black/80">
          Thank you for reaching out. A member of our team will respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Name <span className="text-red-600">*</span>
          </label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-subject" className={labelClass}>
          Subject <span className="text-brand-black/50">(optional)</span>
        </label>
        <input id="cf-subject" name="subject" type="text" className={inputClass} />
      </div>
      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Message <span className="text-red-600">*</span>
        </label>
        <textarea id="cf-message" name="message" rows={5} required className={inputClass} />
      </div>
      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Send message
      </Button>
    </form>
  );
}
