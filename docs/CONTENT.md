# Authoring lessons

Lessons live under `content/lessons/<level>/` as Markdown with YAML front matter. The application imports every matching file during the Vite build.

Required metadata:

```yaml
---
id: unique-stable-id
order: 1
title: Human-readable title
level: 1re # 5e, 3e, 1re, TAL-spe, or TAL-exp
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

In double-quoted YAML front matter, escape LaTeX backslashes twice (`\\sin`, `\\frac`). Alternatively, use a single-quoted YAML string so commands such as `\sin` are treated literally.

Generator definitions are typed in `src/types.ts` and implemented in `src/exercises.ts`. A new generator must be deterministic for a given seed and covered by tests.

## Exercise difficulty tiers

Every reviewed lesson provides one exercise at each tier. Difficulty must rise through a qualitative change in reasoning, not merely larger numbers or more arithmetic.

| Tier | Purpose | Expected demand |
| --- | --- | --- |
| 1 | Direct application | Recall or apply one definition, fact, or formula with no method selection. |
| 2 | Standard practice | Select a familiar method and complete a multi-step curriculum-level problem. |
| 3 | Synthesis | Connect multiple representations, results, or techniques and justify the method. |
| 4 | Advanced challenge | Discover an invariant or transformation, prove a general result, classify parameters, establish completeness, or combine topics. It should challenge an excellent student at that level. |

Tier 4 must not be a routine Tier 2 exercise with harder numbers. Content beyond the official programme must use `curriculumStatus: stretch`, `olympiad`, or `cpge`. Only exercises marked `curriculumStatus: core` determine lesson mastery; all extension work remains optional.

Reviewed exercises use this schema:

```yaml
tieredExercises:
  - id: unique-exercise-id
    tier: 1
    tierTitle: Direct Application
    curriculumStatus: core # core, stretch, olympiad, or cpge
    prompt: "Calculate ..."
    solution: "The reviewed model solution ..."
    hints:
      - "A progressive hint that does not reveal the answer."
    assessment:
      kind: numeric
      expected: 4
      tolerance: 0.001 # optional
```

Assessment kinds are:

- `numeric`: deterministic integer, decimal, or fraction checking with optional tolerance.
- `exact`: bounded textual equivalence using `expected` and reviewed `accepted` alternatives. This is not a general computer algebra system.
- `reasoning`: a full-width response followed by a model solution and a nonempty `rubric` list for learner self-assessment.

Proof, construction, exhaustive-case, and parameter-classification tasks should use `reasoning`; a single numerical conclusion is not evidence that the proof was completed.

## Bilingual lesson content

Every canonical lesson must have complete sidecars at:

```text
content/translations/en/<level>/<lesson-file>.md
content/translations/fr/<level>/<lesson-file>.md
```

Sidecars contain localized lesson metadata, vocabulary definitions keyed by the canonical English term, flashcards, every exercise prompt/solution/hint/rubric, optional localized exact-answer alternatives, and the complete Markdown body. English sidecars use American English spelling; French sidecars use standard French mathematical notation, including decimal commas. In a French list containing decimal numbers, separate items with semicolons so the item delimiter cannot be mistaken for a decimal comma. The content loader rejects missing, duplicate, incomplete, or structurally mismatched translations.
