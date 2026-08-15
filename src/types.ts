export type Level = "5e" | "3e" | "1re";
export type Difficulty = "revision" | "core" | "stretch" | "olympiad";

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
}

export interface Lesson {
  meta: LessonMeta;
  body: string;
}

export interface Exercise {
  id: string;
  prompt: string;
  answer: number;
  solution: string;
}
