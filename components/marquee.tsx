import { IconSpark } from "@/components/icons";

const ITEMS = [
  "RAG Pipelines",
  "LLM Fine-tuning",
  "vLLM",
  "LangChain",
  "AWS ECS Fargate",
  "Edge Inference",
  "PyTorch",
  "Vector Search",
  "FastAPI",
  "Production ML",
];

// Sparks cycle through the brutalist palette so the dark band stays lively.
const SPARK = ["text-accent", "text-blue", "text-yellow"];

/**
 * Infinite-scrolling ink band. The track holds the items twice and animates
 * by -50%, so the loop is seamless. Decorative — hidden from screen readers.
 */
export function Marquee() {
  const sequence = [...ITEMS, ...ITEMS];
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y-[3px] border-ink bg-ink py-4 select-none"
    >
      <div className="marquee-track items-center gap-8">
        {sequence.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-8">
            <span className="font-display text-lg font-bold uppercase tracking-[0.08em] text-[#fbf7ec]">
              {item}
            </span>
            <IconSpark size={16} className={SPARK[i % SPARK.length]} />
          </div>
        ))}
      </div>
    </div>
  );
}
