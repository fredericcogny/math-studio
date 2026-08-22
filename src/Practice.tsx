import { useRef, useState } from "react";
import { calculateCoreScore, checkAssessment } from "./assessment";
import { generateExercises } from "./exercises";
import { ui } from "./i18n";
import { MathMarkdown } from "./MathMarkdown";
import { SocraticChat } from "./SocraticChat";
import type { Exercise, Lesson, Locale, TieredExercise } from "./types";

type PracticeExercise = Exercise | TieredExercise;

function exerciseOutcomes(
  exercises: PracticeExercise[],
  answers: Record<string, string>,
  submitted: Set<string>,
  revealed: Set<string>,
  reviewed: Set<string>,
  rubricChecks: Record<string, string[]>,
) {
  return Object.fromEntries(exercises.map((exercise) => {
    if (exercise.assessment.kind === "reasoning") {
      if (!revealed.has(exercise.id) || !reviewed.has(exercise.id)) return [exercise.id, undefined];
      const checked = rubricChecks[exercise.id] ?? [];
      return [exercise.id, exercise.assessment.rubric.every((criterion) => checked.includes(criterion))];
    }
    if (!submitted.has(exercise.id)) return [exercise.id, undefined];
    return [exercise.id, checkAssessment(exercise.assessment, answers[exercise.id] ?? "")];
  })) as Record<string, boolean | undefined>;
}

