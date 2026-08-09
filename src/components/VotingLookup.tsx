"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/Button";
import type { MkeStreet, VotingLookupResult } from "@/lib/mke-voting";
import { mkeVotingLookupSourceUrl } from "@/lib/mke-voting";

const DIRECTIONS = ["N", "S", "E", "W"] as const;

const inputClass =
  "mt-1 block w-full rounded-xl border border-brand-navy/20 bg-white px-3 py-2.5 text-sm text-brand-black shadow-sm placeholder:text-brand-black/40 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-gold/40";

const labelClass = "block text-sm font-medium text-brand-navy";

function ResultRow({ label, value }: { label: string; value: string | null }) {
  if (!value) return null;
  return (
    <div className="grid gap-1 border-b border-brand-navy/10 py-3 sm:grid-cols-[9rem_1fr] sm:gap-4">
      <dt className="text-sm font-semibold text-brand-navy">{label}</dt>
      <dd className="text-sm leading-relaxed text-brand-black/80">{value}</dd>
    </div>
  );
}

export function VotingLookup() {
  const [houseNumber, setHouseNumber] = useState("");
  const [direction, setDirection] = useState<(typeof DIRECTIONS)[number]>("N");
  const [streetLabel, setStreetLabel] = useState("");
  const [unit, setUnit] = useState("");
  const [streets, setStreets] = useState<MkeStreet[]>([]);
  const [streetsLoading, setStreetsLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<VotingLookupResult | null>(null);
  const [similarChoice, setSimilarChoice] = useState("");

  const loadStreets = useCallback(async (dir: string) => {
    setStreetsLoading(true);
    setStreetLabel("");
    try {
      const res = await fetch(`/api/voting-lookup/streets?direction=${dir}`);
      const data = (await res.json()) as { streets?: MkeStreet[]; error?: string };
      if (!res.ok) throw new Error(data.error ?? "Failed to load streets");
      setStreets(data.streets ?? []);
    } catch {
      setStreets([]);
      setError("Could not load street list. Try again in a moment.");
    } finally {
      setStreetsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadStreets(direction);
  }, [direction, loadStreets]);

  async function runLookup(address: string) {
    setSubmitting(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/voting-lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address }),
      });
      const data = (await res.json()) as { result?: VotingLookupResult; error?: string };
      if (!res.ok) throw new Error(data.error ?? "Lookup failed");
      setResult(data.result ?? null);
      if (data.result?.similarAddresses.length) {
        setSimilarChoice(data.result.similarAddresses[0] ?? "");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Lookup failed");
    } finally {
      setSubmitting(false);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!houseNumber.trim() || !streetLabel) {
      setError("Enter a house number and select a street.");
      return;
    }
    void runLookup(`${houseNumber.trim()} ${streetLabel}${unit.trim() ? ` ${unit.trim()}` : ""}`);
  }

  return (
    <div className="space-y-8">
      <form
        onSubmit={onSubmit}
        className="rounded-2xl border border-brand-navy/10 bg-surface p-6 shadow-sm sm:p-8"
        aria-label="Find your polling place"
      >
        <p className="text-sm leading-relaxed text-brand-black/75">
          Enter the address where you are registered to vote. Results are pulled live from the City of Milwaukee&apos;s
          MyMilwaukeeHome voting database.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,6rem)_minmax(0,5rem)_1fr_minmax(0,6rem)_auto] lg:items-end">
          <div>
            <label htmlFor="houseNumber" className={labelClass}>
              House #
            </label>
            <input
              id="houseNumber"
              type="text"
              inputMode="text"
              autoComplete="street-address"
              placeholder="123A"
              className={inputClass}
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="direction" className={labelClass}>
              Dir
            </label>
            <select
              id="direction"
              className={inputClass}
              value={direction}
              onChange={(e) => setDirection(e.target.value as (typeof DIRECTIONS)[number])}
            >
              {DIRECTIONS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="street" className={labelClass}>
              Street
            </label>
            <select
              id="street"
              className={inputClass}
              value={streetLabel}
              onChange={(e) => setStreetLabel(e.target.value)}
              disabled={streetsLoading || streets.length === 0}
            >
              <option value="">
                {streetsLoading ? "Loading streets…" : "Select a street"}
              </option>
              {streets.map((s) => (
                <option key={s.ID} value={s.Label}>
                  {s.Name} {s.Type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="unit" className={labelClass}>
              Unit
            </label>
            <input
              id="unit"
              type="text"
              placeholder="Optional"
              className={inputClass}
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full lg:w-auto" disabled={submitting || streetsLoading}>
            {submitting ? "Searching…" : "Find polling place"}
          </Button>
        </div>

        {error ? (
          <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
            {error}
          </p>
        ) : null}
      </form>

      {result?.similarAddresses.length ? (
        <div className="rounded-2xl border border-brand-gold/30 bg-brand-gold/5 p-6">
          <p className="text-sm font-medium text-brand-navy">Similar addresses found — confirm yours:</p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
            <select
              className={inputClass + " mt-0 sm:flex-1"}
              value={similarChoice}
              onChange={(e) => setSimilarChoice(e.target.value)}
              aria-label="Similar addresses"
            >
              {result.similarAddresses.map((addr) => (
                <option key={addr} value={addr}>
                  {addr}
                </option>
              ))}
            </select>
            <Button
              type="button"
              variant="ghost"
              className="shrink-0"
              disabled={!similarChoice || submitting}
              onClick={() => void runLookup(similarChoice)}
            >
              Use this address
            </Button>
          </div>
        </div>
      ) : null}

      {result ? (
        <div className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-brand-navy">Your voting information</h2>
          <dl className="mt-4">
            <ResultRow label="Your address" value={result.propertyAddress} />
            <ResultRow label="Ward" value={result.ward != null ? String(result.ward) : null} />
            <ResultRow label="Polling place" value={result.pollingPlace} />
            <ResultRow label="Polling address" value={result.pollingAddress} />
            <ResultRow label="Main entrance" value={result.mainEntrance} />
            <ResultRow label="Parking" value={result.mainParking} />
            <ResultRow label="Accessible entrance" value={result.accessibleEntrance} />
            <ResultRow label="Accessible parking" value={result.accessibleParking} />
          </dl>

          {result.sampleBallotUrl ? (
            <div className="mt-6">
              <Button href={result.sampleBallotUrl} target="_blank" rel="noopener noreferrer">
                View sample ballot
              </Button>
            </div>
          ) : null}

          <p className="mt-6 text-sm text-brand-black/65">
            Questions about elections or your polling location? Call{" "}
            <a href="tel:+14142868683" className="font-medium text-brand-navy underline-offset-2 hover:underline">
              414-286-VOTE (8683)
            </a>{" "}
            or email{" "}
            <a
              href="mailto:voterinfo@milwaukee.gov?subject=Where%20do%20I%20vote%20question"
              className="font-medium text-brand-navy underline-offset-2 hover:underline"
            >
              VoterInfo@milwaukee.gov
            </a>
            .
          </p>
        </div>
      ) : null}

      <p className="text-center text-xs leading-relaxed text-brand-black/55">
        Data provided by the{" "}
        <a
          href={mkeVotingLookupSourceUrl}
          className="underline-offset-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          City of Milwaukee MyMilwaukeeHome
        </a>{" "}
        voting lookup. Always confirm with{" "}
        <a
          href="https://myvote.wi.gov"
          className="underline-offset-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          MyVote Wisconsin
        </a>{" "}
        before election day.
      </p>
    </div>
  );
}
