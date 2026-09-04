---
id: 2de-vectors-collinearity
order: 8
title: Vectors, coordinates, and collinearity
level: 2de
strand: Geometry
difficulty: core
estimatedMinutes: 30
summary: Compute with vector coordinates, use the determinant to test collinearity, and prove alignment or parallelogram properties with vector equalities.
objectives:
  - Compute the coordinates of a vector and of a sum of vectors
  - Test collinearity of two vectors with the determinant
  - Prove alignment and parallelogram properties using vector equalities
prerequisites:
  - Translation and vectors
  - Coordinates, distance, and midpoint
vocabulary:
  - en: collinear vectors
    fr: vecteurs colinéaires
    definition: Two vectors are collinear when one is a multiple of the other, which means they have the same direction.
  - en: determinant
    fr: déterminant
    definition: For two vectors with coordinates, the number x times y prime minus y times x prime, which is zero exactly when they are collinear.
  - en: position vector
    fr: vecteur position
    definition: The vector joining the origin of the frame to a point, whose coordinates are those of the point.
flashcards:
  - front: What are the coordinates of $\vec{AB}$?
    back: $\vec{AB}(x_{B}-x_{A},\;y_{B}-y_{A})$, always the coordinates of the endpoint minus those of the start.
  - front: How do you test whether $\vec{u}(x,y)$ and $\vec{v}(x',y')$ are collinear?
    back: Compute the determinant $xy'-yx'$. The vectors are collinear exactly when it equals $0$.
  - front: How do you prove that $A$, $B$ and $C$ are collinear?
    back: Show that $\vec{AB}$ and $\vec{AC}$ are collinear, that is that their determinant is zero.
  - front: Which vector equality characterizes the parallelogram $ABCD$?
    back: $\vec{AB}=\vec{DC}$. Note the order of the letters, since $\vec{AB}=\vec{CD}$ describes a crossed quadrilateral instead.
generator:
  type: signed-arithmetic
  seed: 20801
  count: 6
  min: -8
  max: 8
tieredExercises:
  - id: '2de-vect-t1'
    tier: 1
    tierTitle: 'Direct Application'
    curriculumStatus: 'core'
    prompt: 'Given $A(-1,4)$ and $B(3,-2)$, give the coordinates of $\vec{AB}$.'
    solution: '$\vec{AB}(3-(-1),\;-2-4)=(4,\;-6)$.'
    hints:
      - 'Subtract the coordinates of the starting point from those of the endpoint.'
    assessment:
      kind: 'exact'
      expected: '(4, -6)'
  - id: '2de-vect-t2'
    tier: 2
    tierTitle: 'Standard Practice'
    curriculumStatus: 'core'
    prompt: 'Compute the determinant of $\vec{u}(3,-2)$ and $\vec{v}(-6,4)$, then state whether the two vectors are collinear.'
    solution: 'The determinant is $3\times 4-(-2)\times(-6)=12-12=0$. Since it is zero, the vectors are collinear, and indeed $\vec{v}=-2\vec{u}$.'
    hints:
      - 'The determinant of $(x,y)$ and $(x'',y'')$ is $xy''-yx''$.'
      - 'Watch the sign of the product of two negative numbers.'
    assessment:
      kind: 'numeric'
      expected: 0
  - id: '2de-vect-t3'
    tier: 3
    tierTitle: 'Official Core Synthesis'
    curriculumStatus: 'core'
    prompt: 'Let $A(1,-1)$, $B(4,1)$ and $C(2,5)$. Determine the coordinates of the point $D$ such that $ABCD$ is a parallelogram, then verify your answer by comparing the midpoints of the two diagonals.'
    solution: 'The quadrilateral $ABCD$ is a parallelogram exactly when $\vec{AB}=\vec{DC}$. We have $\vec{AB}(4-1,\;1-(-1))=(3,\;2)$ and $\vec{DC}(2-x_{D},\;5-y_{D})$. Equating coordinates gives $2-x_{D}=3$ and $5-y_{D}=2$, so $x_{D}=-1$ and $y_{D}=3$, that is $D(-1,3)$. For the check, the midpoint of $[AC]$ is $\left(\dfrac{1+2}{2},\dfrac{-1+5}{2}\right)=(1.5,\;2)$ and the midpoint of $[BD]$ is $\left(\dfrac{4+(-1)}{2},\dfrac{1+3}{2}\right)=(1.5,\;2)$. The diagonals share the same midpoint, which confirms the parallelogram.'
    hints:
      - 'Write the defining vector equality before computing anything.'
      - 'A quadrilateral is a parallelogram exactly when its diagonals have the same midpoint.'
    assessment:
      kind: 'reasoning'
      rubric:
        - 'States the correct vector equality for the parallelogram ABCD.'
        - 'Solves the coordinate equations to obtain the point with coordinates -1 and 3.'
        - 'Verifies the answer with the common midpoint of the diagonals.'
  - id: '2de-vect-t4'
    tier: 4
    tierTitle: 'Advanced Challenge'
    curriculumStatus: 'olympiad'
    prompt: 'Let $ABCD$ be any quadrilateral of the plane, and let $P$, $Q$, $R$, $S$ be the midpoints of $[AB]$, $[BC]$, $[CD]$ and $[DA]$. Prove that $PQRS$ is always a parallelogram, and explain what happens when $A$, $B$, $C$ and $D$ are collinear.'
    solution: 'Work with vectors from a fixed origin. Since $P$ and $Q$ are the midpoints of $[AB]$ and $[BC]$, the segment $[PQ]$ is a midline of triangle $ABC$, so $\vec{PQ}=\tfrac{1}{2}\vec{AC}$. In the same way $S$ and $R$ are the midpoints of $[DA]$ and $[CD]$, so $[SR]$ is a midline of triangle $ACD$ and $\vec{SR}=\tfrac{1}{2}\vec{AC}$. Therefore $\vec{PQ}=\vec{SR}$, which is exactly the condition for $PQSR$ read in that order, that is for the quadrilateral $PQRS$, to be a parallelogram. The proof used no hypothesis on $ABCD$, so it holds for every quadrilateral, convex or not. If the four points are collinear, all the midpoints lie on the same line, the vector equality $\vec{PQ}=\vec{SR}$ still holds, but the parallelogram is flattened: it is degenerate, with zero area.'
    hints:
      - 'Express each side of the inner quadrilateral through the midline of a triangle built on a diagonal.'
      - 'Both opposite sides turn out to be half of the same diagonal.'
    assessment:
      kind: 'reasoning'
      rubric:
        - 'Uses the midline property to express two opposite sides as half of the same diagonal.'
        - 'Concludes with a vector equality that characterizes the parallelogram.'
        - 'Discusses the degenerate case of four collinear points.'
