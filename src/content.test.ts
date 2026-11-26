import { describe, expect, it } from "vitest";
import { checkAssessment } from "./assessment";
import { lessons, lessonsByLocale, parseLesson } from "./content";
import type { Level } from "./types";

const expectedLessonIds: Record<Level, string[]> = {
  "5e": [
    "5e-signed-numbers",
    "5e-divisibility",
    "5e-fractions-decimals",
    "5e-proportionality",
    "5e-expressions-formulas",
    "5e-powers",
    "5e-functions-representations",
    "5e-angles-triangles",
    "5e-symmetry-parallelograms",
    "5e-measurement-solids",
    "5e-data-probability",
    "5e-algorithmic-thinking",
    "5e-advent-calendar",
  ],
  "4e": [
    "4e-fraction-operations",
    "4e-relative-number-operations",
    "4e-powers-notation",
    "4e-literal-calculus",
    "4e-first-degree-equations",
    "4e-proportionality-percentages",
    "4e-statistics-central-tendency",
    "4e-pythagorean-theorem",
    "4e-translation-vectors",
    "4e-triangles-parallel-lines",
    "4e-cosine-right-triangle",
    "4e-programming-conditionals",
  ],
  "3e": [
    "3e-linear-equations",
    "3e-arithmetic-primes",
    "3e-rational-calculations",
    "3e-powers-scientific-notation",
    "3e-identities-factorization",
    "3e-linear-affine-functions",
    "3e-rates-percentages",
    "3e-pythagorean-theorem",
    "3e-thales-theorem",
    "3e-right-triangle-trigonometry",
    "3e-transformations-homothety",
    "3e-statistics-probability",
    "3e-spatial-geometry",
    "3e-quantities-measurement",
    "3e-programming-algorithms",
    "3e-modular-patterns",
    "3e-advent-calendar",
  ],
  "2de": [
    "2de-number-sets-intervals",
    "2de-roots-powers",
    "2de-equations-inequalities",
    "2de-percentages-evolutions",
    "2de-functions-variations",
    "2de-reference-functions",
    "2de-coordinate-geometry",
    "2de-vectors-collinearity",
    "2de-lines-equations",
    "2de-trigonometry-projection",
    "2de-statistics-indicators",
    "2de-probability-finite",
    "2de-python-algorithms",
  ],
  "1re": [
    "1re-quadratics",
    "1re-invariants",
    "1re-derivatives",
    "1re-trigonometric-circle",
    "1re-dot-product",
    "1re-conditional-probability",
    "1re-advent-calendar",
  ],
  "TAL-spe": [
    "tal-recurrence",
    "tal-sequence-limits",
    "tal-continuity-tvi",
    "tal-logarithm",
    "tal-space-geometry",
    "tal-combinatorics",
  ],
  "TAL-exp": [
    "tal-exp-complex",
    "tal-exp-arithmetic",
    "tal-exp-matrices",
  ],
};

function findAmbiguousFrenchNumberLists(content: string) {
  const numberList = /[+−-]?\d+(?:\{,\}\d+)?(?:\s*,\s*[+−-]?\d+(?:\{,\}\d+)?)+/g;
  return [...content.matchAll(numberList)]
    .map(([match]) => match)
    .filter((match) => match.includes("{,}"));
}

