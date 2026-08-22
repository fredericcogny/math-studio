import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
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
});
