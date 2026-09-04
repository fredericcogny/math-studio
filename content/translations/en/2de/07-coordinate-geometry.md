---
id: 2de-coordinate-geometry
locale: en
title: Distance, Midpoint, and Reasoning in a Coordinate Plane
strand: Geometry
summary: Use the distance and midpoint formulas in an orthonormal frame to prove that a figure is isosceles, right-angled, or inscribed in a given circle.
objectives:
  - Compute a distance and a midpoint from coordinates
  - Classify a triangle using the converse of the Pythagorean theorem in coordinates
  - Characterize the set of points equidistant from two given points
prerequisites:
  - The Pythagorean theorem and its converse
  - Exact calculation with square roots
vocabulary:
  - en: orthonormal frame
    definition: A coordinate frame whose two axes are perpendicular and carry the same unit length.
  - en: midpoint
    definition: The point of a segment equidistant from both endpoints, whose coordinates are the averages of theirs.
  - en: perpendicular bisector
    definition: The line perpendicular to a segment through its midpoint, made of exactly the points equidistant from the endpoints.
flashcards:
  - front: What is the distance between $A(x_{A},y_{A})$ and $B(x_{B},y_{B})$?
    back: $AB=\sqrt{(x_{B}-x_{A})^{2}+(y_{B}-y_{A})^{2}}$. This formula requires an orthonormal frame.
  - front: What are the coordinates of the midpoint of $[AB]$?
    back: $M\left(\dfrac{x_{A}+x_{B}}{2},\;\dfrac{y_{A}+y_{B}}{2}\right)$, the averages of the coordinates.
  - front: How do you prove a triangle is right-angled from coordinates?
    back: Compute the three squared lengths and check whether the largest equals the sum of the other two, which is the converse of the Pythagorean theorem.
  - front: Which set of points is equidistant from $A$ and $B$?
    back: The perpendicular bisector of $[AB]$. In coordinates it is found by solving $AM^{2}=BM^{2}$.
exercises:
  - id: 2de-coordgeo-t1
    tierTitle: Direct Application
    prompt: In an orthonormal frame, $A(1,2)$ and $B(4,6)$. Compute the distance $AB$.
    solution: $AB=\sqrt{(4-1)^{2}+(6-2)^{2}}=\sqrt{9+16}=\sqrt{25}=5$.
    hints:
      - Subtract the coordinates in the same order for both axes, then square.
  - id: 2de-coordgeo-t2
    tierTitle: Standard Practice
    prompt: Give the coordinates of the midpoint $M$ of the segment joining $A(-3,5)$ and $B(7,-1)$.
    solution: The coordinates of $M$ are the averages, $x_{M}=\dfrac{-3+7}{2}=2$ and $y_{M}=\dfrac{5+(-1)}{2}=2$, so $M(2,2)$.
    hints:
      - Average the two abscissas, then the two ordinates.
      - Keep the brackets around a negative coordinate when adding.
    expected: "(2, 2)"
  - id: 2de-coordgeo-t3
    tierTitle: Official Core Synthesis
    prompt: In an orthonormal frame, $A(1,1)$, $B(5,3)$ and $C(3,7)$. Determine the nature of triangle $ABC$, then give the center and the exact radius of its circumscribed circle.
    solution: >-
      Squared lengths: $AB^{2}=(5-1)^{2}+(3-1)^{2}=16+4=20$, $BC^{2}=(3-5)^{2}+(7-3)^{2}=4+16=20$, and $AC^{2}=(3-1)^{2}+(7-1)^{2}=4+36=40$. Since $AB^{2}=BC^{2}$, the triangle is isosceles at $B$. Since $AB^{2}+BC^{2}=20+20=40=AC^{2}$, the converse of the Pythagorean theorem shows it is right-angled at $B$. The triangle is therefore right-angled and isosceles at $B$. In a right triangle the hypotenuse is a diameter of the circumscribed circle, so the center is the midpoint of $[AC]$, that is $\left(\dfrac{1+3}{2},\dfrac{1+7}{2}\right)=(2,4)$, and the radius is $\dfrac{AC}{2}=\dfrac{\sqrt{40}}{2}=\sqrt{10}$.
    hints:
      - Work with squared lengths so that no square root is needed for the comparison.
      - The center of the circumscribed circle of a right triangle is the midpoint of its hypotenuse.
    rubric:
      - Computes the three squared lengths correctly.
      - Concludes that the triangle is isosceles and right-angled at B by the converse of the Pythagorean theorem.
      - Identifies the midpoint of the hypotenuse as the center and gives the exact radius.
  - id: 2de-coordgeo-t4
    tierTitle: Advanced Challenge
    prompt: Let $A(1,2)$ and $B(5,4)$. Find every point of the horizontal axis that is equidistant from $A$ and $B$. Then prove, in coordinates, that the set of all points $M$ of the plane with $MA=MB$ is a line, and identify it.
    solution: >-
      A point of the horizontal axis is $M(x,0)$. Then $MA^{2}=(x-1)^{2}+4$ and $MB^{2}=(x-5)^{2}+16$. Setting them equal gives $x^{2}-2x+1+4=x^{2}-10x+25+16$, so $-2x+5=-10x+41$, then $8x=36$ and $x=4.5$. The only such point is $(4.5,\;0)$. In general, for $M(x,y)$ the condition $MA=MB$ is equivalent to $MA^{2}=MB^{2}$, since both distances are nonnegative. Expanding, $(x-1)^{2}+(y-2)^{2}=(x-5)^{2}+(y-4)^{2}$ gives $x^{2}-2x+1+y^{2}-4y+4=x^{2}-10x+25+y^{2}-8y+16$. The terms $x^{2}$ and $y^{2}$ cancel, leaving $-2x-4y+5=-10x-8y+41$, hence $8x+4y=36$, that is $2x+y=9$. This is the equation of a line. It passes through the midpoint of $[AB]$, namely $(3,3)$, since $2\times 3+3=9$, and its direction is perpendicular to $[AB]$, so it is the perpendicular bisector of $[AB]$.
    hints:
      - Compare squared distances so that the square roots disappear.
      - Watch the squared terms cancel, which is what makes the result a line rather than a curve.
    rubric:
      - Finds the point of the horizontal axis with abscissa 4.5.
      - Shows that the squared terms cancel, leaving a first-degree equation in x and y.
      - Identifies the resulting line as the perpendicular bisector, for instance by checking that the midpoint belongs to it.
