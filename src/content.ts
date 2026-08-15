import { parse } from "yaml";
import type { Lesson, LessonMeta } from "./types";

const rawLessons = import.meta.glob<string>("../content/lessons/**/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

function parseLesson(source: string, path: string): Lesson {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error(`${path} must begin with YAML front matter`);
  }

  const meta = parse(match[1]) as LessonMeta;
  if (!meta.id || !meta.title || !meta.level || !meta.generator) {
    throw new Error(`${path} is missing required lesson metadata`);
  }

  return { meta, body: match[2].trim() };
}

export const lessons = Object.entries(rawLessons)
  .map(([path, source]) => parseLesson(source, path))
  .sort((a, b) => {
    const levelOrder = { "5e": 0, "3e": 1, "1re": 2 };
    return levelOrder[a.meta.level] - levelOrder[b.meta.level] || a.meta.order - b.meta.order;
  });
