import { describe, expect, it } from "vitest";
import { calculateCoreScore, checkAssessment, parseNumericAnswer } from "./assessment";
import type { TieredExercise } from "./types";

describe("numeric assessment", () => {
  it("accepts decimals and fractions while rejecting invalid values", () => {
    expect(parseNumericAnswer("2,5")).toBe(2.5);
    expect(parseNumericAnswer("5 / 2")).toBe(2.5);
    expect(parseNumericAnswer("1/0")).toBeNull();
    expect(checkAssessment({ kind: "numeric", expected: 1 / 3, tolerance: 0.001 }, "0.333")).toBe(true);
  });
});

describe("exact assessment", () => {
  it("normalizes common LaTeX and unicode notation", () => {
    const assessment = {
      kind: "exact" as const,
      expected: "pi/6",
      accepted: ["π/6"],
    };
    expect(checkAssessment(assessment, "\\frac{\\pi}{6}")).toBe(true);
    expect(checkAssessment(assessment, "0.5236")).toBe(false);
  });

  it("uses reviewed alternatives without claiming general symbolic equivalence", () => {
    const assessment = {
      kind: "exact" as const,
      expected: "-1/2+(7/2)i",
      accepted: ["(-1+7i)/2"],
    };
    expect(checkAssessment(assessment, "(-1 + 7i) / 2")).toBe(true);
    expect(checkAssessment(assessment, "\\frac{-1}{2+(7/2)i}")).toBe(false);
  });

  it("rejects overflowed fractions", () => {
    expect(parseNumericAnswer(`1/${"9".repeat(400)}`)).toBeNull();
  });
});

describe("core mastery", () => {
  const exercise = (id: string, tier: 1 | 2 | 3 | 4): TieredExercise => ({
    id,
    tier,
    tierTitle: "Test",
    curriculumStatus: tier === 4 ? "olympiad" : "core",
    prompt: "Prompt",
    solution: "Solution",
    hints: ["Hint"],
    assessment: { kind: "numeric", expected: tier },
  });
  const exercises = [exercise("t1", 1), exercise("t2", 2), exercise("t3", 3), exercise("t4", 4)];

  it("requires core tiers but keeps Tier 4 optional", () => {
    expect(calculateCoreScore(exercises, { t1: true, t2: true, t3: true })).toBe(100);
    expect(calculateCoreScore(exercises, { t1: true, t2: true, t3: false, t4: true })).toBe(67);
  });
});
