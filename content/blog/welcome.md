---
title: "Welcome to the blog"
date: 2026-06-19
summary: "Why this blog exists, and a quick tour of everything a post can render — headings, code, callouts, tables and more."
tags: ["Meta", "Writing"]
---


السلام عليكم

This is a starter post. It exists so you can see how everything renders — once
you've had a look, **edit or delete** `content/blog/welcome.md` and write your
own.

Adding a post is one file: drop a new `.md` into `content/blog/`, give it
frontmatter (title, date, summary, tags), write Markdown, and push. The deploy
workflow rebuilds the static site automatically.

## Headings and text

You get the usual inline formatting: **bold**, _italic_, `inline code`, and
[links](https://github.com/IbrahemElsherif). Long paragraphs wrap and breathe
with comfortable line height tuned to the rest of the site.

### A smaller heading

Lists work too:

- Short, scannable points
- With a diamond marker that matches the site
- And tight spacing

1. Ordered lists
2. Are numbered
3. As you'd expect

## Code blocks

Fenced code is syntax-highlighted at build time — no client-side JavaScript:

```python
from vllm import LLM, SamplingParams

llm = LLM(model="Qwen/Qwen2-1.5B")
params = SamplingParams(temperature=0.7, max_tokens=256)

output = llm.generate("لخّص الخبر التالي:", params)
print(output[0].outputs[0].text)
```

## Callouts and tables

> Blockquotes make good callouts — use them for the one thing a reader should
> remember from a section.

| Metric            | Value      |
| ----------------- | ---------- |
| RAG TTFT          | 1.5s       |
| Throughput (vLLM) | 443 tok/s  |
| Uptime            | 99.9%      |

That's the whole toolkit. Happy writing.
