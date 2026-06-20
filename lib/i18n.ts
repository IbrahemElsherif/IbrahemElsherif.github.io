/**
 * Internationalization for the site. English lives at the root (`/`), Arabic
 * at `/ar/`. This module holds the locale list, direction helper, and the UI
 * "chrome" strings (nav labels, section titles, buttons, etc.) for both
 * languages. Personal/resume content lives in `lib/content.ts`.
 */

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function dir(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/** Path to the home page for a locale. */
export function homeHref(locale: Locale): string {
  return locale === "ar" ? "/ar/" : "/";
}

/** Prefix for in-page section anchors (e.g. `${base}/#projects`). */
export function localeBase(locale: Locale): string {
  return locale === "ar" ? "/ar" : "";
}

type UIStrings = {
  nav: {
    projects: string;
    experience: string;
    skills: string;
    blog: string;
    contact: string;
    home: string;
  };
  langToggle: { label: string; href: string; aria: string };
  hero: {
    available: string;
    /** Three display lines; `accentLine` is rendered in the accent colour. */
    headline: [string, string, string];
    accentLine: number;
    viewProjects: string;
    getInTouch: string;
  };
  sections: {
    projects: { eyebrow: string; title: string };
    experience: { eyebrow: string; title: string };
    skills: { eyebrow: string; title: string };
    about: { eyebrow: string; title: string };
  };
  aboutCard: { currently: string; basedIn: string; findMe: string };
  contact: { eyebrow: string; titleLines: [string, string]; body: string };
  /** `{year}` and `{name}` are interpolated at render time. */
  footer: { builtWith: string };
};

export const ui: Record<Locale, UIStrings> = {
  en: {
    nav: {
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      blog: "Blog",
      contact: "Contact",
      home: "Home",
    },
    langToggle: { label: "العربية", href: "/ar/", aria: "Switch to Arabic" },
    hero: {
      available: "Available for new projects",
      headline: ["AI Engineer", "building things", "that learn."],
      accentLine: 1,
      viewProjects: "View projects",
      getInTouch: "Get in touch",
    },
    sections: {
      projects: { eyebrow: "Selected work", title: "Projects" },
      experience: { eyebrow: "Where I've worked", title: "Experience" },
      skills: { eyebrow: "Toolkit", title: "Skills & Stack" },
      about: { eyebrow: "Background", title: "About me" },
    },
    aboutCard: { currently: "Currently", basedIn: "Based in", findMe: "Find me" },
    contact: {
      eyebrow: "Let's talk",
      titleLines: ["Let's build something", "intelligent."],
      body: "Have a model to train, a pipeline to ship, or an idea worth prototyping? I'd love to hear about it.",
    },
    footer: { builtWith: "© {year} {name} — built with Next.js" },
  },

  ar: {
    nav: {
      projects: "المشاريع",
      experience: "الخبرة",
      skills: "المهارات",
      blog: "المدونة",
      contact: "تواصل",
      home: "الرئيسية",
    },
    langToggle: { label: "English", href: "/", aria: "التبديل إلى الإنجليزية" },
    hero: {
      available: "متاح لمشاريع جديدة",
      headline: ["مهندس ذكاء اصطناعي", "أبني أنظمة", "تتعلّم."],
      accentLine: 1,
      viewProjects: "تصفّح المشاريع",
      getInTouch: "تواصل معي",
    },
    sections: {
      projects: { eyebrow: "أعمال مختارة", title: "المشاريع" },
      experience: { eyebrow: "أماكن عملت بها", title: "الخبرة" },
      skills: { eyebrow: "الأدوات", title: "المهارات والتقنيات" },
      about: { eyebrow: "نبذة", title: "عنّي" },
    },
    aboutCard: { currently: "حاليًا", basedIn: "مقيم في", findMe: "تجدني على" },
    contact: {
      eyebrow: "لنتحدّث",
      titleLines: ["لنصنع شيئًا", "ذكيًا."],
      body: "لديك نموذج لتدريبه، أو خط إنتاج لإطلاقه، أو فكرة تستحقّ التجربة؟ يسعدني أن أسمع عنها.",
    },
    footer: { builtWith: "© {year} {name} — بُني باستخدام Next.js" },
  },
};
