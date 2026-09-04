---
id: 2de-functions-variations
locale: en
title: Functions, Domains, and Variation Tables
strand: Functions
summary: Treat a function as a process with a domain, move between formula, table, and curve, and summarize its behavior in a variation table.
objectives:
  - Determine the domain of a function given by a formula
  - Read images, preimages, and extrema from a curve
  - Build a variation table and use it to count solutions of an equation
prerequisites:
  - Coordinates in the plane
  - Interval notation and sign tables
vocabulary:
  - en: domain
    definition: The set of all input values for which the function produces a result.
  - en: preimage
    definition: An input whose image under the function equals a given output value.
  - en: variation table
    definition: A table summarizing where a function increases and decreases, together with its values at the boundaries.
flashcards:
  - front: What is the difference between an image and a preimage?
    back: The image of $a$ is the single value $f(a)$. A preimage of $b$ is any $x$ with $f(x)=b$, and there may be none, one, or several.
  - front: Which two situations shrink a domain?
    back: A denominator that vanishes and a square root of a negative number. Solve those conditions before anything else.
  - front: What does it mean that $f$ is increasing on an interval $I$?
    back: For all $a$ and $b$ in $I$ with $a<b$, we have $f(a)\leqslant f(b)$. The order of the inputs is preserved.
  - front: How does a variation table count the solutions of $f(x)=k$?
    back: On each interval of monotonicity the equation has at most one solution, so counting the crossings of the level $k$ gives the total.
