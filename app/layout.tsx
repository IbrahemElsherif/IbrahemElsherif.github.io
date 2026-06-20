import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Hanken_Grotesk,
  JetBrains_Mono,
  Cairo,
} from "next/font/google";
import "./globals.css";

// Display: characterful, slightly imperfect grotesque — gives headlines bite.
const display = Bricolage_Grotesque({
  variable: "--ff-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

// Body: a humanist grotesk with warmth, pairs cleanly under the display face.
const body = Hanken_Grotesk({
  variable: "--ff-body",
  subsets: ["latin"],
});

// Mono: technical accent for eyebrows, stats, and tags — reads "engineer".
const mono = JetBrains_Mono({
  variable: "--ff-mono",
  subsets: ["latin"],
});

// Arabic: used as a per-glyph fallback in every font stack, so Arabic text
// renders in Cairo anywhere (RTL pages, blog titles, mixed posts) while Latin
// keeps the fonts above.
const arabic = Cairo({
  variable: "--ff-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Engineer",
    template: "%s | Ibrahem Elsherif",
  },
  description:
    "AI Systems Engineer shipping production tools — internal RAG systems, fine-tuned Arabic LLMs, and multi-modal edge inference.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${arabic.variable} h-full bg-[#fffdf8] antialiased`}
    >
      <body className="min-h-full">
        {children}
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
