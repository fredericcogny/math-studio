import { afterEach, describe, expect, it, vi } from "vitest";
import {
  emptyAdventState,
  getAdventDateStatus,
  isAdventDayUnlocked,
  loadAdventState,
  markAdventDaySolved,
} from "./advent";

afterEach(() => vi.unstubAllGlobals());

describe("advent date locking", () => {
  it("locks all doors before December unless early unlock is enabled", () => {
    const nov26 = new Date(2026, 10, 26); // Nov 26, 2026
    expect(isAdventDayUnlocked(1, nov26, false)).toBe(false);
    expect(isAdventDayUnlocked(24, nov26, false)).toBe(false);
    expect(isAdventDayUnlocked(1, nov26, true)).toBe(true);
    expect(isAdventDayUnlocked(24, nov26, true)).toBe(true);

    const status = getAdventDateStatus(nov26);
    expect(status).toEqual({ mode: "before", openCount: 0, daysUntilDec1: 5 });
  });

  it("opens doors 1..day during December 1-23 and all 24 from Dec 24 onward", () => {
    const dec10 = new Date(2026, 11, 10);
    expect(isAdventDayUnlocked(1, dec10, false)).toBe(true);
    expect(isAdventDayUnlocked(10, dec10, false)).toBe(true);
    expect(isAdventDayUnlocked(11, dec10, false)).toBe(false);
    expect(isAdventDayUnlocked(11, dec10, true)).toBe(true);
    expect(getAdventDateStatus(dec10)).toEqual({ mode: "during", openCount: 10, daysUntilDec1: 0 });

    const dec24 = new Date(2026, 11, 24);
    expect(isAdventDayUnlocked(24, dec24, false)).toBe(true);
    expect(getAdventDateStatus(dec24)).toEqual({ mode: "complete", openCount: 24, daysUntilDec1: 0 });
  });

  it("rejects out-of-range days", () => {
    const dec25 = new Date(2026, 11, 25);
    expect(isAdventDayUnlocked(0, dec25, true)).toBe(false);
    expect(isAdventDayUnlocked(25, dec25, true)).toBe(false);
  });
});

describe("advent storage state", () => {
  it("falls back safely when stored data is malformed", () => {
    vi.stubGlobal("localStorage", {
      getItem: () => JSON.stringify({ version: 2, unlockAll: "yes", solved: null }),
    });
    expect(loadAdventState()).toEqual(emptyAdventState);
  });

  it("records solved doors idempotently per lesson", () => {
    const first = markAdventDaySolved(emptyAdventState, "5e-advent-calendar", "5e-advent-01");
    const duplicate = markAdventDaySolved(first, "5e-advent-calendar", "5e-advent-01");
    const second = markAdventDaySolved(duplicate, "5e-advent-calendar", "5e-advent-02");
    expect(second.solved["5e-advent-calendar"]).toEqual(["5e-advent-01", "5e-advent-02"]);
  });
});
