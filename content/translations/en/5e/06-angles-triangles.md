---
id: 5e-angles-triangles
locale: en
title: Angles, Particular Triangles, and Remarkable Lines
strand: Geometry
summary: Use angle relations, construct and characterize particular triangles, and work with perpendicular bisectors, heights, medians, and area.
objectives:
  - Use angle relationships and the angle sum of a triangle
  - Recognize, construct, and characterize right, isosceles, and equilateral triangles
  - Construct perpendicular bisectors, the circumcircle, heights, and medians
  - Use concurrence, the median equal-area property, and the triangle area formula
prerequisites:
  - Measure and construct angles
  - Use a ruler, compass, and set square
  - Recognize coded equal lengths, right angles, and parallel lines
vocabulary:
  - en: particular triangle
    definition: A triangle with a defining property, such as being right, isosceles, or equilateral.
  - en: perpendicular bisector
    definition: The line perpendicular to a segment through its midpoint; its points are equidistant from the segment endpoints.
  - en: height of a triangle
    definition: A line through a vertex perpendicular to the opposite side or its extension.
  - en: median of a triangle
    definition: A line through a vertex and the midpoint of the opposite side.
flashcards:
  - front: What is the sum of the interior angles of a triangle?
    back: $180^\circ$.
  - front: What characterizes a point on the perpendicular bisector of $[AB]$?
    back: It is equidistant from $A$ and $B$.
  - front: Where is the circumcenter of a triangle?
    back: At the common intersection of its three perpendicular bisectors.
  - front: What does a median do to the area of a triangle?
    back: It divides the triangle into two triangles of equal area.
exercises:
  - id: 5e-angles-t1
    tierTitle: Coded Recognition
    prompt: A coded figure gives $AB=AC$ and $\widehat{A}=40^\circ$ in triangle $ABC$. Name the particular triangle and calculate angles $B$ and $C$.
    solution: $AB=AC$, so $ABC$ is isosceles at $A$ and its base angles $B$ and $C$ are equal. They sum to $180^\circ-40^\circ=140^\circ$, so $B=C=70^\circ$.
    hints:
      - Equal side coding identifies an isosceles triangle.
      - The angles opposite equal sides are equal.
    rubric:
      - Recognizes an isosceles triangle at $A$ from the coding.
      - Uses equal base angles and the $180^\circ$ angle sum.
      - Obtains $B=C=70^\circ$.
  - id: 5e-angles-t2
    tierTitle: Circumcircle Construction
    prompt: For a nondegenerate triangle $ABC$, construct its circumcircle with ruler and compass. Describe the construction and justify why the circle passes through all three vertices.
    solution: Construct the perpendicular bisectors of $[AB]$ and $[AC]$; they meet at $O$. Since $O$ lies on the perpendicular bisector of $[AB]$, $OA=OB$. Since it lies on that of $[AC]$, $OA=OC$. Thus $OA=OB=OC$, so the circle centered at $O$ with radius $OA$ passes through $A,B,C$. The third perpendicular bisector also passes through $O$, so the three are concurrent.
    hints:
      - A point on a segment's perpendicular bisector is equidistant from its endpoints.
      - Two equal-distance statements are enough to obtain $OA=OB=OC$.
    rubric:
      - Constructs two perpendicular bisectors and their intersection $O$.
      - Uses their equidistance property to prove $OA=OB=OC$.
      - Draws the circle centered at $O$ and identifies concurrence of all three perpendicular bisectors.
  - id: 5e-angles-t3
    tierTitle: Official Core Synthesis
    prompt: Construct triangle $ABC$ with $AB=AC=5$ cm and $BC=6$ cm. Construct the midpoint $M$ of $[BC]$, the median $(AM)$, and the height from $A$, whose foot is $H$. Knowing that $AH=4$ cm, calculate the area of $ABC$ and prove that triangles $ABM$ and $ACM$ have equal areas.
    solution: Draw $BC=6$ cm, then the circles centered at $B$ and $C$, each with radius $5$ cm; an intersection is $A$. Construct the perpendicular bisector of $[BC]$ to obtain its midpoint $M$, then draw $(AM)$. Draw through $A$ the perpendicular to $(BC)$; its intersection with $(BC)$ is $H$ (in this isosceles triangle, $H=M$). The area is $BC\times AH/2=6\times4/2=12\text{ cm}^2$. Since $BM=MC=3$ cm and both smaller triangles have the same height from $A$ to $(BC)$, each area is $3\times4/2=6\text{ cm}^2$.
    hints:
      - Use two circles to locate $A$.
      - A median joins a vertex to the midpoint of the opposite side; a height is perpendicular to that side.
      - The two smaller triangles have bases on the same line and share the same height.
    rubric:
      - Gives a correct ruler-and-compass construction of $ABC$, $M$, the median, and the height.
      - Uses the perpendicular height to obtain $12\text{ cm}^2$.
      - Uses $BM=MC$ and the common height to prove equal areas of $6\text{ cm}^2$.
  - id: 5e-angles-t4
    tierTitle: Olympiad Exhaustive Challenge
    prompt: A triangle has whole-number side lengths, perimeter $24$ cm, and one side of length $9$ cm. Find all possible unordered triples, identify the isosceles cases, and prove that the list is complete.
    solution: Order the sides $a\le b\le c$. The side $9$ cannot be $a$, since the perimeter would be at least $27$. If $c=9$, then $a+b=15$ with $a\le b\le9$, giving $(a,b)=(6,9)$ or $(7,8)$; both satisfy $a+b>c$. If $b=9<c$, then $a+c=15$ and $a<6$. The inequality $a+9>15-a$ gives $a>3$, so $a=4$ or $5$, producing $(4,9,11)$ and $(5,9,10)$. Thus the complete list is $(6,9,9)$, $(7,8,9)$, $(4,9,11)$, and $(5,9,10)$; only $(6,9,9)$ is isosceles. The ordered cases $b=9$ and $c=9$ exhaust every possible position of the side $9$.
    hints:
      - Order the sides $a\le b\le c$.
      - Separate the cases $b=9$ and $c=9$, then apply the strict triangle inequality.
    rubric:
      - Separates and exhausts the cases $b=9$ and $c=9$.
      - Finds exactly the four valid triples.
      - Identifies the unique isosceles case and proves completeness.
