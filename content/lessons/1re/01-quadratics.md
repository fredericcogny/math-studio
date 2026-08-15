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
tieredExercises:
  - id: "1re-quadratics-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "For $f(x)=(x-3)^2-4$, state the coordinates of the vertex."
    solution: "The function is in canonical form $(x-\\alpha)^2+\\beta$, so the vertex is $(3,-4)$."
    hints:
      - "Compare the expression with $(x-\\alpha)^2+\\beta$."
    assessment:
      kind: "exact"
      expected: "(3, -4)"
      accepted:
        - "(3,-4)"
        - "vertex (3, -4)"
  - id: "1re-quadratics-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "A rectangular garden is $5$ m longer than it is wide and has area $84$ m$^2$. Find its dimensions."
    solution: "Let the width be $x>0$, so the length is $x+5$. The area condition gives $x(x+5)=84$, or $x^2+5x-84=0$. Since $(x-7)(x+12)=0$, the algebraic solutions are $7$ and $-12$; only $7$ is a possible width. The dimensions are $7$ m by $12$ m."
    hints:
      - "Express both dimensions using one unknown."
      - "Factor $x^2+5x-84$."
    assessment:
      kind: "exact"
      expected: "7 m by 12 m"
      accepted:
        - "width 7 m, length 12 m"
        - "7, 12"
  - id: "1re-quadratics-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "stretch"
    prompt: "A quadratic function has roots $1$ and $5$ and its graph passes through $(0,10)$. Determine the function in factorised, expanded, and canonical form."
    solution: "The roots give $f(x)=a(x-1)(x-5)$. Since $f(0)=5a=10$, $a=2$. Thus the factorised form is $2(x-1)(x-5)$, the expanded form is $2x^2-12x+10$, and completing the square gives the canonical form $2(x-3)^2-8$."
    hints:
      - "Start with $a(x-1)(x-5)$ and use the point $(0,10)$."
      - "The axis lies halfway between the two roots."
    assessment:
      kind: "reasoning"
      rubric:
        - "Uses the roots to write $f(x)=a(x-1)(x-5)$."
        - "Uses $f(0)=10$ to find $a=2$."
        - "Gives the correct factorised, expanded, and canonical forms."
  - id: "1re-quadratics-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "cpge"
    prompt: "For the real parameter $m$, classify the number of real solutions of $x^2-2mx+m+2=0$. Then determine exactly for which $m$ the equation has at least one real solution and all its real solutions are strictly positive. Prove all boundary cases."
    solution: "The discriminant is $\\Delta=4m^2-4(m+2)=4(m-2)(m+1)$. There are two distinct real roots for $m<-1$ or $m>2$, one double root for $m=-1$ or $m=2$, and no real root for $-1<m<2$. When roots exist, their sum is $2m$ and product is $m+2$. For $m>2$, sum and product are positive, so both roots are positive; at $m=2$ the double root is $2$, also positive. For $m<-1$, if $m<-2$ the product is negative, so one root is negative; if $-2<m<-1$ the product is positive but the sum is negative, so both are negative; at $m=-2$ one root is $0$; and at $m=-1$ the double root is $-1$. Therefore every real solution is strictly positive exactly when $m\\ge2$."
    hints:
      - "Begin with the discriminant and factor it as a product in $m$."
      - "For the signs of two real roots, use their sum $2m$ and product $m+2$."
      - "Check $m=-2,-1$, and $2$ separately."
    assessment:
      kind: "reasoning"
      rubric:
        - "Correctly classifies zero, one, or two real roots using $\\Delta=4(m-2)(m+1)$."
        - "Uses root sum and product to analyse positivity."
        - "Checks all boundary cases and concludes $m\\ge2$."
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
