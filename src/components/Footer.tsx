import Link from "next/link";
import { CampaignLogo } from "@/components/CampaignLogo";
import { brand, disclaimer, emails, getNavigation, socials } from "@/lib/config";

/** Keeps handle text aligned when some entries omit a leading @ (YouTube, LinkedIn). */
function SocialHandle({ handle }: { handle: string }) {
  const hasAt = handle.startsWith("@");
  return (
    <span className="inline-flex items-baseline font-mono text-xs tracking-tight text-white/55 sm:text-sm">
      {!hasAt ? (
        <span className="select-none font-mono text-transparent" aria-hidden="true">
          @
        </span>
      ) : null}
      <span>{handle}</span>
    </span>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const mid = Math.ceil(socials.length / 2);
  const socialCols = [socials.slice(0, mid), socials.slice(mid)] as const;
  const navigation = getNavigation();

  return (
    <footer className="bg-brand-navy-dark text-white">
      <div
        className="h-1 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy opacity-90"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <CampaignLogo variant="footer" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">{brand.tagline}</p>
            {disclaimer ? (
              <p className="mt-5 text-xs font-medium uppercase tracking-wide text-brand-gold">{disclaimer}</p>
            ) : null}
            <p className="mt-2 text-xs text-white/55">© {year} {brand.nameWithTm}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  className="text-white/90 transition-colors hover:text-white"
                  href={`mailto:${emails.info}`}
                >
                  {emails.info}
                </a>
                <span className="block text-xs text-white/50">General inquiries</span>
              </li>
              <li>
                <a
                  className="text-white/90 transition-colors hover:text-white"
                  href={`mailto:${emails.press}`}
                >
                  {emails.press}
                </a>
                <span className="block text-xs text-white/50">Media</span>
              </li>
              <li>
                <a
                  className="text-white/90 transition-colors hover:text-white"
                  href={`mailto:${emails.volunteer}`}
                >
                  {emails.volunteer}
                </a>
                <span className="block text-xs text-white/50">Volunteer</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">Follow</h2>
            <div className="mt-4 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2">
              {socialCols.map((col, i) => (
                <ul key={i} className="min-w-0 space-y-2.5 text-sm">
                  {col.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid grid-cols-[auto_auto] items-baseline gap-x-3 rounded-md py-0.5 text-white/90 transition-[transform,colors] duration-200 hover:text-white motion-safe:hover:translate-x-0.5"
                      >
                        <span className="font-medium text-white">{s.label}</span>
                        <SocialHandle handle={s.handle} />
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-8 text-xs text-white/55">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
