import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/**
 * Neo-brutalist design primitives. Thick warm-ink borders + a hard offset
 * drop-shadow that "presses in" on hover. The shadow is a duplicated element
 * behind the content, translated a few px; on hover it shrinks while the face
 * nudges up-left, so the element appears to depress. Pure CSS `group-hover`,
 * so these stay server components.
 */

const RADIUS = {
  md: "rounded-[10px]",
  lg: "rounded-[14px]",
  xl: "rounded-[20px]",
} as const;

type Radius = keyof typeof RADIUS;

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** Wrapper that paints the offset shadow behind any bordered content. */
export function Shadow({
  children,
  radius = "lg",
  className,
  block = false,
}: {
  children: ReactNode;
  radius?: Radius;
  className?: string;
  block?: boolean;
}) {
  return (
    <span
      className={cn(
        "group relative isolate",
        block ? "flex w-full" : "inline-flex",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 translate-x-[6px] translate-y-[6px] bg-ink transition-transform duration-150 ease-out group-hover:translate-x-[3px] group-hover:translate-y-[3px]",
          RADIUS[radius]
        )}
      />
      {children}
    </span>
  );
}

const FACE =
  "relative transition-transform duration-150 ease-out group-hover:-translate-x-[1.5px] group-hover:-translate-y-[1.5px]";

type Tone = "cream" | "card" | "red" | "white" | "ink" | "blue" | "yellow";

const TONE: Record<Tone, string> = {
  cream: "bg-background text-ink",
  card: "bg-card text-ink",
  red: "bg-accent text-[#fff7ee]",
  white: "bg-white text-ink",
  ink: "bg-ink text-[#fbf7ec]",
  blue: "bg-blue text-[#fff7ee]",
  yellow: "bg-yellow text-ink",
};

/** A bordered card with the offset shadow. */
export function Card({
  children,
  tone = "cream",
  radius = "lg",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  radius?: Radius;
  className?: string;
}) {
  return (
    <Shadow radius={radius} block>
      <div
        className={cn(
          FACE,
          "w-full border-[3px] border-ink",
          RADIUS[radius],
          TONE[tone],
          className
        )}
      >
        {children}
      </div>
    </Shadow>
  );
}

const BTN_BASE =
  "relative inline-flex items-center justify-center gap-2 border-[3px] border-ink px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.06em] transition-transform duration-150 ease-out group-hover:-translate-x-[1.5px] group-hover:-translate-y-[1.5px]";

/** Internal/anchor link styled as a brutalist button. */
export function ButtonLink({
  href,
  children,
  tone = "card",
  external,
  className,
  ...rest
}: {
  href: string;
  children: ReactNode;
  tone?: Tone;
  external?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">) {
  const classes = cn(BTN_BASE, "rounded-[10px]", TONE[tone], className);
  return (
    <Shadow radius="md">
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className={classes}
          {...rest}
        >
          {children}
        </a>
      ) : (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      )}
    </Shadow>
  );
}

/** Small pill label (e.g. tech tags). No shadow — used in dense rows. */
export function Tag({
  children,
  tone = "white",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border-2 border-ink px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide",
        TONE[tone]
      )}
    >
      {children}
    </span>
  );
}

/** Section heading with mono eyebrow + display title + accent rule. */
export function SectionHeading({
  eyebrow,
  title,
  index,
  accent = "red",
}: {
  eyebrow: string;
  title: string;
  index?: string;
  accent?: "red" | "blue";
}) {
  const accentText = accent === "blue" ? "text-blue" : "text-accent";
  const accentBg = accent === "blue" ? "bg-blue" : "bg-accent";
  return (
    <div className="mb-12 flex items-end justify-between gap-6">
      <div>
        <p
          className={`mb-3 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.22em] ${accentText}`}
        >
          <span className={`inline-block h-2.5 w-2.5 rotate-45 ${accentBg}`} />
          {eyebrow}
        </p>
        <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-ink sm:text-5xl">
          {title}
        </h2>
      </div>
      {index ? (
        <span
          aria-hidden
          className="hidden font-mono text-5xl font-bold leading-none text-ink/15 sm:block"
        >
          {index}
        </span>
      ) : null}
    </div>
  );
}
