import Link from "next/link";
import { ButtonLink, Shadow } from "@/components/ui/brutal";
import { ui, homeHref, localeBase, type Locale } from "@/lib/i18n";

export function Navbar({ lang }: { lang: Locale }) {
  const t = ui[lang];
  const base = localeBase(lang);

  // Section anchors are absolute (`/#…` or `/ar/#…`) so they work from the
  // blog and other pages, not just the home page.
  const links = [
    { href: `${base}/#projects`, label: t.nav.projects },
    { href: `${base}/#experience`, label: t.nav.experience },
    { href: `${base}/#skills`, label: t.nav.skills },
    { href: "/blog/", label: t.nav.blog },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b-[3px] border-ink bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href={homeHref(lang)}
          className="group flex shrink-0 items-center gap-2"
          aria-label={t.nav.home}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border-[2.5px] border-ink bg-accent font-display text-sm font-extrabold text-[#fff7ee] transition-transform group-hover:-rotate-6">
            IE
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-ink">
            ibrahem<span className="text-accent">.ai</span>
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden items-center gap-1 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-ink/70 transition-colors hover:bg-card hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language toggle. No uppercase/tracking — those break Arabic. */}
          <Shadow radius="md">
            <Link
              href={t.langToggle.href}
              aria-label={t.langToggle.aria}
              className="relative inline-flex items-center justify-center rounded-[10px] border-[3px] border-ink bg-background px-3 py-2.5 text-xs font-bold text-ink transition-transform duration-150 ease-out group-hover:-translate-x-[1.5px] group-hover:-translate-y-[1.5px] hover:text-accent"
            >
              {t.langToggle.label}
            </Link>
          </Shadow>

          <ButtonLink href={`${base}/#contact`} tone="red" className="px-4 py-2.5 text-xs">
            {t.nav.contact}
          </ButtonLink>
        </div>
      </div>
    </nav>
  );
}
