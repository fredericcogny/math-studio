import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { lessons } from "./content";
import { generateExercises, isCorrect } from "./exercises";
import {
  loadProgress,
  recordAttempt,
  saveProgress,
  type ProgressState,
} from "./progress";
import type { Difficulty, Lesson, Level } from "./types";

const profiles: Array<{
  level: Level;
  label: string;
  stage: string;
  direction: string;
}> = [
  {
    level: "5e",
    label: "Explorer 5e",
    stage: "Entering 5e · age 12",
    direction: "Strong foundations, patterns, first proofs",
  },
  {
    level: "3e",
    label: "Explorer 3e",
    stage: "Entering 3e · age 14",
    direction: "Brevet fluency, algebra, mathematical reasoning",
  },
  {
    level: "1re",
    label: "Explorer 1re",
    stage: "Entering 1re · age 16",
    direction: "Maths · Physics-Chemistry · Engineering Science · CPGE runway",
  },
];

const difficultyLabel: Record<Difficulty, string> = {
  revision: "Quick revision",
  core: "Programme core",
  stretch: "Stretch",
  olympiad: "Olympiad lens",
};

function LessonList({
  availableLessons,
  current,
  progress,
  onSelect,
}: {
  availableLessons: Lesson[];
  current: string;
  progress: ProgressState;
  onSelect: (lesson: Lesson) => void;
}) {
  return (
    <nav className="lesson-list" aria-label="Lessons">
      <p className="eyebrow">Route map</p>
      {availableLessons.map((lesson, index) => {
        const state = progress.lessons[lesson.meta.level]?.[lesson.meta.id];
        return (
          <button
            className={`lesson-link ${current === lesson.meta.id ? "active" : ""}`}
            key={lesson.meta.id}
            onClick={() => onSelect(lesson)}
          >
            <span className="lesson-index">{String(index + 1).padStart(2, "0")}</span>
            <span>
              <strong>{lesson.meta.title}</strong>
              <small>{difficultyLabel[lesson.meta.difficulty]}</small>
            </span>
            <span className={state?.completed ? "status complete" : "status"}>
              {state?.completed ? "✓" : "·"}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

function Flashcards({ cards }: { cards: Lesson["meta"]["flashcards"] }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = cards[index];

  if (!card) return null;

  function move(direction: number) {
    setIndex((current) => (current + direction + cards.length) % cards.length);
    setFlipped(false);
  }

  return (
    <section className="study-block flashcard-block">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Recall</p>
          <h2>Flash cards</h2>
        </div>
        <span>{index + 1} / {cards.length}</span>
      </div>
      <button className={`flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
        <span>{flipped ? "Answer" : "Question"}</span>
        <strong>{flipped ? card.back : card.front}</strong>
        <small>Tap to {flipped ? "see the prompt" : "reveal"}</small>
      </button>
      <div className="card-controls">
        <button onClick={() => move(-1)}>Previous</button>
        <button onClick={() => move(1)}>Next</button>
      </div>
    </section>
  );
}

function Practice({ lesson, onResult }: { lesson: Lesson; onResult: (score: number) => void }) {
  const exercises = generateExercises(lesson.meta.generator);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function submit() {
    const correct = exercises.filter((exercise) => isCorrect(answers[exercise.id] ?? "", exercise.answer)).length;
    const score = Math.round((correct / exercises.length) * 100);
    setSubmitted(true);
    onResult(score);
  }

  return (
    <section className="study-block practice-block">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Apply</p>
          <h2>Deterministic practice</h2>
        </div>
        <span>Seed {lesson.meta.generator.seed}</span>
      </div>
      <p className="section-intro">The same lesson always produces the same check. A score of 80% marks it complete.</p>
      <ol className="exercise-list">
        {exercises.map((exercise) => {
          const correct = submitted && isCorrect(answers[exercise.id] ?? "", exercise.answer);
          return (
            <li key={exercise.id} className={submitted ? (correct ? "correct" : "incorrect") : ""}>
              <label htmlFor={exercise.id}>{exercise.prompt}</label>
              <input
                id={exercise.id}
                inputMode="decimal"
                value={answers[exercise.id] ?? ""}
                onChange={(event) => {
                  setSubmitted(false);
                  setAnswers({ ...answers, [exercise.id]: event.target.value });
                }}
                placeholder="Your answer"
              />
              {submitted && <small>{correct ? "Correct." : exercise.solution}</small>}
            </li>
          );
        })}
      </ol>
      <button className="primary-button" onClick={submit}>Check the set</button>
    </section>
  );
}

export function App() {
  const [progress, setProgress] = useState(loadProgress);
  const [profile, setProfile] = useState<Level>(progress.selectedProfile);
  const availableLessons = lessons.filter((lesson) => lesson.meta.level === profile);
  const [selectedId, setSelectedId] = useState(availableLessons[0]?.meta.id ?? "");
  const selectedLesson = availableLessons.find((lesson) => lesson.meta.id === selectedId) ?? availableLessons[0];
  const [result, setResult] = useState<number | null>(null);

  if (!selectedLesson) return <main>No lessons found.</main>;

  const profileInfo = profiles.find((item) => item.level === profile)!;
  const completed = availableLessons.filter(
    (lesson) => progress.lessons[profile]?.[lesson.meta.id]?.completed,
  ).length;

  function selectProfile(level: Level) {
    const nextLesson = lessons.find((lesson) => lesson.meta.level === level);
    const nextProgress = { ...progress, selectedProfile: level };
    setProfile(level);
    setSelectedId(nextLesson?.meta.id ?? "");
    setResult(null);
    setProgress(nextProgress);
    saveProgress(nextProgress);
  }

  function selectLesson(lesson: Lesson) {
    setSelectedId(lesson.meta.id);
    setResult(null);
  }

  function storeResult(score: number) {
    const nextProgress = recordAttempt(progress, profile, selectedLesson.meta.id, score);
    setProgress(nextProgress);
    saveProgress(nextProgress);
    setResult(score);
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Maths Studio home">
          <span>MS</span>
          <strong>Maths Studio</strong>
        </a>
        <div className="profile-tabs" aria-label="Anonymous learner profile">
          {profiles.map((item) => (
            <button
              key={item.level}
              className={profile === item.level ? "active" : ""}
              onClick={() => selectProfile(item.level)}
            >
              {item.level}
            </button>
          ))}
        </div>
        <div className="privacy-note"><span /> Local progress only</div>
      </header>

      <aside className="sidebar">
        <div className="learner-card">
          <p className="eyebrow">Anonymous profile</p>
          <h1>{profileInfo.label}</h1>
          <p>{profileInfo.stage}</p>
          <small>{profileInfo.direction}</small>
          <div className="progress-line"><span style={{ width: `${availableLessons.length ? (completed / availableLessons.length) * 100 : 0}%` }} /></div>
          <b>{completed} of {availableLessons.length} lessons mastered</b>
        </div>
        <LessonList
          availableLessons={availableLessons}
          current={selectedLesson.meta.id}
          progress={progress}
          onSelect={selectLesson}
        />
      </aside>

      <main className="lesson" id="top" key={selectedLesson.meta.id}>
        <header className="lesson-hero">
          <div className="lesson-meta">
            <span>{selectedLesson.meta.strand}</span>
            <span>{difficultyLabel[selectedLesson.meta.difficulty]}</span>
            <span>{selectedLesson.meta.estimatedMinutes} min</span>
          </div>
          <h1>{selectedLesson.meta.title}</h1>
          <p>{selectedLesson.meta.summary}</p>
          <div className="objectives">
            {selectedLesson.meta.objectives.map((objective) => <span key={objective}>{objective}</span>)}
          </div>
        </header>

        <section className="vocabulary" aria-label="English to French mathematical vocabulary">
          <p className="eyebrow">Vocabulary · hover for meaning</p>
          <div>
            {selectedLesson.meta.vocabulary.map((entry) => (
              <abbr key={entry.en} title={`${entry.fr}: ${entry.definition}`}>
                {entry.en} <span>{entry.fr}</span>
              </abbr>
            ))}
          </div>
        </section>

        <article className="lesson-copy">
          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {selectedLesson.body}
          </ReactMarkdown>
        </article>

        <Flashcards key={`cards-${selectedLesson.meta.id}`} cards={selectedLesson.meta.flashcards} />
        <Practice key={`practice-${selectedLesson.meta.id}`} lesson={selectedLesson} onResult={storeResult} />

        {result !== null && (
          <div className={`result-banner ${result >= 80 ? "mastered" : "keep-going"}`} role="status">
            <strong>{result}%</strong>
            <span>{result >= 80 ? "Lesson mastered. Try the stretch route next." : "Good evidence. Review the worked examples and try again."}</span>
          </div>
        )}
      </main>
    </div>
  );
}
