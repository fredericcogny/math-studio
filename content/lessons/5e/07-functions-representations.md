---
id: 5e-functions-representations
order: 7
title: Functions through formulas, tables, and graphs
level: 5e
strand: Functions and representations
difficulty: core
estimatedMinutes: 40
summary: Describe how one quantity depends on another and move reliably among verbal rules, formulas, value tables, Cartesian points, and graphs.
objectives:
  - Express that one quantity depends on another or is a function of it
  - Identify inputs, outputs, and values from a formula
  - Build and read a value table
  - Represent corresponding values as points in a Cartesian plane
  - Move among verbal, tabular, formula, and graphical representations
  - Recognize proportionality from a graph
prerequisites:
  - Substitution in a formula
  - Cartesian coordinates
  - Proportional relationships
vocabulary:
  - en: function
    fr: fonction
    definition: A rule that assigns exactly one output to each allowed input.
  - en: input
    fr: entrée
    definition: A chosen value supplied to a function.
  - en: output
    fr: sortie
    definition: The value produced by a function for a given input.
  - en: value table
    fr: tableau de valeurs
    definition: A table that places inputs and their corresponding outputs in matching columns.
  - en: Cartesian plane
    fr: repère cartésien
    definition: A plane with two perpendicular numbered axes used to locate points by coordinates.
  - en: proportional relationship
    fr: situation de proportionnalité
    definition: A relationship of the form $y=kx$, whose graph is a straight line through the origin.
flashcards:
  - front: What does “$y$ is a function of $x$” mean?
    back: The value of $y$ depends on $x$, and each allowed $x$ has exactly one output $y$.
  - front: If $f(x)=3x+2$, what is $f(4)$?
    back: $f(4)=3\times4+2=14$.
  - front: Which point represents input $5$ and output $12$?
    back: The point $(5,12)$; input is the first coordinate.
  - front: How does a graph show a proportional relationship?
    back: Its points lie on a straight line that passes through the origin.
  - front: Is every straight-line graph proportional?
    back: No. The line must also pass through $(0,0)$.
generator:
  type: quadratic-value
  seed: 51207
  count: 8
  coefficientMin: 1
  coefficientMax: 5
  xMin: 0
  xMax: 10
tieredExercises:
  - id: "5e-functions-representations-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "The cost of renting skates for $n$ hours is $C(n)=3n+5$ dollars. Find $C(4)$."
    solution: 'The input is $4$. Substitute it into the formula: $C(4)=3\times4+5=17$. The output is $17$ dollars.'
    hints:
      - "Replace $n$ by $4$ in the formula."
      - "Multiply before adding."
    assessment:
      kind: "numeric"
      expected: 17
  - id: "5e-functions-representations-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "A function is defined by $f(x)=3x+5$. A value table contains inputs $0$, $2$, and $6$. Find the output for input $6$ and give the corresponding Cartesian point."
    solution: '$f(6)=3\times6+5=23$. The table entry is $23$, and the corresponding point is $(6,23)$.'
    hints:
      - "Use the input as the first coordinate."
      - 'Calculate $3\times6+5$.'
    assessment:
      kind: "exact"
      expected: "23 and (6,23)"
      accepted:
        - "23, (6,23)"
        - "(6,23) and 23"
  - id: "5e-functions-representations-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "core"
    prompt: "A bike rental costs $4$ dollars plus $3$ dollars per hour. Let $h$ be the number of hours and $C$ the cost. Write $C$ as a function of $h$, make a value table for $h=0,2,5$, list the three points to plot, and explain from the formula or graph why the relationship is not proportional."
    solution: "The verbal rule gives $C(h)=3h+4$. The outputs for $h=0,2,5$ are $4,10,19$, so the points are $(0,4)$, $(2,10)$, and $(5,19)$. The relationship is not proportional because the formula has an added fixed cost of $4$; graphically, its straight line passes through $(0,4)$ rather than the origin."
    hints:
      - "The hourly charge gives the term $3h$; then add the fixed charge."
      - "A proportional graph must pass through $(0,0)$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Writes the formula $C(h)=3h+4$."
        - "Obtains outputs $4,10,19$ and points $(0,4),(2,10),(5,19)$."
        - "Correctly rejects proportionality using the fixed term or the nonzero vertical intercept."
  - id: "5e-functions-representations-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: 'A rectangle has whole-number side lengths and perimeter $40$. If one side is $n$, its area is the function $A(n)=n(20-n)$ for $1\le n\le19$. Find every input $n$ for which the output $A(n)$ is a perfect square. Prove that the list is complete, and describe the symmetry these points have on the graph.'
    solution: 'Rewrite the output as $A(n)=100-(n-10)^2$. If $A(n)=m^2$, then $m^2+(n-10)^2=100$. Using the squares from $0^2$ through $10^2$, the pairs of squares that sum to $100$ are $100+0$, $64+36$, $36+64$, and $0+100$. The last pair would require $n=0$ or $20$, outside the domain. The first three give $n-10=0,\pm6,\pm8$, hence $n=2,4,10,16,18$. Their outputs are respectively $36,64,100,64,36$. The square table exhausts every possible $m$ and $|n-10|$, so the list is complete. The points occur in equal-height pairs symmetric about the vertical line $n=10$, with $(10,100)$ on that line.'
    hints:
      - "Show that $n(20-n)=100-(n-10)^2$."
      - "Look for two squares from $0^2$ to $10^2$ whose sum is $100$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Transforms the condition into $m^2+(n-10)^2=100$."
        - "Finds exactly $n=2,4,10,16,18$ with outputs $36,64,100,64,36$."
        - "Proves completeness from the squares table and explains symmetry about $n=10$."
