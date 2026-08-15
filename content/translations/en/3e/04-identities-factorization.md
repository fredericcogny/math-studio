---
id: 3e-identities-factorization
locale: en
title: Identities, Expansion, and Factorization
strand: Algebra
summary: Transform algebraic expressions in both directions and use factors to solve zero-product equations.
objectives:
  - Expand and reduce expressions using distributivity
  - Factor out a common factor
  - Use the three standard identities in both directions
  - Solve equations using the zero-product property
prerequisites:
  - Signed-number arithmetic
  - Substitution into an expression
  - Solving linear equations
vocabulary:
  - en: expand
    definition: Rewrite a product as an equal sum by distributivity.
  - en: factor
    definition: Rewrite a sum as an equal product.
  - en: identity
    definition: An equality true for every allowed value of its variables.
  - en: zero-product property
    definition: A product is zero exactly when at least one of its factors is zero.
flashcards:
  - front: Expand $k(a+b)$.
    back: $ka+kb$.
  - front: Factor $ax+ay$.
    back: $a(x+y)$.
  - front: State the difference-of-squares identity.
    back: $a^2-b^2=(a-b)(a+b)$.
  - front: When may the zero-product property be used?
    back: Only when one side of the equation is zero and the other side is written as a product.
exercises:
  - id: 3e-identities-t1
    tierTitle: Direct Application
    prompt: Expand and reduce $(2x-5)^2$. Write the result in descending powers of $x$.
    solution: Using $(a-b)^2=a^2-2ab+b^2$, $(2x-5)^2=(2x)^2-2(2x)(5)+5^2=4x^2-20x+25$.
    hints:
      - Use all three terms of $(a-b)^2=a^2-2ab+b^2$.
    expected: 4x^2 - 20x + 25
    accepted:
      - 4x²-20x+25
      - 4x^2-20x+25
  - id: 3e-identities-t2
    tierTitle: Brevet-Standard Problem
    prompt: A rectangle has side lengths $x+5$ cm and $x-2$ cm, where $x\ge2$. Its area is $40$ cm$^2$. Form an equation, factor it, and determine the rectangle's dimensions.
    solution: The area equation is $(x+5)(x-2)=40$. Expanding gives $x^2+3x-10=40$, hence $x^2+3x-50=0$. Since $x^2+3x-50=(x+10)(x-5)$, the zero-product property gives $x=-10$ or $x=5$. The condition $x\ge2$ rejects $-10$. Thus the sides are $10$ cm and $3$ cm.
    hints:
      - Use area = length × width.
      - Bring every term to one side, then look for two numbers with product $-50$ and sum $3$.
    rubric:
      - Forms the area equation $(x+5)(x-2)=40$ and rewrites it as $x^2+3x-50=0$.
      - Factors the equation as $(x+10)(x-5)=0$ and obtains both candidates $x=-10$ and $x=5$.
      - Rejects $x=-10$ using $x\ge2$ and gives the dimensions $10$ cm by $3$ cm.
  - id: 3e-identities-t3
    tierTitle: Synthesis
    prompt: Prove that the difference between the squares of two consecutive odd integers is always divisible by $8$.
    solution: Let the consecutive odd integers be $2n+1$ and $2n+3$. Their difference of squares is $(2n+3)^2-(2n+1)^2$. Using $a^2-b^2=(a-b)(a+b)$ gives $2(4n+4)=8(n+1)$. Since $n+1$ is an integer, the difference is a multiple of $8$.
    hints:
      - Represent every pair of consecutive odd integers with one integer parameter.
      - Factor the difference of squares instead of expanding both squares.
    rubric:
      - Represents arbitrary consecutive odd integers correctly.
      - Uses the difference-of-squares identity to obtain $8(n+1)$.
      - Concludes divisibility by $8$ for every integer parameter.
  - id: 3e-identities-t4
    tierTitle: Advanced Challenge
    prompt: For each integer $m$, solve $(x+m)^2=(m+1)^2$. Classify the number of distinct nonnegative solutions according to $m$. In the cases with two such solutions, characterize exactly when their product is a prime number. Prove that all cases have been covered.
    solution: >-
      Move one square to the left and factor: $(x+m)^2-(m+1)^2=(x-1)(x+2m+1)=0$. Thus the roots are $x=1$ and $x=-2m-1$. If $m\ge0$, the second root is negative, so there is one nonnegative solution. If $m=-1$, the two factors give the same root $1$, again one distinct nonnegative solution. If $m\le-2$, then $-2m-1\ge3$, so there are two distinct nonnegative solutions. Their product is $-2m-1$. It is prime exactly when $-2m-1=p$ for an odd prime $p$, equivalently $m=-(p+1)/2$. Conversely, every odd prime $p$ gives an integer $m\le-2$ and roots $1,p$, whose product is prime. The cases $m\ge0$, $m=-1$, and $m\le-2$ partition all integers.
    hints:
      - Use a difference of squares before applying the zero-product property.
      - Compare the second root $-2m-1$ with zero and with the first root.
      - In the two-root case, the product is prime exactly when the second root is prime.
    rubric:
      - Factors the equation and obtains both roots without losing the repeated-root case.
      - Classifies the number of distinct nonnegative roots for all integer values of $m$.
      - Characterizes the prime-product cases as $m=-(p+1)/2$ for an odd prime $p$.
      - Proves both directions of the characterization and the completeness of the cases.