---
## A vector is a displacement

A **vector** carries a direction, a sense, and a length, but no fixed position. The vector from $A$ to $B$ is written $\vec{AB}$, and in a frame its coordinates are

$$\vec{AB}(x_{B}-x_{A},\;y_{B}-y_{A}).$$

Two vectors are **equal** exactly when their coordinates are equal. Writing $\vec{AB}=\vec{DC}$ therefore replaces a figure by two numerical equations, which is what makes vectors a computational tool rather than a drawing.

## Operations in coordinates

For $\vec{u}(x,y)$, $\vec{v}(x',y')$ and a real number $k$:

$$\vec{u}+\vec{v}\;(x+x',\;y+y'),\qquad k\vec{u}\;(kx,\;ky),\qquad \|\vec{u}\|=\sqrt{x^{2}+y^{2}}.$$

The last formula needs an orthonormal frame, like every length formula.

## Collinearity and the determinant

Two vectors are **collinear** when one is a multiple of the other. Rather than searching for that multiple, compute the **determinant**

$$\det(\vec{u},\vec{v})=xy'-yx'.$$

$$\vec{u}\text{ and }\vec{v}\text{ are collinear}\iff xy'-yx'=0.$$

This single number answers three questions at once.

- **Alignment**: $A$, $B$, $C$ are collinear exactly when $\det(\vec{AB},\vec{AC})=0$.
- **Parallel lines**: $(AB)\parallel(CD)$ exactly when $\det(\vec{AB},\vec{CD})=0$.
- **Direction of a line**: any nonzero vector collinear with $\vec{AB}$ directs the line $(AB)$.

## Standard proofs

Most Seconde geometry proofs reduce to one vector equality.

| Goal | Condition |
| --- | --- |
| $ABCD$ is a parallelogram | $\vec{AB}=\vec{DC}$ |
| $M$ is the midpoint of $[AB]$ | $\vec{AM}=\tfrac{1}{2}\vec{AB}$ |
| $A$, $B$, $C$ are collinear | $\det(\vec{AB},\vec{AC})=0$ |
| $[PQ]$ is a midline of triangle $ABC$ | $\vec{PQ}=\tfrac{1}{2}\vec{AC}$ |

Reading the letters in the right order matters: $\vec{AB}=\vec{DC}$ gives a parallelogram, while $\vec{AB}=\vec{CD}$ gives a crossed quadrilateral.

### Stretch thought

Given three points $A$, $B$, $C$, how many points $D$ make $ABCD$ a parallelogram if the order of the letters is allowed to change? Find them all.
