---
id: 2de-number-sets-intervals
order: 1
title: Number sets, intervals, and absolute value
level: 2de
strand: Numbers and Calculations
difficulty: core
estimatedMinutes: 25
summary: Place a number inside the chain of sets from the integers to the reals, translate between inequalities and interval notation, and read absolute value as a distance.
objectives:
  - Classify a number in the sets of naturals, integers, rationals, and reals
  - Translate between inequalities, number lines, and interval notation
  - Interpret an absolute value as a distance and solve simple absolute-value conditions
prerequisites:
  - Fractions and decimal writing
  - Ordering signed numbers
vocabulary:
  - en: interval
    fr: intervalle
    definition: The set of every real number lying between two bounds, with each bound either included or excluded.
  - en: absolute value
    fr: valeur absolue
    definition: The distance from a number to zero on the real line.
  - en: irrational number
    fr: nombre irrationnel
    definition: A real number that cannot be written as a quotient of two integers.
flashcards:
  - front: Which inclusions link the usual number sets?
    back: $\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$, and every inclusion is strict.
  - front: What does $|x-a|\leqslant r$ describe?
    back: Every number whose distance to $a$ is at most $r$, which is the interval $[a-r,\;a+r]$.
  - front: How do you write "x is strictly greater than $-3$ and at most $5$" with intervals?
    back: $-3<x\leqslant 5$, that is $x\in\,]-3,\;5]$.
  - front: Is $0.25$ a rational number?
    back: Yes. $0.25=\frac{1}{4}$, a quotient of two integers, so it belongs to $\mathbb{Q}$.
generator:
  type: signed-arithmetic
  seed: 20101
  count: 6
  min: -12
  max: 12
tieredExercises:
  - id: '2de-sets-t1'
    tier: 1
    tierTitle: 'Direct Application'
    curriculumStatus: 'core'
    prompt: 'Write the set of real numbers $x$ such that $-2\leqslant x<7$ using interval notation.'
    solution: 'The lower bound is included and the upper bound is excluded, so the set is $[-2,\;7[$.'
    hints:
      - 'A square bracket turns towards the numbers when the bound is included.'
    assessment:
      kind: 'exact'
      expected: '[-2, 7['
  - id: '2de-sets-t2'
    tier: 2
    tierTitle: 'Standard Practice'
    curriculumStatus: 'core'
    prompt: 'How many integers $x$ satisfy $|2x-1|\leqslant 7$?'
    solution: '$|2x-1|\leqslant 7$ means $-7\leqslant 2x-1\leqslant 7$, so $-6\leqslant 2x\leqslant 8$ and $-3\leqslant x\leqslant 4$. The integers from $-3$ to $4$ number $4-(-3)+1=8$.'
    hints:
      - 'Replace the absolute value by a double inequality.'
      - 'Count the integers in the interval with the rule largest minus smallest plus one.'
    assessment:
      kind: 'numeric'
      expected: 8
  - id: '2de-sets-t3'
    tier: 3
    tierTitle: 'Official Core Synthesis'
    curriculumStatus: 'core'
    prompt: 'Let $A=\,]-\infty,\;4]$ and $B=\,]-1,\;+\infty[$. Determine $A\cap B$ and $A\cup B$, then explain why $A\cap B$ cannot be written in the form $|x-c|\leqslant r$.'
    solution: 'A number belongs to $A\cap B$ exactly when $-1<x\leqslant 4$, so $A\cap B=\,]-1,\;4]$. Every real number satisfies at least one of $x\leqslant 4$ and $x>-1$, so $A\cup B=\mathbb{R}$. A condition $|x-c|\leqslant r$ always describes $[c-r,\;c+r]$, a set containing both of its bounds. Since $A\cap B$ contains $4$ but not $-1$, it is not of that form.'
    hints:
      - 'Draw both sets on one number line and read off the overlap.'
      - 'Ask which bounds an inequality of the form $|x-c|\leqslant r$ always includes.'
    assessment:
      kind: 'reasoning'
      rubric:
        - 'Gives the intersection as the half-open interval from -1 to 4.'
        - 'Justifies that the union is the whole real line.'
        - 'Explains that an absolute-value inequality with the sign at most produces a closed interval, unlike the intersection.'
  - id: '2de-sets-t4'
    tier: 4
    tierTitle: 'Advanced Challenge'
    curriculumStatus: 'olympiad'
    prompt: 'Let $x$ be irrational and let $r$ be rational. Prove that $r+x$ is irrational. Deduce that the interval $]0,\;1[$ contains infinitely many irrational numbers.'
    solution: 'Suppose $r+x$ were rational, say $r+x=\frac{p}{q}$ with integers $p$ and $q\neq 0$. Writing $r=\frac{a}{b}$ with integers $a$ and $b\neq 0$ gives $x=\frac{p}{q}-\frac{a}{b}=\frac{pb-aq}{qb}$, a quotient of two integers with nonzero denominator. That contradicts the assumption that $x$ is irrational, so $r+x$ is irrational. Now take $x_0=\frac{\sqrt{2}}{2}\approx 0.707$, which is irrational and lies in $]0,\;1[$. For every integer $n\geqslant 1$ the number $\frac{x_0}{n}$ is irrational, because if it were rational then multiplying by the rational $n$ would make $x_0$ rational. Each $\frac{x_0}{n}$ lies in $]0,\;1[$ and the values are pairwise distinct, so the interval contains infinitely many irrational numbers.'
    hints:
      - 'Argue by contradiction and use that the rationals are closed under subtraction.'
      - 'Build infinitely many numbers by dividing one irrational of the interval by successive integers.'
    assessment:
      kind: 'reasoning'
      rubric:
        - 'Sets up a proof by contradiction with a rational written as a quotient of integers.'
        - 'Concludes that a sum of a rational and an irrational is irrational.'
        - 'Constructs an infinite family of distinct irrationals inside the open interval and justifies that each one is irrational.'
