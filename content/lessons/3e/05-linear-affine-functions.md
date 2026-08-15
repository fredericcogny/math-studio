---
id: 3e-linear-affine-functions
order: 6
title: Linear and affine functions
level: 3e
strand: Functions and modeling
difficulty: core
estimatedMinutes: 40
summary: Connect formulas, tables, and graphs to interpret linear and affine relationships and build models.
objectives:
  - Calculate and interpret images and preimages
  - Read and connect formulas, tables, and graphs
  - Recognize linear and affine functions
  - Determine and interpret slope and vertical intercept
prerequisites:
  - Coordinate plane and ordered pairs
  - Proportionality
  - Solving linear equations
vocabulary:
  - en: image
    fr: image
    definition: The output $f(x)$ assigned to an input $x$ by a function.
  - en: preimage
    fr: antécédent
    definition: An input whose image is a specified output.
  - en: slope
    fr: coefficient directeur
    definition: The change in output divided by the corresponding change in input along a line.
  - en: vertical intercept
    fr: ordonnée à l'origine
    definition: The output when the input is zero, where a line crosses the vertical axis.
flashcards:
  - front: How do you find the image of $3$ from a formula for $f$?
    back: Substitute $x=3$ into the formula and calculate $f(3)$.
  - front: How do you find a preimage of $7$?
    back: Solve the equation $f(x)=7$ or read the input at height $7$ on the graph.
  - front: What distinguishes $f(x)=ax$ from $f(x)=ax+b$?
    back: The first is linear and passes through the origin; the second is affine and has vertical intercept $b$.
  - front: How is slope calculated from two points?
    back: $a=(y_2-y_1)/(x_2-x_1)$, provided $x_2\ne x_1$.
generator:
  type: linear-equation
  seed: 31406
  count: 8
  coefficientMin: -7
  coefficientMax: 7
  solutionMin: -10
  solutionMax: 10
  offsetMin: -12
  offsetMax: 12
tieredExercises:
  - id: "3e-functions-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Let $f(x)=-3x+7$. Complete the table for $x=-2,0,3,5$. Then state the image of $3$ and the preimage of $7$ shown by the table."
    solution: 'The completed row is $f(x)=13,7,-2,-8$. Thus the image of $3$ is $-2$, and the preimage of $7$ is $0$.'
    hints:
      - "Substitute each value of $x$ separately in $-3x+7$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Completes the table with $13,7,-2,-8$ in the correct columns."
        - "States that the image of $3$ is $-2$."
        - "States that the preimage of $7$ is $0$."
  - id: "3e-functions-t2"
    tier: 2
    tierTitle: "Brevet-Standard Problem"
    curriculumStatus: "core"
    prompt: 'A bike rental costs $C(x)=3x+6$ dollars for $x$ hours. Complete a value table for $x=0,2,5,8$, then draw the graph using one grid square for $1$ hour horizontally and one grid square for $3$ dollars vertically. Use the graph to give the image of $4$, a preimage of $21$, the vertical-axis intersection, and whether the graph meets the horizontal axis for $x\ge0$.'
    solution: 'The completed costs are $6,12,21,30$ dollars. Plotting $(0,6),(2,12),(5,21),(8,30)$ and joining them gives the line. Its image of $4$ is $18$, and a preimage of $21$ is $5$. The line meets the vertical axis at $(0,6)$, representing the fixed charge. Since $C(x)\ge6$ for $x\ge0$, the meaningful part of the graph does not meet the horizontal axis.'
    hints:
      - "Calculate the four costs before choosing coordinates on the scaled axes."
      - "For a preimage, start from the requested cost on the vertical axis and read the input."
    assessment:
      kind: "reasoning"
      rubric:
        - "Completes the table with $6,12,21,30$ and plots the points with the stated scales."
        - "Reads or obtains image $18$ for $4$ and preimage $5$ for $21$."
        - "Identifies $(0,6)$ as the vertical-axis intersection and interprets the fixed charge."
        - 'Explains that there is no horizontal-axis intersection for $x\ge0$.'
  - id: "3e-functions-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "core"
    prompt: "On axes scaled at one unit per grid square, the graph of an affine function $f$ passes through $A(-2,7)$ and $B(4,-5)$. Determine its formula, calculate the image of $2$ and the preimage of $0$, and find the intersection of its graph with the line representing $g(x)=x$. Give all axis and graph coordinates needed to check your answers."
    solution: 'The slope is $a=\frac{-5-7}{4-(-2)}=-2$. Since $7=-2(-2)+b$, $b=3$, so $f(x)=-2x+3$. Thus $f(2)=-1$. The horizontal-axis intersection satisfies $f(x)=0$, giving $x=3/2$, so it is $(3/2,0)$; the vertical-axis intersection is $(0,3)$. The two graphs intersect when $-2x+3=x$, so $x=1$ and $y=1$: the intersection is $(1,1)$. Points $A,B,(0,3),(3/2,0)$ check the graph of $f$, while $(0,0)$ and $(1,1)$ check the graph of $g$.'
    hints:
      - "Calculate change in output divided by change in input."
      - "Use either point to determine the intercept, then solve $f(x)=0$ and $f(x)=g(x)$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Calculates the slope $-2$ from the two points."
        - "Determines $b=3$ and the formula $f(x)=-2x+3$."
        - "Calculates $f(2)=-1$ and the preimage $3/2$ of $0$."
        - "Finds the graph intersection $(1,1)$ and gives sufficient plotting and axis-intersection coordinates."
  - id: "3e-functions-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: "For an integer parameter $a$, consider $f_a(x)=(a-1)x+2a$ and $g(x)=2x-3$. First classify whether their graphs have one intersection, no intersection, or coincide. Then determine every integer $a$ for which their intersection point has integer coordinates, and prove that the list is complete."
    solution: 'An intersection satisfies $(a-1)x+2a=2x-3$, hence $(a-3)x=-2a-3$. If $a=3$, this becomes $0=-9$, so the lines are parallel and distinct; they never coincide because equality of slopes would force $a=3$, but then the intercepts are $6$ and $-3$. If $a\ne3$, there is one intersection and $x=\frac{-2a-3}{a-3}=-2-\frac9{a-3}$. For integer $a$, this $x$ is an integer exactly when $a-3$ divides $9$. Thus $a-3\in\{-9,-3,-1,1,3,9\}$, giving $a\in\{-6,0,2,4,6,12\}$. For each, $y=2x-3$ is also an integer. Conversely, an integer-coordinate intersection requires integer $x$, so $a-3$ must divide $9$; no other integer $a$ works.'
    hints:
      - "Solve $f_a(x)=g(x)$, but separate the case $a=3$ before dividing."
      - "Rewrite the abscissa as $-2-9/(a-3)$."
      - "List every positive and negative divisor of $9$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Separates $a=3$ and correctly classifies the parallel-line case."
        - 'Shows that every $a\ne3$ gives one intersection and derives $x=-2-9/(a-3)$.'
        - "Uses integer divisibility to obtain exactly $a=-6,0,2,4,6,12$."
        - "Proves that integer $x$ ensures integer $y$ and that the divisor list proves completeness."
