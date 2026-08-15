import { describe, expect, it } from "vitest";
import { generateExercises, isCorrect, parseNumericAnswer } from "./exercises";

describe("deterministic exercise generation", () => {
  it("repeats the same sequence for the same seed", () => {
    const spec = {
      type: "signed-arithmetic" as const,
      seed: 42,
      count: 5,
      min: -12,
      max: 12,
    };

    expect(generateExercises(spec)).toEqual(generateExercises(spec));
  });

  it("generates linear equations with their chosen solution", () => {
    const exercises = generateExercises({
      type: "linear-equation",
      seed: 9,
      count: 8,
      coefficientMin: -6,
      coefficientMax: 6,
      solutionMin: -10,
      solutionMax: 10,
      offsetMin: -8,
      offsetMax: 8,
    });

    expect(exercises).toHaveLength(8);
    expect(exercises.every((exercise) =>
      exercise.assessment.kind === "numeric" && Number.isInteger(exercise.assessment.expected)
    )).toBe(true);
  });
});

describe("answer parsing", () => {
  it("accepts French decimals and fractions", () => {
    expect(parseNumericAnswer("2,5")).toBe(2.5);
    expect(isCorrect("5 / 2", 2.5)).toBe(true);
  });

  it("rejects non-numeric and zero-denominator answers", () => {
    expect(parseNumericAnswer("soon")).toBeNull();
    expect(parseNumericAnswer("1/0")).toBeNull();
  });
});
