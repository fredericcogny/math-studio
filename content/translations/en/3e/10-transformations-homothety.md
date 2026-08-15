---
id: 3e-transformations-homothety
locale: en
title: Transformations, Homothety, and Similarity
strand: Geometry
summary: Construct and compose symmetries, translations, rotations, and homotheties, then predict how measures scale.
objectives:
  - Construct and describe axial and central symmetries, translations, and rotations
  - Use a homothety to recognize similar figures
  - Compose transformations and apply length, area, and volume factors
prerequisites:
  - Coordinates in the plane
  - Ratios and powers
vocabulary:
  - en: translation
    definition: A transformation that moves every point by the same directed displacement.
  - en: rotation
    definition: A transformation determined by a center, an angle, and a direction.
  - en: homothety
    definition: A transformation that multiplies directed distances from a fixed center by one factor.
  - en: similar figures
    definition: Figures with equal corresponding angles and proportional corresponding lengths.
flashcards:
  - front: Which transformations preserve lengths?
    back: Axial and central symmetries, translations, and rotations are isometries and preserve lengths.
  - front: What does a homothety of factor $k$ do to area?
    back: It multiplies area by $k^2$.
  - front: What does a scale factor $k$ do to volume?
    back: It multiplies volume by $|k|^3$; for physical enlargements, $k$ is positive.
exercises:
  - id: 3e-transformations-t1
    tierTitle: Direct Application
    prompt: "For $A(-2,3)$, give the image $A'$ under axial symmetry across the horizontal axis and the image $A''$ under central symmetry about the origin."
    solution: "Reflection across the horizontal axis keeps the abscissa and changes the sign of the ordinate, so $A'=(-2,-3)$. Central symmetry about the origin changes both signs, so $A''=(2,-3)$."
    hints:
      - "An axial reflection across the horizontal axis changes only $y$; central symmetry about the origin changes both coordinates."
    expected: "A'=(-2,-3), A''=(2,-3)"
    accepted:
      - "(-2,-3); (2,-3)"
      - "A'(-2,-3) and A''(2,-3)"
  - id: 3e-transformations-t2
    tierTitle: Brevet Standard
    prompt: "Two similar solids have corresponding edges $6$ cm and $9$ cm. The smaller solid has surface area $80$ cm$^2$ and volume $64$ cm$^3$. Determine the scale factor and the larger solid's surface area and volume. State why the area and volume use different powers."
    solution: "The length scale factor is $k=9/6=3/2$. Areas scale by $k^2=9/4$, so the larger surface area is $80\\times9/4=180$ cm$^2$. Volumes scale by $k^3=27/8$, so the larger volume is $64\\times27/8=216$ cm$^3$. Area has two length dimensions, whereas volume has three."
    hints:
      - "Find the linear factor from the corresponding edges first."
      - "Square it for area and cube it for volume."
    rubric:
      - "Obtains the linear factor $3/2$."
      - "Uses the area factor $9/4$ to obtain $180$ cm$^2$."
      - "Uses the volume factor $27/8$ to obtain $216$ cm$^3$ and explains the exponents."
  - id: 3e-transformations-t3
    tierTitle: Synthesis
    prompt: "Square $ABCD$ has vertices $A(1,1)$, $B(3,1)$, $C(3,3)$, and $D(1,3)$. Construct its image after a $90^\\circ$ counterclockwise rotation about the origin, then a homothety centered at the origin with factor $1/2$. Give all intermediate and final coordinates, the final area, and explain why reversing the two steps would give the same result here."
    solution: "The rotation sends $(x,y)$ to $(-y,x)$, giving $A'(-1,1)$, $B'(-1,3)$, $C'(-3,3)$, and $D'(-3,1)$. The homothety gives $A''(-1/2,1/2)$, $B''(-1/2,3/2)$, $C''(-3/2,3/2)$, and $D''(-3/2,1/2)$. The original area is $4$; rotation preserves it and the homothety multiplies it by $1/4$, so the final area is $1$. Both transformations have the same center and the coordinate rules $(-y,x)$ and $(x/2,y/2)$ commute, so reversing them gives the same final points."
    hints:
      - "Use $(x,y)\\mapsto(-y,x)$ for the rotation, then halve both coordinates."
      - "Compare the coordinate rules in both possible orders."
    rubric:
      - "Computes all four intermediate rotated coordinates correctly."
      - "Computes all four final coordinates after the homothety."
      - "Uses the area factor $1/4$ to obtain final area $1$."
      - "Shows from the coordinate rules that the two same-center transformations commute."
  - id: 3e-transformations-t4
    tierTitle: Advanced Challenge
    prompt: "Two perpendicular lines $d_1$ and $d_2$ meet at $O$. For any point $P$, construct $P_1$, its axial reflection across $d_1$, then $P_2$, the axial reflection of $P_1$ across $d_2$. Finally construct $Q$, the image of $P_2$ under the homothety centered at $O$ with factor $-1/2$. Prove without coordinates that $P_2$ is the central-symmetry image of $P$ about $O$, then prove that the complete three-step construction sends $P$ to the point $Q$ on ray $OP$ with $OQ=OP/2$. Deduce the area factor for any figure."
    solution: "Each axial symmetry preserves distance from $O$, so $OP=OP_1=OP_2$. Reflection doubles the directed angle from a point to its axis. Because $d_1$ and $d_2$ are perpendicular, the two reflections turn ray $OP$ through $180^\\circ$ in total. Thus $O,P,P_2$ are aligned on opposite rays with $OP_2=OP$: $P_2$ is the central-symmetry image of $P$ about $O$. The homothety of factor $-1/2$ places $Q$ on the ray opposite $OP_2$, which is ray $OP$, and gives $OQ=OP_2/2=OP/2$. Therefore the complete construction is exactly the homothety centered at $O$ with factor $1/2$. It multiplies all lengths by $1/2$ and every area by $(1/2)^2=1/4$."
    hints:
      - "Track the distance from $O$ and the total turn caused by reflections in perpendicular axes."
      - "A negative homothety factor places the image on the opposite ray."
      - "Identify one familiar transformation with the same center, ray, and distance rule."
    rubric:
      - "Gives a valid straightedge-and-compass construction of the successive images."
      - "Uses the perpendicular axes to prove that the two reflections compose to central symmetry about $O$."
      - "Uses the negative factor to prove that $Q$ lies on ray $OP$ with $OQ=OP/2$."
      - "Identifies the full composition as factor $1/2$ and deduces area factor $1/4$."
