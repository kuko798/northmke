"use client";

import { useMemo, useState } from "react";
import {
  disclaimer,
  donationCheckoutUrl,
  donationPresets,
  getDonationUrl,
} from "@/lib/config";

type Selection = (typeof donationPresets)[number] | "custom";

export function DonateCard() {
  const [selection, setSelection] = useState<Selection>(50);
  const [customAmount, setCustomAmount] = useState("");

  const amountDollars = useMemo(() => {
    if (selection === "custom") {
      const n = Number.parseInt(customAmount, 10);
      return Number.isFinite(n) && n > 0 ? n : 0;
    }
    return selection;
  }, [selection, customAmount]);

  const href = getDonationUrl(amountDollars);
  const canDonate = Boolean(donationCheckoutUrl) && Boolean(href);

  const ctaClass =
    "inline-flex w-full items-center justify-center rounded-full bg-brand-gold px-6 py-3.5 text-sm font-semibold tracking-wide text-brand-navy shadow-lg shadow-[0_14px_36px_-10px_rgba(201,162,39,0.45)] transition-[transform,colors,box-shadow] duration-200 hover:bg-brand-gold-light hover:shadow-[0_18px_44px_-10px_rgba(201,162,39,0.5)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold sm:w-auto";

  const chipClass =
    "rounded-2xl border-2 px-3 py-3 text-sm font-semibold transition-[transform,colors,border-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold active:scale-[0.97]";

  return (
    <div className="rounded-3xl border border-white/60 bg-white/85 p-6 shadow-[0_20px_50px_-28px_rgba(10,31,60,0.35)] ring-1 ring-brand-navy/[0.06] backdrop-blur-2xl transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_60px_-26px_rgba(10,31,60,0.4)] sm:p-8">
      <h2 className="font-serif text-2xl font-bold text-brand-navy">Support NorthMKE</h2>
      <p className="mt-2 text-sm text-brand-black/75">
        Select an amount, then continue to our secure processor. Connect{" "}
        <code className="rounded bg-brand-navy/5 px-1 text-xs">NEXT_PUBLIC_DONATION_URL</code> in
        production to your ActBlue, Anedot, Stripe Checkout, or PayPal link.
      </p>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-brand-navy">Choose an amount</legend>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {donationPresets.map((amt) => {
            const active = selection === amt;
            return (
              <button
                key={amt}
                type="button"
                onClick={() => setSelection(amt)}
                className={`${chipClass} ${
                  active
                    ? "border-brand-navy bg-brand-navy text-white"
                    : "border-brand-navy/15 bg-white text-brand-navy hover:border-brand-navy/40"
                }`}
                aria-pressed={active}
              >
                ${amt}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => setSelection("custom")}
            className={`${chipClass} ${
              selection === "custom"
                ? "border-brand-navy bg-brand-navy text-white"
                : "border-brand-navy/15 bg-white text-brand-navy hover:border-brand-navy/40"
            }`}
            aria-pressed={selection === "custom"}
          >
            Custom
          </button>
        </div>
      </fieldset>

      {selection === "custom" ? (
        <div className="mt-4">
          <label htmlFor="custom-amount" className="text-sm font-medium text-brand-navy">
            Custom amount (USD)
          </label>
          <div className="relative mt-1 max-w-xs">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-brand-black/50">
              $
            </span>
            <input
              id="custom-amount"
              type="number"
              min={1}
              step={1}
              inputMode="numeric"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="block w-full rounded-xl border border-brand-navy/20 py-2.5 pl-7 pr-3 text-sm focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
              placeholder="Enter amount"
              aria-describedby="custom-hint"
            />
          </div>
          <p id="custom-hint" className="mt-1 text-xs text-brand-black/55">
            Whole dollars. Your processor may round or validate minimums.
          </p>
        </div>
      ) : null}

      <div className="mt-8">
        {canDonate && href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className={ctaClass}>
            Donate securely
          </a>
        ) : (
          <button
            type="button"
            className={`${ctaClass} ${canDonate ? "" : "cursor-not-allowed opacity-60"}`}
            disabled={!canDonate}
            aria-describedby={!donationCheckoutUrl ? "donate-env-help" : undefined}
          >
            Donate securely
          </button>
        )}
        {!donationCheckoutUrl ? (
          <p id="donate-env-help" className="mt-3 text-xs text-brand-black/60">
            Add <strong>NEXT_PUBLIC_DONATION_URL</strong> in <code className="text-xs">.env.local</code> or Vercel
            project settings to enable the checkout link. Amount is passed as <code className="text-xs">?amount=</code>{" "}
            when supported.
          </p>
        ) : null}
      </div>

      {disclaimer ? (
        <p className="mt-8 border-t border-brand-navy/10 pt-6 text-xs font-medium uppercase tracking-wide text-brand-black/70">
          {disclaimer}
        </p>
      ) : null}
    </div>
  );
}
