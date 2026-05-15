"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

const roles = [
  "Door Knocking",
  "Phone Banking",
  "Text Banking",
  "Events",
  "Social Media",
  "Fundraising",
  "General Volunteer",
] as const;

const inputClass =
  "mt-1 block w-full rounded-xl border border-brand-navy/20 bg-white px-3 py-2.5 text-sm text-brand-black shadow-sm placeholder:text-brand-black/40 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-gold/40";

const labelClass = "block text-sm font-medium text-brand-navy";

export function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<Set<string>>(new Set());

  function toggleRole(role: string) {
    setSelectedRoles((prev) => {
      const next = new Set(prev);
      if (next.has(role)) next.delete(role);
      else next.add(role);
      return next;
    });
  }

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
        <p className="font-serif text-xl font-bold text-brand-navy">Thank you for signing up.</p>
        <p className="mt-2 text-sm text-brand-black/80">
          Our team will reach out soon with next steps. Together we can build a stronger North
          Milwaukee.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="vf-name" className={labelClass}>
          Full name <span className="text-red-600">*</span>
        </label>
        <input id="vf-name" name="name" type="text" required autoComplete="name" className={inputClass} />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="vf-email" className={labelClass}>
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="vf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="vf-phone" className={labelClass}>
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            id="vf-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="vf-zip" className={labelClass}>
          ZIP code <span className="text-red-600">*</span>
        </label>
        <input
          id="vf-zip"
          name="zip"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          required
          autoComplete="postal-code"
          className={inputClass}
        />
      </div>

      <fieldset className="space-y-3">
        <legend className={labelClass}>Preferred volunteer roles</legend>
        <p id="vf-roles-hint" className="text-xs text-brand-black/60">
          Select all that apply.
        </p>
        <div className="grid gap-3 sm:grid-cols-2" role="group" aria-describedby="vf-roles-hint">
          {roles.map((role) => {
            const id = `vf-role-${role.replace(/\s+/g, "-").toLowerCase()}`;
            const checked = selectedRoles.has(role);
            return (
              <label
                key={role}
                htmlFor={id}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2 text-sm transition-colors ${
                  checked
                    ? "border-brand-navy bg-brand-navy/5"
                    : "border-brand-navy/15 hover:border-brand-navy/30"
                }`}
              >
                <input
                  id={id}
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleRole(role)}
                  className="h-4 w-4 rounded border-brand-navy/30 text-brand-navy focus:ring-brand-gold"
                />
                <span className="text-brand-black">{role}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="vf-message" className={labelClass}>
          Message <span className="text-brand-black/50">(optional)</span>
        </label>
        <textarea id="vf-message" name="message" rows={4} className={inputClass} />
      </div>

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Submit volunteer form
      </Button>
    </form>
  );
}
