---
id: 2de-trigonometry-projection
order: 10
title: Right-triangle trigonometry and orthogonal projection
level: 2de
strand: Geometry
difficulty: core
estimatedMinutes: 25
summary: Use cosine, sine, and tangent in a right triangle, and use the orthogonal projection to measure the distance from a point to a line.
objectives:
  - Compute a length or an angle in a right triangle with cosine, sine, or tangent
  - Construct the orthogonal projection of a point onto a line and use it as a distance
  - Establish and use the exact trigonometric values of the usual angles
prerequisites:
  - The Pythagorean theorem
  - Distance and midpoint in a coordinate plane
vocabulary:
  - en: orthogonal projection
    fr: projeté orthogonal
    definition: The foot of the perpendicular dropped from a point to a line, which is the point of the line closest to it.
  - en: tangent of an angle
    fr: tangente d'un angle
    definition: In a right triangle, the ratio of the side opposite the angle to the side adjacent to it.
  - en: distance from a point to a line
    fr: distance d'un point à une droite
    definition: The length between the point and its orthogonal projection on the line.
flashcards:
  - front: What are the three ratios in a right triangle?
    back: $\cos\widehat{A}=\dfrac{\text{adjacent}}{\text{hypotenuse}}$, $\sin\widehat{A}=\dfrac{\text{opposite}}{\text{hypotenuse}}$, $\tan\widehat{A}=\dfrac{\text{opposite}}{\text{adjacent}}$.
  - front: Which identity links cosine and sine?
    back: $\cos^{2}\widehat{A}+\sin^{2}\widehat{A}=1$, a direct consequence of the Pythagorean theorem.
  - front: Why is the orthogonal projection the closest point of the line?
    back: For any other point $M$ of the line, the triangle formed with the foot $H$ is right-angled at $H$, so the hypotenuse is longer than $AH$.
  - front: What are the exact values for $45$ degrees?
    back: $\cos 45^{\circ}=\sin 45^{\circ}=\dfrac{\sqrt{2}}{2}$ and $\tan 45^{\circ}=1$, read from a square cut along its diagonal.
generator:
  type: signed-arithmetic
  seed: 21001
  count: 6
  min: -10
  max: 10
tieredExercises:
  - id: '2de-trig-t1'
    tier: 1
    tierTitle: 'Direct Application'
    curriculumStatus: 'core'
    prompt: 'In a triangle right-angled at $B$, the hypotenuse $AC$ measures $10$ and the angle at $A$ measures $30$ degrees. Compute the length $BC$.'
    solution: 'The side $BC$ is opposite the angle at $A$, so $\sin 30^{\circ}=\dfrac{BC}{AC}$. Since $\sin 30^{\circ}=\dfrac{1}{2}$, we get $BC=10\times\dfrac{1}{2}=5$.'
    hints:
      - 'Identify which side is opposite the given angle before choosing the ratio.'
    assessment:
      kind: 'numeric'
      expected: 5
  - id: '2de-trig-t2'
    tier: 2
    tierTitle: 'Standard Practice'
    curriculumStatus: 'core'
    prompt: 'In a triangle right-angled at $B$, $AB=5$ and the angle at $A$ measures $40$ degrees. Compute $BC$, rounded to $0.1$.'
    solution: 'Here $AB$ is adjacent to the angle at $A$ and $BC$ is opposite it, so $\tan 40^{\circ}=\dfrac{BC}{AB}$. Hence $BC=5\times\tan 40^{\circ}\approx 5\times 0.8391\approx 4.2$.'
    hints:
      - 'Tangent is the ratio that avoids the hypotenuse, which is not given here.'
      - 'Round only at the very end of the computation.'
    assessment:
      kind: 'numeric'
      expected: 4.2
      tolerance: 0.05
  - id: '2de-trig-t3'
    tier: 3
    tierTitle: 'Official Core Synthesis'
    curriculumStatus: 'core'
    prompt: 'A line $d$ and a point $A$ not on $d$ are given, with $H$ the orthogonal projection of $A$ on $d$ and $AH=6$. A point $M$ of $d$ satisfies $HM=8$. Compute $AM$, then explain why $H$ is the point of $d$ closest to $A$ and give the area of triangle $AHM$.'
    solution: 'Since $(AH)$ is perpendicular to $d$ and $M$ belongs to $d$, the triangle $AHM$ is right-angled at $H$. The Pythagorean theorem gives $AM^{2}=AH^{2}+HM^{2}=36+64=100$, so $AM=10$. For any point $M$ of $d$ other than $H$, the same triangle is right-angled at $H$, so $AM^{2}=AH^{2}+HM^{2}>AH^{2}$ because $HM>0$, hence $AM>AH$. The projection $H$ is therefore the closest point, and $AH$ is by definition the distance from $A$ to $d$. The area of $AHM$ is $\dfrac{AH\times HM}{2}=\dfrac{6\times 8}{2}=24$.'
    hints:
      - 'The projection creates a right angle, which is what makes the Pythagorean theorem available.'
      - 'To compare $AM$ with $AH$, compare their squares.'
    assessment:
      kind: 'reasoning'
      rubric:
        - 'Uses the right angle at H to compute the length 10.'
        - 'Proves the minimality of AH by comparing squares for an arbitrary point of the line.'
        - 'Computes the area of the right triangle correctly.'
  - id: '2de-trig-t4'
    tier: 4
    tierTitle: 'Advanced Challenge'
    curriculumStatus: 'olympiad'
    prompt: 'Prove that $\cos^{2}\theta+\sin^{2}\theta=1$ for every acute angle $\theta$ of a right triangle, and that $\tan\theta=\dfrac{\sin\theta}{\cos\theta}$. Then establish the exact values of the cosine, sine, and tangent of $30$, $45$, and $60$ degrees, using a square and an equilateral triangle.'
    solution: 'Let a triangle be right-angled at $B$, with $\theta$ the angle at $A$, and write $a=BC$ for the opposite side, $b=AB$ for the adjacent side and $c=AC$ for the hypotenuse. Then $\cos\theta=\dfrac{b}{c}$ and $\sin\theta=\dfrac{a}{c}$, so $\cos^{2}\theta+\sin^{2}\theta=\dfrac{b^{2}+a^{2}}{c^{2}}$. The Pythagorean theorem gives $a^{2}+b^{2}=c^{2}$, so the sum equals $1$. Moreover $\dfrac{\sin\theta}{\cos\theta}=\dfrac{a/c}{b/c}=\dfrac{a}{b}=\tan\theta$, which is legitimate because $\cos\theta\neq 0$ for an acute angle. For the exact values, take a square of side $1$ and cut it along a diagonal: the triangle obtained has legs $1$ and $1$ and hypotenuse $\sqrt{2}$, with acute angles of $45$ degrees, so $\cos 45^{\circ}=\sin 45^{\circ}=\dfrac{1}{\sqrt{2}}=\dfrac{\sqrt{2}}{2}$ and $\tan 45^{\circ}=1$. Take now an equilateral triangle of side $2$ and cut it along a height: the triangle obtained has hypotenuse $2$, a leg $1$ and, by the Pythagorean theorem, the other leg $\sqrt{3}$, with acute angles of $30$ and $60$ degrees. Hence $\cos 60^{\circ}=\dfrac{1}{2}$, $\sin 60^{\circ}=\dfrac{\sqrt{3}}{2}$, $\tan 60^{\circ}=\sqrt{3}$, and $\cos 30^{\circ}=\dfrac{\sqrt{3}}{2}$, $\sin 30^{\circ}=\dfrac{1}{2}$, $\tan 30^{\circ}=\dfrac{1}{\sqrt{3}}=\dfrac{\sqrt{3}}{3}$.'
    hints:
      - 'Write the two ratios with the same denominator and use the Pythagorean theorem on the numerator.'
      - 'Cutting a square along a diagonal and an equilateral triangle along a height produces the two reference triangles.'
    assessment:
      kind: 'reasoning'
      rubric:
        - 'Derives the identity between cosine and sine from the Pythagorean theorem.'
        - 'Proves the quotient formula for the tangent, noting that the cosine is nonzero.'
        - 'Builds both reference triangles and gives all nine exact values.'
