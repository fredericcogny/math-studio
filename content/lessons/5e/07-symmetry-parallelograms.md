---
id: 5e-symmetry-parallelograms
order: 9
title: Symmetry, parallelograms, and special quadrilaterals
level: 5e
strand: Geometry
difficulty: core
estimatedMinutes: 45
summary: Use central symmetry, coded properties, quadrilateral characterizations, and the area of a parallelogram to solve geometric problems.
objectives:
  - Construct and use central symmetry
  - Recognize coded parallel and perpendicular lines correctly
  - Define and characterize parallelograms, rectangles, rhombuses, and squares
  - Calculate $b\times h$ areas and decompose complex figures
prerequisites:
  - Use a ruler, compass, and set square
  - Recognize segments, angles, midpoints, and diagram coding
  - Calculate rectangle and triangle areas
vocabulary:
  - en: central symmetry
    fr: symétrie centrale
    definition: A half-turn in which the center is the midpoint of each point and its image.
  - en: parallel lines
    fr: droites parallèles
    definition: Coplanar lines with the same direction; under the inclusive school convention they may coincide, while distinct parallel lines never meet.
  - en: parallelogram
    fr: parallélogramme
    definition: A quadrilateral whose opposite sides are parallel in pairs.
  - en: rectangle
    fr: rectangle
    definition: A quadrilateral with four right angles.
  - en: rhombus
    fr: losange
    definition: A quadrilateral with four equal sides.
  - en: square
    fr: carré
    definition: A quadrilateral with four equal sides and four right angles.
flashcards:
  - front: What must be true if $A'$ is the image of $A$ by central symmetry with center $O$?
    back: $O$ is the midpoint of $[AA']$.
  - front: State the area formula for a parallelogram.
    back: $A=b\times h$, where $h$ is perpendicular to the chosen base $b$.
  - front: Which diagonal property characterizes a parallelogram?
    back: Its diagonals bisect each other.
  - front: Is every square both a rectangle and a rhombus?
    back: Yes; it has four right angles and four equal sides.
generator:
  type: signed-arithmetic
  seed: 51207
  count: 6
  min: -12
  max: 12
tieredExercises:
  - id: 5e-symmetry-parallelograms-t1
    tier: 1
    tierTitle: Coded Recognition
    curriculumStatus: core
    prompt: >-
      A coded quadrilateral $ABCD$ has diagonals with the same midpoint, equal lengths, and perpendicular supporting lines. Identify the most precise special quadrilateral and justify every step.
    solution: >-
      Diagonals with the same midpoint characterize a parallelogram. In a parallelogram, equal diagonals characterize a rectangle and perpendicular diagonals characterize a rhombus. Thus $ABCD$ is both a rectangle and a rhombus, so it is a square.
    hints:
      - Start with the common-midpoint coding.
      - Apply the diagonal characterizations only after establishing that the quadrilateral is a parallelogram.
    assessment:
      kind: reasoning
      rubric:
        - Uses the common midpoint to establish a parallelogram.
        - Uses equal and perpendicular diagonals to establish rectangle and rhombus properties.
        - Concludes that the most precise classification is a square.
  - id: 5e-symmetry-parallelograms-t2
    tier: 2
    tierTitle: Area of a Complex Figure
    curriculumStatus: core
    prompt: >-
      A parallelogram has base $12$ cm and corresponding perpendicular height $7$ cm. A triangular notch with base $4$ cm and perpendicular height $3$ cm is removed from it. Find the remaining area and explain why the slanted side of the parallelogram is not used.
    solution: >-
      The parallelogram area is $12\times7=84\text{ cm}^2$. The notch area is $4\times3/2=6\text{ cm}^2$. The remaining area is $84-6=78\text{ cm}^2$. The formula uses the perpendicular distance between the parallel bases, not a slanted side.
    hints:
      - Decompose the figure as a parallelogram minus a triangle.
      - Match each base with its perpendicular height.
    assessment:
      kind: reasoning
      rubric:
        - Calculates the parallelogram area as $84\text{ cm}^2$.
        - Calculates the triangular area as $6\text{ cm}^2$.
        - Obtains $78\text{ cm}^2$ and explains the perpendicular-height requirement.
  - id: 5e-symmetry-parallelograms-t3
    tier: 3
    tierTitle: Official Core Synthesis
    curriculumStatus: core
    prompt: >-
      In quadrilateral $EFGH$, diagonals $[EG]$ and $[FH]$ meet at $O$, with $OE=OG$, $OF=OH$, $EG=FH$, and $(EG)\perp(FH)$. Prove that $EFGH$ is a square. If its side is $6$ cm and a triangle of base $2$ cm and height $3$ cm is cut from one corner, calculate the area left.
    solution: >-
      The first two equalities make $O$ the midpoint of both diagonals, so $EFGH$ is a parallelogram. Its equal diagonals make it a rectangle; its perpendicular diagonals make it a rhombus. Therefore it is a square. The square area is $6^2=36\text{ cm}^2$, and the removed triangle has area $2\times3/2=3\text{ cm}^2$. The area left is $33\text{ cm}^2$.
    hints:
      - Translate each pair of equal half-diagonals into a midpoint statement.
      - A square can be characterized as a parallelogram that is both a rectangle and a rhombus.
      - Subtract the area of the removed triangle.
    assessment:
      kind: reasoning
      rubric:
        - Establishes the parallelogram from the common midpoint of the diagonals.
        - Uses the two diagonal characterizations to prove the quadrilateral is a square.
        - Correctly decomposes the complex figure and obtains $33\text{ cm}^2$.
  - id: 5e-symmetry-parallelograms-t4
    tier: 4
    tierTitle: Olympiad Construction Challenge
    curriculumStatus: olympiad
    prompt: >-
      Three noncollinear points $A,B,C$ are given, but their order around a parallelogram is not specified. Construct every point $D$ for which the four points can be vertices of a parallelogram. Prove that there are exactly three possible points.
    solution: >-
      Choose each possible pair of opposite vertices among $A,B,C$. Reflect $B$ about the midpoint of $[AC]$ to obtain $D_1$; then $[AC]$ and $[BD_1]$ have the same midpoint, so they are the diagonals of a parallelogram. Similarly, reflect $C$ about the midpoint of $[AB]$ to obtain $D_2$, and reflect $A$ about the midpoint of $[BC]$ to obtain $D_3$. Conversely, in any completed parallelogram one pair among the three given points must be opposite; its midpoint must also be the midpoint between the third given point and $D$. Thus $D$ is one of the three constructed reflections. Noncollinearity makes the three candidates distinct, so there are exactly three.
    hints:
      - Choose which pair of given points will be opposite vertices.
      - Use the common-midpoint characterization for both construction and completeness.
    assessment:
      kind: reasoning
      rubric:
        - Constructs all three candidates by midpoint and central symmetry.
        - Proves each candidate gives a parallelogram.
        - Proves every possible completion is on the list and the three points are distinct.
---
## Central Symmetry

Central symmetry with center $O$ is a half-turn. It sends $A$ to $A'$ exactly when $O$ is the midpoint of $[AA']$. It preserves lengths, angle measures, alignment, parallelism, perpendicularity, and area. A line through $O$ maps to itself; a line not through $O$ maps to a distinct parallel line.

