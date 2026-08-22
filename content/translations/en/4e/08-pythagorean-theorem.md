---
id: 4e-pythagorean-theorem
locale: en
title: The Pythagorean Theorem
strand: Geometry
summary: State and apply the Pythagorean theorem to compute side lengths in right triangles, and use its converse to test whether a triangle has a right angle.
objectives:
  - State the Pythagorean theorem and identify the hypotenuse
  - Compute the hypotenuse or a leg of a right triangle
  - Apply the converse to determine if a triangle is right-angled
prerequisites:
  - Squaring and square roots
  - Properties of triangles
vocabulary:
  - en: hypotenuse
    definition: The longest side of a right triangle, opposite the right angle.
  - en: right triangle
    definition: A triangle that has one angle measuring exactly $90°$.
  - en: Pythagorean theorem
    definition: In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides.
flashcards:
  - front: State the Pythagorean theorem for a right triangle with legs $a$, $b$ and hypotenuse $c$.
    back: $a^2 + b^2 = c^2$.
  - front: A right triangle has legs $6$ cm and $8$ cm. What is the hypotenuse?
    back: $c = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10$ cm.
  - front: How do you use the converse of the Pythagorean theorem?
    back: If the square of the longest side equals the sum of the squares of the two shorter sides, then the triangle is right-angled.
exercises:
  - id: 4e-pyth-t1
    tierTitle: Direct Application
    prompt: A right triangle has legs of length $5$ cm and $12$ cm. Calculate the length of the hypotenuse.
    solution: $c = \sqrt{5^2 + 12^2} = \sqrt{25 + 144} = \sqrt{169} = 13$ cm.
    hints:
      - Use the formula $c = \sqrt{a^2 + b^2}$ where $a$ and $b$ are the two legs.
  - id: 4e-pyth-t2
    tierTitle: Standard Practice
    prompt: A ladder $10$ m long leans against a wall. The foot of the ladder is $6$ m from the wall. How high up the wall does the ladder reach?
    solution: "Let $h$ be the height. By the Pythagorean theorem: $h^2 + 6^2 = 10^2$, so $h^2 = 100 - 36 = 64$, hence $h = 8$ m."
    hints:
      - The ladder is the hypotenuse. The distance from the wall and the height are the two legs.
      - Rearrange $a^2 + b^2 = c^2$ to find $a^2 = c^2 - b^2$.
  - id: 4e-pyth-t3
    tierTitle: Official Core Synthesis
    prompt: A triangle has sides of length $7$ cm, $24$ cm, and $25$ cm. Determine whether it is a right triangle. Then compute its area.
    solution: >-
      The longest side is $25$ cm. Check: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$. The equality holds, so by the converse of the Pythagorean theorem, the triangle is right-angled at the vertex opposite the side of length $25$ cm. The two legs are $7$ and $24$ cm, so the area is $\frac{1}{2} \times 7 \times 24 = 84$ cm$^2$.
    hints:
      - To test for a right angle, compare the square of the longest side with the sum of the squares of the other two.
      - If the triangle is right-angled, the two shorter sides are the base and height for the area formula.
    rubric:
      - Correctly applies the converse of the Pythagorean theorem by comparing $7^2 + 24^2$ with $25^2$.
      - Concludes that the triangle is right-angled and identifies the right angle.
      - Computes the area using the two legs as base and height.
  - id: 4e-pyth-t4
    tierTitle: Advanced Challenge
    prompt: >-
      Prove that if $m > 1$ is an odd integer, then $\left(m,\; \frac{m^2-1}{2},\; \frac{m^2+1}{2}\right)$ is a Pythagorean triple. Use this to find a Pythagorean triple containing $11$.
    solution: >-
      Compute $m^2 + \left(\frac{m^2-1}{2}\right)^2 = m^2 + \frac{m^4 - 2m^2 + 1}{4} = \frac{m^4 + 2m^2 + 1}{4} = \left(\frac{m^2+1}{2}\right)^2$. For $m = 11$: $\frac{121-1}{2} = 60$ and $\frac{121+1}{2} = 61$. The triple is $(11, 60, 61)$. Check: $121 + 3600 = 3721 = 61^2$.
    hints:
      - Expand $\left(\frac{m^2-1}{2}\right)^2$ and $\left(\frac{m^2+1}{2}\right)^2$ and compare.
      - Substitute $m = 11$ to generate the specific triple.
    rubric:
      - Algebraically verifies that $m^2 + \left(\frac{m^2-1}{2}\right)^2 = \left(\frac{m^2+1}{2}\right)^2$.
      - Correctly applies the formula with $m = 11$ to produce the triple $(11, 60, 61)$.
      - Checks the triple satisfies $a^2 + b^2 = c^2$.
---
## The Theorem

In a **right triangle**, the side opposite the right angle is called the **hypotenuse**. It is always the longest side. The other two sides are called the **legs**.

**Pythagorean theorem.** If a triangle has a right angle, then the square of the hypotenuse equals the sum of the squares of the two legs:

$$a^2 + b^2 = c^2$$

where $c$ is the hypotenuse and $a$, $b$ are the legs.

## Computing the Hypotenuse

When both legs are known, the hypotenuse is:

$$c = \sqrt{a^2 + b^2}$$

**Example.** Legs $3$ cm and $4$ cm: $c = \sqrt{9 + 16} = \sqrt{25} = 5$ cm.

## Computing a Leg

When the hypotenuse and one leg are known, rearrange:

$$a = \sqrt{c^2 - b^2}$$

**Example.** Hypotenuse $13$ cm, one leg $5$ cm: $a = \sqrt{169 - 25} = \sqrt{144} = 12$ cm.

> Always check which side is the hypotenuse before you start. The hypotenuse is opposite the right angle and is the longest side.

## The Converse

**Converse of the Pythagorean theorem.** If a triangle has sides $a$, $b$, $c$ with $c$ the longest, and $a^2 + b^2 = c^2$, then the triangle has a right angle opposite $c$.

This lets you **test** whether a triangle is right-angled without measuring the angle.

**Example.** Sides $9$, $40$, $41$. Check: $81 + 1600 = 1681 = 41^2$. Yes, it is a right triangle.

**Example.** Sides $5$, $7$, $9$. Check: $25 + 49 = 74 \neq 81 = 9^2$. Not a right triangle.

## Pythagorean Triples

A **Pythagorean triple** is a set of three positive integers $(a, b, c)$ satisfying $a^2 + b^2 = c^2$. The most common triples are:

- $(3, 4, 5)$ and its multiples $(6, 8, 10)$, $(9, 12, 15)$, ...
- $(5, 12, 13)$
- $(8, 15, 17)$
- $(7, 24, 25)$

Recognising these saves time and avoids rounding errors.

### Stretch Thought

Can a right triangle have all three sides with integer lengths and have one leg equal to the other? What does the Pythagorean theorem tell you about $a^2 + a^2 = c^2$?
