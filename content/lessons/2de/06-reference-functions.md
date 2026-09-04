---
id: 2de-reference-functions
order: 6
title: Reference functions, affine, square, and inverse
level: 2de
strand: Functions
difficulty: core
estimatedMinutes: 30
summary: Learn the shape, variations, and comparison rules of the affine, square, and inverse functions, then use them to solve inequalities.
objectives:
  - State the variations and the curve of the affine, square, and inverse functions
  - Compare a number, its square, and its reciprocal according to the interval it lies in
  - Solve an inequality by comparing the positions of two reference curves
prerequisites:
  - Functions, domains, and variation tables
  - Sign tables
vocabulary:
  - en: affine function
    fr: fonction affine
    definition: A function of the form x maps to ax plus b, whose curve is a straight line.
  - en: parabola
    fr: parabole
    definition: The curve of the square function, symmetric about the vertical axis.
  - en: hyperbola
    fr: hyperbole
    definition: The curve of the inverse function, made of two separate branches.
flashcards:
  - front: What decides whether an affine function increases or decreases?
    back: The sign of the slope $a$. If $a>0$ it increases, if $a<0$ it decreases, and if $a=0$ it is constant.
  - front: Where is the square function decreasing?
    back: On $]-\infty,\;0]$. It increases on $[0,\;+\infty[$ and its minimum is $0$, reached at $x=0$.
  - front: Is the inverse function decreasing on its whole domain?
    back: It is decreasing on $]-\infty,\;0[$ and on $]0,\;+\infty[$, but not on the union of the two, since $f(-1)=-1$ is less than $f(1)=1$.
  - front: For $0<x<1$, how do $x$, $x^{2}$ and $\frac{1}{x}$ compare?
    back: $x^{2}<x<1<\dfrac{1}{x}$. Squaring shrinks a number of $]0,\;1[$ and taking the reciprocal enlarges it.
generator:
  type: quadratic-value
  seed: 20601
  count: 6
  coefficientMin: -4
  coefficientMax: 4
  xMin: -5
  xMax: 5
tieredExercises:
  - id: '2de-reffunc-t1'
    tier: 1
    tierTitle: 'Direct Application'
    curriculumStatus: 'core'
    prompt: 'Let $f(x)=\dfrac{1}{x}$. Compute $f(-0.25)$.'
    solution: '$f(-0.25)=\dfrac{1}{-0.25}=-4$, because $-0.25=-\dfrac{1}{4}$ and the reciprocal of $-\dfrac{1}{4}$ is $-4$.'
    hints:
      - 'Write the decimal as a fraction and turn it upside down.'
    assessment:
      kind: 'numeric'
      expected: -4
  - id: '2de-reffunc-t2'
    tier: 2
    tierTitle: 'Standard Practice'
    curriculumStatus: 'core'
    prompt: 'Solve $x^{2}\leqslant 9$ and give the number of integers in the solution set.'
    solution: 'The inequality is equivalent to $x^{2}-9\leqslant 0$, that is $(x-3)(x+3)\leqslant 0$. A sign table gives the solution set $[-3,\;3]$. The integers in it are $-3,-2,-1,0,1,2,3$, so there are $7$ of them.'
    hints:
      - 'Move everything to one side and factor the difference of two squares.'
      - 'The square function is not monotonic, so the answer is an interval around zero, not a half-line.'
    assessment:
      kind: 'numeric'
      expected: 7
  - id: '2de-reffunc-t3'
    tier: 3
    tierTitle: 'Official Core Synthesis'
    curriculumStatus: 'core'
    prompt: 'On the same axes, sketch the curves of $x\mapsto x$ and $x\mapsto x^{2}$, then determine exactly the set of real numbers $x$ for which $x^{2}<x$. Interpret the answer in terms of the relative positions of the two curves.'
    solution: 'The inequality $x^{2}<x$ is equivalent to $x^{2}-x<0$, that is $x(x-1)<0$. The two factors vanish at $0$ and $1$; a sign table shows that the product is negative exactly on $]0,\;1[$. So $x^{2}<x$ holds precisely for $0<x<1$. Geometrically, the parabola is below the line $y=x$ strictly between the two intersection points $(0,0)$ and $(1,1)$, and above it elsewhere. This matches the fact that squaring shrinks numbers of $]0,\;1[$ and enlarges numbers greater than $1$.'
    hints:
      - 'Compare two expressions by studying the sign of their difference.'
      - 'The intersection points of the curves are the values where the difference is zero.'
    assessment:
      kind: 'reasoning'
      rubric:
        - 'Transforms the comparison into the sign of a factored difference.'
        - 'Builds the sign table and gives the open interval from 0 to 1.'
        - 'Interprets the result as the parabola lying below the line between the two intersection points.'
  - id: '2de-reffunc-t4'
    tier: 4
    tierTitle: 'Advanced Challenge'
    curriculumStatus: 'olympiad'
    prompt: 'Determine, with a complete case discussion, the set of all real numbers $x$ such that $x^{2}>\dfrac{1}{x}$.'
    solution: 'The value $x=0$ is forbidden. Two cases follow from the sign of $x$. If $x>0$, multiplying both sides by the positive number $x$ preserves the inequality and gives $x^{3}>1$, that is $x>1$, because the cube function is increasing. If $x<0$, then $x^{2}>0$ while $\dfrac{1}{x}<0$, so the inequality holds for every negative $x$. Combining the two cases, the solution set is $]-\infty,\;0[\;\cup\;]1,\;+\infty[$. A check at $x=-2$ gives $4>-0.5$, true, and at $x=0.5$ gives $0.25>2$, false, which is consistent.'
    hints:
      - 'Multiplying by $x$ is only allowed once the sign of $x$ is fixed, so split into cases.'
      - 'For negative $x$ compare the signs of the two sides rather than computing.'
    assessment:
      kind: 'reasoning'
      rubric:
        - 'Excludes zero and organizes the work into the cases x positive and x negative.'
        - 'Handles the positive case correctly, reaching the condition x greater than 1.'
        - 'Concludes that every negative value works and states the union of the two intervals.'
---
## Affine functions

An **affine function** has the form $f(x)=ax+b$. Its curve is a straight line with **slope** $a$ and $y$-intercept $b$. Between two inputs,

$$a=\frac{f(x_{2})-f(x_{1})}{x_{2}-x_{1}},$$

so the slope is the constant rate of change. The sign of $a$ decides everything: $a>0$ gives an increasing function, $a<0$ a decreasing one, and $a=0$ a constant one. A **linear** function is the special case $b=0$, which is exactly the situation of proportionality.

## The square function

The function $f(x)=x^{2}$ is defined on $\mathbb{R}$, and $f(-x)=f(x)$, so its curve, the **parabola**, is symmetric about the vertical axis.

| $x$ | $-\infty$ | | $0$ | | $+\infty$ |
| --- | --- | --- | --- | --- | --- |
| $x^{2}$ | | decreasing | $0$ | increasing | |

Its minimum is $0$, reached at $x=0$. Because it is not monotonic on $\mathbb{R}$, the equivalence $x^{2}\leqslant k$ never reduces to a single inequality on $x$: for $k\geqslant 0$ it gives $-\sqrt{k}\leqslant x\leqslant\sqrt{k}$.

## The inverse function

The function $f(x)=\dfrac{1}{x}$ is defined on $]-\infty,\;0[\cup\,]0,\;+\infty[$. Its curve, the **hyperbola**, has two branches and is symmetric about the origin.

The function is decreasing **on each branch**, but not on the union of the two: $-1<1$ while $f(-1)=-1<f(1)=1$. Monotonicity is a property of an interval, and the domain here is not an interval.

## Comparing a number with its square and its reciprocal

Positions depend on the interval, which is why sketches beat memory.

| Interval | Order |
| --- | --- |
| $0<x<1$ | $x^{2}<x<1<\dfrac{1}{x}$ |
| $x=1$ | $x^{2}=x=\dfrac{1}{x}=1$ |
| $x>1$ | $\dfrac{1}{x}<1<x<x^{2}$ |

## Comparing two curves

To compare $f$ and $g$, study the **sign of the difference** $f(x)-g(x)$. Where the difference is positive, the curve of $f$ is above that of $g$; where it is zero, the curves meet. This one method solves every position question, and it turns an inequality between functions into a sign table.

### Stretch thought

Sketch $x\mapsto x^{2}$ and $x\mapsto\dfrac{1}{x}$ on the same axes for $x>0$. Read off the number of intersection points, then confirm it algebraically.