exercises:
  - id: 2de-funcvar-t1
    tierTitle: Direct Application
    prompt: Let $f(x)=x^{2}-3x+2$. Compute $f(-2)$.
    solution: $f(-2)=(-2)^{2}-3\times(-2)+2=4+6+2=12$.
    hints:
      - Replace every $x$ by $-2$ and keep the brackets around the negative number.
  - id: 2de-funcvar-t2
    tierTitle: Standard Practice
    prompt: The function $g$ is defined by $g(x)=2x^{2}-8x+1$, and it can be rewritten as $g(x)=2(x-2)^{2}-7$. Using that second form, give the minimum value of $g$ on $\mathbb{R}$.
    solution: The square $(x-2)^{2}$ is always nonnegative and equals $0$ only for $x=2$. Hence $2(x-2)^{2}\geqslant 0$ and $g(x)\geqslant -7$, with equality at $x=2$. The minimum value of $g$ is $-7$, reached at $x=2$.
    hints:
      - A square is never negative, so the smallest possible value of the square is $0$.
      - Say both which value is the minimum and where it is reached.
  - id: 2de-funcvar-t3
    tierTitle: Official Core Synthesis
    prompt: A function $h$ is defined on $[-4,\;5]$. It decreases from $h(-4)=6$ to $h(1)=-3$, then increases from $h(1)=-3$ to $h(5)=4$. Build its variation table, then determine, for every real number $k$, the number of solutions of $h(x)=k$ on $[-4,\;5]$.
    solution: >-
      The table has one row for $x$ going from $-4$ to $5$ with the intermediate value $1$, and one row for $h$ falling from $6$ to $-3$ on $[-4,\;1]$ then rising from $-3$ to $4$ on $[1,\;5]$. On each of these two intervals $h$ is monotonic, so $h(x)=k$ has at most one solution on each. Counting the crossings gives no solution if $k<-3$ or $k>6$; exactly one solution if $k=-3$, since only the minimum is reached, and also exactly one if $4<k\leqslant 6$, because only the decreasing branch reaches those values; and exactly two solutions if $-3<k\leqslant 4$, one on each branch.
    hints:
      - Draw the table first and mark the values $-3$, $4$ and $6$ on the vertical axis.
      - On each branch the equation has at most one solution, so compare $k$ with the endpoint values.
    rubric:
      - Produces a correct variation table with the minimum at x equal to 1.
      - Uses monotonicity on each branch to bound the number of solutions by one per branch.
      - Gives the complete classification of the number of solutions for every value of k.
  - id: 2de-funcvar-t4
    tierTitle: Advanced Challenge
    prompt: Prove, using only the definition of monotonicity, that the function $f(x)=x^{2}$ is decreasing on $]-\infty,\;0]$ and increasing on $[0,\;+\infty[$. Then explain why $f$ is not monotonic on $\mathbb{R}$, and determine the domain of $u(x)=\dfrac{1}{\sqrt{4-x^{2}}}$.
    solution: >-
      Take $a<b$ in $]-\infty,\;0]$. Then $f(b)-f(a)=b^{2}-a^{2}=(b-a)(b+a)$. The factor $b-a$ is positive, and since $a<b\leqslant 0$ we have $a<0$ and $b\leqslant 0$, so $b+a<0$. Hence $f(b)-f(a)<0$, so $f(b)<f(a)$ and $f$ is strictly decreasing there. On $[0,\;+\infty[$, taking $0\leqslant a<b$ gives $b-a>0$ and $b+a>0$, so $f(b)-f(a)>0$ and $f$ is strictly increasing. The function is not monotonic on $\mathbb{R}$ because $-2<0<1$ while $f(-2)=4>f(0)=0$ and $f(0)=0<f(1)=1$, so the order of the inputs is reversed on one pair and preserved on the other. For the domain of $u$, the square root needs $4-x^{2}\geqslant 0$ and the denominator needs $4-x^{2}\neq 0$, so $4-x^{2}>0$. Since $4-x^{2}=(2-x)(2+x)$, a sign table gives $-2<x<2$, so the domain is $]-2,\;2[$.
    hints:
      - Study the sign of $f(b)-f(a)$ after factoring the difference of two squares.
      - A square root under a denominator must be strictly positive, not merely nonnegative.
    rubric:
      - Uses the factorization of the difference of squares and the sign of each factor on the right interval.
      - Gives an explicit numerical counterexample to monotonicity on the whole real line.
      - Combines the root condition and the nonzero denominator condition to obtain the open interval from -2 to 2.
---
## A Function Is a Process with a Domain

A **function** $f$ assigns to each input $x$ at most one output $f(x)$, called the **image** of $x$. The set of inputs that actually produce a result is the **domain**, written $D_{f}$.

Two situations restrict a domain:

- a denominator must not vanish, so $x\mapsto\dfrac{1}{x-3}$ has domain $]-\infty,\;3[\cup\,]3,\;+\infty[$;
- a square root needs a nonnegative argument, so $x\mapsto\sqrt{x+1}$ has domain $[-1,\;+\infty[$.

A **preimage** of a number $b$ is any $x$ in the domain with $f(x)=b$. Images are unique, preimages are not: for $f(x)=x^{2}$, the number $9$ has two preimages, $-3$ and $3$.

## Three Representations, One Function

The same function appears as a formula, a table of values, and a curve. Reading skills transfer between them.

- The **image** of $a$ is the $y$-coordinate of the point of the curve with $x$-coordinate $a$.
- The **preimages** of $b$ are the $x$-coordinates of the intersection points of the curve with the horizontal line $y=b$.
- Solving $f(x)\leqslant b$ means finding where the curve lies below that line.

## Variations and Extrema

A function $f$ is **increasing** on an interval $I$ when $a<b$ implies $f(a)\leqslant f(b)$ for all $a$ and $b$ in $I$: it preserves order. It is **decreasing** when $a<b$ implies $f(a)\geqslant f(b)$: it reverses order. The words apply to an interval, never to a single point.

The standard proof technique is to factor the difference $f(b)-f(a)$ and read its sign.

A **variation table** compresses all of this. Its first row lists the boundaries of the domain and the points where the direction changes; its second row uses arrows and records the values at those points.

| $x$ | $-4$ | | $1$ | | $5$ |
| --- | --- | --- | --- | --- | --- |
| $h$ | $6$ | decreasing | $-3$ | increasing | $4$ |

The table shows a **minimum** of $-3$ reached at $x=1$, and a **maximum** of $6$ reached at $x=-4$.

## Counting Solutions from a Table

On an interval where $f$ is monotonic, the equation $f(x)=k$ has **at most one** solution. So a variation table with two branches gives an immediate count: compare $k$ with the values at the boundaries and at the extremum, then add up the crossings branch by branch. This reasoning replaces guesswork with a complete case discussion.

### Stretch Thought

Two functions are increasing on the same interval. Is their sum increasing? Is their product? Find a proof or a counterexample for each question.