---
## Expressions Can Change Form Without Changing Value

An algebraic expression may be written as a sum or a product. The best form depends on the task: expanded form helps combine like terms, while factored form reveals zeros and common structure.

The distributive property works in both directions:

$$k(a+b)=ka+kb.$$

Reading left to right **expands**; reading right to left **factors**.

## Expanding and Reducing

For double distributivity, every term in one parenthesis multiplies every term in the other:

$$(2x-3)(x+5)=2x^2+10x-3x-15=2x^2+7x-15.$$

Reduction comes after expansion: only like terms may be combined. The terms $2x^2$ and $7x$ are not like terms.

With a minus sign before parentheses, distribute $-1$ to every term:

$$4x-(2x-7)=4x-2x+7=2x+7.$$

## Factoring Out a Common Factor

Find the greatest useful factor shared by every term:

$$12x^2-18x=6x(2x-3).$$

Check by expanding the answer. A partial factorization such as $2(6x^2-9x)$ is correct, but it may hide more structure.

## The Three Standard Identities

For all numbers $a$ and $b$,

$$(a+b)^2=a^2+2ab+b^2,$$

$$(a-b)^2=a^2-2ab+b^2,$$

$$a^2-b^2=(a-b)(a+b).$$

They can be used to expand or factor. For example,

$$9x^2-24x+16=(3x-4)^2$$

and

$$25x^2-49=(5x-7)(5x+7).$$

**Common misconception:** $(a+b)^2$ is not $a^2+b^2$; the middle term $2ab$ is essential.

## Choosing a Transformation

- Expand when asked to reduce a sum, compare two formulas, or evaluate systematically.
- Factor when solving a product equation, proving divisibility, or revealing a common geometric dimension.
- First look for a common factor; then check whether what remains matches a standard identity.
- Substitute a simple value such as $x=1$ to detect a proposed identity that cannot be true, but use algebra for the proof.

## Zero-Product Equations

The zero-product property states

$$AB=0\quad\Longleftrightarrow\quad A=0\text{ or }B=0.$$

To solve $4x^2-9=0$, factor first:

$$(2x-3)(2x+3)=0.$$

Hence $2x-3=0$ or $2x+3=0$, giving $x=\frac32$ or $x=-\frac32$.

This rule cannot be applied to $(x-2)(x+5)=7$ until the equation has been transformed into a product equal to zero.

## Modeling and Checking

In a geometry problem, algebraic solutions must satisfy length constraints. In a number problem, variables may be restricted to integers. Solving the equation is not the last step: return to the context, reject impossible values, and state the requested quantities with units.

## Extension: Identities as Mental Calculation

The identities also make exact calculations efficient:

$$103^2=(100+3)^2=10,000+600+9=10,609,$$

$$52^2-48^2=(52-48)(52+48)=4\times100=400.$$

Choosing a structure can replace a long calculation with one short argument.
