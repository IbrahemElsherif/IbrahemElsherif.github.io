import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display: characterful, slightly imperfect grotesque — gives headlines bite.
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

// Body: a humanist grotesk with warmth, pairs cleanly under the display face.
const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

// Mono: technical accent for eyebrows, stats, and tags — reads "engineer".
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
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
      className={`${display.variable} ${body.variable} ${mono.variable} h-full bg-[#fffdf8] antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
