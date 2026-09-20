import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { lessonsByLocale } from "./content";
import { MathMarkdown } from "./MathMarkdown";

function render(content: string, inline = false) {
  return renderToStaticMarkup(createElement(MathMarkdown, { children: content, inline }));
}

describe("MathMarkdown", () => {
  it("renders inline formulas without exposing Markdown delimiters", () => {
    const absoluteValue = render("$|-7|=7$", true);
    const frenchDecimal = render("$-3{,}08$", true);

    expect(absoluteValue).toContain('class="katex"');
    expect(absoluteValue).not.toContain("$|-7|=7$");
    expect(frenchDecimal).toContain('class="katex"');
    expect(frenchDecimal).toContain("<mn>3,08</mn>");
  });

  it("preserves an unmatched currency dollar sign as text", () => {
    expect(render("$74.80 and -12%", true)).toContain("$74.80 and -12%");
  });

  it("renders every lesson without a KaTeX error", () => {
    // A display block whose $$ delimiters do not sit on their own lines swallows
    // the rest of the lesson, which then reaches the reader as raw LaTeX in red.
    const failures: string[] = [];

    for (const locale of ["en", "fr"] as const) {
      for (const lesson of lessonsByLocale[locale]) {
        const fragments: Array<[string, string, boolean]> = [
          [`${locale}:${lesson.meta.id} body`, lesson.body, false],
          ...lesson.meta.flashcards.flatMap((card, index): Array<[string, string, boolean]> => [
            [`${locale}:${lesson.meta.id} flashcard ${index} front`, card.front, true],
            [`${locale}:${lesson.meta.id} flashcard ${index} back`, card.back, true],
          ]),
          ...(lesson.meta.tieredExercises ?? []).flatMap((exercise): Array<[string, string, boolean]> => [
            [`${locale}:${exercise.id} prompt`, exercise.prompt, false],
            [`${locale}:${exercise.id} solution`, exercise.solution, false],
            ...exercise.hints.map((hint, index): [string, string, boolean] =>
              [`${locale}:${exercise.id} hint ${index}`, hint, true]),
          ]),
        ];

        for (const [label, content, inline] of fragments) {
          if (!content.includes("$")) continue;
          if (render(content, inline).includes("katex-error")) failures.push(label);
        }
      }
    }

    expect(failures).toEqual([]);
  }, 30_000);
});
