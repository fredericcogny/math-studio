import { expect, test, type Locator, type Page } from "@playwright/test";

const curricula = {
  "5e": [
    "Signed Numbers, Without Guesswork",
    "Divisibility and Factor Pairs",
    "Fractions and Decimals Describe the Same Numbers",
    "Proportionality from Ratios to Scales",
    "Expressions and Formulas as Calculation Machines",
    "Powers, Squares, and Cubes",
    "Functions Through Formulas, Tables, and Graphs",
    "Angles, Particular Triangles, and Remarkable Lines",
    "Symmetry, Parallelograms, and Special Quadrilaterals",
    "Measurement and Representations of Solids",
    "Data Displays, Mean, and Probability",
    "Block Algorithms, Formulas, and Loops",
  ],
  "4e": [
    "Fraction Operations: All Four",
    "Multiplying and Dividing Signed Numbers",
    "Powers and Their Rules",
    "Expanding, Factoring, and Reducing Expressions",
    "First-Degree Equations",
    "Proportionality, Percentages, and Scales",
    "Mean, Median, and Range",
    "The Pythagorean Theorem",
    "Translation and Vectors",
    "Triangles, Midpoints, and Parallel Lines",
    "Cosine of an Acute Angle",
    "Variables, Loops, and Conditionals",
  ],
  "3e": [
    "Equations as Reversible Machines",
    "Prime Factors and the Euclidean Algorithm",
    "Exact Calculations with Rational Numbers",
    "Powers and Scientific Notation",
    "Identities, Expansion, and Factorization",
    "Linear and Affine Functions",
    "Rates, Percentages, and Scales",
    "Pythagoras, Distance, and Classification",
    "Thales' Theorem and Its Converse",
    "Right-Triangle Trigonometry",
    "Transformations, Homothety, and Similarity",
    "Statistics and Probability",
    "Spatial Geometry and Sections",
    "Quantities, Compound Units, and Volumes",
    "Programming and Algorithmic Reasoning",
    "Clock Arithmetic and Invariants",
  ],
  "2de": [
    "Number Sets, Intervals, and Absolute Value",
    "Exact Calculation with Square Roots and Powers",
    "Equations, Inequalities, and Sign Tables",
    "Percentages, Evolution Rates, and Successive Changes",
    "Functions, Domains, and Variation Tables",
    "Reference Functions, Affine, Square, and Inverse",
    "Distance, Midpoint, and Reasoning in a Coordinate Plane",
    "Vectors, Coordinates, and Collinearity",
    "Equations of Lines, Parallelism, and Systems",
    "Right-Triangle Trigonometry and Orthogonal Projection",
    "Statistical Indicators, Quartiles and Standard Deviation",
    "Probability on a Finite Set",
    "Algorithms in Python, Functions, Loops, and Lists",
  ],
  "1re": [
    "Reading a Quadratic Three Ways",
    "Proof Through Parity and Invariants",
    "Derivatives and Tangent Lines",
    "The Unit Circle and Sine/Cosine Functions",
    "The Dot Product in the Plane",
    "Conditional Probability and Independence",
  ],
  "TAL-spe": [
    "Proof by Induction",
    "Limits of Sequences and Convergence",
    "Continuity and the Intermediate Value Theorem",
    "The Natural Logarithm Function",
    "Three-Dimensional Geometry (Lines, Planes, and Orthogonality)",
    "Combinatorics & Counting",
  ],
  "TAL-exp": [
    "Complex Numbers: Forms & Geometry",
    "Arithmetic, Congruences, Bézout's Identity, and Euclid's Lemma",
    "Matrices, Graphs & Markov Chains",
  ],
} as const;

async function showFirstTierExercise(page: Page): Promise<Locator> {
  await page.goto("/");
  const practice = page.locator(".practice-block");
  await practice.scrollIntoViewIfNeeded();
  await practice.getByRole("button", { name: "Tier 1: Application" }).click();
  return practice.locator(".exercise-card").first();
}