export function Practice({
  lesson,
  onResult,
  onDirty,
  locale,
}: {
  lesson: Lesson;
  onResult: (score: number) => void;
  onDirty: () => void;
  locale: Locale;
}) {
  const t = ui[locale].practice;
  const allExercises: PracticeExercise[] = lesson.meta.tieredExercises ?? generateExercises(lesson.meta.generator);
  const [selectedTier, setSelectedTier] = useState<number | "all">("all");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Set<string>>(new Set());
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const [reviewed, setReviewed] = useState<Set<string>>(new Set());
  const [rubricChecks, setRubricChecks] = useState<Record<string, string[]>>({});
  const lastRecordedSignature = useRef("");

  const displayedExercises = selectedTier === "all"
    ? allExercises
    : allExercises.filter((exercise) => exercise.tier === selectedTier);
  const outcomes = exerciseOutcomes(allExercises, answers, submitted, revealed, reviewed, rubricChecks);

  function updateAnswer(exercise: PracticeExercise, value: string) {
    if (exercise.curriculumStatus === "core") {
      onDirty();
      lastRecordedSignature.current = "";
    }
    setAnswers((current) => ({ ...current, [exercise.id]: value }));
    setSubmitted((current) => {
      const next = new Set(current);
      next.delete(exercise.id);
      return next;
    });
    if (exercise.assessment.kind === "reasoning") {
      setRevealed((current) => {
        const next = new Set(current);
        next.delete(exercise.id);
        return next;
      });
      setRubricChecks((current) => ({ ...current, [exercise.id]: [] }));
      setReviewed((current) => {
        const next = new Set(current);
        next.delete(exercise.id);
        return next;
      });
    }
  }

  function submit() {
    const nextSubmitted = new Set(submitted);
    const nextRevealed = new Set(revealed);
    const nextReviewed = new Set(reviewed);
    for (const exercise of displayedExercises) {
      if (!(answers[exercise.id] ?? "").trim()) continue;
      if (exercise.assessment.kind === "reasoning") {
        if (revealed.has(exercise.id)) nextReviewed.add(exercise.id);
        else nextRevealed.add(exercise.id);
      }
      else nextSubmitted.add(exercise.id);
    }
    setSubmitted(nextSubmitted);
    setRevealed(nextRevealed);
    setReviewed(nextReviewed);
    const nextOutcomes = exerciseOutcomes(allExercises, answers, nextSubmitted, nextRevealed, nextReviewed, rubricChecks);
    const coreExercises = allExercises.filter((exercise) => exercise.curriculumStatus === "core");
    if (coreExercises.every((exercise) => nextOutcomes[exercise.id] !== undefined)) {
      const signature = JSON.stringify(coreExercises.map((exercise) => [
        exercise.id,
        nextOutcomes[exercise.id],
        answers[exercise.id] ?? "",
        rubricChecks[exercise.id] ?? [],
      ]));
      if (signature !== lastRecordedSignature.current) {
        lastRecordedSignature.current = signature;
        onResult(calculateCoreScore(allExercises, nextOutcomes));
      }
    }
  }

  function toggleCriterion(exerciseId: string, criterion: string, checked: boolean) {
    const exercise = allExercises.find((candidate) => candidate.id === exerciseId);
    if (exercise?.curriculumStatus === "core") {
      onDirty();
      lastRecordedSignature.current = "";
    }
    setRubricChecks((current) => {
      const selected = new Set(current[exerciseId] ?? []);
      if (checked) selected.add(criterion);
      else selected.delete(criterion);
      return { ...current, [exerciseId]: [...selected] };
    });
  }

  return (
    <section className="study-block practice-block">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.heading}</h2>
        </div>
        <span>{lesson.meta.tieredExercises ? t.reviewed : `${t.seed} ${lesson.meta.generator.seed}`}</span>
      </div>
      <p className="section-intro">{t.intro}</p>

      <div className="tier-filter-tabs" aria-label={t.filterLabel}>
        <button className={selectedTier === "all" ? "active" : ""} aria-pressed={selectedTier === "all"} onClick={() => setSelectedTier("all")}>
          {t.allTiers} ({allExercises.length})
        </button>
        {t.tierLabels.map((label, index) => {
          const tier = index + 1;
          return (
            <button key={tier} className={selectedTier === tier ? `active tier-${tier}` : ""} aria-pressed={selectedTier === tier} onClick={() => setSelectedTier(tier)}>
              {t.tier} {tier}: {label}
            </button>
          );
        })}
      </div>

      <ol className="exercise-list">
        {displayedExercises.map((exercise) => {
          const assessment = exercise.assessment;
          const hasResult = outcomes[exercise.id] !== undefined;
          const correct = outcomes[exercise.id] === true;
          const reasoningRevealed = assessment.kind === "reasoning" && revealed.has(exercise.id);
          const reasoningReviewed = assessment.kind === "reasoning" && reviewed.has(exercise.id);
          const cardState = hasResult && (assessment.kind !== "reasoning" || correct)
            ? (correct ? "correct" : "incorrect")
            : "";

          return (
            <li key={exercise.id} className={`exercise-card ${cardState}`}>
              <div className="exercise-card-header">
                <span className={`tier-badge tier-${exercise.tier}`}>{t.tier} {exercise.tier}: {exercise.tierTitle}</span>
                <span className={`curriculum-status ${exercise.curriculumStatus}`}>{t.status[exercise.curriculumStatus]}</span>
              </div>
              <label htmlFor={exercise.id} className="exercise-prompt">
                <MathMarkdown>{exercise.prompt}</MathMarkdown>
              </label>

              <div className={`exercise-input-row ${assessment.kind === "reasoning" ? "reasoning" : ""}`}>
                {assessment.kind === "reasoning" ? (
                  <textarea
                    id={exercise.id}
                    value={answers[exercise.id] ?? ""}
                    onChange={(event) => updateAnswer(exercise, event.target.value)}
                    placeholder={t.reasoningPlaceholder}
                    rows={7}
                    aria-describedby={reasoningRevealed ? `${exercise.id}-feedback` : undefined}
                  />
                ) : (
                  <input
                    id={exercise.id}
                    inputMode="text"
                    value={answers[exercise.id] ?? ""}
                    onChange={(event) => updateAnswer(exercise, event.target.value)}
                    placeholder={assessment.kind === "numeric" ? t.numericPlaceholder : t.exactPlaceholder}
                    aria-invalid={hasResult && !correct}
                    aria-describedby={hasResult ? `${exercise.id}-feedback` : undefined}
                  />
                )}
                {hasResult && assessment.kind !== "reasoning" && (
                  <span id={`${exercise.id}-feedback`} role="status" className={`result-tag ${correct ? "correct" : "incorrect"}`}>{correct ? `✓ ${t.correct}` : `✗ ${t.reviewSolution}`}</span>
                )}
              </div>

              <details className="exercise-hints">
                <summary>{t.hints} ({exercise.hints.length})</summary>
                <ol>{exercise.hints.map((hint) => <li key={hint}><MathMarkdown inline>{hint}</MathMarkdown></li>)}</ol>
              </details>

              {reasoningRevealed && assessment.kind === "reasoning" && (
                <div className="reasoning-review" id={`${exercise.id}-feedback`}>
                  <div className="solution-box">
                    <strong>{t.modelSolution}</strong>
                    <MathMarkdown>{exercise.solution}</MathMarkdown>
                  </div>
                  <fieldset>
                    <legend>{t.rubricLegend}</legend>
                    {assessment.rubric.map((criterion) => (
                      <label key={criterion}>
                        <input
                          type="checkbox"
                          checked={(rubricChecks[exercise.id] ?? []).includes(criterion)}
                          onChange={(event) => toggleCriterion(exercise.id, criterion, event.target.checked)}
                        />
                        <span><MathMarkdown inline>{criterion}</MathMarkdown></span>
                      </label>
                    ))}
                  </fieldset>
                  <span className={`result-tag ${correct ? "correct" : "review"}`} role="status">
                    {correct
                      ? `✓ ${t.rubricComplete}`
                      : reasoningReviewed
                        ? t.rubricRevise
                        : t.rubricPending}
                  </span>
                </div>
              )}

              {hasResult && assessment.kind !== "reasoning" && !correct && (
                <div className="solution-box">
                  <strong>{t.solution}</strong>
                  <MathMarkdown>{exercise.solution}</MathMarkdown>
                </div>
              )}

              <SocraticChat exercisePrompt={exercise.prompt} exerciseSolution={exercise.solution} lessonTitle={lesson.meta.title} locale={locale} />
            </li>
          );
        })}
      </ol>
      <button className="primary-button" onClick={submit}>{t.checkVisible}</button>
    </section>
  );
}
