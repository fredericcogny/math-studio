---
id: 3e-pythagorean-theorem
order: 8
title: Pythagoras, distance, and classification
level: 3e
strand: Geometry
difficulty: core
estimatedMinutes: 40
summary: Calculate exact lengths and use the theorem, converse, and contrapositive to prove geometric facts.
objectives:
  - Apply the Pythagorean theorem to calculate a length
  - Use the converse and contrapositive to classify triangles
  - Keep exact radical forms and give appropriate approximations
  - Calculate distances in coordinate geometry
prerequisites:
  - Squares and square roots
  - Triangle vocabulary and constructions
  - Coordinates and algebraic identities
vocabulary:
  - en: hypotenuse
    fr: hypoténuse
    definition: The side opposite the right angle in a right triangle, and its longest side.
  - en: converse
    fr: réciproque
    definition: A statement formed by exchanging the hypothesis and conclusion of a theorem.
  - en: contrapositive
    fr: contraposée
    definition: A logically equivalent statement asserting that failure of the conclusion forces failure of the hypothesis.
  - en: exact value
    fr: valeur exacte
    definition: A value such as $\sqrt{13}$ that has not been replaced by a rounded decimal.
flashcards:
  - front: State the Pythagorean theorem.
    back: In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides.
  - front: What does the converse prove?
    back: If the square of a triangle's longest side equals the sum of the other two squares, then the triangle is right.
  - front: How can the contrapositive prove that a triangle is not right?
    back: Show that the square of its longest side is not equal to the sum of the squares of the other two sides.
  - front: What is the distance between $(x_1,y_1)$ and $(x_2,y_2)$?
    back: $\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.
generator:
  type: quadratic-value
  seed: 31408
  count: 8
  coefficientMin: -5
  coefficientMax: 7
  xMin: -6
  xMax: 6
tieredExercises:
  - id: "3e-pythagoras-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "A right triangle has perpendicular sides of lengths $6$ cm and $8$ cm. Calculate its hypotenuse."
    solution: 'If $c$ is the hypotenuse, $c^2=6^2+8^2=36+64=100$. Since a length is positive, $c=\sqrt{100}=10$ cm.'
    hints:
      - "The unknown side is the hypotenuse, so add the two known squares."
    assessment:
      kind: "numeric"
      expected: 10
  - id: "3e-pythagoras-t2"
    tier: 2
    tierTitle: "Brevet-Standard Problem"
    curriculumStatus: "core"
    prompt: "A rectangular park is $120$ m long and $50$ m wide. A walker can follow two adjacent sides from one corner to the opposite corner or use a straight diagonal path. Calculate the diagonal and determine the distance and percentage saved by taking it."
    solution: 'The diagonal $d$ satisfies $d^2=120^2+50^2=14,400+2,500=16,900$, so $d=130$ m. The route along two sides is $170$ m, so the diagonal saves $40$ m. Relative to the original $170$ m route, the saving is $40/170\times100\approx23.5\%$.'
    hints:
      - "The length, width, and diagonal form a right triangle."
      - "For the percentage, use the route along the sides as the reference distance."
    assessment:
      kind: "exact"
      expected: "130 m; 40 m; approximately 23.5%"
      accepted:
        - "130 m, saves 40 m or 23.5%"
        - "130; 40; 23.5%"
  - id: "3e-pythagoras-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "core"
    prompt: "In an orthonormal coordinate plane, let $A(-1,2)$, $B(5,2)$, and $C(5,7)$. Calculate the three side lengths exactly, prove that $ABC$ is right, and find its area."
    solution: '$AB=\sqrt{(5+1)^2+(2-2)^2}=6$, $BC=\sqrt{(5-5)^2+(7-2)^2}=5$, and $AC=\sqrt{(5+1)^2+(7-2)^2}=\sqrt{61}$. Since $AB^2+BC^2=36+25=61=AC^2$, the converse of the Pythagorean theorem proves that the triangle is right at $B$. Its area is $AB\times BC/2=15$ square units.'
    hints:
      - "Use coordinate differences as the legs of a right triangle for each distance."
      - "Compare the square of the longest side with the sum of the other two squares."
    assessment:
      kind: "reasoning"
      rubric:
        - 'Obtains the exact lengths $6$, $5$, and $\sqrt{61}$.'
        - 'Uses the converse with the equality $6^2+5^2=(\sqrt{61})^2$.'
        - "Identifies the right angle at $B$ and calculates area $15$ square units."
  - id: "3e-pythagoras-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: 'For every integer $n\ge2$, consider the three lengths $n^2-1$, $2n$, and $n^2+1$. First verify that they satisfy the triangle inequality, then prove that they form a right triangle. Determine exactly when the resulting Pythagorean triple is primitive, meaning that the three lengths have greatest common divisor $1$. When it is not primitive, prove that dividing all three lengths by their gcd produces a primitive triple.'
    solution: 'All lengths are positive. The largest is $n^2+1$, since $n^2+1-2n=(n-1)^2\ge1$ for $n\ge2$. The only nonautomatic triangle inequality is $(n^2-1)+2n>n^2+1$, equivalent to $2n>2$, which holds. Thus the lengths form a triangle. Moreover, $(n^2-1)^2+(2n)^2=n^4-2n^2+1+4n^2=(n^2+1)^2$, so the converse proves that it is right. If $n$ is even, $n^2-1$ and $n^2+1$ are odd. Any common divisor of all three divides their difference $2$; being a divisor of an odd number, it cannot be $2$, so the gcd is $1$. If $n$ is odd, all three lengths are even, so the gcd is at least $2$. Any common divisor divides both $n^2-1$ and $n^2+1$, hence their difference $2$; therefore the gcd is exactly $2$. After division by $2$, any common divisor of the reduced lengths would produce a common divisor greater than $2$ before division, impossible. Thus the original triple is primitive exactly for even $n$, and the reduced odd-$n$ triple is primitive.'
    hints:
      - "Expand the two leg squares and look for a standard square."
      - "Identify the largest length and check that the other two add to more than it."
      - "Separate the cases where $n$ is even and odd."
      - "A common divisor of $n^2-1$ and $n^2+1$ must divide their difference."
    assessment:
      kind: "reasoning"
      rubric:
        - 'Identifies the largest length and verifies the triangle inequality for every $n\ge2$.'
        - "Proves the Pythagorean identity and invokes the converse correctly."
        - "Shows that the gcd is $1$ when $n$ is even."
        - "Shows that the gcd is exactly $2$ when $n$ is odd."
        - 'Proves that division by $2$ in the odd case yields a primitive triple and covers all $n\ge2$.'