---
## A function assigns one output to each input

A function $f$ associates each allowed input $x$ with exactly one output, written $f(x)$. If $f(3)=11$, then $11$ is the **image** of $3$, and $3$ is a **preimage** of $11$.

An input has only one image, but an output may have zero, one, or several preimages. Finding an image means calculating; finding a preimage usually means solving an equation or reading backward from a graph.

## Four connected representations

A function may be described by words, a formula, a table, or a graph. For $f(x)=2x-1$:

| $x$ | $-1$ | $0$ | $2$ |
| --- | ---: | ---: | ---: |
| $f(x)$ | $-3$ | $-1$ | $3$ |

The table gives points $(-1,-3)$, $(0,-1)$, and $(2,3)$. Plotting all points $(x,f(x))$ gives the graph.

On a graph, read an image vertically from an input on the horizontal axis. To find a preimage, start at the requested output on the vertical axis and read horizontally to the graph, then vertically to the input axis.

## Linear functions and proportionality

A linear function has form

$$f(x)=ax.$$

Its table is proportional, its graph is a straight line through the origin, and $a$ is its proportionality coefficient and slope. For example, $f(x)=3x$ models a unit price of $3$ dollars per item.

If a straight-line graph does not pass through the origin, the relationship is not proportional.

## Affine functions

An affine function has form

$$f(x)=ax+b.$$

Its graph is a straight line. The number $a$ is the slope: when $x$ increases by $1$, $f(x)$ changes by $a$. The number $b=f(0)$ is the vertical intercept.

- If $a>0$, the function increases.
- If $a<0$, the function decreases.
- If $a=0$, the function is constant.

From two points with distinct inputs,

$$a=\frac{y_2-y_1}{x_2-x_1}.$$

Then substitute one point into $y=ax+b$ to find $b$.

## Worked reconstruction

Suppose a line passes through $(1,5)$ and $(4,11)$. Its slope is

$$a=\frac{11-5}{4-1}=2.$$

Using $(1,5)$ gives $5=2\times1+b$, so $b=3$. The function is $f(x)=2x+3$. Check with the other point: $2\times4+3=11$.

## Modeling a situation

Identify what changes and what is fixed. A tank containing $120$ liters and losing $8$ liters per minute is modeled by

$$V(t)=120-8t.$$

The intercept $120$ is the initial volume; the slope $-8$ is the rate of change. The model is meaningful only while $0\le t\le15$.

Always define variables, include units, and state the realistic domain. A formula can be algebraically valid beyond the values that make sense in context.

## Method choice and misconceptions

- Use substitution for an image and an equation for a preimage.
- Use two points to find a slope; do not divide $y$ by $x$ unless the line is known to pass through the origin.
- Keep the subtraction order consistent in the slope formula.
- A line may cross an axis between grid marks; graphical readings are often approximate, while a formula can give an exact result.
- The vertical intercept is $b$, not the point $(0,b)$ itself.

## Extension: comparing two models

Two affine models are equal at an intersection of their graphs. Solve $ax+b=cx+d$. If $a\ne c$, there is one intersection. If $a=c$ and $b\ne d$, the lines are parallel. If both coefficients match, the two formulas define the same line.
