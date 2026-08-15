---
id: 3e-linear-equations
locale: en
title: Equations as Reversible Machines
strand: Algebra
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
    definition: An equality containing one or more unknown values.
  - en: unknown
    definition: A value represented by a symbol and determined from the equation.
  - en: solution
    definition: A value that makes the equality true.
flashcards:
  - front: What may you do to one side of an equation?
    back: Any valid operation, provided you perform the same operation on the other side.
  - front: How do you check a proposed solution?
    back: Substitute it for the unknown in the original equation and test the equality.
  - front: Why is “move it and change its sign” risky?
    back: It hides the equal operation performed on both sides and breaks down in unfamiliar equations.
exercises:
  - id: 3e-equations-t1
    tierTitle: Direct Application
    prompt: Solve $5x-7=18$.
    solution: Add $7$ to both sides to obtain $5x=25$, then divide by $5$. Thus $x=5$.
    hints:
      - Undo the subtraction of $7$ first.
  - id: 3e-equations-t2
    tierTitle: Standard Practice
    prompt: A rectangle is $3$ cm longer than it is wide and has perimeter $34$ cm. Find its width and length by forming and solving an equation.
    solution: Let the width be $x$ cm, so the length is $x+3$ cm. Then $2x+2(x+3)=34$, hence $4x+6=34$, $4x=28$, and $x=7$. The rectangle is $7$ cm by $10$ cm.
    hints:
      - Call the width $x$ and express the length in terms of $x$.
      - Use $P=2\times\text{width}+2\times\text{length}$.
    rubric:
      - Defines the unknown and forms an equivalent equation such as $2x+2(x+3)=34$.
      - Solves the equation correctly to obtain $x=7$.
      - Interprets the result as width $7$ cm and length $10$ cm.
  - id: 3e-equations-t3
    tierTitle: Synthesis
    prompt: For each real value of $a$, classify the solutions of $(a-2)x=3a-6$. State when there is one solution, no solution, or infinitely many solutions.
    solution: Since $3a-6=3(a-2)$, the equation is $(a-2)x=3(a-2)$. If $a\ne2$, division by $a-2$ gives the unique solution $x=3$. If $a=2$, the equation becomes $0=0$, so every real $x$ is a solution. There is no value of $a$ for which the equation has no solution.
    hints:
      - Factor the right-hand side.
      - Do not divide by $a-2$ before treating the case where it is zero.
    rubric:
      - Separates the cases $a=2$ and $a\ne2$.
      - Finds the unique solution $x=3$ when $a\ne2$.
      - Identifies infinitely many solutions when $a=2$ and confirms that no parameter value gives no solutions.
  - id: 3e-equations-t4
    tierTitle: Advanced Challenge
    prompt: A shop sells only $3$-euro and $7$-euro notebooks. An order costs exactly $41$ euros. Find every possible pair $(x,y)$ of nonnegative integers, where $x$ is the number of $3$-euro notebooks and $y$ is the number of $7$-euro notebooks, and prove that your list is complete.
    solution: We need $3x+7y=41$. Since $7y\le41$, $0\le y\le5$. Because $41-7y=3x$, the number $41-7y$ must be divisible by $3$. Now $41$ leaves remainder $2$ when divided by $3$, and $7y$ has the same remainder as $y$ because $7=2\times3+1$. Therefore $41-7y$ is divisible by $3$ exactly when $y$ leaves remainder $2$ when divided by $3$. In the range from $0$ to $5$, this gives $y=2$ or $y=5$. Then $x=(41-14)/3=9$ or $x=(41-35)/3=2$. Thus the complete list is $(9,2)$ and $(2,5)$. The bound and divisibility condition exclude every other nonnegative integer $y$.
    hints:
      - Write the price equation $3x+7y=41$.
      - Bound $y$, then compare the remainders of $41$ and $7y$ after division by $3$.
    rubric:
      - Models the order with $3x+7y=41$ and nonnegative integers.
      - Finds both solutions $(9,2)$ and $(2,5)$.
      - Uses a bound and divisibility argument to prove completeness.
---
## Equality Is a Balance

An equation says that two expressions have the same value. To preserve that fact, apply the **same operation to both sides**.

Consider

$$3x - 5 = 16.$$

Add $5$ to both sides, then divide both sides by $3$:

$$3x = 21 \qquad\Longrightarrow\qquad x=7.$$

The arrows record equivalent equations: each one has exactly the same solutions.

## Verification Closes the Loop

Substitute $x=7$ into the original equation:

$$3\times 7 - 5 = 21-5=16.$$

The equality is true, so $7$ is a solution. Verification catches sign errors quickly and should become automatic.

## Negative Coefficients Are Not Special

For $-4x+3=19$:

$$-4x=16 \qquad\Longrightarrow\qquad x=-4.$$

Nothing new happened. The balance principle works unchanged.

> Write one transformation per line. Speed comes from reliable structure, not skipped reasoning.

### Stretch Thought

Can an equation of the form $ax+b=c$ have no solution? What changes when $a=0$? Separate the cases $b=c$ and $b\ne c$.
