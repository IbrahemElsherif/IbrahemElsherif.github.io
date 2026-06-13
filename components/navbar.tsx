import { ButtonLink } from "@/components/ui/brutal";

const LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b-[3px] border-ink bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-2"
          aria-label="Home"
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
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-ink/70 transition-colors hover:bg-card hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
          <ButtonLink href="#contact" tone="red" className="px-4 py-2.5 text-xs">
            Contact
          </ButtonLink>
        </div>
      </div>
    </nav>
  );
}
