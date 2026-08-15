---
id: 5e-measurement-solids
locale: en
title: Measurement and Representations of Solids
strand: Measurement and Geometry
summary: Convert metric units, calculate prism and cylinder volumes, and connect perspective drawings, views, cube stacks, and nets.
objectives:
  - Convert length, area, volume, and capacity units
  - Calculate volumes of prisms and cylinders using $V=B\times h$
  - Draw and interpret perspective and top, front, and side views
  - Link cube stacks and nets to the faces and dimensions of a solid
prerequisites:
  - Multiply finite decimal numbers
  - Calculate rectangle, triangle, and disk areas
  - Read metric units and scales
vocabulary:
  - en: decimal number
    definition: A number that can be written as an integer divided by a power of $10$, so it has a finite decimal representation.
  - en: volume
    definition: The amount of three-dimensional space occupied by a solid, measured in cubic units.
  - en: net
    definition: A plane arrangement of all faces that can be folded without overlap to form a solid.
  - en: prism
    definition: A solid with two congruent parallel polygonal bases joined by parallelogram faces.
  - en: orthographic view
    definition: A flat view seen perpendicularly from a specified direction, such as top, front, or side.
flashcards:
  - front: State the volume formula for a prism or cylinder.
    back: $V=B\times h$, where $B$ is one base area and $h$ is the perpendicular height.
  - front: What capacities equal $1\text{ dm}^3$ and $1\text{ cm}^3$?
    back: $1\text{ dm}^3=1\text{ L}$ and $1\text{ cm}^3=1\text{ mL}$.
  - front: What does a top view show?
    back: The footprint seen perpendicularly from above; hidden stack heights need labels if they cannot be inferred.
  - front: What must match when a net folds?
    back: Edges that meet must have equal lengths, and every face must appear exactly once without overlap.
exercises:
  - id: 5e-measurement-solids-t1
    tierTitle: Core Unit Conversions
    prompt: >-
      Convert $2.4\text{ m}^2$ to square centimeters, $0.006\text{ m}^3$ to cubic decimeters, and $750\text{ cm}^3$ to milliliters. State the factor used each time.
    solution: >-
      Since $1\text{ m}^2=10\,000\text{ cm}^2$, $2.4\text{ m}^2=24\,000\text{ cm}^2$. Since $1\text{ m}^3=1\,000\text{ dm}^3$, $0.006\text{ m}^3=6\text{ dm}^3$. Since $1\text{ cm}^3=1\text{ mL}$, $750\text{ cm}^3=750\text{ mL}$.
    hints:
      - Square the length conversion factor for area and cube it for volume.
      - Use the direct capacity-volume equivalence for cubic centimeters.
    rubric:
      - Obtains $24\,000\text{ cm}^2$ using factor $10\,000$.
      - Obtains $6\text{ dm}^3$ using factor $1\,000$.
      - Obtains $750\text{ mL}$ using $1\text{ cm}^3=1\text{ mL}$.
  - id: 5e-measurement-solids-t2
    tierTitle: Core Prism and Cylinder Volumes
    prompt: >-
      A triangular prism has a triangular base of base $6$ cm and perpendicular height $4$ cm; the prism height is $10$ cm. A cylinder has radius $3$ cm and height $8$ cm. Calculate both volumes, use $\pi\approx3.14$ for the cylinder, and convert each answer to milliliters.
    solution: >-
      The triangular base area is $6\times4/2=12\text{ cm}^2$, so the prism volume is $12\times10=120\text{ cm}^3=120\text{ mL}$. The cylinder volume is $\pi r^2h=\pi\times3^2\times8=72\pi\text{ cm}^3\approx226.08\text{ cm}^3=226.08\text{ mL}$.
    hints:
      - Calculate one base area before multiplying by the solid's perpendicular height.
      - Cubic centimeters and milliliters have the same numerical value.
    rubric:
      - Obtains the triangular base area $12\text{ cm}^2$ and prism volume $120\text{ cm}^3$.
      - Obtains $72\pi\text{ cm}^3\approx226.08\text{ cm}^3$ for the cylinder.
      - Converts the volumes correctly to $120\text{ mL}$ and approximately $226.08\text{ mL}$.
  - id: 5e-measurement-solids-t3
    tierTitle: Official Core Synthesis
    prompt: >-
      A rectangular prism is built from $1$ cm cubes in a complete array $4$ cubes long, $3$ cubes deep, and $2$ cubes high. Describe a perspective sketch; give the dimensions of its top, front, and right-side views; describe the six rectangles in a net; and calculate its volume in cubic centimeters and milliliters.
    solution: >-
      A perspective sketch shows a $4\times3$ base with vertical edges $2$ units high; parallel receding edges are drawn parallel and equal visible edges are kept consistent. The top view is a $4$ by $3$ rectangle, the front view is $4$ by $2$, and the right-side view is $3$ by $2$. A net has two $4\times3$ faces, two $4\times2$ faces, and two $3\times2$ faces arranged along matching edges so they fold without overlap. There are $4\times3\times2=24$ unit cubes, so $V=24\text{ cm}^3=24\text{ mL}$.
    hints:
      - Each view suppresses the dimension pointing toward the observer.
      - Opposite faces of a rectangular prism are congruent.
      - Count layers or use $L\times W\times H$.
    rubric:
      - Describes a coherent perspective drawing with dimensions $4,3,2$.
      - Gives views $4\times3$, $4\times2$, and $3\times2$ in the correct directions.
      - Lists the three congruent pairs of faces and requires matching fold edges.
      - Obtains $24\text{ cm}^3=24\text{ mL}$.
  - id: 5e-measurement-solids-t4
    tierTitle: Olympiad Exhaustive Optimization
    prompt: >-
      A closed rectangular box has positive integer side lengths in centimeters and volume $72\text{ cm}^3$. Determine the dimensions that minimize total surface area and prove exhaustively that no other allowed box uses less material.
    solution: >-
      Order the dimensions $a\le b\le c$, with $abc=72$. Then $a^3\le72$, so $a\le4$. For $a=1$, the divisor pairs of $72$ with $1\le b\le c$ give $(1,1,72)$, $(1,2,36)$, $(1,3,24)$, $(1,4,18)$, $(1,6,12)$, $(1,8,9)$. For $a=2$, pairs of $36$ with $2\le b\le c$ give $(2,2,18)$, $(2,3,12)$, $(2,4,9)$, $(2,6,6)$. For $a=3$, pairs of $24$ with $3\le b\le c$ give $(3,3,8)$ and $(3,4,6)$. For $a=4$, $bc=18$ and no divisor $b$ satisfies $4\le b\le\sqrt{18}$, so there is no new triple. Using $S=2(ab+ac+bc)$, the respective areas are $290,220,198,188,180,178,152,132,124,120,114,108\text{ cm}^2$. The unique minimum is $108\text{ cm}^2$ for $3,4,6$. The bound on $a$ and the complete divisor-pair lists prove exhaustion; permutations do not change area.
    hints:
      - Order the dimensions and use $a^3\le72$ to bound the smallest one.
      - For each possible $a$, list every divisor pair for $bc=72/a$.
      - Compare $S=2(ab+ac+bc)$ only after proving the candidate list complete.
    rubric:
      - Bounds $a$ and exhausts all cases $a=1,2,3,4$ using factor pairs.
      - Lists exactly the twelve possible unordered triples.
      - Calculates all surface areas correctly and identifies $3,4,6$ with $108\text{ cm}^2$.
      - Explains why ordering, the bound, and divisor-pair exhaustion prove global optimality.
