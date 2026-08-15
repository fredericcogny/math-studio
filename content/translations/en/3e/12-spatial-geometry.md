---
id: 3e-spatial-geometry
locale: en
title: Spatial Geometry and Sections
strand: Geometry in Space
summary: Analyze plane sections and coordinates in space and calculate sphere areas and ball, cone, and pyramid volumes.
objectives:
  - Recognize and calculate plane sections of solids
  - Use coordinates and distances in space
  - Distinguish spheres from balls and calculate areas, volumes, and scale effects
prerequisites:
  - The Pythagorean theorem
  - Areas of plane figures and powers
vocabulary:
  - en: cross-section
    definition: The plane figure formed where a plane intersects a solid.
  - en: slant height
    definition: For a right cone, the distance along its surface from the vertex to the base circle.
  - en: sphere
    definition: The surface consisting of all points at a fixed distance from a center.
  - en: pyramid
    definition: A solid with a polygonal base and triangular faces meeting at one vertex.
flashcards:
  - front: What is the volume of a cone or pyramid?
    back: One third of base area times perpendicular height.
  - front: What is the difference between a sphere and a ball?
    back: A sphere is the surface; a ball is the solid consisting of the sphere and its interior.
  - front: How does a volume change under scale factor $k$?
    back: It is multiplied by $k^3$.
exercises:
  - id: 3e-spatial-t1
    tierTitle: Direct Application
    prompt: "A right circular cone has radius $3$ cm and perpendicular height $4$ cm. Calculate its exact volume."
    solution: "Using $V=(1/3)\\pi r^2h$, we get $V=(1/3)\\pi\\times3^2\\times4=12\\pi$ cm$^3$."
    hints:
      - "Square the radius, not the height."
    expected: "12 pi cm^3"
    accepted:
      - "12π cm^3"
      - "12pi"
  - id: 3e-spatial-t2
    tierTitle: Brevet Standard
    prompt: "A square pyramid has base side $10$ cm and height $12$ cm. A plane parallel to the base cuts the pyramid $4$ cm from the vertex, forming a smaller pyramid. Find the side of the square section and the exact volume of the remaining frustum."
    solution: "The small pyramid is similar to the original with linear factor $4/12=1/3$. Its square base side is $10/3$ cm. The original volume is $(1/3)\\times10^2\\times12=400$ cm$^3$. The small volume is multiplied by $(1/3)^3=1/27$, so it is $400/27$ cm$^3$. The frustum volume is $400-400/27=10400/27$ cm$^3$."
    hints:
      - "The distance from the vertex gives the linear similarity factor."
      - "Subtract the small pyramid's volume from the original volume."
    expected: "section side 10/3 cm, frustum volume 10400/27 cm^3"
    accepted:
      - "10/3 cm, 10400/27 cm^3"
      - "10/3; 10400/27"
  - id: 3e-spatial-t3
    tierTitle: Synthesis
    prompt: "In an orthonormal coordinate system in space, $A(0,0,0)$, $B(4,0,0)$, $C(0,3,0)$, and $D(0,0,6)$. Prove that $ABC$ is right-angled, calculate its area, and then calculate the volume of pyramid $DABC$."
    solution: "$AB=4$, $AC=3$, and $BC=\\sqrt{(4-0)^2+(0-3)^2}=5$. Since $AB^2+AC^2=4^2+3^2=5^2=BC^2$, triangle $ABC$ is right-angled at $A$. Its area is $(1/2)\\times4\\times3=6$. Plane $ABC$ is $z=0$, while $DA$ is perpendicular to it and has length $6$. Therefore $V=(1/3)\\times6\\times6=12$ cubic units."
    hints:
      - "Use the three-dimensional distance formula for $BC$."
      - "The base lies in the plane $z=0$; identify the perpendicular height."
    rubric:
      - "Computes $AB=4$, $AC=3$, and $BC=5$ and proves the right angle."
      - "Calculates the base area as $6$ square units."
      - "Identifies height $DA=6$ and obtains volume $12$ cubic units."
  - id: 3e-spatial-t4
    tierTitle: Advanced Challenge
    prompt: "In a unit cube, $A$ is a vertex and $M,N,P$ are the midpoints of the three mutually perpendicular edges from $A$. A plane cuts off the corner $A$ in the triangular section $MNP$. Prove that $MNP$ is equilateral, calculate its exact area, and find the ratio of the volume of tetrahedron $AMNP$ to the cube's volume. Use only lengths, Pythagoras, and the pyramid-volume formula."
    solution: "Each face containing two of the three edges from $A$ is a unit square. In the face containing $AM$ and $AN$, Pythagoras gives $MN^2=AM^2+AN^2=(1/2)^2+(1/2)^2=1/2$. The same reasoning on the other two faces gives $NP^2=PM^2=1/2$, so $MNP$ is equilateral with side $s=1/\\sqrt2$. Its altitude $h$ satisfies $h^2=s^2-(s/2)^2=1/2-1/8=3/8$, so $h=\\sqrt6/4$ and its area is $sh/2=\\sqrt3/8$. View $AMNP$ as a pyramid with base the right triangle $AMN$. Its base area is $(1/2)(1/2)(1/2)=1/8$, and $AP=1/2$ is perpendicular to the face containing $AMN$, so its volume is $(1/3)(1/8)(1/2)=1/48$. The cube has volume $1$, hence the ratio is $1/48$."
    hints:
      - "Each side of $MNP$ is a diagonal of a half-by-half right triangle on one cube face."
      - "For the tetrahedron volume, choose $AMN$ as the base and $AP$ as the perpendicular height."
    rubric:
      - "Uses face diagonals and Pythagoras to prove that all three section sides equal $1/\\sqrt2$."
      - "Calculates the section area as $\\sqrt3/8$."
      - "Uses base area $1/8$ and perpendicular height $1/2$ to obtain tetrahedron volume $1/48$."
      - "Compares with cube volume $1$ to obtain ratio $1/48$."