---
## Three ratios, one right angle

In a triangle right-angled at $B$, name the sides relative to the acute angle $\widehat{A}$: the **hypotenuse** faces the right angle, the **opposite** side faces $\widehat{A}$, and the **adjacent** side touches it.

$$\cos\widehat{A}=\frac{\text{adjacent}}{\text{hypotenuse}},\qquad \sin\widehat{A}=\frac{\text{opposite}}{\text{hypotenuse}},\qquad \tan\widehat{A}=\frac{\text{opposite}}{\text{adjacent}}.$$

Choosing the right ratio is a matter of listing which two sides are involved. If the hypotenuse is unknown and not asked for, tangent is the ratio to use.

Two identities follow immediately:

$$\cos^{2}\theta+\sin^{2}\theta=1,\qquad \tan\theta=\frac{\sin\theta}{\cos\theta}.$$

The first is the Pythagorean theorem divided by the square of the hypotenuse.

## Exact values worth knowing

| $\theta$ | $30^{\circ}$ | $45^{\circ}$ | $60^{\circ}$ |
| --- | --- | --- | --- |
| $\cos\theta$ | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{1}{2}$ |
| $\sin\theta$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{3}}{2}$ |
| $\tan\theta$ | $\dfrac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ |

These are not arbitrary. Half a square gives the $45^{\circ}$ column; half an equilateral triangle gives the other two. Reconstructing the table from those two figures is safer than memorizing it.

## Orthogonal projection

The **orthogonal projection** of a point $A$ on a line $d$ is the point $H$ of $d$ such that $(AH)$ is perpendicular to $d$. It is often called the foot of the perpendicular.

Its key property is minimality. For any point $M$ of $d$ different from $H$, the triangle $AHM$ is right-angled at $H$, so

$$AM^{2}=AH^{2}+HM^{2}>AH^{2},$$

and therefore $AM>AH$. The projection is the closest point of the line, and the length $AH$ is called the **distance from $A$ to $d$**.

This is the standard tool for a height in a triangle, for the shortest path to a road, and for the distance from a point to a chord in a circle.

### Stretch thought

A point $A$ and a circle of center $\Omega$ are given, with $A$ outside the circle. Which point of the circle is closest to $A$? Prove your claim, and compare the argument with the projection onto a line.
