import { parse } from "yaml";
import type { ExerciseAssessment, Flashcard, Lesson, LessonMeta, Level, Locale } from "./types";

const rawLessons = import.meta.glob<string>("../content/lessons/**/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

const rawTranslations = import.meta.glob<string>("../content/translations/{en,fr}/**/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

interface ExerciseTranslation {
  id: string;
  tierTitle: string;
  prompt: string;
  solution: string;
  hints: string[];
  rubric?: string[];
  expected?: string;
  accepted?: string[];
}

interface LessonTranslation {
  id: string;
  locale: Locale;
  title: string;
  strand: string;
  summary: string;
  objectives: string[];
  prerequisites: string[];
  vocabulary: Array<{ en: string; definition: string }>;
  flashcards: Flashcard[];
  exercises: ExerciseTranslation[];
  body: string;
}

function validateGenerator(generator: unknown, path: string) {
  if (!generator || typeof generator !== "object") throw new Error(`${path} has an invalid generator`);
  const spec = generator as Record<string, unknown>;
  if (!["signed-arithmetic", "linear-equation", "remainder", "quadratic-value"].includes(String(spec.type))) {
    throw new Error(`${path} has an unsupported generator type`);
  }
  for (const field of ["seed", "count"]) {
    if (!Number.isInteger(spec[field])) throw new Error(`${path} generator.${field} must be an integer`);
  }
  if ((spec.count as number) <= 0) throw new Error(`${path} generator.count must be positive`);

  const range = (minField: string, maxField: string, nonzero = false) => {
    const min = spec[minField];
    const max = spec[maxField];
    if (!Number.isInteger(min) || !Number.isInteger(max) || (min as number) > (max as number)) {
      throw new Error(`${path} generator range ${minField}/${maxField} is invalid`);
    }
    if (nonzero && min === 0 && max === 0) throw new Error(`${path} generator coefficient range must contain a nonzero integer`);
  };

  if (spec.type === "signed-arithmetic") range("min", "max");
  if (spec.type === "linear-equation") {
    range("coefficientMin", "coefficientMax", true);
    range("solutionMin", "solutionMax");
    range("offsetMin", "offsetMax");
  }
  if (spec.type === "remainder") {
    range("divisorMin", "divisorMax");
    range("quotientMin", "quotientMax");
    if ((spec.divisorMin as number) < 1) throw new Error(`${path} generator divisors must be positive`);
  }
  if (spec.type === "quadratic-value") {
    range("coefficientMin", "coefficientMax", true);
    range("xMin", "xMax");
  }
}

export function parseLesson(source: string, path: string): Lesson {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error(`${path} must begin with YAML front matter`);
  }

  let meta: LessonMeta;
  try {
    meta = parse(match[1]) as LessonMeta;
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    throw new Error(`${path} has invalid YAML front matter: ${detail}`, { cause: error });
  }
  if (!meta.id || !meta.title || !meta.level || !meta.generator) {
    throw new Error(`${path} is missing required lesson metadata`);
  }

  if (!["5e", "4e", "3e", "2de", "1re", "TAL-spe", "TAL-exp"].includes(meta.level)) throw new Error(`${path} has an invalid level`);
  if (!["revision", "core", "stretch", "olympiad"].includes(meta.difficulty)) throw new Error(`${path} has an invalid difficulty`);
  if (!Number.isInteger(meta.order) || !Number.isFinite(meta.estimatedMinutes)) throw new Error(`${path} has invalid ordering or duration`);
  for (const field of ["objectives", "prerequisites", "vocabulary", "flashcards"] as const) {
    if (!Array.isArray(meta[field])) throw new Error(`${path} ${field} must be an array`);
  }
  if (meta.objectives.some((value) => typeof value !== "string") || meta.prerequisites.some((value) => typeof value !== "string")) {
    throw new Error(`${path} objectives and prerequisites must contain text`);
  }
  if (meta.vocabulary.some((entry) => !entry || typeof entry.en !== "string" || typeof entry.fr !== "string" || typeof entry.definition !== "string")) {
    throw new Error(`${path} has invalid vocabulary entries`);
  }
  if (meta.flashcards.some((card) => !card || typeof card.front !== "string" || typeof card.back !== "string")) {
    throw new Error(`${path} has invalid flashcards`);
  }
  validateGenerator(meta.generator, path);

  if (meta.tieredExercises) {
    if (!Array.isArray(meta.tieredExercises)) throw new Error(`${path} tieredExercises must be an array`);
    const ids = new Set<string>();
    const tiers = new Set<number>();
    const statuses = new Set(["core", "stretch", "olympiad", "cpge"]);
    for (const [index, exercise] of meta.tieredExercises.entries()) {
      const location = `${path} tieredExercises[${index}]`;
      if (!exercise || typeof exercise !== "object") throw new Error(`${location} must be an object`);
      if (!exercise.id || ids.has(exercise.id)) throw new Error(`${location} has a missing or duplicate id`);
      if (![1, 2, 3, 4].includes(exercise.tier)) throw new Error(`${location} has an invalid tier`);
      if (!exercise.prompt || !exercise.solution || !exercise.tierTitle) throw new Error(`${location} is missing required text`);
      if (!statuses.has(exercise.curriculumStatus)) throw new Error(`${location} has an invalid curriculumStatus`);
      if (!Array.isArray(exercise.hints) || exercise.hints.length === 0
        || exercise.hints.some((hint) => typeof hint !== "string" || !hint.trim())) throw new Error(`${location} must provide hints`);
      if (!exercise.assessment || !["numeric", "exact", "reasoning"].includes(exercise.assessment.kind)) {
        throw new Error(`${location} has an invalid assessment`);
      }
      if (exercise.assessment.kind === "numeric" && !Number.isFinite(exercise.assessment.expected)) {
        throw new Error(`${location} must provide a finite numeric answer`);
      }
      if (exercise.assessment.kind === "numeric" && exercise.assessment.tolerance !== undefined
        && (!Number.isFinite(exercise.assessment.tolerance) || exercise.assessment.tolerance < 0)) {
        throw new Error(`${location} has an invalid numeric tolerance`);
      }
      if (exercise.assessment.kind === "exact"
        && (typeof exercise.assessment.expected !== "string" || !exercise.assessment.expected.trim())) {
        throw new Error(`${location} must provide an exact answer`);
      }
      if (exercise.assessment.kind === "exact" && exercise.assessment.accepted !== undefined
        && (!Array.isArray(exercise.assessment.accepted) || exercise.assessment.accepted.some((answer) => typeof answer !== "string" || !answer.trim()))) {
        throw new Error(`${location} has invalid accepted answers`);
      }
      if (exercise.assessment.kind === "reasoning"
        && (!Array.isArray(exercise.assessment.rubric) || exercise.assessment.rubric.length === 0
          || exercise.assessment.rubric.some((criterion) => typeof criterion !== "string" || !criterion.trim()))) {
        throw new Error(`${location} must provide a reasoning rubric`);
      }
      ids.add(exercise.id);
      tiers.add(exercise.tier);
    }
    if ([1, 2, 3, 4].some((tier) => !tiers.has(tier))) {
      throw new Error(`${path} must provide at least one exercise in each tier`);
    }
  }

  return { meta, body: match[2].trim() };
}

function parseTranslation(source: string, path: string): LessonTranslation {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`${path} must begin with YAML front matter`);
  const meta = parse(match[1]) as Omit<LessonTranslation, "body">;
  const arrays = [meta.objectives, meta.prerequisites, meta.vocabulary, meta.flashcards, meta.exercises];
  if (!meta.id || !["en", "fr"].includes(meta.locale) || !meta.title || !meta.strand || !meta.summary
    || arrays.some((value) => !Array.isArray(value))) {
    throw new Error(`${path} has invalid translation metadata`);
  }
  if (meta.objectives.some((value) => typeof value !== "string" || !value.trim())
    || meta.prerequisites.some((value) => typeof value !== "string" || !value.trim())
    || meta.vocabulary.some((entry) => !entry || typeof entry.en !== "string" || typeof entry.definition !== "string")
    || meta.flashcards.some((card) => !card || typeof card.front !== "string" || typeof card.back !== "string")
    || meta.exercises.some((exercise) => !exercise || typeof exercise.id !== "string" || typeof exercise.tierTitle !== "string"
      || typeof exercise.prompt !== "string" || typeof exercise.solution !== "string"
      || !Array.isArray(exercise.hints) || exercise.hints.some((hint) => typeof hint !== "string" || !hint.trim())
      || (exercise.rubric !== undefined && (!Array.isArray(exercise.rubric) || exercise.rubric.some((item) => typeof item !== "string" || !item.trim())))
      || (exercise.expected !== undefined && typeof exercise.expected !== "string")
      || (exercise.accepted !== undefined && (!Array.isArray(exercise.accepted) || exercise.accepted.some((item) => typeof item !== "string"))))) {
    throw new Error(`${path} contains invalid translated fields`);
  }
  return { ...meta, body: match[2].trim() };
}

