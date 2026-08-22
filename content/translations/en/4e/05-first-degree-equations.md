---
id: 4e-first-degree-equations
locale: en
title: First-Degree Equations
strand: Numbers and Calculation
summary: Learn to solve first-degree equations by isolating the unknown, then apply the technique to word problems.
objectives:
  - Solve equations of the form $ax + b = c$
  - Solve equations with the variable on both sides
  - Check a solution by substitution
prerequisites:
  - Operations with signed numbers
  - Distributive property
vocabulary:
  - en: equation
    definition: A mathematical statement that two expressions are equal, containing at least one unknown.
  - en: solution
    definition: A value of the unknown that makes both sides of the equation equal.
  - en: isolate
    definition: To rearrange an equation so the unknown appears alone on one side.
flashcards:
  - front: How do you solve $3x + 5 = 17$?
    back: Subtract $5$ from both sides to get $3x = 12$, then divide by $3$ to get $x = 4$.
  - front: What does it mean to check a solution?
    back: Substitute the value back into the original equation and verify that both sides are equal.
  - front: How do you handle an equation like $2x + 3 = 5x - 9$?
    back: Gather variable terms on one side and constants on the other. $2x - 5x = -9 - 3$, so $-3x = -12$ and $x = 4$.
exercises:
  - id: 4e-feq-t1
    tierTitle: Direct Application
    prompt: Solve $4x - 7 = 13$.
    solution: "Add $7$ to both sides: $4x = 20$. Divide by $4$: $x = 5$."
    hints:
      - First add $7$ to both sides to isolate the term with $x$.
  - id: 4e-feq-t2
    tierTitle: Standard Practice
    prompt: Solve $5x + 3 = 2x - 9$.
    solution: "Subtract $2x$ from both sides: $3x + 3 = -9$. Subtract $3$: $3x = -12$. Divide by $3$: $x = -4$. Check: $5(-4)+3=-17$ and $2(-4)-9=-17$."
    hints:
      - Move the variable terms to one side by subtracting $2x$ from both sides.
      - After collecting variable terms, isolate $x$ step by step.
  - id: 4e-feq-t3
    tierTitle: Official Core Synthesis
    prompt: A rectangle has a perimeter of $54$ cm. Its length is $3$ cm more than twice its width. Find the dimensions of the rectangle. Set up an equation, solve it, and verify your answer.
    solution: >-
      Let $w$ be the width. The length is $2w + 3$. The perimeter gives $2(w + 2w + 3) = 54$, so $2(3w + 3) = 54$, hence $6w + 6 = 54$, $6w = 48$, $w = 8$. The width is $8$ cm and the length is $2(8) + 3 = 19$ cm. Check: $2(8 + 19) = 2 \times 27 = 54$ cm.
    hints:
      - Let the width be $w$ and express the length in terms of $w$.
      - Use the perimeter formula $P = 2(\text{length} + \text{width})$ to set up the equation.
    rubric:
      - Correctly sets up an equation using a variable for the unknown dimension.
      - Solves the equation with valid algebraic steps.
      - Verifies the answer satisfies both the perimeter and the relationship between length and width.
  - id: 4e-feq-t4
    tierTitle: Advanced Challenge
    prompt: Find all integers $n$ such that $\frac{3n + 7}{n - 1}$ is also an integer.
    solution: >-
      Write $3n + 7 = 3(n - 1) + 10$, so $\frac{3n+7}{n-1} = 3 + \frac{10}{n-1}$. This is an integer when $n - 1$ divides $10$. The divisors of $10$ are $\pm 1, \pm 2, \pm 5, \pm 10$, giving $n \in \{-9,-4,-1,0,2,3,6,11\}$.
    hints:
      - Perform polynomial division to rewrite the fraction as an integer plus a remainder over $n-1$.
      - The expression is an integer exactly when $n - 1$ divides the remainder.
    rubric:
      - Correctly rewrites the fraction using division to isolate a constant remainder.
      - Identifies that $n-1$ must divide $10$ and lists all divisors.
      - Gives all eight integer values of $n$.
---
## What Is an Equation?

An equation is a statement that two expressions have the same value. The letter (often $x$) is the **unknown**. Solving means finding every value of the unknown that makes the statement true. That value is called the **solution** (or root) of the equation.

$$3x + 5 = 17$$

The equation above has exactly one solution: $x = 4$.

## Solving $ax + b = c$

The strategy is always the same: **isolate** $x$ by performing the same operation on both sides.

1. Add or subtract to remove the constant from the side with $x$.
2. Multiply or divide to leave $x$ alone.

**Example.** Solve $-2x + 9 = 3$.

$$-2x + 9 - 9 = 3 - 9 \implies -2x = -6 \implies x = \frac{-6}{-2} = 3$$

> Golden rule: whatever you do to one side, you must do to the other.

## Variable on Both Sides

When $x$ appears on both sides, first gather all $x$-terms on one side and all constants on the other.

**Example.** Solve $7x - 4 = 3x + 8$.

$$7x - 3x = 8 + 4 \implies 4x = 12 \implies x = 3$$

Always **check** by substituting back: $7(3)-4 = 17$ and $3(3)+8 = 17$. Both sides agree.

## From Words to Equations

Many practical problems become equations once you name the unknown.

1. Read the problem and identify the unknown quantity. Call it $x$.
2. Translate each sentence into an algebraic expression.
3. Write the equation, solve it, and answer in a sentence.
4. Verify that the answer makes sense in context.

**Example.** A number is tripled and then increased by $5$. The result is $23$. Find the number.

Let $x$ be the number. Then $3x + 5 = 23$, so $3x = 18$ and $x = 6$.

### Stretch Thought

Can an equation like $2x + 1 = 2x + 3$ have a solution? What does that tell you about the two lines $y = 2x + 1$ and $y = 2x + 3$?