## Parallel and Perpendicular Lines

This lesson uses the inclusive school convention: two coplanar lines are **parallel** when they have the same direction, so a line is parallel to itself and coincident lines count as parallel. Two **distinct** parallel lines have no common point. The word “strictly parallel” may be used when distinctness matters.

Two lines are perpendicular when they intersect at a right angle. If two lines are perpendicular to the same line, they are parallel. If two distinct lines are parallel, every line perpendicular to one is perpendicular to the other.

Use arrowheads for parallelism, a square for a right angle, and ticks for equal lengths. Appearance alone is never evidence.

## The Parallelogram Family

A **parallelogram** has opposite sides parallel in pairs. Its opposite sides and opposite angles are equal, and its diagonals bisect each other. Useful characterizations include:

- diagonals with the same midpoint;
- both pairs of opposite sides parallel;
- one pair of opposite sides both parallel and equal.

A **rectangle** has four right angles. It is a parallelogram; within parallelograms, one right angle or equal diagonals is enough to characterize a rectangle.

A **rhombus** has four equal sides. It is a parallelogram; within parallelograms, two adjacent equal sides or perpendicular diagonals is enough to characterize a rhombus.

A **square** has four equal sides and four right angles. It is both a rectangle and a rhombus. Within parallelograms, diagonals that are both equal and perpendicular characterize a square.

> Apply a characterization with all its hypotheses. Equal diagonals alone do not make an arbitrary quadrilateral a rectangle, and perpendicular diagonals alone do not make one a rhombus.

## Area and Complex Figures

For a parallelogram with base $b$ and corresponding perpendicular height $h$,

$$A=b\times h.$$

The height is the perpendicular distance between the lines containing the opposite bases. It is not generally a slanted side.

For a complex figure, draw auxiliary segments and express it as familiar pieces. Add nonoverlapping pieces or subtract a hole or notch. Keep one unit system throughout and use square units for the answer.

## Constructing and Proving

To complete a parallelogram from three consecutive vertices, draw parallels through the first and third vertices, or construct the midpoint of the diagonal joining them and reflect the middle vertex about that midpoint. A complete solution states the construction, identifies the coded property created, and cites the definition or characterization that proves the result.
