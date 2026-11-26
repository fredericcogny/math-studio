import { useEffect, useState } from "react";
import {
  getAdventDateStatus,
  isAdventDayUnlocked,
  loadAdventState,
  markAdventDaySolved,
  saveAdventState,
  type AdventStorageState,
} from "./advent";
import { checkAssessment } from "./assessment";
import { ui } from "./i18n";
import { MathMarkdown } from "./MathMarkdown";
import { SocraticChat } from "./SocraticChat";
import type { AdventDay, Lesson, Locale } from "./types";

function FormatIcon({ format }: { format: AdventDay["format"] }) {
  if (format === "algorithm") {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }
  if (format === "proof") {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    );
  }
  if (format === "riddle") {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
    </svg>
  );
}

export function AdventCalendar({
  lesson,
  onResult,
  locale,
}: {
  lesson: Lesson;
  onResult: (score: number) => void;
  locale: Locale;
}) {
  const days = lesson.meta.adventDays ?? [];
  const t = ui[locale].advent;
  const pt = ui[locale].practice;
  const now = new Date();
  const dateStatus = getAdventDateStatus(now);

  const [adventState, setAdventState] = useState<AdventStorageState>(loadAdventState);
  const [selectedDayNum, setSelectedDayNum] = useState<number | null>(() => {
    const initial = loadAdventState();
    if (initial.unlockAll) return 1;
    if (dateStatus.openCount > 0) return dateStatus.openCount;
    return null;
  });
  const [lockedNoticeDay, setLockedNoticeDay] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Set<string>>(new Set());
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const [reviewed, setReviewed] = useState<Set<string>>(new Set());
  const [rubricChecks, setRubricChecks] = useState<Record<string, string[]>>({});
  const [showSolution, setShowSolution] = useState<Set<string>>(new Set());

  const solvedIds = adventState.solved[lesson.meta.id] ?? [];
  const solvedSet = new Set(solvedIds);

  useEffect(() => {
    if (selectedDayNum !== null && !isAdventDayUnlocked(selectedDayNum, now, adventState.unlockAll)) {
      setSelectedDayNum(dateStatus.openCount > 0 ? dateStatus.openCount : null);
    }
  }, [adventState.unlockAll]);

  function toggleUnlockAll() {
    const nextUnlockAll = !adventState.unlockAll;
    const nextState: AdventStorageState = { ...adventState, unlockAll: nextUnlockAll };
    setAdventState(nextState);
    saveAdventState(nextState);
    setLockedNoticeDay(null);
    if (nextUnlockAll && selectedDayNum === null) {
      setSelectedDayNum(1);
    }
  }

  function selectDoor(day: AdventDay) {
    if (!isAdventDayUnlocked(day.day, now, adventState.unlockAll)) {
      setLockedNoticeDay(day.day);
      return;
    }
    setLockedNoticeDay(null);
    setSelectedDayNum(day.day);
  }

  function recordSolved(dayId: string) {
    if (solvedSet.has(dayId)) return;
    const nextState = markAdventDaySolved(adventState, lesson.meta.id, dayId);
    setAdventState(nextState);
    saveAdventState(nextState);
    const nextCount = nextState.solved[lesson.meta.id]?.length ?? 0;
    onResult(Math.round((nextCount / days.length) * 100));
  }

  function updateAnswer(day: AdventDay, value: string) {
    setAnswers((current) => ({ ...current, [day.id]: value }));
    setSubmitted((current) => {
      const next = new Set(current);
      next.delete(day.id);
      return next;
    });
    if (day.assessment.kind === "reasoning") {
      setRevealed((current) => {
        const next = new Set(current);
        next.delete(day.id);
        return next;
      });
      setReviewed((current) => {
        const next = new Set(current);
        next.delete(day.id);
        return next;
      });
      setRubricChecks((current) => ({ ...current, [day.id]: [] }));
    }
  }

  function submitDay(day: AdventDay) {
    const raw = (answers[day.id] ?? "").trim();
    if (!raw) return;

    if (day.assessment.kind === "reasoning") {
      if (!revealed.has(day.id)) {
        setRevealed((current) => new Set(current).add(day.id));
        return;
      }
      setReviewed((current) => new Set(current).add(day.id));
      const checked = rubricChecks[day.id] ?? [];
      if (day.assessment.rubric.every((criterion) => checked.includes(criterion))) {
        recordSolved(day.id);
      }
      return;
    }

    setSubmitted((current) => new Set(current).add(day.id));
    if (checkAssessment(day.assessment, raw)) {
      recordSolved(day.id);
    }
  }

  function toggleCriterion(dayId: string, criterion: string, checked: boolean) {
    setRubricChecks((current) => {
      const selected = new Set(current[dayId] ?? []);
      if (checked) selected.add(criterion);
      else selected.delete(criterion);
      return { ...current, [dayId]: [...selected] };
    });
  }

  function toggleModelSolution(dayId: string) {
    setShowSolution((current) => {
      const next = new Set(current);
      if (next.has(dayId)) next.delete(dayId);
      else next.add(dayId);
      return next;
    });
  }

  const activeDay = days.find((d) => d.day === selectedDayNum) ?? null;

  const statusText = adventState.unlockAll && dateStatus.mode !== "complete"
    ? t.unlockedEarlyNotice
    : dateStatus.mode === "complete"
      ? t.allOpenByDate
      : dateStatus.mode === "during"
        ? t.duringDec(dateStatus.openCount)
        : t.beforeDec1(dateStatus.daysUntilDec1);

  return (
    <section className="study-block advent-block">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.heading}</h2>
        </div>
        <span className="advent-progress-pill">{t.solvedCount(solvedIds.length, days.length)}</span>
      </div>
      <p className="section-intro">{t.intro}</p>

      <div className="advent-progress-bar" aria-hidden="true">
        <span style={{ width: `${days.length ? (solvedIds.length / days.length) * 100 : 0}%` }} />
      </div>

      <div className="advent-controls-bar">
        <p className="advent-status-text">{statusText}</p>
        {dateStatus.mode !== "complete" && (
          <button
            type="button"
            className={`advent-unlock-btn ${adventState.unlockAll ? "unlocked" : ""}`}
            onClick={toggleUnlockAll}
            aria-pressed={adventState.unlockAll}
          >
            {adventState.unlockAll ? t.relockByDate : t.unlockEarly}
          </button>
        )}
      </div>

      {lockedNoticeDay !== null && (
        <div className="advent-locked-notice" role="status">
          {t.lockedMessage(lockedNoticeDay)}
        </div>
      )}

      <div className="advent-grid" role="list" aria-label={t.heading}>
        {days.map((day) => {
          const unlocked = isAdventDayUnlocked(day.day, now, adventState.unlockAll);
          const isSolved = solvedSet.has(day.id);
          const isActive = activeDay?.day === day.day;
          const isFinale = day.day === 24;

          return (
            <button
              key={day.id}
              type="button"
              role="listitem"
              className={[
                "advent-door",
                unlocked ? "unlocked" : "locked",
                isSolved ? "solved" : "",
                isActive ? "active" : "",
                isFinale ? "finale" : "",
              ].filter(Boolean).join(" ")}
              onClick={() => selectDoor(day)}
              aria-current={isActive ? "true" : undefined}
              aria-label={`${t.dayLabel(day.day)} — ${unlocked ? day.title : t.opensOn(day.day)}`}
            >
              <span className="advent-door-top">
                <span className="advent-door-number">{String(day.day).padStart(2, "0")}</span>
                {isSolved ? (
                  <span className="advent-door-seal" aria-label={t.solvedBadge}>✓</span>
                ) : !unlocked ? (
                  <svg className="advent-lock-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                ) : (
                  <span className={`advent-format-icon format-${day.format}`}>
                    <FormatIcon format={day.format} />
                  </span>
                )}
              </span>
              <span className="advent-door-caption">
                {unlocked ? day.title : t.opensOn(day.day)}
              </span>
              <span className="advent-door-meta">
                {unlocked ? (
                  <>
                    <span className={`advent-diff-dot diff-${day.difficulty}`} />
                    <span>{t.formats[day.format]}</span>
                  </>
                ) : (
                  <span>{t.dayLabel(day.day)}</span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {!activeDay ? (
        <div className="advent-empty-selection">
          <p>{t.selectPrompt}</p>
        </div>
      ) : (
        <article className="advent-day-panel" key={activeDay.id}>
          <header className="advent-day-header">
            <div className="advent-day-badges">
              <span className="advent-date-badge">{t.dayLabel(activeDay.day)}</span>
              <span className={`advent-format-badge format-${activeDay.format}`}>
                <FormatIcon format={activeDay.format} />
                {t.formats[activeDay.format]}
              </span>
              <span className={`advent-difficulty-badge diff-${activeDay.difficulty}`}>
                {t.difficulties[activeDay.difficulty]}
              </span>
              <span className="advent-topic-badge">{activeDay.topic}</span>
              {activeDay.day === 24 && <span className="advent-finale-badge">{t.finaleBadge}</span>}
              {solvedSet.has(activeDay.id) && <span className="advent-solved-badge">✓ {t.solvedBadge}</span>}
            </div>
            <h3>{activeDay.title}</h3>
          </header>

          <blockquote className="advent-story">
            <MathMarkdown>{activeDay.story}</MathMarkdown>
          </blockquote>

          <div className="advent-prompt">
            <MathMarkdown>{activeDay.prompt}</MathMarkdown>
          </div>

          {(() => {
            const assessment = activeDay.assessment;
            const isSubmitted = submitted.has(activeDay.id);
            const isCorrect = assessment.kind !== "reasoning" && isSubmitted
              && checkAssessment(assessment, answers[activeDay.id] ?? "");
            const reasoningRevealed = assessment.kind === "reasoning" && revealed.has(activeDay.id);
            const reasoningReviewed = assessment.kind === "reasoning" && reviewed.has(activeDay.id);
            const checkedCriteria = rubricChecks[activeDay.id] ?? [];
            const rubricPassed = assessment.kind === "reasoning" && reasoningReviewed
              && assessment.rubric.every((c) => checkedCriteria.includes(c));
            const isSolutionVisible = showSolution.has(activeDay.id);

            return (
              <div className="advent-work-area">
                <div className={`exercise-input-row ${assessment.kind === "reasoning" ? "reasoning" : ""}`}>
                  {assessment.kind === "reasoning" ? (
                    <textarea
                      id={activeDay.id}
                      value={answers[activeDay.id] ?? ""}
                      onChange={(event) => updateAnswer(activeDay, event.target.value)}
                      placeholder={pt.reasoningPlaceholder}
                      rows={6}
                    />
                  ) : (
                    <input
                      id={activeDay.id}
                      inputMode="text"
                      value={answers[activeDay.id] ?? ""}
                      onChange={(event) => updateAnswer(activeDay, event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") submitDay(activeDay);
                      }}
                      placeholder={assessment.kind === "numeric" ? pt.numericPlaceholder : pt.exactPlaceholder}
                      aria-invalid={isSubmitted && !isCorrect}
                    />
                  )}
                  {isSubmitted && assessment.kind !== "reasoning" && (
                    <span role="status" className={`result-tag ${isCorrect ? "correct" : "incorrect"}`}>
                      {isCorrect ? `✓ ${pt.correct}` : `✗ ${pt.reviewSolution}`}
                    </span>
                  )}
                </div>

                <div className="advent-action-row">
                  <button type="button" className="primary-button" onClick={() => submitDay(activeDay)}>
                    {t.checkAnswer}
                  </button>
                  {assessment.kind !== "reasoning" && (isCorrect || solvedSet.has(activeDay.id)) && (
                    <button
                      type="button"
                      className="advent-secondary-btn"
                      onClick={() => toggleModelSolution(activeDay.id)}
                    >
                      {isSolutionVisible ? t.hideSolution : t.revealSolution}
                    </button>
                  )}
                </div>

                <details className="exercise-hints">
                  <summary>{pt.hints} ({activeDay.hints.length})</summary>
                  <ol>
                    {activeDay.hints.map((hint) => (
                      <li key={hint}><MathMarkdown inline>{hint}</MathMarkdown></li>
                    ))}
                  </ol>
                </details>

                {reasoningRevealed && assessment.kind === "reasoning" && (
                  <div className="reasoning-review">
                    <div className="solution-box">
                      <strong>{pt.modelSolution}</strong>
                      <MathMarkdown>{activeDay.solution}</MathMarkdown>
                    </div>
                    <fieldset>
                      <legend>{pt.rubricLegend}</legend>
                      {assessment.rubric.map((criterion) => (
                        <label key={criterion}>
                          <input
                            type="checkbox"
                            checked={checkedCriteria.includes(criterion)}
                            onChange={(event) => toggleCriterion(activeDay.id, criterion, event.target.checked)}
                          />
                          <span><MathMarkdown inline>{criterion}</MathMarkdown></span>
                        </label>
                      ))}
                    </fieldset>
                    <span className={`result-tag ${rubricPassed ? "correct" : "review"}`} role="status">
                      {rubricPassed
                        ? `✓ ${pt.rubricComplete}`
                        : reasoningReviewed
                          ? pt.rubricRevise
                          : pt.rubricPending}
                    </span>
                  </div>
                )}

                {assessment.kind !== "reasoning" && ((isSubmitted && !isCorrect) || isSolutionVisible) && (
                  <div className="solution-box">
                    <strong>{pt.solution}</strong>
                    <MathMarkdown>{activeDay.solution}</MathMarkdown>
                  </div>
                )}

                <SocraticChat
                  exercisePrompt={`${activeDay.story}\n\n${activeDay.prompt}`}
                  exerciseSolution={activeDay.solution}
                  lessonTitle={`${lesson.meta.title} — ${t.dayLabel(activeDay.day)}`}
                  locale={locale}
                />
              </div>
            );
          })()}

          <footer className="advent-day-nav">
            <button
              type="button"
              disabled={activeDay.day <= 1 || !isAdventDayUnlocked(activeDay.day - 1, now, adventState.unlockAll)}
              onClick={() => setSelectedDayNum(activeDay.day - 1)}
            >
              ← {t.previousDay}
            </button>
            <span>{t.dayLabel(activeDay.day)} / 24</span>
            <button
              type="button"
              disabled={activeDay.day >= 24 || !isAdventDayUnlocked(activeDay.day + 1, now, adventState.unlockAll)}
              onClick={() => setSelectedDayNum(activeDay.day + 1)}
            >
              {t.nextDay} →
            </button>
          </footer>
        </article>
      )}
    </section>
  );
}
