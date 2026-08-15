import type { Level } from "./types";

const STORAGE_KEY = "maths-studio.progress.v1";

export interface LessonProgress {
  attempts: number;
  bestScore: number;
  completed: boolean;
  lastPractisedAt: string;
}

export interface ProgressState {
  version: 1;
  selectedProfile: Level;
  lessons: Partial<Record<Level, Record<string, LessonProgress>>>;
}

export const emptyProgress: ProgressState = {
  version: 1,
  selectedProfile: "5e",
  lessons: {},
};

export function loadProgress(): ProgressState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return emptyProgress;
    const value = JSON.parse(stored) as ProgressState;
    return value.version === 1 ? value : emptyProgress;
  } catch {
    return emptyProgress;
  }
}

export function saveProgress(progress: ProgressState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function recordAttempt(
  progress: ProgressState,
  level: Level,
  lessonId: string,
  score: number,
): ProgressState {
  const previous = progress.lessons[level]?.[lessonId];
  return {
    ...progress,
    lessons: {
      ...progress.lessons,
      [level]: {
        ...progress.lessons[level],
        [lessonId]: {
          attempts: (previous?.attempts ?? 0) + 1,
          bestScore: Math.max(previous?.bestScore ?? 0, score),
          completed: previous?.completed === true || score >= 80,
          lastPractisedAt: new Date().toISOString(),
        },
      },
    },
  };
}
