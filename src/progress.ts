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
    const levels: Level[] = ["5e", "3e", "1re", "TAL-spe", "TAL-exp"];
    if (value?.version !== 1 || !levels.includes(value.selectedProfile) || !value.lessons || typeof value.lessons !== "object") {
      return emptyProgress;
    }
    for (const records of Object.values(value.lessons)) {
      if (!records || typeof records !== "object") return emptyProgress;
      for (const record of Object.values(records)) {
        if (!record || !Number.isInteger(record.attempts) || record.attempts < 0
          || !Number.isFinite(record.bestScore) || record.bestScore < 0 || record.bestScore > 100
          || typeof record.completed !== "boolean" || !Number.isFinite(Date.parse(record.lastPractisedAt))) {
          return emptyProgress;
        }
      }
    }
    return value;
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
