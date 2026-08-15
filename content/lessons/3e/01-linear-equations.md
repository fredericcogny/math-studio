---
id: 3e-linear-equations
order: 1
title: Equations as reversible machines
level: 3e
strand: Algebra
difficulty: core
estimatedMinutes: 25
summary: Solve linear equations by preserving equality, not by moving symbols through magic.
objectives:
  - Preserve an equality
  - Solve ax + b = c
  - Verify a solution
prerequisites:
  - Signed-number arithmetic
  - Distributivity
vocabulary:
  - en: equation
    fr: équation
    definition: An equality containing one or more unknown values.
  - en: unknown
    fr: inconnue
    definition: A value represented by a symbol and determined from the equation.
  - en: solution
    fr: solution
    definition: A value that makes the equality true.
flashcards:
  - front: What may you do to one side of an equation?
    back: Any valid operation, provided you perform the same operation on the other side.
  - front: How do you check a proposed solution?
    back: Substitute it for the unknown in the original equation and test the equality.
  - front: Why is “move it and change its sign” risky?
    back: It hides the equal operation performed on both sides and breaks down in unfamiliar equations.
generator:
  type: linear-equation
  seed: 31401
  count: 6
  coefficientMin: -8
  coefficientMax: 8
  solutionMin: -12
  solutionMax: 12
  offsetMin: -15
  offsetMax: 15
---
## Equality is a balance

An equation says that two expressions have the same value. To preserve that fact, apply the **same operation to both sides**.

Consider

$$3x - 5 = 16.$$

Add $5$ to both sides, then divide both sides by $3$:

$$3x = 21 \qquad\Longrightarrow\qquad x=7.$$

The arrows record equivalent equations: each one has exactly the same solutions.

## Verification closes the loop

Substitute $x=7$ into the original equation:

$$3\times 7 - 5 = 21-5=16.$$

The equality is true, so $7$ is a solution. Verification catches sign errors quickly and should become automatic.

## Negative coefficients are not special

For $-4x+3=19$:

$$-4x=16 \qquad\Longrightarrow\qquad x=-4.$$

Nothing new happened. The balance principle works unchanged.

> Write one transformation per line. Speed comes from reliable structure, not skipped reasoning.

### Stretch thought

Can an equation of the form $ax+b=c$ have no solution? What changes when $a=0$? Separate the cases $b=c$ and $b\ne c$.