---
## Angle Relationships

Adjacent angles share a vertex and one side without overlapping. Complementary angles sum to $90^\circ$; supplementary angles sum to $180^\circ$. Vertically opposite angles formed by two intersecting lines are equal.

When two **distinct** parallel lines are cut by a transversal, corresponding and alternate interior angles are equal, while same-side interior angles are supplementary. Parallelism must be given, coded, or proved before these properties are used.

The interior angles of every triangle sum to $180^\circ$. An exterior angle equals the sum of the two nonadjacent interior angles.

## Particular Triangles

- A **right triangle** has one right angle. Conversely, a triangle with a coded right angle is right.
- An **isosceles triangle** has two equal sides. Its base angles are equal. Conversely, if two angles are equal, their opposite sides are equal.
- An **equilateral triangle** has three equal sides. Its three angles are $60^\circ$. Conversely, a triangle with three $60^\circ$ angles is equilateral.

Coding matters: ticks show equal lengths, arcs show equal angles, and a small square shows a right angle. Never infer a property from appearance alone. A triangle may belong to more than one category; for example, an isosceles right triangle is both right and isosceles.

## Constructing a Triangle

To construct side lengths $a,b,c$, draw one side, then two circles whose radii are the other lengths. An intersection gives the third vertex. A non-flat triangle exists exactly when the longest length is less than the sum of the other two.

## Perpendicular Bisectors and Circumcircle

The perpendicular bisector of $[AB]$ is perpendicular to $(AB)$ at its midpoint. A point $P$ lies on it exactly when $PA=PB$. The three perpendicular bisectors of a triangle are concurrent at the **circumcenter** $O$. Since $OA=OB=OC$, the circle centered at $O$ through one vertex passes through all three: it is the circumcircle.

## Heights and Medians

A height is a line through a vertex perpendicular to the opposite side or its extension. The three heights are concurrent at the **orthocenter**.

A median joins a vertex to the midpoint of the opposite side. The three medians are concurrent at the **centroid**. A median divides a triangle into two equal-area triangles: the two bases are equal and the perpendicular height to their common supporting line is the same.

## Area of a Triangle

For a chosen base $b$ and its corresponding perpendicular height $h$,

$$A=\frac{b\times h}{2}.$$

The height may fall outside an obtuse triangle, but it is still the perpendicular distance to the line containing the base. Use length units for constructions and square units for area.

## Stretch Connection

The perpendicular bisectors, heights, and medians each form a concurrent family, but generally at three different points. Proving more advanced relationships among these points or exhaustively classifying integer-sided triangles belongs to stretch or olympiad work such as T4.
