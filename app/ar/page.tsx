import type { Metadata } from "next";
import { Shell } from "@/components/shell";
import { PortfolioSections } from "@/components/sections";

export const metadata: Metadata = {
  title: "مهندس ذكاء اصطناعي",
  description:
    "مهندس أنظمة ذكاء اصطناعي يبني أدوات تعمل في بيئة الإنتاج — أنظمة RAG داخلية، ونماذج لغوية عربية مُحسّنة، واستدلال متعدد الوسائط على الأجهزة الطرفية.",
};

export default function HomeAr() {
  return (
    <Shell lang="ar">
      <PortfolioSections lang="ar" />
    </Shell>
  );
}
