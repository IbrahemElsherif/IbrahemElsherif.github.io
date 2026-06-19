---
title: "Notes on shipping a RAG chatbot to production"
date: 2026-05-28
summary: "A short, editable draft — a few lessons from running an internal RAG system on AWS ECS Fargate at 1.5s time-to-first-token."
tags: ["RAG", "LLMs", "AWS"]
---

> This is a draft stub so the blog index has more than one post. Replace it with
> the real write-up (or delete it).

Most of the difficulty in a RAG system isn't the retrieval or the model — it's
everything around them: keeping latency predictable, keeping the index fresh,
and knowing when an answer is grounded versus invented.

## What mattered most

- **Time-to-first-token over total latency.** Streaming the first token in
  ~1.5s makes the system _feel_ fast even when the full answer takes longer.
- **A persistent vector store.** Backing ChromaDB with EFS meant the index
  survived container restarts on Fargate without a re-embed.
- **Observability from day one.** Dashboards for query latency and token usage
  caught regressions long before users reported them.

## Things I'd do differently

Start writing here. A good post is usually one clear idea, a bit of code, and an
honest note about the trade-off you made.