test.describe("desktop practice layout", () => {
  test.use({ viewport: { width: 1280, height: 900 } });

  test("shows the complete curriculum for every level", async ({ page }) => {
    await page.goto("/");
    const profiles = page.getByLabel("Anonymous learner profile");
    const curriculum = page.getByRole("navigation", { name: "Lessons" });

    for (const [level, lessonTitles] of Object.entries(curricula)) {
      await profiles.getByRole("button", { name: level, exact: true }).click();
      await expect(curriculum.locator(".lesson-link")).toHaveCount(lessonTitles.length);
      await expect(curriculum.locator(".eyebrow")).toHaveText(`Curriculum · ${lessonTitles.length} lessons`);
      for (const title of lessonTitles) {
        await expect(curriculum.getByRole("button", { name: new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")) })).toBeVisible();
      }
    }
  });

  test("switches all content between English and French and remembers the choice", async ({ page }) => {
    await page.goto("/");
    const language = page.getByRole("group", { name: "Language" });
    await expect(language.getByRole("button", { name: "EN" })).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.getByRole("heading", { name: "Signed Numbers, Without Guesswork" })).toBeVisible();
    const languageBox = await language.boundingBox();
    expect(languageBox!.x + languageBox!.width).toBeGreaterThan(1200);
    await expect(page.locator(".topbar")).toHaveScreenshot("topbar-en-desktop.png", { animations: "disabled" });

    await language.getByRole("button", { name: "FR" }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", "fr");
    await expect(page.getByRole("heading", { name: "Les nombres relatifs, sans deviner" })).toBeVisible();
    await expect(page.getByRole("navigation", { name: "Leçons" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Niveau 1: Application" })).toBeVisible();
    await expect(page.locator(".lesson-copy")).toContainText("Un nombre relatif repère");
    await expect(page.locator(".topbar")).toHaveScreenshot("topbar-fr-desktop.png", { animations: "disabled" });

    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("lang", "fr");
    await expect(page.getByRole("heading", { name: "Les nombres relatifs, sans deviner" })).toBeVisible();
    await page.getByRole("group", { name: "Langue" }).getByRole("button", { name: "EN" }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });

  test("renders French flashcard formulas instead of raw LaTeX", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("group", { name: "Language" }).getByRole("button", { name: "FR" }).click();
    const flashcards = page.locator(".flashcard-block");
    await flashcards.getByRole("button", { name: "Suivante", exact: true }).click();

    const card = flashcards.locator(".flashcard");
    await expect(card.locator(".katex")).toHaveCount(2);
    await expect(card.locator(".katex-html").first()).toContainText("−3,08");
    await expect(card).not.toContainText("$");

    await card.click();
    await expect(card.locator(".katex")).toHaveCount(1);
    await expect(card.locator(".katex-html")).toContainText("−3,08");
    await expect(card).not.toContainText("$");
  });

  test("renders a full-width answer field with concise English labels", async ({ page }) => {
    const card = await showFirstTierExercise(page);
    const inputRow = card.locator(".exercise-input-row");
    const answer = inputRow.getByPlaceholder("Your numeric answer");
    const vocabularyTerm = page.locator(".vocabulary-term").first();

    await expect(card.locator(".tier-badge")).toHaveText("Tier 1: Direct Application");
    await expect(card).not.toContainText(/Niveau|Socratic/i);
    await vocabularyTerm.locator("summary").click();
    await expect(vocabularyTerm.locator("span")).toBeVisible();
    await expect(vocabularyTerm.locator("span")).toContainText(/nombre relatif|signed number/i);

    const [rowBox, inputBox] = await Promise.all([
      inputRow.boundingBox(),
      answer.boundingBox(),
    ]);
    expect(rowBox).not.toBeNull();
    expect(inputBox).not.toBeNull();
    expect(inputBox!.width).toBeGreaterThanOrEqual(rowBox!.width - 2);

    await expect(card).toHaveScreenshot("exercise-card-desktop.png", {
      animations: "disabled",
    });

    await card.getByRole("button", { name: "Ask Tutor" }).click();
    const tutor = card.locator(".socratic-chat-card");
    await expect(tutor).toBeVisible();
    await expect(tutor).not.toContainText(/Socratic|Powered by Gemini|No direct answers/i);
    await expect(card.locator(".socratic-chat-header")).toHaveCount(0);
    await expect(card.locator(".socratic-wrapper")).toHaveScreenshot("tutor-desktop.png", {
      animations: "disabled",
    });
  });

  test("keeps the newest tutor reply in view", async ({ page }) => {
    await page.route("**/v1beta/models/**", (route) => route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        candidates: [{ content: { parts: [{ text: "Consider the relationship in the equation. Which term would you isolate next?" }] } }],
      }),
    }));

    const card = await showFirstTierExercise(page);
    await card.getByRole("button", { name: "Ask Tutor" }).click();
    const tutorInput = card.getByPlaceholder("Ask a question or explain your reasoning...");
    const messages = card.locator(".socratic-messages");

    for (let turn = 1; turn <= 6; turn += 1) {
      await tutorInput.fill(`Help me with step ${turn}`);
      await card.getByRole("button", { name: "Send" }).click();
      await expect(card.locator(".socratic-bubble")).toHaveCount(turn * 2);
    }

    await expect(card.locator(".socratic-bubble").last()).toBeInViewport();
    await expect.poll(() => messages.evaluate(
      (element) => element.scrollHeight - element.scrollTop - element.clientHeight,
    )).toBeLessThanOrEqual(1);
  });

  test("masters core tiers without requiring the advanced challenge", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("Anonymous learner profile").getByRole("button", { name: "1re", exact: true }).click();
    await page.getByRole("navigation", { name: "Lessons" }).getByRole("button", { name: /Unit Circle/ }).click();
    const practice = page.locator(".practice-block");
    await practice.scrollIntoViewIfNeeded();
    const cards = practice.locator(".exercise-card");

    await cards.nth(0).getByPlaceholder("Your exact answer").fill("(-sqrt(3)/2, -1/2)");
    await cards.nth(1).getByPlaceholder("Your exact answer").fill("{0, 2pi/3}");
    await cards.nth(2).getByPlaceholder("Your numeric answer").fill("1.5");
    await practice.getByRole("button", { name: "Check Visible Exercises" }).click();

    await expect(page.locator(".result-banner strong")).toHaveText("100%");
    await expect(page.locator(".result-banner")).toContainText("Core progression completed");
    await expect(cards.nth(3)).not.toHaveClass(/incorrect/);

    await cards.nth(0).getByPlaceholder("Your exact answer").fill("incorrect");
    await expect(page.locator(".result-banner")).toHaveCount(0);
  });

  test("keeps a filtered partial check provisional", async ({ page }) => {
    const card = await showFirstTierExercise(page);
    await card.getByPlaceholder("Your numeric answer").fill("-0.25");
    await page.locator(".practice-block").getByRole("button", { name: "Check Visible Exercises" }).click();
    await expect(card.getByText("Correct")).toBeVisible();
    await expect(page.locator(".result-banner")).toHaveCount(0);
  });

  test("supports self-assessment for an advanced proof", async ({ page }) => {
    await showFirstTierExercise(page);
    const practice = page.locator(".practice-block");
    await practice.getByRole("button", { name: "Tier 4: Advanced Challenge" }).click();
    const challenge = practice.locator(".exercise-card").first();

    await expect(challenge.locator(".tier-badge")).toHaveText("Tier 4: Advanced Challenge");
    await expect(challenge.locator(".curriculum-status")).toHaveText("Olympiad");
    await challenge.getByPlaceholder(/Write your argument/).fill("I construct a valid order, compute every partial sum, and prove the lower bound using the card 6.");
    await practice.getByRole("button", { name: "Check Visible Exercises" }).click();
    await expect(challenge.getByText("Model solution")).toBeVisible();

    const criteria = challenge.locator(".reasoning-review input[type=checkbox]");
    for (let index = 0; index < await criteria.count(); index += 1) await criteria.nth(index).check();
    await practice.getByRole("button", { name: "Check Visible Exercises" }).click();
    await expect(challenge.getByText("Self-assessed rubric complete")).toBeVisible();
  });
});

test.describe("mobile practice layout", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("keeps the exercise and answer field within the viewport", async ({ page }) => {
    const card = await showFirstTierExercise(page);
    const inputRow = card.locator(".exercise-input-row");
    const answer = inputRow.getByRole("textbox");
    const [rowBox, inputBox] = await Promise.all([
      inputRow.boundingBox(),
      answer.boundingBox(),
    ]);

    expect(await page.locator("html").evaluate(
      (element) => element.scrollWidth <= element.clientWidth,
    )).toBe(true);
    await expect(page.locator(".language-toggle")).toBeVisible();
    await expect(page.locator(".topbar")).toHaveScreenshot("topbar-mobile.png", { animations: "disabled" });
    expect(inputBox!.width).toBeGreaterThanOrEqual(rowBox!.width - 2);
    await expect(card).toHaveScreenshot("exercise-card-mobile.png", {
      animations: "disabled",
    });
  });
});