---
## The theorem calculates a missing length

In a right triangle, identify the hypotenuse first: it is opposite the right angle and is the longest side. If the legs have lengths $a,b$ and the hypotenuse has length $c$, then

$$a^2+b^2=c^2.$$

For a right triangle with hypotenuse $13$ and one leg $5$, the other leg $x$ satisfies

$$x^2=13^2-5^2=169-25=144,$$

so $x=12$. A length is nonnegative, so the negative square root is not retained.

## Exact values and radicals

If $x^2=45$, then the exact positive length is

$$x=\sqrt{45}=\sqrt{9\times5}=3\sqrt5.$$

The decimal $3\sqrt5\approx6.71$ is an approximation. Keep the radical through the reasoning and round only when requested, with units and stated precision.

Not every sum of roots simplifies: $\sqrt2+\sqrt3$ cannot be combined into $\sqrt5$.

## Converse: proving a right angle

The converse starts with three side lengths. Let $c$ be the longest. If

$$c^2=a^2+b^2,$$

then the triangle is right, with the right angle opposite $c$.

For sides $7,24,25$, $25^2=625$ and $7^2+24^2=49+576=625$. Therefore the triangle is right.

## Contrapositive and classification

If the square of the longest side is not the sum of the other squares, the triangle is not right. More precisely, for a valid triangle with longest side $c$:

- if $c^2<a^2+b^2$, the triangle is acute;
- if $c^2=a^2+b^2$, it is right;
- if $c^2>a^2+b^2$, it is obtuse.

Check the triangle inequality before classifying: three positive numbers form a triangle only if the sum of the two smaller exceeds the largest.

## Distance in coordinates

In an orthonormal coordinate plane, horizontal and vertical coordinate differences form perpendicular legs. Therefore

$$AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}.$$

For $A(-2,1)$ and $B(4,4)$,

$$AB=\sqrt{6^2+3^2}=\sqrt{45}=3\sqrt5.$$

Subtracting in the opposite order gives the same squares, but each coordinate difference must compare matching coordinates.

## Geometry and modeling

Pythagoras appears in diagonals, heights, shortest straight paths, construction checks, and distances on grids. Draw and label a figure, mark the right angle, name the hypotenuse, write the symbolic theorem, then substitute values.

If no right angle is known, do not use the theorem to calculate a side. If all three lengths are known, use the converse or contrapositive instead.

## Method choice and misconceptions

- The hypotenuse is not simply the side drawn slanting; it is defined by the right angle.
- Add squares to find a hypotenuse; subtract the known leg square to find the other leg.
- The theorem concerns squares of lengths, not lengths themselves: $a+b\ne c$ in general.
- Keep exact radicals until the final requested approximation.
- A calculator equality using rounded lengths is not a proof; compare exact squares whenever possible.

## Extension: Pythagorean triples

Integer side lengths satisfying $a^2+b^2=c^2$ form a Pythagorean triple. The identity

$$(m^2-n^2)^2+(2mn)^2=(m^2+n^2)^2$$

generates many such triples when $m>n$ are positive integers. It illustrates how an algebraic identity can guarantee a geometric property for infinitely many cases.