---
# Spatial Geometry and Sections

## Plane sections

A **cross-section** is the figure obtained when a plane cuts a solid. A plane parallel to a prism or cylinder base produces a congruent base. A plane parallel to a pyramid or cone base produces a similar, usually smaller, base.

A plane cutting a **sphere**, which is only a surface, gives a circle. A plane cutting the corresponding solid **ball** gives a disk bounded by that circle. If the sphere has radius $R$ and the plane is distance $d$ from the center, the circle radius $r$ satisfies

$$r^2+d^2=R^2.$$

This follows from a right triangle joining the sphere's center, the section's center, and a point on the section circle.

## Coordinates in space

A point has coordinates $(x,y,z)$. In an orthonormal coordinate system,

$$AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}.$$

Coordinate planes are $z=0$, $y=0$, and $x=0$. Coordinates help verify right angles, locate sections, and identify perpendicular heights.

## Areas and volumes to know

For radius $r$, base area $B$, and perpendicular height $h$:

| Solid or surface | Formula |
| --- | --- |
| sphere surface area | $4\pi r^2$ |
| ball volume | $\frac43\pi r^3$ |
| cone volume | $\frac13\pi r^2h$ |
| pyramid volume | $\frac13Bh$ |

For a right cone with slant height $s$, lateral area is $\pi rs$. The slant height and perpendicular height are different; they satisfy $s^2=r^2+h^2$.

## Worked example: a sphere section

A sphere has radius $10$ cm. A plane lies $6$ cm from its center. The section radius is

$$r=\sqrt{10^2-6^2}=\sqrt{64}=8\text{ cm},$$

so the section area is $\pi r^2=64\pi$ cm$^2$.

## Scale and similar solids

If every length is multiplied by $k$, areas are multiplied by $k^2$ and volumes by $k^3$. A plane parallel to a pyramid's base creates a smaller similar pyramid; use the ratio of vertex-to-section height to total height as the linear factor.

## Method selection

- For a section, first identify its shape and similarity relationship.
- For coordinates, calculate only the distances needed to prove the claimed property.
- For volume, identify the base area and the **perpendicular** height.
- For a truncated cone or pyramid, subtract the smaller similar solid from the whole solid.

## Common errors

- Using diameter where a formula requires radius.
- Confusing a sphere's surface with the solid ball and their different formulas.
- Using slant height in a volume formula.
- Multiplying volume by a linear scale factor instead of its cube.
- Assuming a perspective drawing preserves lengths or right angles.

## Extension: Reasoning About a Cube Section

When a section joins points on cube edges, work face by face. Pythagoras gives lengths drawn across square faces, and a convenient triangular face can serve as the base of a pyramid. This avoids relying on visual perspective, which does not preserve lengths or right angles.
