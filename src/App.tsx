import { useEffect, useState } from "react";
import { lessonsByLocale } from "./content";
import { profilesByLocale, ui } from "./i18n";
import { MathMarkdown } from "./MathMarkdown";
import {
  loadProgress,
  recordAttempt,
  saveProgress,
  type ProgressState,
} from "./progress";
import { Practice } from "./Practice";
import type { Lesson, Level, Locale } from "./types";

const LANGUAGE_KEY = "maths-studio.language";
const THEME_KEY = "maths-studio.theme";
const VALID_LEVELS: Level[] = ["5e", "4e", "3e", "2de", "1re", "TAL-spe", "TAL-exp"];
const VALID_LOCALES: Locale[] = ["en", "fr"];

type Theme = "system" | "light" | "dark";

function parseUrlParams(): { level?: Level; lesson?: string; lang?: Locale } {
  const params = new URLSearchParams(window.location.search);
  const level = params.get("level") as Level | null;
  const lesson = params.get("lesson");
  const lang = params.get("lang") as Locale | null;
  return {
    level: level && VALID_LEVELS.includes(level) ? level : undefined,
    lesson: lesson ?? undefined,
    lang: lang && VALID_LOCALES.includes(lang) ? lang : undefined,
  };
}

function syncUrl(level: Level, lessonId: string, locale: Locale) {
  const params = new URLSearchParams();
  params.set("level", level);
  params.set("lesson", lessonId);
  params.set("lang", locale);
  const url = `${window.location.pathname}?${params.toString()}`;
  history.replaceState(null, "", url);
}

function loadLocale(): Locale {
  const urlParams = parseUrlParams();
  if (urlParams.lang) return urlParams.lang;
  try {
    return localStorage.getItem(LANGUAGE_KEY) === "fr" ? "fr" : "en";
  } catch {
    return "en";
  }
}

function loadTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // fall through
  }
  return "system";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", theme);
  }
}

