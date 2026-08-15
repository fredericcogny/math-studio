---
id: 1re-quadratics
order: 1
title: Reading a quadratic three ways
level: 1re
strand: Functions and algebra
difficulty: core
estimatedMinutes: 30
summary: Connect expanded, canonical, and factorised forms instead of treating them as separate topics.
objectives:
  - Evaluate a polynomial safely
  - Choose a useful form
  - Connect roots and graph
prerequisites:
  - Algebraic expansion
  - Function notation
vocabulary:
  - en: quadratic
    fr: trinôme du second degré
    definition: A polynomial function of degree two, written ax²+bx+c with a non-zero.
  - en: root
    fr: racine
    definition: An input value for which the function equals zero.
  - en: vertex
    fr: sommet
    definition: The turning point of a parabola.
flashcards:
  - front: What does the expanded form ax²+bx+c reveal immediately?
    back: The leading coefficient a and y-intercept c.
  - front: What does a(x-r₁)(x-r₂) reveal?
    back: The roots r₁ and r₂, when the factorisation exists over the chosen number set.
  - front: What does a(x-α)²+β reveal?
    back: The vertex (α, β) and the minimum or maximum value β.
generator:
  type: quadratic-value
  seed: 11601
  count: 6
  coefficientMin: -6
  coefficientMax: 6
  xMin: -5
  xMax: 5
---
## One function, three viewpoints

For a quadratic function, each algebraic form answers a different question efficiently.

**Expanded form**

$$f(x)=ax^2+bx+c$$

shows the leading behaviour and gives $f(0)=c$ immediately.

**Canonical form**

$$f(x)=a(x-\alpha)^2+\beta$$

shows the vertex $(\alpha,\beta)$ and the axis of symmetry $x=\alpha$.

**Factorised form**

$$f(x)=a(x-r_1)(x-r_2)$$

shows the roots $r_1$ and $r_2$.

## Substitution needs brackets

For $f(x)=2x^2-3x-4$, calculate $f(-2)$ by writing

$$f(-2)=2(-2)^2-3(-2)-4=8+6-4=10.$$

Brackets prevent the common mistake $(-2)^2=-4$.

## Translate between representations

Starting from $(x-2)(x+5)$, expansion gives $x^2+3x-10$. The factorised form tells us the roots; the expanded form tells us the vertical intercept. They describe the same parabola.

> Before calculating, ask which representation exposes the information you need.

### CPGE runway

This habit of changing representation is fundamental beyond secondary school: algebraic form, graph, sign table, derivative, and geometric interpretation are complementary views of one object.
