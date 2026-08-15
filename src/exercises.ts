import type { Exercise, GeneratorSpec } from "./types";

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

    if (spec.type === "signed-arithmetic") {
      const left = integer(next, spec.min, spec.max);
      const right = integer(next, spec.min, spec.max);
      const addition = next() >= 0.5;
      return {
        id,
        prompt: `${left} ${addition ? "+" : "−"} (${right})`,
        answer: addition ? left + right : left - right,
        solution: addition
          ? `${left} + (${right}) = ${left + right}`
          : `${left} − (${right}) = ${left - right}`,
      };
    }

    if (spec.type === "linear-equation") {
      const a = nonZeroInteger(next, spec.coefficientMin, spec.coefficientMax);
      const x = integer(next, spec.solutionMin, spec.solutionMax);
      const b = integer(next, spec.offsetMin, spec.offsetMax);
      const result = a * x + b;
      return {
        id,
        prompt: `Solve for x: ${a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${result}`,
        answer: x,
        solution: `${a}x = ${result - b}, so x = ${x}.`,
      };
    }

    if (spec.type === "remainder") {
      const divisor = integer(next, spec.divisorMin, spec.divisorMax);
      const quotient = integer(next, spec.quotientMin, spec.quotientMax);
      const remainder = integer(next, 0, divisor - 1);
      const dividend = divisor * quotient + remainder;
      return {
        id,
        prompt: `What is the remainder when ${dividend} is divided by ${divisor}?`,
        answer: remainder,
        solution: `${dividend} = ${divisor} × ${quotient} + ${remainder}.`,
      };
    }

    const a = nonZeroInteger(next, spec.coefficientMin, spec.coefficientMax);
    const b = integer(next, spec.coefficientMin, spec.coefficientMax);
    const c = integer(next, spec.coefficientMin, spec.coefficientMax);
    const x = integer(next, spec.xMin, spec.xMax);
    const answer = a * x * x + b * x + c;
    return {
      id,
      prompt: `For f(x) = ${a}x² ${b < 0 ? "−" : "+"} ${Math.abs(b)}x ${c < 0 ? "−" : "+"} ${Math.abs(c)}, find f(${x}).`,
      answer,
      solution: `f(${x}) = ${a} × (${x})² + ${b} × (${x}) + ${c} = ${answer}.`,
    };
  });
}

export function parseNumericAnswer(raw: string): number | null {
  const normalized = raw.trim().replace(",", ".");
  const fraction = normalized.match(/^(-?\d+)\s*\/\s*(-?\d+)$/);
  if (fraction) {
    const denominator = Number(fraction[2]);
    return denominator === 0 ? null : Number(fraction[1]) / denominator;
  }

  if (!/^-?(?:\d+\.?\d*|\.\d+)$/.test(normalized)) return null;
  const value = Number(normalized);
  return Number.isFinite(value) ? value : null;
}

export function isCorrect(raw: string, expected: number) {
  const value = parseNumericAnswer(raw);
  return value !== null && Math.abs(value - expected) < 1e-9;
}
