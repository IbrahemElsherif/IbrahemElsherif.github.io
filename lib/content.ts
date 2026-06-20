/**
 * Portfolio content for Ibrahem Elsherif — sourced from resume.
 *
 * English is the source of truth (`en` below). Arabic overrides go in `ar`:
 * anything you leave out — or leave as an empty string — falls back to the
 * English value, so the /ar/ site works immediately and you can translate
 * incrementally. Arrays are matched by POSITION, so keep the same order (and
 * ideally the same length) as the English arrays when translating them.
 */

import type { Locale } from "@/lib/i18n";

export type Tone = "cream" | "card" | "red" | "blue" | "yellow";

export type Stat = { value: string; label: string; tone: Tone };
export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href: string;
  metric?: string;
  tone?: Tone;
};
export type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};
export type SkillGroup = { heading: string; items: string[] };
export type Profile = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  socials: { github: string; linkedin: string; email: string };
};
export type About = { paragraphs: string[]; credentials: string[] };

export type Content = {
  profile: Profile;
  stats: Stat[];
  projects: Project[];
  experience: Job[];
  skillGroups: SkillGroup[];
  about: About;
};

// ── English (source of truth) ──────────────────────────────────

const en: Content = {
  profile: {
    name: "Ibrahem Elsherif",
    role: "AI Engineer",
    tagline:
      "I build and ship AI systems that run in production: internal RAG systems, fine-tuned Arabic LLMs, and multi-modal edge inference for human–robot interaction.",
    location: "Dammam, Saudi Arabia",
    email: "ebrahem.hesham.ahmed@gmail.com",
    phone: "+966537830141",
    socials: {
      github: "https://github.com/IbrahemElsherif",
      linkedin: "https://linkedin.com/in/ibrahem-elsherif",
      email: "mailto:ebrahem.hesham.ahmed@gmail.com",
    },
  },

  stats: [
    { value: "1.5s", label: "RAG time-to-first-token", tone: "yellow" },
    { value: "443", label: "tok/s via vLLM", tone: "blue" },
    { value: "97%", label: "face-recognition accuracy", tone: "red" },
    { value: "70%", label: "workflow time cut", tone: "cream" },
  ],

  projects: [
    {
      title: "Internal RAG Chatbot",
      blurb:
        "Internal knowledge chatbot on AWS ECS Fargate with an EFS-backed vector store. 1.5s TTFT, 99.9% uptime, plus dashboards tracking query latency and token usage.",
      tags: ["ChromaDB", "LangChain", "FastAPI", "AWS ECS"],
      metric: "1.5s TTFT",
      href: "#",
      tone: "card",
    },
    {
      title: "Arabic News LLM Fine-Tuning",
      blurb:
        "Fine-tuned Qwen2-1.5B with LoRA for Arabic news summarization and entity extraction, then served it with vLLM at 443 tokens/second.",
      tags: ["Qwen2", "LoRA", "vLLM", "Arabic NLP"],
      metric: "443 tok/s",
      href: "#",
      tone: "yellow",
    },
    {
      title: "Human–Robot Interaction (Edge)",
      blurb:
        "Ran SmolVLM2 video inference on Jetson Nano / Raspberry Pi at 7s end-to-end latency for a live VLM + TTS + ASR + LLM system.",
      tags: ["SmolVLM2", "Jetson Nano", "Edge AI", "Multi-modal"],
      metric: "7s latency",
      href: "#",
    },
    {
      title: "AI People Tracking",
      blurb:
        "Led a 9-person team on a mall surveillance system; built the Siamese-network face-recognition module at 97% accuracy to help locate lost children.",
      tags: ["Siamese Net", "Face Recognition", "Team Lead"],
      metric: "97% accuracy",
      href: "#",
    },
    {
      title: "Arabic Sign Language Classifier",
      blurb:
        "Transfer-learning classifier (ResNet50V2) for the Arabic sign-language alphabet, with a data-augmentation pipeline to handle class imbalance on limited data.",
      tags: ["ResNet50V2", "Transfer Learning", "Accessibility"],
      href: "#",
    },
    {
      title: "TimeMe Chrome Extension",
      blurb:
        "Per-tab time-tracking Chrome extension with productivity analytics. A shipped end-user product, built front to back.",
      tags: ["JavaScript", "Tailwind", "Product"],
      href: "#",
    },
  ],

  experience: [
    {
      role: "AI Engineer & Instructor",
      company: "Saudi Specialized Training & Learning Institute (SSTLI)",
      period: "Mar 2025 — Present",
      location: "Dammam, Saudi Arabia",
      points: [
        "Shipped an internal RAG chatbot (ChromaDB + LangChain + FastAPI) on AWS ECS Fargate — 1.5s TTFT, 99.9%  uptime.",
        "Built dashboards tracking query latency, token usage, and sales KPIs in real time.",
        "Optimized SmolVLM2 edge inference on Jetson Nano / Raspberry Pi to 7s for a live human–robot system.",
        "Automated manual workflows with Selenium, cutting task time by 70%.",
        "Taught AI courses to diploma students and business professionals — explaining transformers and vector DBs in plain language.",
      ],
    },
    {
      role: "sr",
      company: "Upwork (Freelance)",
      period: "Jul 2024 — Present",
      location: "Remote",
      points: [
        "Built and shipped ML solutions for international clients across NLP, computer vision, and data science.",
        "Scoped, built, and deployed working systems independently.",
      ],
    },
    {
      role: "ML Engineer Intern",
      company: "Digital Egypt Pioneers Initiative (DEPI) — Microsoft Partner",
      period: "Oct 2024 — Mar 2025",
      location: "Cairo, Egypt",
      points: [
        "Built an AI-powered predictive-maintenance pipeline on the NASA bearing dataset, tracked with MLflow and deployed on Azure.",
        "Completed a 6-month program in ML/DL, NLP, CV, Transformers, Generative AI, and Azure.",
      ],
    },
  ],

  skillGroups: [
    {
      heading: "AI / LLMs",
      items: ["PyTorch", "Transformers", "LoRA Fine-tuning", "RAG", "LangChain", "AI Agents"],
    },
    {
      heading: "Product Eng",
      items: ["Python", "FastAPI", "Flask", "Pydantic", "REST APIs", "n8n"],
    },
    {
      heading: "MLOps & Infra",
      items: ["Docker", "CI/CD", "MLflow", "vLLM", "llama.cpp", "Triton", "CUDA"],
    },
    {
      heading: "Cloud & Edge",
      items: ["AWS (ECS/EFS/Bedrock)", "Azure", "GCP", "Jetson Nano", "Raspberry Pi"],
    },
  ],

  about: {
    paragraphs: [
      "I'm an AI Engineer focused on systems that ship and run in production — RAG systems, AI agents, fine-tuned Arabic LLMs, and multi-modal edge inference.",
      "Teaching AI courses keeps me in daily contact with students, instructors, and admins, so I'm used to explainingtransformers, vector databases, and quantization to non-technical people quickly.",
      "I work with Claude Code and Cursor to move from problem to spec to working prototype fast. Fluent in Arabic and  English (C2), AWS AI Practitioner certified.",
    ],
    credentials: [
      "B.Sc. Electronics & Communications Eng.",
      "Valid SCE Registration (IT/Telecommunications)",
      "AWS Certified AI Practitioner",
      "ML Specialization — Stanford / DeepLearning.AI",
      "CS50x — Harvard",
    ],
  },
};