---
## Measurements and Decimal Notation

Length uses linear units, area uses square units, and volume uses cubic units. A **decimal number** is a number that can be written as $a/10^n$ for integers $a$ and nonnegative $n$; equivalently, it has a finite decimal representation. It is not defined merely as “a number written with a decimal point.” For example, $3/8=0.375$ is decimal, while $1/3$ is not a decimal number even though it has an infinite decimal expansion.

## Metric Conversions

Each metric length step changes by a factor of $10$, so the corresponding area factor is $100$ and volume factor is $1\,000$:

$$1\text{ m}^2=10\,000\text{ cm}^2,\qquad 1\text{ m}^3=1\,000\text{ dm}^3=1\,000\,000\text{ cm}^3.$$

Capacity connects to volume:

$$1\text{ dm}^3=1\text{ L},\qquad1\text{ cm}^3=1\text{ mL}.$$

## Core Volumes of Prisms and Cylinders

A prism has two congruent parallel polygonal bases. A cylinder has two congruent parallel circular bases. For both,

$$V=B\times h,$$

where $B$ is the area of one base and $h$ is the perpendicular distance between the bases. Thus a rectangular prism has $V=LWH$, a triangular prism uses $B=b h_{\triangle}/2$, and a cylinder has

$$V=\pi r^2h.$$

Do not replace the perpendicular height with a slanted edge.

## Perspective Drawings and Orthographic Views

An oblique or cavalier perspective drawing represents three dimensions on a page. Parallel edges of the solid remain parallel in each receding direction; hidden edges may be dashed. The drawing helps visualization but is not generally to scale.

Top, front, and side views are orthographic: the observer looks perpendicularly at the object. A view records width and height in that direction but suppresses depth. Label the chosen front because changing it changes the named views.

## Cube Stacks

A top view gives the footprint of a cube stack but may not determine the number of cubes. Write the height of each occupied column on the top-view grid. The total number of cubes is the sum of these column heights. Front and side views show the greatest visible height in each projected column, so different stacks can sometimes share the same views.

## Nets and Their Links to Views

A valid net contains every face exactly once, joins faces along equal-length edges, and folds without overlap. A rectangular prism has three pairs of congruent rectangular faces. A triangular prism has two congruent triangles and three rectangles. Views help identify face dimensions, while the net shows which edges meet after folding.

## Stretch Only: Total Surface Area of a Cylinder

The **total surface area of a closed cylinder is stretch material in this lesson**, not a core volume requirement. Its net has two disks and a rectangle whose dimensions are $h$ and $2\pi r$, giving

$$S=2\pi r^2+2\pi rh.$$

Open cylinders require omitting the missing disk; identifying actual faces is safer than applying a memorized formula blindly.

## Measurement Wording and Tile Counts

Area alone gives only a lower bound for a real tiling problem. If each tile has area $0.25\text{ m}^2$ and a floor has area $16.8\text{ m}^2$, the area quotient is $67.2$, so at least $68$ tiles are required. This is an **area estimate**, not an exact layout claim: the exact count can be larger and depends on tile dimensions, room shape, cuts, grout, breakage, and whether offcuts can be reused. Saying “assuming no waste” while rounding a noninteger quotient up is ambiguous and should be avoided.
