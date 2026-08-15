export type Level = "5e" | "3e" | "1re" | "TAL-spe" | "TAL-exp";
export type Locale = "en" | "fr";
export type Difficulty = "revision" | "core" | "stretch" | "olympiad";

export type ExerciseTierLevel = 1 | 2 | 3 | 4;
export type CurriculumStatus = "core" | "stretch" | "olympiad" | "cpge";

export type ExerciseAssessment =
  | {
      kind: "numeric";
      expected: number;
      tolerance?: number;
    }
  | {
      kind: "exact";
      expected: string;
      accepted?: string[];
    }
  | {
      kind: "reasoning";
      rubric: string[];
    };

export interface TieredExercise {
  id: string;
  tier: ExerciseTierLevel;
  tierTitle: string;
  curriculumStatus: CurriculumStatus;
  prompt: string;
  solution: string;
  hints: string[];
  assessment: ExerciseAssessment;
}

export type GeneratorSpec =
  | {
      type: "signed-arithmetic";
      seed: number;
      count: number;
      min: number;
      max: number;
    }
  | {
      type: "linear-equation";
      seed: number;
      count: number;
      coefficientMin: number;
      coefficientMax: number;
      solutionMin: number;
      solutionMax: number;
      offsetMin: number;
      offsetMax: number;
    }
  | {
      type: "remainder";
      seed: number;
      count: number;
      divisorMin: number;
      divisorMax: number;
      quotientMin: number;
      quotientMax: number;
    }
  | {
      type: "quadratic-value";
      seed: number;
      count: number;
      coefficientMin: number;
      coefficientMax: number;
      xMin: number;
      xMax: number;
    };

export interface VocabularyEntry {
  en: string;
  fr: string;
  definition: string;
}

export interface Flashcard {
  front: string;
  back: string;
}

export interface LessonMeta {
  id: string;
  order: number;
  title: string;
  level: Level;
  strand: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  summary: string;
  objectives: string[];
  prerequisites: string[];
  vocabulary: VocabularyEntry[];
  flashcards: Flashcard[];
  generator: GeneratorSpec;
  tieredExercises?: TieredExercise[];
}

export interface Lesson {
  meta: LessonMeta;
  body: string;
}

export interface Exercise {
  id: string;
  prompt: string;
  solution: string;
  tier: ExerciseTierLevel;
  tierTitle: string;
  curriculumStatus: CurriculumStatus;
  hints: string[];
  assessment: ExerciseAssessment;
}