// ── Arabic overrides ───────────────────────────────────────────
// Fill these in to translate the /ar/ site. Empty/omitted = English fallback.
// Keep array order matching the English arrays above.

type DeepPartial<T> = T extends (infer U)[]
  ? DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

const ar: DeepPartial<Content> = {
  // profile: {
  //   name: "إبراهيم الشريف",
  //   role: "مهندس ذكاء اصطناعي",
  //   tagline: "...",
  //   location: "الدمام، السعودية",
  // },
  // stats: [
  //   { label: "..." }, { label: "..." }, { label: "..." }, { label: "..." },
  // ],
  // projects: [
  //   { title: "...", blurb: "...", tags: ["...", "..."], metric: "..." },
  //   // ...one entry per project, same order as English
  // ],
  // experience: [
  //   { role: "...", company: "...", period: "...", location: "...", points: ["..."] },
  // ],
  // skillGroups: [
  //   { heading: "...", items: ["...", "..."] },
  // ],
  // about: {
  //   paragraphs: ["...", "...", "..."],
  //   credentials: ["...", "..."],
  // },
};

// ── Merge (English fallback, positional for arrays) ────────────

function mergeValue<T>(base: T, override: unknown): T {
  if (override === undefined || override === null) return base;

  if (Array.isArray(base)) {
    const ov = Array.isArray(override) ? override : [];
    return base.map((item, i) => mergeValue(item, ov[i])) as unknown as T;
  }

  if (typeof base === "object") {
    const out = { ...(base as Record<string, unknown>) };
    const ov = (override ?? {}) as Record<string, unknown>;
    for (const key of Object.keys(out)) {
      out[key] = mergeValue(out[key], ov[key]);
    }
    return out as T;
  }

  // Primitives: use the override only when it's a non-empty string / defined.
  if (typeof base === "string") {
    return (typeof override === "string" && override.length > 0
      ? override
      : base) as unknown as T;
  }
  return override as T;
}

/** Resolve the content for a locale, with English fallback for Arabic. */
export function getContent(locale: Locale): Content {
  return locale === "ar" ? mergeValue(en, ar) : en;
}
