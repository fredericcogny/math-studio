import type { Exercise, ExerciseAssessment, TieredExercise } from "./types";

export function parseNumericAnswer(raw: string): number | null {
  const normalized = raw.trim().replace(",", ".");
  const fraction = normalized.match(/^(-?\d+)\s*\/\s*(-?\d+)$/);
  if (fraction) {
    const numerator = Number(fraction[1]);
    const denominator = Number(fraction[2]);
    const value = numerator / denominator;
    return denominator === 0 || !Number.isFinite(numerator) || !Number.isFinite(denominator) || !Number.isFinite(value)
      ? null
      : value;
  }

  if (!/^-?(?:\d+\.?\d*|\.\d+)$/.test(normalized)) return null;
  const value = Number(normalized);
  return Number.isFinite(value) ? value : null;
}

function normalizeExact(raw: string): string {
  let normalized = raw
    .trim()
    .toLowerCase()
    .replaceAll("$", "")
    .replaceAll("−", "-")
    .replaceAll("π", "pi")
    .replaceAll("√", "sqrt")
    .replaceAll("\\pi", "pi")
    .replaceAll("\\cdot", "*")
    .replaceAll("×", "*")
    .replaceAll("\\left", "")
    .replaceAll("\\right", "")
    .replaceAll("\\,", "")
    .replace(/\\sqrt\{([^{}]+)\}/g, "sqrt($1)")
    .replace(/\\frac\{(-?[a-z0-9.]+)\}\{(-?[a-z0-9.]+)\}/g, "$1/$2")
    .replace(/\s+/g, "")
    .replaceAll(";", ",");

  // Outer braces are presentation-only for finite sets in this bounded checker.
  if (normalized.startsWith("{") && normalized.endsWith("}")) {
    normalized = normalized.slice(1, -1);
  }
  return normalized;
}

export function checkAssessment(assessment: ExerciseAssessment, raw: string): boolean {
  if (assessment.kind === "reasoning") return false;
  if (assessment.kind === "numeric") {
    const value = parseNumericAnswer(raw);
    const tolerance = assessment.tolerance ?? 1e-9;
    return value !== null && Math.abs(value - assessment.expected) <= tolerance;
  }

  const submitted = normalizeExact(raw);
  return [assessment.expected, ...(assessment.accepted ?? [])]
    .map(normalizeExact)
    .includes(submitted);
}

export function calculateCoreScore(
  exercises: Array<Exercise | TieredExercise>,
  outcomes: Record<string, boolean | undefined>,
): number {
  const coreExercises = exercises.filter((exercise) => exercise.curriculumStatus === "core");
  if (coreExercises.length === 0) return 0;
  const correct = coreExercises.filter((exercise) => outcomes[exercise.id] === true).length;
  return Math.round((correct / coreExercises.length) * 100);
}
