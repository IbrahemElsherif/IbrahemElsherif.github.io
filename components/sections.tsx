import {
  ButtonLink,
  Card,
  SectionHeading,
  Shadow,
  Tag,
} from "@/components/ui/brutal";
import { Marquee } from "@/components/marquee";
import {
  IconArrowUpRight,
  IconGitHub,
  IconLinkedIn,
  IconMail,
  IconSpark,
} from "@/components/icons";
import { getContent } from "@/lib/content";
import { ui, localeBase, type Locale } from "@/lib/i18n";

function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className ?? ""}`}
    >
      {children}
    </section>
  );
}

/** All home-page sections in order — used as the <main> content per locale. */
export function PortfolioSections({ lang }: { lang: Locale }) {
  return (
    <>
      <Hero lang={lang} />
      <Projects lang={lang} />
      <Experience lang={lang} />
      <Skills lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />
    </>
  );
}

/** Rotating circular stamp — the hero's signature flourish. */
function Stamp() {
  return (
    <div className="relative h-44 w-44 sm:h-52 sm:w-52">
      <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path
            id="stamp-curve"
            d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
          />
        </defs>
        <text className="fill-ink font-mono text-[14px] font-semibold uppercase tracking-[0.28em]">
          <textPath href="#stamp-curve">
            AI Engineer · Machine Learning · AI Engineering ·
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-ink bg-accent sm:h-24 sm:w-24">
        <IconSpark size={30} className="text-[#fff7ee]" />
      </div>
    </div>
  );
}

export function Hero({ lang }: { lang: Locale }) {
  const t = ui[lang];
  const { profile, stats } = getContent(lang);
  const base = localeBase(lang);

  return (
    <div id="top" className="relative overflow-hidden border-b-[3px] border-ink bg-dotgrid">
      <Section className="relative py-20 sm:py-28">
        {/* Floating stamp — `end-*` mirrors to the start side in RTL. */}
        <div
          className="reveal pointer-events-none absolute end-4 top-10 hidden -rotate-12 sm:block lg:end-6"
          style={{ animationDelay: "0.5s" }}
        >
          <Stamp />
        </div>

        <div className="max-w-3xl">
          <span
            className="reveal mb-7 inline-flex"
            style={{ animationDelay: "0.05s" }}
          >
            <Tag tone="card">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {t.hero.available}
            </Tag>
          </span>

          <h1 className="font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.02em] text-ink sm:text-7xl">
            {t.hero.headline.map((line, i) => (
              <span
                key={i}
                className={`reveal block ${i === t.hero.accentLine ? "text-accent" : ""}`}
                style={{ animationDelay: `${0.12 + i * 0.1}s` }}
              >
                {line}
              </span>
            ))}
          </h1>

          <p
            className="reveal mt-7 max-w-xl text-lg leading-relaxed text-ink/75"
            style={{ animationDelay: "0.42s" }}
          >
            {profile.tagline}
          </p>

          <div
            className="reveal mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.52s" }}
          >
            <ButtonLink href={`${base}/#projects`} tone="red">
              {t.hero.viewProjects}
              <IconArrowUpRight size={16} />
            </ButtonLink>
            <ButtonLink href={`${base}/#contact`} tone="cream">
              {t.hero.getInTouch}
            </ButtonLink>
          </div>
        </div>

        <div
          className="reveal mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4"
          style={{ animationDelay: "0.62s" }}
        >
          {stats.map((s) => (
            <Card key={s.label} tone={s.tone} className="px-5 py-5">
              <p className="font-display text-4xl font-extrabold tracking-tight">
                {s.value}
              </p>
              <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-wide opacity-70">
                {s.label}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

export function Projects({ lang }: { lang: Locale }) {
  const t = ui[lang];
  const { projects } = getContent(lang);

  return (
    <>
      <Marquee />
      <Section id="projects" className="py-20 sm:py-28">
        <SectionHeading
          eyebrow={t.sections.projects.eyebrow}
          title={t.sections.projects.title}
          index="01"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => {
            // Index numerals alternate red / blue for rhythm.
            const numColor = i % 2 === 0 ? "text-accent" : "text-blue";
            return (
              <Card
                key={p.title}
                tone={p.tone ?? "cream"}
                className="flex h-full flex-col p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className={`font-mono text-sm font-bold ${numColor}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-2">
                    {p.metric ? (
                      <span className="rounded-full border-2 border-ink bg-white px-2.5 py-0.5 font-mono text-[11px] font-bold text-ink">
                        {p.metric}
                      </span>
                    ) : null}
                    <a
                      href={p.href}
                      aria-label={p.title}
                      className="shrink-0 transition-transform hover:-translate-y-0.5 hover:rotate-12 hover:text-accent"
                    >
                      <IconArrowUpRight />
                    </a>
                  </div>
                </div>
                <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed opacity-80">
                  {p.blurb}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <Tag key={tag} tone="white">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </Section>
    </>
  );
}

export function Experience({ lang }: { lang: Locale }) {
  const t = ui[lang];
  const { experience } = getContent(lang);

  return (
    <Section id="experience" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow={t.sections.experience.eyebrow}
        title={t.sections.experience.title}
        index="02"
        accent="blue"
      />
      <div className="space-y-6">
        {experience.map((job) => (
          <Card key={job.company} tone="cream" className="p-6 sm:p-8">
            <div className="flex flex-col gap-1 border-b-2 border-ink/10 pb-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-extrabold tracking-tight text-ink">
                  {job.role}
                </h3>
                <p className="mt-0.5 font-semibold text-blue">{job.company}</p>
              </div>
              <div className="shrink-0 sm:text-end">
                <p className="font-mono text-xs font-bold uppercase tracking-wide text-ink">
                  {job.period}
                </p>
                <p className="mt-0.5 font-mono text-xs text-ink/55">
                  {job.location}
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2.5">
              {job.points.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-ink/80"
                >
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Skills({ lang }: { lang: Locale }) {
  const t = ui[lang];
  const { skillGroups } = getContent(lang);

  // Each group gets an alternating accent so the band isn't monochrome.
  const accents = ["text-accent", "text-blue", "text-accent", "text-blue"];
  const bullets = ["bg-accent", "bg-blue", "bg-accent", "bg-blue"];
  return (
    <div className="border-y-[3px] border-ink bg-card">
      <Section id="skills" className="py-20 sm:py-28">
        <SectionHeading
          eyebrow={t.sections.skills.eyebrow}
          title={t.sections.skills.title}
          index="03"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, gi) => (
            <Card key={group.heading} tone="cream" className="p-5">
              <h3
                className={`mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] ${accents[gi % accents.length]}`}
              >
                {group.heading}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 font-display text-base font-semibold text-ink"
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rotate-45 ${bullets[gi % bullets.length]}`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

export function About({ lang }: { lang: Locale }) {
  const t = ui[lang];
  const { about, profile } = getContent(lang);

  return (
    <Section id="about" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow={t.sections.about.eyebrow}
        title={t.sections.about.title}
        index="04"
      />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_300px]">
        <div className="max-w-2xl space-y-5">
          <p className="font-display text-2xl font-bold leading-snug tracking-tight text-ink">
            {about.paragraphs[0]}
          </p>
          {about.paragraphs.slice(1).map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-ink/75">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {about.credentials.map((c) => (
              <Tag key={c} tone="yellow">
                {c}
              </Tag>
            ))}
          </div>
        </div>
        <Card tone="card" className="h-fit p-6">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent">
            {t.aboutCard.currently}
          </p>
          <p className="mt-2 font-display text-lg font-bold text-ink">
            {t.aboutCard.basedIn} {profile.location}
          </p>
          <div className="my-5 h-[2px] w-full bg-ink/15" />
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent">
            {t.aboutCard.findMe}
          </p>
          <div className="mt-3 flex gap-2.5">
            <SocialIcon href={profile.socials.github} label="GitHub">
              <IconGitHub size={18} />
            </SocialIcon>
            <SocialIcon href={profile.socials.linkedin} label="LinkedIn">
              <IconLinkedIn size={18} />
            </SocialIcon>
            <SocialIcon href={`mailto:${profile.email}`} label="Email">
              <IconMail size={18} />
            </SocialIcon>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Shadow radius="md">
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noreferrer noopener"
        className="relative flex h-11 w-11 items-center justify-center rounded-[10px] border-[3px] border-ink bg-white text-ink transition-transform duration-150 group-hover:-translate-x-[1.5px] group-hover:-translate-y-[1.5px] hover:text-accent"
      >
        {children}
      </a>
    </Shadow>
  );
}

export function Contact({ lang }: { lang: Locale }) {
  const t = ui[lang];
  const { profile } = getContent(lang);

  return (
    <div className="border-t-[3px] border-ink bg-dotgrid">
      <Section id="contact" className="py-20 sm:py-28">
        <Card tone="red" radius="xl" className="relative overflow-hidden px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 spin-slow opacity-20 [inset-inline-end:-2.5rem]"
          >
            <IconSpark size={120} className="text-[#fff7ee]" />
          </div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#fff7ee]/80">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-[#fff7ee] sm:text-5xl">
            {t.contact.titleLines[0]}
            <br />
            {t.contact.titleLines[1]}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#fff7ee]/90">
            {t.contact.body}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={`mailto:${profile.email}`} tone="cream" external>
              <IconMail size={16} />
              {profile.email}
            </ButtonLink>
          </div>
        </Card>
      </Section>
    </div>
  );
}

export function Footer({ lang }: { lang: Locale }) {
  const t = ui[lang];
  const { profile } = getContent(lang);
  const text = t.footer.builtWith
    .replace("{year}", String(new Date().getFullYear()))
    .replace("{name}", profile.name);

  return (
    <footer className="border-t-[3px] border-ink bg-background">
      <Section className="flex flex-col items-center justify-between gap-3 py-8 sm:flex-row">
        <p className="font-mono text-xs font-semibold uppercase tracking-wide text-ink/60">
          {text}
        </p>
        <div className="flex gap-4">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink/50 transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <IconGitHub size={18} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink/50 transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <IconLinkedIn size={18} />
          </a>
        </div>
      </Section>
    </footer>
  );
}