---
# Transformations, Homothety, and Similarity

## Isometries: move without resizing

A **translation** sends every point through the same vector. A **rotation** turns every point through the same directed angle about a fixed center. Both are isometries: they preserve lengths, angles, parallelism, area, and orientation for translations and rotations.

In coordinates, translation by $(u,v)$ sends

$$(x,y)\longmapsto(x+u,y+v).$$

A $90^\circ$ counterclockwise rotation about the origin sends $(x,y)$ to $(-y,x)$.

## Axial and Central Symmetry

An **axial symmetry** reflects a point across a line: the axis is the perpendicular bisector of the segment joining a point to its image. A **central symmetry** about $O$ sends $M$ to $M'$ so that $O$ is the midpoint of $[MM']$; it is also a $180^\circ$ rotation about $O$.

To construct an axial image, draw the perpendicular to the axis through the point and mark the same distance on the other side. To construct a central image, draw line $(OM)$ and copy length $OM$ beyond $O$. Both symmetries preserve lengths and angles, but an axial symmetry reverses orientation.

## Homothety: resize from a center

A homothety with center $O$ and factor $k$ sends $M$ to $M'$ on line $(OM)$ such that

$$\overrightarrow{OM'}=k\overrightarrow{OM}.$$

If $k>1$, it is an enlargement; if $0<k<1$, it is a reduction. If $k<0$, the image lies on the opposite ray. Lengths are multiplied by $|k|$, while angles are preserved. Therefore the original and image figures are **similar**.

## Length, area, and volume factors

For a positive linear scale factor $k$:

$$L'=kL,\qquad A'=k^2A,\qquad V'=k^3V.$$

For example, a model enlarged by factor $3$ has lengths multiplied by $3$, areas by $9$, and volumes by $27$. The units confirm the powers: area uses square units and volume uses cubic units.

## Worked example and method selection

A photograph $8$ cm wide and $5$ cm high is enlarged to width $12$ cm. The linear factor is $12/8=1.5$, so the new height is $5\times1.5=7.5$ cm. Its area changes from $40$ cm$^2$ to

$$40\times1.5^2=90\text{ cm}^2.$$

Use a translation or rotation when size must remain unchanged. Use homothety or similarity when corresponding lengths are proportional. Before calculating area or volume, always recover the **linear** factor.

## Common errors

- Multiplying an area or volume by $k$ instead of $k^2$ or $k^3$.
- Confusing a rotation angle with a homothety factor.
- Forgetting the center of a rotation or homothety.
- Confusing an axial-symmetry axis with a central-symmetry center.
- Treating similar figures as congruent: their shapes match, but their sizes may differ.
- Using a negative factor for physical area or volume; those measures remain nonnegative.

## Extension: composing transformations

Several transformations can combine into one, and order usually matters. Two reflections in perpendicular axes compose to central symmetry about their intersection. Rotations and homotheties with the same center can sometimes be compared by applying their construction rules point by point. Always construct or name the image after each step before attempting to simplify a composition.
