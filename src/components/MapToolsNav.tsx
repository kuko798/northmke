import Link from "next/link";

type MapToolsNavProps = {
  active: "map" | "lookup";
};

export function MapToolsNav({ active }: MapToolsNavProps) {
  return (
    <nav
      className="flex flex-wrap gap-2"
      aria-label="Map and voting tools"
    >
      <Link
        href="/map"
        className={
          active === "map"
            ? "rounded-full border border-brand-navy bg-brand-navy px-4 py-2 text-sm font-medium text-white"
            : "rounded-full border border-brand-navy/15 px-4 py-2 text-sm font-medium text-brand-navy/70 transition hover:border-brand-navy/30 hover:text-brand-navy"
        }
        aria-current={active === "map" ? "page" : undefined}
      >
        Voting map
      </Link>
      <Link
        href="/map/lookup"
        className={
          active === "lookup"
            ? "rounded-full border border-brand-navy bg-brand-navy px-4 py-2 text-sm font-medium text-white"
            : "rounded-full border border-brand-navy/15 px-4 py-2 text-sm font-medium text-brand-navy/70 transition hover:border-brand-navy/30 hover:text-brand-navy"
        }
        aria-current={active === "lookup" ? "page" : undefined}
      >
        Where to vote
      </Link>
    </nav>
  );
}
