const ADVENT_STORAGE_KEY = "maths-studio.advent.v1";

export interface AdventStorageState {
  version: 1;
  unlockAll: boolean;
  solved: Record<string, string[]>;
}

export const emptyAdventState: AdventStorageState = {
  version: 1,
  unlockAll: false,
  solved: {},
};

export interface AdventDateStatus {
  mode: "before" | "during" | "complete";
  openCount: number;
  daysUntilDec1: number;
}

export function isAdventDayUnlocked(day: number, now: Date, unlockAll: boolean): boolean {
  if (!Number.isInteger(day) || day < 1 || day > 24) return false;
  if (unlockAll) return true;
  if (now.getMonth() !== 11) return false;
  return day <= Math.min(24, now.getDate());
}

export function getAdventDateStatus(now: Date): AdventDateStatus {
  if (now.getMonth() === 11) {
    const dayOfMonth = now.getDate();
    if (dayOfMonth >= 24) {
      return { mode: "complete", openCount: 24, daysUntilDec1: 0 };
    }
    return { mode: "during", openCount: dayOfMonth, daysUntilDec1: 0 };
  }

  const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dec1 = new Date(now.getFullYear(), 11, 1);
  const diffMs = dec1.getTime() - todayMidnight.getTime();
  const daysUntilDec1 = Math.max(1, Math.round(diffMs / 86_400_000));
  return { mode: "before", openCount: 0, daysUntilDec1 };
}

export function loadAdventState(): AdventStorageState {
  try {
    const raw = localStorage.getItem(ADVENT_STORAGE_KEY);
    if (!raw) return emptyAdventState;
    const parsed = JSON.parse(raw) as Partial<AdventStorageState>;
    if (parsed?.version !== 1 || typeof parsed.unlockAll !== "boolean" || !parsed.solved || typeof parsed.solved !== "object") {
      return emptyAdventState;
    }
    const solved: Record<string, string[]> = {};
    for (const [lessonId, dayIds] of Object.entries(parsed.solved)) {
      if (!Array.isArray(dayIds) || dayIds.some((id) => typeof id !== "string")) {
        return emptyAdventState;
      }
      solved[lessonId] = [...new Set(dayIds)];
    }
    return { version: 1, unlockAll: parsed.unlockAll, solved };
  } catch {
    return emptyAdventState;
  }
}

export function saveAdventState(state: AdventStorageState) {
  try {
    localStorage.setItem(ADVENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Session state remains intact when storage is unavailable.
  }
}

export function markAdventDaySolved(
  state: AdventStorageState,
  lessonId: string,
  dayId: string,
): AdventStorageState {
  const existing = state.solved[lessonId] ?? [];
  if (existing.includes(dayId)) return state;
  return {
    ...state,
    solved: {
      ...state.solved,
      [lessonId]: [...existing, dayId],
    },
  };
}
