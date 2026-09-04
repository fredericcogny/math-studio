---
id: 2de-equations-inequalities
locale: en
title: Equations, Inequalities, and Sign Tables
strand: Algebra
summary: Choose between expanding and factoring, solve product and quotient equations on their domain, and read the solutions of an inequality from a sign table.
objectives:
  - Solve a first-degree equation and a product equation
  - Solve a first-degree inequality and state the answer as an interval
  - Build the sign table of a product or quotient of affine factors
prerequisites:
  - Expanding and factoring with the remarkable identities
  - Interval notation
vocabulary:
  - en: product equation
    definition: An equation stating that a product equals zero, solved by setting each factor equal to zero.
  - en: sign table
    definition: A table showing the sign of each factor and of the whole expression across the real line.
  - en: forbidden value
    definition: A value of the unknown that makes a denominator zero and is therefore excluded from the domain.
flashcards:
  - front: When does a product of two numbers equal zero?
    back: Exactly when at least one of the factors is zero. This is why $A\times B=0$ splits into $A=0$ or $B=0$.
  - front: What happens to an inequality when you multiply by a negative number?
    back: The inequality sign reverses. Multiplying $-2<3$ by $-1$ gives $2>-3$.
  - front: Why can you not multiply both sides of an inequality by $x-2$?
    back: The sign of $x-2$ is unknown, so the direction of the inequality is unknown. Move everything to one side and use a sign table instead.
  - front: What is the first step for an equation with an unknown in a denominator?
    back: State the forbidden values that make the denominator zero, then solve on the remaining domain.
exercises:
  - id: 2de-eqineq-t1
    tierTitle: Direct Application
    prompt: Solve $5x-3=2x+9$.
    solution: Subtracting $2x$ from both sides gives $3x-3=9$, then $3x=12$, so $x=4$.
    hints:
      - Gather the terms in $x$ on one side and the constants on the other.
  - id: 2de-eqineq-t2
    tierTitle: Standard Practice
    prompt: Solve $-3x+5\leqslant 11$ and give the smallest integer that belongs to the solution set.
    solution: Subtracting $5$ gives $-3x\leqslant 6$. Dividing by $-3$ reverses the sign, so $x\geqslant -2$ and the solution set is $[-2,\;+\infty[$. The smallest integer in it is $-2$.
    hints:
      - Isolate the term in $x$ first.
      - Dividing by a negative number reverses the inequality.
  - id: 2de-eqineq-t3
    tierTitle: Official Core Synthesis
    prompt: Let $P(x)=(2x-6)(x+4)$. Solve $P(x)=0$, build the sign table of $P$, and deduce the solution set of $P(x)<0$. Then explain what changes if the expression becomes $\dfrac{2x-6}{x+4}$.
    solution: >-
      The product is zero when $2x-6=0$ or $x+4=0$, that is $x=3$ or $x=-4$. The factor $2x-6$ is negative before $3$ and positive after; the factor $x+4$ is negative before $-4$ and positive after. Multiplying signs gives $P(x)>0$ on $]-\infty,\;-4[$, $P(x)<0$ on $]-4,\;3[$ and $P(x)>0$ on $]3,\;+\infty[$. Hence $P(x)<0$ has solution set $]-4,\;3[$. For the quotient the sign table is identical, because a quotient and a product of the same two factors share their signs, but $x=-4$ becomes a forbidden value, so the quotient is not defined there and $-4$ is excluded from the domain instead of being a zero.
    hints:
      - Find the zero of each affine factor before drawing the table.
      - A quotient has the same sign as the corresponding product, but its denominator cannot vanish.
    rubric:
      - Finds both roots and orders them on the real line.
      - Builds a correct sign table with one row per factor and one row for the expression.
      - Gives the solution set as an open interval and explains the forbidden value for the quotient.
  - id: 2de-eqineq-t4
    tierTitle: Advanced Challenge
    prompt: Solve $\dfrac{x+1}{x-2}\geqslant 1$ completely, and explain why multiplying both sides by $x-2$ is not a valid step.
    solution: >-
      The value $x=2$ is forbidden. On the rest of the line, subtract $1$ from both sides and put everything over one denominator, $\dfrac{x+1}{x-2}-1=\dfrac{(x+1)-(x-2)}{x-2}=\dfrac{3}{x-2}$. The inequality becomes $\dfrac{3}{x-2}\geqslant 0$. Since the numerator $3$ is positive, the quotient is nonnegative exactly when $x-2>0$, and it is never zero. The solution set is therefore $]2,\;+\infty[$. Multiplying both sides by $x-2$ is invalid because the sign of $x-2$ depends on $x$, so for $x<2$ the multiplication reverses the inequality and a single multiplication cannot treat both sides of $2$ at once. Checking $x=0$ confirms this, since $\dfrac{0+1}{0-2}=-0.5$, which is not greater than or equal to $1$.
    hints:
      - Bring everything to one side over a common denominator instead of cross-multiplying.
      - Test one value on each side of the forbidden value to confirm the conclusion.
    rubric:
      - States the forbidden value and works on the correct domain.
      - Reduces the inequality to a single quotient and reads its sign correctly.
      - Explains that multiplying by an expression of unknown sign is invalid, with a counterexample or a case discussion.
---
## Expand or Factor, on Purpose

An algebraic expression has several equal writings, and each writing answers a different question.

- The **expanded** form $x^{2}-x-6$ makes it easy to compute a value.
- The **factored** form $(x-3)(x+2)$ makes the zeros visible.

Choosing the form is the first decision of any exercise. To find zeros or signs, factor. The three identities do the work:

$$(a+b)^{2}=a^{2}+2ab+b^{2},\qquad (a-b)^{2}=a^{2}-2ab+b^{2},\qquad (a-b)(a+b)=a^{2}-b^{2}.$$

## Product Equations

A product is zero exactly when one of its factors is zero:

$$A\times B=0\iff A=0 \text{ or } B=0.$$

So $(2x-6)(x+4)=0$ gives $x=3$ or $x=-4$. This rule has no equivalent for other values: from $A\times B=12$ nothing can be concluded about $A$ alone.

## Forbidden Values

An expression such as $\dfrac{2x-6}{x+4}$ is defined only when $x+4\neq 0$. The value $x=-4$ is a **forbidden value**, and the domain is $]-\infty,\;-4[\cup\,]-4,\;+\infty[$. Listing forbidden values before solving prevents an answer that does not exist.

## Inequalities and Sign Tables

Adding the same number to both sides, or multiplying by a **positive** number, keeps the direction of an inequality. Multiplying by a **negative** number reverses it.

For anything beyond one affine expression, the reliable method is the **sign table**. To solve $(2x-6)(x+4)<0$:

1. Find the zero of each factor: $x=3$ and $x=-4$.
2. Order them on the real line and give each factor a row.
3. Fill each row with the sign of an affine expression, which changes once, at its zero.
4. Multiply column by column.

| $x$ | $-\infty$ | | $-4$ | | $3$ | | $+\infty$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $2x-6$ | | $-$ | | $-$ | $0$ | $+$ | |
| $x+4$ | | $-$ | $0$ | $+$ | | $+$ | |
| product | | $+$ | $0$ | $-$ | $0$ | $+$ | |

The last row answers every sign question about the expression at once. Here the product is negative on $]-4,\;3[$.

The same table works for a quotient, since $\dfrac{A}{B}$ and $A\times B$ always have the same sign. Only the treatment of the boundary changes: a zero of the denominator is excluded rather than included.

### Stretch Thought

How many sign changes can a product of $n$ affine factors have? Build an example with exactly three sign changes and explain why no more are possible with three factors.
