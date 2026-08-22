---
id: 4e-triangles-parallel-lines
locale: en
title: Triangles, Midpoints, and Parallel Lines
strand: Geometry
summary: Learn the midpoint theorem linking the segment joining two midpoints to the third side, and apply it to coordinate geometry.
objectives:
  - State and apply the midpoint theorem
  - Use the converse of the midpoint theorem
  - Compute midpoints and lengths in the coordinate plane
prerequisites:
  - Parallel lines and transversals
  - Coordinates of a point
vocabulary:
  - en: midpoint
    definition: The point that divides a segment into two equal parts.
  - en: parallel
    definition: Two lines in the same plane that never meet, no matter how far they are extended.
  - en: midpoint theorem
    definition: In a triangle, the segment joining the midpoints of two sides is parallel to the third side and half its length.
flashcards:
  - front: What does the midpoint theorem say?
    back: If $M$ and $N$ are the midpoints of sides $AB$ and $AC$ of triangle $ABC$, then $MN \parallel BC$ and $MN = \frac{1}{2}BC$.
  - front: What is the converse of the midpoint theorem?
    back: If a line passes through the midpoint of one side of a triangle and is parallel to a second side, then it passes through the midpoint of the third side.
  - front: How do you find the midpoint of a segment in coordinates?
    back: The midpoint of $A(x_1,y_1)$ and $B(x_2,y_2)$ is $M\!\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)$.
exercises:
  - id: 4e-tripar-t1
    tierTitle: Direct Application
    prompt: In triangle $ABC$, $M$ is the midpoint of $AB$ and $N$ is the midpoint of $AC$. If $BC=12$ cm, find the length $MN$.
    solution: By the midpoint theorem, $MN=\frac{1}{2}BC=\frac{1}{2}\times 12=6$ cm.
    hints:
      - The midpoint theorem states that the segment joining two midpoints is half the third side.
  - id: 4e-tripar-t2
    tierTitle: Standard Practice
    prompt: Triangle $ABC$ has vertices $A(0,0)$, $B(8,0)$, $C(4,6)$. Find the midpoints $M$ of $AB$ and $N$ of $AC$. Verify that $MN=\frac{1}{2}BC$.
    solution: $M=(4,0)$ and $N=(2,3)$. Then $MN=\sqrt{(4-2)^2+(0-3)^2}=\sqrt{13}$. Also $BC=\sqrt{(8-4)^2+(0-6)^2}=2\sqrt{13}$. Indeed $MN=\frac{1}{2}BC=\sqrt{13}$.
    hints:
      - Use the midpoint formula for each coordinate.
      - Compute both lengths with the distance formula and compare.
  - id: 4e-tripar-t3
    tierTitle: Official Core Synthesis
    prompt: In triangle $PQR$, $M$ is the midpoint of $PQ$ and the line through $M$ parallel to $QR$ meets $PR$ at $N$. The length $QR=10$ cm and $PM=7$ cm. Find $PQ$, $MN$, and justify why $N$ is the midpoint of $PR$ using the converse of the midpoint theorem.
    solution: Since $M$ is the midpoint of $PQ$, $PQ=2\times PM=14$ cm. By the converse of the midpoint theorem, $N$ must be the midpoint of $PR$. Then $MN=\frac{1}{2}QR=5$ cm.
    hints:
      - If $M$ is the midpoint of one side and the line is parallel to another side, the converse tells you where $N$ lies.
      - Once you know $N$ is a midpoint, apply the midpoint theorem for the length.
    rubric:
      - Correctly computes PQ from PM.
      - Applies the converse of the midpoint theorem to justify that N is the midpoint of PR.
      - Uses the midpoint theorem to find MN.
  - id: 4e-tripar-t4
    tierTitle: Advanced Challenge
    prompt: In triangle $ABC$, let $M$, $N$, $P$ be the midpoints of $AB$, $BC$, $CA$ respectively. Prove that the three segments $MN$, $NP$, $PM$ divide triangle $ABC$ into four congruent triangles, each similar to $ABC$.
    solution: >-
      By the midpoint theorem: $MN \parallel AC$ and $MN=\frac{1}{2}AC$; $NP \parallel AB$ and $NP=\frac{1}{2}AB$; $PM \parallel BC$ and $PM=\frac{1}{2}BC$. Each of the four smaller triangles has sides half those of $ABC$, so all four are congruent and similar to $ABC$ with ratio $\frac{1}{2}$.
    hints:
      - Apply the midpoint theorem to each pair of midpoints.
      - Show that each small triangle has sides exactly half the sides of the original.
    rubric:
      - Applies the midpoint theorem correctly to all three pairs.
      - Identifies that the four triangles have the same side lengths.
      - Concludes congruence and similarity with the correct ratio.
---
## The Midpoint Theorem

Consider a triangle $ABC$. Let $M$ be the midpoint of $AB$ and $N$ the midpoint of $AC$. The **midpoint theorem** states:

$$MN \parallel BC \quad\text{and}\quad MN = \tfrac{1}{2}\,BC$$

This result links the internal structure of a triangle to parallelism. The segment $MN$ is sometimes called a **midsegment**.

## Proof Sketch

Place $A$ at the origin. Let $B$ have position vector $\vec{b}$ and $C$ have position vector $\vec{c}$. Then $M=\frac{1}{2}\vec{b}$ and $N=\frac{1}{2}\vec{c}$. The vector $\vec{MN}=\frac{1}{2}\vec{c}-\frac{1}{2}\vec{b}=\frac{1}{2}(\vec{c}-\vec{b})=\frac{1}{2}\vec{BC}$. Since $\vec{MN}$ is a scalar multiple of $\vec{BC}$, the two segments are parallel, and $MN=\frac{1}{2}BC$.

## The Converse

If a line passes through the midpoint of one side of a triangle and is **parallel** to a second side, then it passes through the midpoint of the third side. This converse is useful for proving that a point is a midpoint.

## Midpoints in Coordinate Geometry

The midpoint of $A(x_1,y_1)$ and $B(x_2,y_2)$ is:

$$M = \left(\frac{x_1+x_2}{2},\;\frac{y_1+y_2}{2}\right)$$

Combined with the distance formula, this lets you verify the midpoint theorem numerically for any triangle given by coordinates.

### Stretch Thought

Can the midpoint theorem be extended to quadrilaterals? What shape do you get if you connect the midpoints of a general quadrilateral in order?
