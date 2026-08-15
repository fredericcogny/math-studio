import type { Exercise, GeneratorSpec } from "./types";
export { parseNumericAnswer } from "./assessment";
import { parseNumericAnswer } from "./assessment";

function random(seed: number) {
  let state = seed >>> 0;
  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function integer(next: () => number, min: number, max: number) {
  return Math.floor(next() * (max - min + 1)) + min;
}

function nonZeroInteger(next: () => number, min: number, max: number) {
  let value = 0;
  while (value === 0) value = integer(next, min, max);
  return value;
}

export function generateExercises(spec: GeneratorSpec): Exercise[] {
  const next = random(spec.seed);

  return Array.from({ length: spec.count }, (_, index) => {
    const id = `${spec.type}-${spec.seed}-${index}`;
    // Assign tiers 1 to 4 sequentially or based on index
    const tierLevel = ((index % 4) + 1) as 1 | 2 | 3 | 4;
    const tierTitles: Record<1 | 2 | 3 | 4, string> = {
      1: "Direct Application",
      2: "Standard Exam Practice",
      3: "Synthesis and Inequalities",
      4: "Preparatory Challenge",
    };

    if (spec.type === "signed-arithmetic") {
      const left = integer(next, spec.min, spec.max);
      const right = integer(next, spec.min, spec.max);
      const addition = next() >= 0.5;
      return {
        id,
        tier: tierLevel,
        tierTitle: tierTitles[tierLevel],
        curriculumStatus: tierLevel <= 2 ? "core" as const : tierLevel === 3 ? "stretch" as const : "olympiad" as const,
        prompt: `${left} ${addition ? "+" : "−"} (${right})`,
        assessment: { kind: "numeric" as const, expected: addition ? left + right : left - right },
        solution: addition
          ? `${left} + (${right}) = ${left + right}`
          : `${left} − (${right}) = ${left - right}`,
        hints: ["Track the operation sign separately from the number's sign."],
      };
    }

    if (spec.type === "linear-equation") {
      const a = nonZeroInteger(next, spec.coefficientMin, spec.coefficientMax);
      const x = integer(next, spec.solutionMin, spec.solutionMax);
      const b = integer(next, spec.offsetMin, spec.offsetMax);
      const result = a * x + b;
      return {
        id,
        tier: tierLevel,
        tierTitle: tierTitles[tierLevel],
        curriculumStatus: tierLevel <= 2 ? "core" as const : tierLevel === 3 ? "stretch" as const : "olympiad" as const,
        prompt: `Solve for x: ${a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${result}`,
        assessment: { kind: "numeric" as const, expected: x },
        solution: `${a}x = ${result - b}, so x = ${x}.`,
        hints: ["Undo the constant term before dividing by the coefficient of x."],
      };
    }

    if (spec.type === "remainder") {
      const divisor = integer(next, spec.divisorMin, spec.divisorMax);
      const quotient = integer(next, spec.quotientMin, spec.quotientMax);
      const remainder = integer(next, 0, divisor - 1);
      const dividend = divisor * quotient + remainder;
      return {
        id,
        tier: tierLevel,
        tierTitle: tierTitles[tierLevel],
        curriculumStatus: tierLevel <= 2 ? "core" as const : tierLevel === 3 ? "stretch" as const : "olympiad" as const,
        prompt: `What is the remainder when ${dividend} is divided by ${divisor}?`,
        assessment: { kind: "numeric" as const, expected: remainder },
        solution: `${dividend} = ${divisor} × ${quotient} + ${remainder}.`,
        hints: ["Write the dividend as divisor times quotient plus a smaller remainder."],
      };
    }

    const a = nonZeroInteger(next, spec.coefficientMin, spec.coefficientMax);
    const b = integer(next, spec.coefficientMin, spec.coefficientMax);
    const c = integer(next, spec.coefficientMin, spec.coefficientMax);
    const x = integer(next, spec.xMin, spec.xMax);
    const answer = a * x * x + b * x + c;
    return {
      id,
      tier: tierLevel,
      tierTitle: tierTitles[tierLevel],
      curriculumStatus: tierLevel <= 2 ? "core" as const : tierLevel === 3 ? "stretch" as const : "olympiad" as const,
      prompt: `For f(x) = ${a}x² ${b < 0 ? "−" : "+"} ${Math.abs(b)}x ${c < 0 ? "−" : "+"} ${Math.abs(c)}, find f(${x}).`,
      assessment: { kind: "numeric" as const, expected: answer },
      solution: `f(${x}) = ${a} × (${x})² + ${b} × (${x}) + ${c} = ${answer}.`,
      hints: ["Substitute the given x-value into every occurrence of x before simplifying."],
    };
  });
}

export function isCorrect(raw: string, expected: number) {
  const value = parseNumericAnswer(raw);
  return value !== null && Math.abs(value - expected) < 1e-9;
}