function LessonList({
  availableLessons,
  current,
  progress,
  onSelect,
  locale,
  level,
}: {
  availableLessons: Lesson[];
  current: string;
  progress: ProgressState;
  onSelect: (lesson: Lesson) => void;
  locale: Locale;
  level: Level;
}) {
  const t = ui[locale];
  const [copiedId, setCopiedId] = useState<string | null>(null);

  function shareLesson(e: React.MouseEvent, lessonId: string) {
    e.stopPropagation();
    const params = new URLSearchParams();
    params.set("level", level);
    params.set("lesson", lessonId);
    params.set("lang", locale);
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(lessonId);
      setTimeout(() => setCopiedId(null), 1500);
    });
  }

  return (
    <nav className="lesson-list" aria-label={t.lessons}>
      <p className="eyebrow">{t.curriculum} · {availableLessons.length} {t.lessonCount}</p>
      {availableLessons.map((lesson, index) => {
        const state = progress.lessons[lesson.meta.level]?.[lesson.meta.id];
        return (
          <button
            className={`lesson-link ${current === lesson.meta.id ? "active" : ""}`}
            key={lesson.meta.id}
            onClick={() => onSelect(lesson)}
            aria-current={current === lesson.meta.id ? "page" : undefined}
          >
            <span className="lesson-index">{String(index + 1).padStart(2, "0")}</span>
            <span>
              <strong>{lesson.meta.title}</strong>
              <small>{t.difficulty[lesson.meta.difficulty]}</small>
            </span>
            <span className={state?.completed ? "status complete" : "status"}>
              {state?.completed ? "✓" : "·"}
            </span>
            <span
              className={`lesson-link-share ${copiedId === lesson.meta.id ? "copied" : ""}`}
              role="button"
              tabIndex={0}
              aria-label={t.share}
              onClick={(e) => shareLesson(e, lesson.meta.id)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); shareLesson(e as unknown as React.MouseEvent, lesson.meta.id); } }}
            >
              {copiedId === lesson.meta.id ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              )}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

function Flashcards({ cards, locale }: { cards: Lesson["meta"]["flashcards"]; locale: Locale }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = cards[index];
  const t = ui[locale];

  if (!card) return null;

  function move(direction: number) {
    setIndex((current) => (current + direction + cards.length) % cards.length);
    setFlipped(false);
  }

  return (
    <section className="study-block flashcard-block">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{t.recall}</p>
          <h2>{t.flashcards}</h2>
        </div>
        <span>{index + 1} / {cards.length}</span>
      </div>
      <button className={`flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
        <span>{flipped ? t.answer : t.question}</span>
        <strong><MathMarkdown inline>{flipped ? card.back : card.front}</MathMarkdown></strong>
        <small>{flipped ? t.seePrompt : t.reveal}</small>
      </button>
      <div className="card-controls">
        <button onClick={() => move(-1)}>{t.previous}</button>
        <button onClick={() => move(1)}>{t.next}</button>
      </div>
    </section>
  );
}

export function App() {
  const [locale, setLocale] = useState<Locale>(loadLocale);
  const [theme, setTheme] = useState<Theme>(loadTheme);
  const t = ui[locale];
  const lessons = lessonsByLocale[locale];
  const profiles = profilesByLocale[locale];
  const [progress, setProgress] = useState(loadProgress);

  // Resolve initial profile and lesson from URL params
  const urlParams = parseUrlParams();
  const initialProfile = urlParams.level ?? progress.selectedProfile;
  const initialLessonsForProfile = lessons.filter((l) => l.meta.level === initialProfile);
  const initialLessonId = urlParams.lesson && initialLessonsForProfile.some((l) => l.meta.id === urlParams.lesson)
    ? urlParams.lesson
    : initialLessonsForProfile[0]?.meta.id ?? "";

  const [profile, setProfile] = useState<Level>(initialProfile);
  const availableLessons = lessons.filter((lesson) => lesson.meta.level === profile);
  const [selectedId, setSelectedId] = useState(initialLessonId);
  const selectedLesson = availableLessons.find((lesson) => lesson.meta.id === selectedId) ?? availableLessons[0];
  const [result, setResult] = useState<number | null>(null);

  // Sync URL on mount and whenever navigation state changes
  useEffect(() => {
    if (selectedLesson) {
      syncUrl(profile, selectedLesson.meta.id, locale);
    }
  }, [profile, selectedLesson?.meta.id, locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      localStorage.setItem(LANGUAGE_KEY, locale);
    } catch {
      // The selected language still applies for the current session.
    }
  }, [locale]);

  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // The selected theme still applies for the current session.
    }
  }, [theme]);

  if (!selectedLesson) return <main>{t.noLessons}</main>;

  const profileInfo = profiles.find((item) => item.level === profile)!;
  const masteryLessons = availableLessons.filter((lesson) => lesson.meta.difficulty !== "olympiad");
  const completed = masteryLessons.filter(
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

  function changeLocale(nextLocale: Locale) {
    setResult(null);
    setLocale(nextLocale);
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
        <a className="brand" href="#top" aria-label={t.home}>
          <span>MS</span>
          <strong>Math Studio</strong>
        </a>
        <div className="profile-tabs" aria-label={t.learnerProfiles}>
          {profiles.map((item) => (
            <button
              key={item.level}
              className={profile === item.level ? "active" : ""}
              onClick={() => selectProfile(item.level)}
              aria-pressed={profile === item.level}
            >
              {item.level}
            </button>
          ))}
        </div>
        <div className="topbar-actions">
          <div className="privacy-note"><span /> {t.localProgress}</div>
          <div className="theme-toggle" role="group" aria-label={locale === "fr" ? "Thème" : "Theme"}>
            <button onClick={() => setTheme("system")} aria-pressed={theme === "system"} title={locale === "fr" ? "Système" : "System"}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
            </button>
            <span aria-hidden="true">|</span>
            <button onClick={() => setTheme("light")} aria-pressed={theme === "light"} title={locale === "fr" ? "Clair" : "Light"}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            </button>
            <span aria-hidden="true">|</span>
            <button onClick={() => setTheme("dark")} aria-pressed={theme === "dark"} title={locale === "fr" ? "Sombre" : "Dark"}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
          </div>
          <div className="language-toggle" role="group" aria-label={t.language}>
            <button onClick={() => changeLocale("fr")} aria-pressed={locale === "fr"}>FR</button>
            <span aria-hidden="true">|</span>
            <button onClick={() => changeLocale("en")} aria-pressed={locale === "en"}>EN</button>
          </div>
        </div>
      </header>

      <aside className="sidebar">
        <div className="learner-card">
          <p className="eyebrow">{t.anonymousProfile}</p>
          <h1>{profileInfo.label}</h1>
          <p>{profileInfo.stage}</p>
          <small>{profileInfo.direction}</small>
          <div className="progress-line"><span style={{ width: `${masteryLessons.length ? (completed / masteryLessons.length) * 100 : 0}%` }} /></div>
          <b>{t.masteredCount(completed, masteryLessons.length)}</b>
        </div>
        <LessonList
          availableLessons={availableLessons}
          current={selectedLesson.meta.id}
          progress={progress}
          onSelect={selectLesson}
          locale={locale}
          level={profile}
        />
      </aside>

      <main className="lesson" id="top" key={selectedLesson.meta.id}>
        <header className="lesson-hero">
          <div className="lesson-meta">
            <span>{selectedLesson.meta.strand}</span>
            <span>{t.difficulty[selectedLesson.meta.difficulty]}</span>
            <span>{selectedLesson.meta.estimatedMinutes} {t.minute}</span>
          </div>
          <h1>{selectedLesson.meta.title}</h1>
          <p>{selectedLesson.meta.summary}</p>
          <div className="objectives">
            {selectedLesson.meta.objectives.map((objective) => (
              <span key={objective}><MathMarkdown inline>{objective}</MathMarkdown></span>
            ))}
          </div>
        </header>

        <section className="vocabulary" aria-label={t.vocabularyLabel}>
          <p className="eyebrow">{t.vocabulary}</p>
          <div>
            {selectedLesson.meta.vocabulary.map((entry) => (
              <details className="vocabulary-term" key={entry.en}>
                <summary>{locale === "en" ? entry.en : entry.fr}</summary>
                <span>
                  <strong>{locale === "en" ? entry.fr : entry.en}</strong>: <MathMarkdown inline>{entry.definition}</MathMarkdown>
                </span>
              </details>
            ))}
          </div>
        </section>

        <article className="lesson-copy">
          <MathMarkdown>{selectedLesson.body}</MathMarkdown>
        </article>

        <Flashcards key={`cards-${selectedLesson.meta.id}`} cards={selectedLesson.meta.flashcards} locale={locale} />
        <Practice
          key={`practice-${selectedLesson.meta.id}-${locale}`}
          lesson={selectedLesson}
          onResult={storeResult}
          onDirty={() => setResult(null)}
          locale={locale}
        />

        {result !== null && (
          <div className={`result-banner ${result >= 80 ? "mastered" : "keep-going"}`} role="status">
            <strong>{result}%</strong>
            <span>{result >= 80 ? t.coreComplete : t.coreContinue}</span>
          </div>
        )}
      </main>
    </div>
  );
}