describe("lesson content", () => {
  it("loads the complete curriculum in order for every level", () => {
    for (const [level, expectedIds] of Object.entries(expectedLessonIds)) {
      const ids = lessons
        .filter((lesson) => lesson.meta.level === level)
        .map((lesson) => lesson.meta.id);
      expect(ids, level).toEqual(expectedIds);
    }

    for (const lesson of lessons) {
      if (lesson.meta.adventDays) {
        expect(lesson.meta.difficulty, lesson.meta.id).toBe("bonus");
        expect(lesson.meta.adventDays, lesson.meta.id).toHaveLength(24);
        expect(lesson.meta.adventDays.map((d) => d.day), lesson.meta.id).toEqual(
          Array.from({ length: 24 }, (_, idx) => idx + 1),
        );
        expect(lesson.meta.adventDays.filter((d) => d.format === "algorithm"), lesson.meta.id).toHaveLength(4);
        expect(lesson.meta.adventDays.filter((d) => d.format === "proof"), lesson.meta.id).toHaveLength(4);
        expect(lesson.meta.adventDays.filter((d) => d.assessment.kind === "reasoning"), lesson.meta.id).toHaveLength(4);
      } else {
        const exercises = lesson.meta.tieredExercises ?? [];
        expect(exercises, lesson.meta.id).toHaveLength(4);
        expect(exercises.map((exercise) => exercise.tier), lesson.meta.id).toEqual([1, 2, 3, 4]);
        expect(exercises[3].assessment.kind, `${lesson.meta.id} Tier 4`).toBe("reasoning");
        expect(["olympiad", "cpge"], `${lesson.meta.id} Tier 4`).toContain(exercises[3].curriculumStatus);
      }
    }
  });

  it("provides complete English and French versions of every lesson", () => {
    expect(lessonsByLocale.en).toHaveLength(71);
    expect(lessonsByLocale.fr).toHaveLength(71);
    expect(lessonsByLocale.en.map((lesson) => lesson.meta.id)).toEqual(
      lessonsByLocale.fr.map((lesson) => lesson.meta.id),
    );

    for (const locale of ["en", "fr"] as const) {
      for (const lesson of lessonsByLocale[locale]) {
        expect(lesson.body.length, `${locale}:${lesson.meta.id} body`).toBeGreaterThan(100);
        expect(lesson.meta.title, `${locale}:${lesson.meta.id} title`).not.toBe("");
        expect(lesson.meta.flashcards.length, `${locale}:${lesson.meta.id} flashcards`).toBeGreaterThan(0);

        if (lesson.meta.adventDays) {
          expect(lesson.meta.adventDays, `${locale}:${lesson.meta.id} adventDays`).toHaveLength(24);
          expect(lesson.meta.adventDays.every((day) =>
            day.title.length > 0 && day.story.length > 0 && day.prompt.length > 0
            && day.solution.length > 0 && day.hints.length > 0
          )).toBe(true);
          for (const day of lesson.meta.adventDays) {
            if (day.assessment.kind === "exact") {
              expect(checkAssessment(day.assessment, day.assessment.expected), `${locale}:${day.id} expected`).toBe(true);
              for (const accepted of day.assessment.accepted ?? []) {
                expect(checkAssessment(day.assessment, accepted), `${locale}:${day.id} accepted ${accepted}`).toBe(true);
              }
            }
          }
        } else {
          expect(lesson.meta.tieredExercises, `${locale}:${lesson.meta.id} exercises`).toHaveLength(4);
          expect(lesson.meta.tieredExercises?.every((exercise) =>
            exercise.prompt.length > 0 && exercise.solution.length > 0 && exercise.hints.length > 0
          )).toBe(true);
          for (const exercise of lesson.meta.tieredExercises ?? []) {
            if (exercise.assessment.kind === "exact") {
              expect(checkAssessment(exercise.assessment, exercise.assessment.expected), `${locale}:${exercise.id} expected`).toBe(true);
              for (const accepted of exercise.assessment.accepted ?? []) {
                expect(checkAssessment(exercise.assessment, accepted), `${locale}:${exercise.id} accepted ${accepted}`).toBe(true);
              }
            }
          }
        }
      }
    }
  });

  it("uses American English spelling in English content", () => {
    const englishContent = JSON.stringify(lessonsByLocale.en);
    expect(englishContent).not.toMatch(/\b(?:analyse|analysed|behaviour|centre|centred|colour|colouring|factorise|factorised|modelling|recognise|recognised)\b/i);
  });

  it("uses semicolons between French list items when a value has a decimal comma", () => {
    expect(findAmbiguousFrenchNumberLists("$4{,}5,-1{,}2,2{,}3$")).toHaveLength(1);
    expect(findAmbiguousFrenchNumberLists("$4{,}5 ; -1{,}2 ; 2{,}3$")).toEqual([]);

    const issues = lessonsByLocale.fr.flatMap((lesson) =>
      findAmbiguousFrenchNumberLists(JSON.stringify(lesson)).map((match) => `${lesson.meta.id}: ${match}`)
    );
    expect(issues).toEqual([]);
  });

  it("reports the path of malformed YAML front matter", () => {
    const invalidLesson = `---\nid: broken\ntitle: "Bad \\sin"\nlevel: 1re\ngenerator: {}\n---\nBody`;
    expect(() => parseLesson(invalidLesson, "broken.md")).toThrow(/broken\.md has invalid YAML front matter/);
  });
});