---
## The chain of number sets

Every number met in Seconde belongs to one of four nested sets.

$$\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$$

- $\mathbb{N}$ holds the counting numbers $0,1,2,\dots$
- $\mathbb{Z}$ adds the negatives.
- $\mathbb{Q}$ holds every quotient $\frac{a}{b}$ of integers with $b\neq 0$.
- $\mathbb{R}$ holds every abscissa on the number line, including $\sqrt{2}$ and $\pi$, which are **irrational**.

Each inclusion is strict: $-3\in\mathbb{Z}$ but $-3\notin\mathbb{N}$, and $\sqrt{2}\in\mathbb{R}$ but $\sqrt{2}\notin\mathbb{Q}$. A decimal writing that stops, or that repeats a block forever, always comes from a rational number.

## Intervals

An inequality on $x$ and an interval say the same thing in two alphabets.

| Condition | Interval |
| --- | --- |
| $2\leqslant x\leqslant 5$ | $[2,\;5]$ |
| $2<x<5$ | $]2,\;5[$ |
| $x\leqslant 5$ | $]-\infty,\;5]$ |
| $x>2$ | $]2,\;+\infty[$ |

The bracket turns towards the numbers when the bound belongs to the set. Infinity is never a bound that can be reached, so it always carries an open bracket.

Two intervals combine in two ways. The **intersection** $A\cap B$ keeps the numbers in both sets; the **union** $A\cup B$ keeps the numbers in at least one of them. Drawing both sets on one number line makes the answer readable.

## Absolute value as a distance

The absolute value of $x$ is

$$|x|=\begin{cases}x & \text{if } x\geqslant 0\\ -x & \text{if } x<0\end{cases}$$

The useful reading is geometric: $|x|$ is the distance from $x$ to $0$, and $|x-a|$ is the distance from $x$ to $a$. Therefore

$$|x-a|\leqslant r \iff a-r\leqslant x\leqslant a+r \iff x\in[a-r,\;a+r].$$

The interval $[a-r,\;a+r]$ has center $a$ and radius $r$. Reading the center and the radius converts any closed interval back into one absolute-value condition: $[1,\;9]$ has center $5$ and radius $4$, so it is described by $|x-5|\leqslant 4$.

### Stretch thought

Which intervals can be written as $|x-c|<r$, and which cannot? Sort the four bracket patterns and justify each answer.