---
## Quantities That Depend on Other Quantities

Many situations involve two changing quantities. The distance traveled depends on time; the price of fruit depends on its mass; the area of a square depends on its side length. We say one quantity is **a function of** the other when each allowed value of the first quantity determines exactly one value of the second.

If a car travels steadily at $60$ miles per hour, its distance $d$ after $t$ hours is

$$d=60t.$$

Here $t$ is the **input**, and $d$ is the corresponding **output**. One input cannot have two outputs under the same rule. Different inputs may, however, have the same output: the function that gives the distance from a point to zero assigns both $3$ and $-3$ the output $3$.

## Formulas as Function Rules

A formula expresses the dependency precisely. If a museum charges $6$ dollars per ticket plus one fixed online fee of $2$ dollars, the total for $n$ tickets is

$$C(n)=6n+2.$$

The notation $C(n)$ means “the value of $C$ for input $n$.” It does not mean $C\times n$. For four tickets,

$$C(4)=6\times4+2=26.$$

Always identify what the letters and units represent. In this situation, negative or fractional ticket counts are not allowed, even though the formula itself can be calculated for them.

## From a Formula to a Value Table

A **value table** organizes input-output pairs. For $f(x)=2x+3$:

| Input $x$ | $0$ | $1$ | $3$ | $5$ |
|---:|---:|---:|---:|---:|
| Output $f(x)$ | $3$ | $5$ | $9$ | $13$ |

Each column is one complete pair. To fill a column, substitute its input into the same formula. To read the table backward, locate the requested output and then read the input in the same column.

> A table usually shows only selected values. It does not replace the rule or prove what happens at every unlisted input.

## From a Table to Cartesian Points

Every table column gives a point whose coordinates are

$$(\text{input},\text{output}).$$

The table above produces $(0,3)$, $(1,5)$, $(3,9)$, and $(5,13)$. On a Cartesian graph, input values go on the horizontal axis and outputs on the vertical axis. Choose and label scales before plotting.

If the inputs vary continuously, such as time, the plotted points may be joined when the context supports all intermediate values. If inputs are whole ticket counts, isolated points are more truthful: a point halfway between three and four tickets has no meaning.

> Common error: reversing coordinates. The pair for input $3$ and output $9$ is $(3,9)$, not $(9,3)$.

## Reading a Graph

To find the output for a given input, move vertically from the input axis to the graph, then horizontally to the output axis. To find inputs with a given output, reverse the process. A graph also reveals overall behavior: where outputs rise, fall, repeat, reach a maximum, or cross an axis.

Reading from a drawn graph may give an approximate value. A point calculated from an exact formula or table can be exact. The scale and the thickness of the plotted line limit graphical precision.

## Moving Among Four Representations

The same function can be represented verbally, by a formula, by a table, or by a graph.

Suppose a tank begins with $5$ liters and receives $2$ liters per minute.

- Verbal rule: start at $5$, then add $2$ for each minute.
- Formula: $V(t)=5+2t$.
- Table: for $t=0,1,2,3$, the outputs are $5,7,9,11$.
- Graph: plot $(0,5),(1,7),(2,9),(3,11)$ and join them because time is continuous.

To move reliably, keep the meanings and units attached. The initial amount becomes the output at input zero. The “per minute” amount determines how much the output changes when the input increases by one.

## Recognizing Proportionality Graphically

A proportional relationship has formula

$$y=kx$$

for one constant $k$. Its graph is a straight line through the origin $(0,0)$. Both conditions matter.

- $y=3x$ is proportional: its graph is straight and passes through the origin.
- $y=3x+4$ is not proportional: its graph is straight but passes through $(0,4)$.
- A curved graph through the origin is not the graph of a proportional relationship.

For plotted data, check that the points align with the origin. You can confirm by testing whether $y/x$ has the same value for every nonzero input.

### Stretch Connection

Representations reveal different evidence. A formula can prove a rule for every allowed input, a table supports systematic checking, and a graph makes shape and symmetry visible. Strong reasoning moves between them instead of relying on only one view.
