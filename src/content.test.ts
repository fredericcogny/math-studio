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
  ],
  "1re": [
    "1re-quadratics",
    "1re-invariants",
    "1re-derivatives",
    "1re-trigonometric-circle",
    "1re-dot-product",
    "1re-conditional-probability",
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

describe("lesson content", () => {
  it("loads the complete curriculum in order for every level", () => {
    for (const [level, expectedIds] of Object.entries(expectedLessonIds)) {
      const ids = lessons
        .filter((lesson) => lesson.meta.level === level)
        .map((lesson) => lesson.meta.id);
      expect(ids, level).toEqual(expectedIds);
    }

    for (const lesson of lessons) {
      const exercises = lesson.meta.tieredExercises ?? [];
      expect(exercises, lesson.meta.id).toHaveLength(4);
      expect(exercises.map((exercise) => exercise.tier), lesson.meta.id).toEqual([1, 2, 3, 4]);
      expect(exercises[3].assessment.kind, `${lesson.meta.id} Tier 4`).toBe("reasoning");
      expect(["olympiad", "cpge"], `${lesson.meta.id} Tier 4`).toContain(exercises[3].curriculumStatus);
    }
  });

  it("provides complete English and French versions of every lesson", () => {
    expect(lessonsByLocale.en).toHaveLength(43);
    expect(lessonsByLocale.fr).toHaveLength(43);
    expect(lessonsByLocale.en.map((lesson) => lesson.meta.id)).toEqual(
      lessonsByLocale.fr.map((lesson) => lesson.meta.id),
    );

    for (const locale of ["en", "fr"] as const) {
      for (const lesson of lessonsByLocale[locale]) {
        expect(lesson.body.length, `${locale}:${lesson.meta.id} body`).toBeGreaterThan(100);
        expect(lesson.meta.title, `${locale}:${lesson.meta.id} title`).not.toBe("");
        expect(lesson.meta.flashcards.length, `${locale}:${lesson.meta.id} flashcards`).toBeGreaterThan(0);
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
  });

  it("uses American English spelling in English content", () => {
    const englishContent = JSON.stringify(lessonsByLocale.en);
    expect(englishContent).not.toMatch(/\b(?:analyse|analysed|behaviour|centre|centred|colour|colouring|factorise|factorised|modelling|recognise|recognised)\b/i);
  });

  it("reports the path of malformed YAML front matter", () => {
    const invalidLesson = `---\nid: broken\ntitle: "Bad \\sin"\nlevel: 1re\ngenerator: {}\n---\nBody`;
    expect(() => parseLesson(invalidLesson, "broken.md")).toThrow(/broken\.md has invalid YAML front matter/);
  });
});
