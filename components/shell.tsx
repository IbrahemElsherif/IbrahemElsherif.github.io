import type { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections";
import { dir, type Locale } from "@/lib/i18n";

/**
 * Per-page wrapper that sets the language and text direction for everything
 * inside it. The root layout owns <html>/<body> and can't vary per route under
 * static export, so direction (and `lang`) live here on a flex-column wrapper
 * that also pins the footer to the bottom.
 */
export function Shell({
  lang,
  children,
}: {
  lang: Locale;
  children: ReactNode;
}) {
  return (
    <div lang={lang} dir={dir(lang)} className="flex min-h-screen flex-col">
      <Navbar lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
    </div>
  );
}
