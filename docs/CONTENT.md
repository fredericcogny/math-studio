# Authoring lessons

Lessons live under `content/lessons/<level>/` as Markdown with YAML front matter. The application imports every matching file during the Vite build.

Required metadata:

```yaml
---
id: unique-stable-id
order: 1
title: Human-readable title
level: 5e # 5e, 3e, or 1re
strand: Algebra
difficulty: core # revision, core, stretch, or olympiad
estimatedMinutes: 20
summary: One-sentence purpose.
objectives:
  - Observable outcome
prerequisites:
  - Prior idea
vocabulary:
  - en: root
    fr: racine
    definition: A value for which a function is zero.
flashcards:
  - front: Prompt
    back: Answer and concise explanation
generator:
  type: linear-equation
  seed: 1234
  count: 6
  coefficientMin: -8
  coefficientMax: 8
  solutionMin: -10
  solutionMax: 10
  offsetMin: -12
  offsetMax: 12
---
```

The Markdown body supports GitHub-style prose and LaTeX mathematics using `$...$` and `$$...$$`.

Generator definitions are typed in `src/types.ts` and implemented in `src/exercises.ts`. A new generator must be deterministic for a given seed and covered by tests.