---
## Coordinates That Measure

In an **orthonormal frame** the axes are perpendicular and share the same unit. Only in such a frame do the two formulas below hold, because both rest on the Pythagorean theorem.

For $A(x_{A},y_{A})$ and $B(x_{B},y_{B})$:

$$AB=\sqrt{(x_{B}-x_{A})^{2}+(y_{B}-y_{A})^{2}},\qquad M_{[AB]}\left(\frac{x_{A}+x_{B}}{2},\;\frac{y_{A}+y_{B}}{2}\right).$$

The distance comes from a right triangle whose legs are the horizontal and vertical gaps. The midpoint is simply the pair of averages.

## Work with Squares

Comparing $\sqrt{20}$ with $\sqrt{18}$ invites rounding errors. Comparing $20$ with $18$ does not. So compute **squared** lengths and compare those; take a square root only when the exact length is the final answer.

That habit also makes classification quick.

- Two equal squared lengths mean the triangle is **isosceles**.
- Three equal squared lengths mean it is **equilateral**.
- If the largest squared length equals the sum of the other two, the converse of the Pythagorean theorem gives a **right angle**, at the vertex opposite the longest side.

## Circles in Coordinates

A point $M$ lies on the circle of center $\Omega$ and radius $r$ exactly when $\Omega M=r$, that is $\Omega M^{2}=r^{2}$. Two classical facts turn this into a tool:

- the circle circumscribed about a right triangle has the hypotenuse as a diameter, so its center is the midpoint of the hypotenuse;
- the circle with diameter $[AB]$ is the set of points $M$ such that the triangle $ABM$ has a right angle at $M$.

## Equidistance

The condition $MA=MB$ is equivalent to $MA^{2}=MB^{2}$, because distances are nonnegative. Expanding both sides makes the terms $x^{2}$ and $y^{2}$ cancel, so what remains is a **first-degree** equation in $x$ and $y$: the set of points equidistant from $A$ and $B$ is a line, the **perpendicular bisector** of $[AB]$. The cancellation is the whole reason the answer is a line and not a curve.

### Stretch Thought

Given three points that are not collinear, describe a coordinate method that finds the center of the circumscribed circle by solving two equidistance conditions. What happens if the three points are collinear?
