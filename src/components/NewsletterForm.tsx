"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

const inputClass =
  "mt-1 block w-full rounded-xl border border-brand-navy/20 bg-white px-3 py-2.5 text-sm text-brand-black shadow-sm placeholder:text-brand-black/40 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-gold/40";

const labelClass = "block text-sm font-medium text-brand-navy";

type NewsletterFormProps = {
  /** Compact inline layout for home page sections. */
  compact?: boolean;
};

export function NewsletterForm({ compact = false }: NewsletterFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-lg border border-brand-gold/40 bg-brand-gold/10 p-6 text-center sm:p-8"
        role="status"
        aria-live="polite"
      >
        <p className="font-serif text-xl font-bold text-brand-navy">You&apos;re on the list.</p>
        <p className="mt-2 text-sm text-brand-black/80">
          Thank you for subscribing. Watch your inbox for North Milwaukee updates, events, and platform news.
        </p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="min-w-0 flex-1">
          <label htmlFor="nl-email-compact" className="sr-only">
            Email address
          </label>
          <input
            id="nl-email-compact"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <Button type="submit" variant="primary" className="shrink-0 justify-center sm:px-8">
          Subscribe
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="nl-first" className={labelClass}>
            First name <span className="text-red-600">*</span>
          </label>
          <input id="nl-first" name="firstName" type="text" required autoComplete="given-name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="nl-last" className={labelClass}>
            Last name <span className="text-brand-black/50">(optional)</span>
          </label>
          <input id="nl-last" name="lastName" type="text" autoComplete="family-name" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="nl-email" className={labelClass}>
          Email <span className="text-red-600">*</span>
        </label>
        <input id="nl-email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>
      <div>
        <label htmlFor="nl-zip" className={labelClass}>
          ZIP code <span className="text-brand-black/50">(optional)</span>
        </label>
        <input
          id="nl-zip"
          name="zip"
          type="text"
          inputMode="numeric"
          autoComplete="postal-code"
          className={inputClass}
        />
      </div>
      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Subscribe to newsletter
      </Button>
    </form>
  );
}