function mergeTranslation(lesson: Lesson, translation: LessonTranslation, path: string): Lesson {
  if (lesson.meta.id !== translation.id) throw new Error(`${path} does not match lesson ${lesson.meta.id}`);
  if (translation.objectives.length !== lesson.meta.objectives.length
    || translation.prerequisites.length !== lesson.meta.prerequisites.length
    || translation.flashcards.length !== lesson.meta.flashcards.length
    || translation.vocabulary.length !== lesson.meta.vocabulary.length) {
    throw new Error(`${path} does not cover every lesson field`);
  }

  const vocabulary = lesson.meta.vocabulary.map((entry) => {
    const localized = translation.vocabulary.find((item) => item.en === entry.en);
    if (!localized?.definition) throw new Error(`${path} is missing vocabulary entry ${entry.en}`);
    return { ...entry, definition: localized.definition };
  });

  const tieredExercises = lesson.meta.tieredExercises?.map((exercise) => {
    const localized = translation.exercises.find((item) => item.id === exercise.id);
    if (!localized || !localized.tierTitle || !localized.prompt || !localized.solution
      || !Array.isArray(localized.hints) || localized.hints.length === 0) {
      throw new Error(`${path} is missing exercise ${exercise.id}`);
    }

    let assessment: ExerciseAssessment = exercise.assessment;
    if (assessment.kind === "reasoning") {
      if (!Array.isArray(localized.rubric) || localized.rubric.length !== assessment.rubric.length) {
        throw new Error(`${path} is missing rubric for ${exercise.id}`);
      }
      assessment = { ...assessment, rubric: localized.rubric };
    } else if (assessment.kind === "exact" && (localized.expected || localized.accepted)) {
      const sourceExpected = assessment.expected;
      assessment = {
        ...assessment,
        expected: localized.expected ?? assessment.expected,
        accepted: [...new Set([
          ...(assessment.accepted ?? []),
          ...(localized.accepted ?? []),
          ...(localized.expected && localized.expected !== sourceExpected ? [sourceExpected] : []),
        ])],
      };
    }

    return {
      ...exercise,
      tierTitle: localized.tierTitle,
      prompt: localized.prompt,
      solution: localized.solution,
      hints: localized.hints,
      assessment,
    };
  });

  if (translation.exercises.length !== (tieredExercises?.length ?? 0)) {
    throw new Error(`${path} has an unexpected exercise count`);
  }

  return {
    meta: {
      ...lesson.meta,
      title: translation.title,
      strand: translation.strand,
      summary: translation.summary,
      objectives: translation.objectives,
      prerequisites: translation.prerequisites,
      vocabulary,
      flashcards: translation.flashcards,
      tieredExercises,
    },
    body: translation.body,
  };
}

const sourceLessons = Object.entries(rawLessons)
  .map(([path, source]) => parseLesson(source, path))
  .sort((a, b) => {
    const levelOrder: Record<Level, number> = { "5e": 0, "4e": 1, "3e": 2, "2de": 3, "1re": 4, "TAL-spe": 5, "TAL-exp": 6 };
    return levelOrder[a.meta.level] - levelOrder[b.meta.level] || a.meta.order - b.meta.order;
  });

const translations = Object.entries(rawTranslations).map(([path, source]) => ({
  path,
  translation: parseTranslation(source, path),
}));

export const lessonsByLocale: Record<Locale, Lesson[]> = { en: [], fr: [] };
for (const locale of ["en", "fr"] as const) {
  lessonsByLocale[locale] = sourceLessons.map((lesson) => {
    const match = translations.find((entry) => entry.translation.locale === locale && entry.translation.id === lesson.meta.id);
    if (!match) throw new Error(`Missing ${locale} translation for ${lesson.meta.id}`);
    return mergeTranslation(lesson, match.translation, match.path);
  });
}

if (translations.length !== sourceLessons.length * 2) throw new Error("Unexpected or duplicate lesson translations");

export const lessons = lessonsByLocale.en;
