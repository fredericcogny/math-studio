import { afterEach, describe, expect, it, vi } from "vitest";
import { emptyProgress, loadProgress, recordAttempt } from "./progress";

afterEach(() => vi.unstubAllGlobals());

describe("stored progress validation", () => {
  it("falls back when the selected profile is invalid", () => {
    vi.stubGlobal("localStorage", {
      getItem: () => JSON.stringify({ version: 1, selectedProfile: "unknown", lessons: {} }),
    });
    expect(loadProgress()).toEqual(emptyProgress);
  });

  it("falls back when a lesson record is malformed", () => {
    vi.stubGlobal("localStorage", {
      getItem: () => JSON.stringify({
        version: 1,
        selectedProfile: "5e",
        lessons: { "5e": { lesson: { attempts: -1 } } },
      }),
    });
    expect(loadProgress()).toEqual(emptyProgress);
  });
});

describe("attempt recording", () => {
  it("preserves the best score and completed state", () => {
    const mastered = recordAttempt(emptyProgress, "5e", "lesson", 100);
    const retried = recordAttempt(mastered, "5e", "lesson", 67);
    expect(retried.lessons["5e"]?.lesson).toMatchObject({
      attempts: 2,
      bestScore: 100,
      completed: true,
    });
  });
});
