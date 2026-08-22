---
id: 4e-literal-calculus
locale: en
title: Expanding, Factoring, and Reducing Expressions
strand: Numbers and Calculation
summary: Use the distributive property to expand, factor, and simplify algebraic expressions.
objectives:
  - Expand products using the distributive property
  - Collect like terms to reduce expressions
  - Factor simple expressions by identifying a common factor
prerequisites:
  - Signed number operations
  - Basic use of variables and formulas
vocabulary:
  - en: expand
    definition: To rewrite a product of sums as a sum of terms by applying the distributive property.
  - en: factor
    definition: To rewrite a sum as a product by extracting a common factor.
  - en: like terms
    definition: Terms that have the same variable part and can be combined by adding their coefficients.
flashcards:
  - front: What does the distributive property state?
    back: $a(b+c) = ab + ac$, and more generally $a(b+c+d) = ab+ac+ad$.
  - front: How do you expand $(a+b)(c+d)$?
    back: Apply double distribution. $(a+b)(c+d) = ac + ad + bc + bd$.
  - front: What does it mean to collect like terms?
    back: Combine terms with the same variable part. For example, $3x + 5x = 8x$ and $2x^2 - x^2 = x^2$.
exercises:
  - id: 4e-lit-t1
    tierTitle: Direct Application
    prompt: Expand and simplify $3(2x - 5)$.
    solution: $3(2x-5) = 3\times 2x + 3\times(-5) = 6x - 15$.
    hints:
      - Multiply each term inside the brackets by 3.
  - id: 4e-lit-t2
    tierTitle: Standard Practice
    prompt: Expand and reduce $(2x+3)(x-4)$.
    solution: $(2x+3)(x-4) = 2x\times x + 2x\times(-4) + 3\times x + 3\times(-4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$.
    hints:
      - "Apply double distribution: multiply each term of the first bracket by each term of the second."
      - Collect the like terms (the $x$ terms) at the end.
  - id: 4e-lit-t3
    tierTitle: Official Core Synthesis
    prompt: Show that the expression $A = (x+3)(x+5) - (x+3)(2x-1)$ can be factored as $(x+3)(6-x)$. For which value of $x$ does $A = 0$?
    solution: Both terms contain the common factor $(x+3)$. Factoring gives $A = (x+3)[(x+5)-(2x-1)] = (x+3)(x+5-2x+1) = (x+3)(6-x)$. Setting $A=0$ gives $x=-3$ or $x=6$.
    hints:
      - Look for a factor that appears in both products.
      - Factor it out and simplify the remaining bracket carefully, watching the signs.
    rubric:
      - Identifies $(x+3)$ as the common factor.
      - Correctly simplifies the bracket to obtain $(6-x)$.
      - Solves $(x+3)(6-x)=0$ to find both solutions.
  - id: 4e-lit-t4
    tierTitle: Advanced Challenge
    prompt: Without expanding fully, show that $(n+1)^2 - n^2 = 2n+1$ for every integer $n$. Use this identity to explain why the sum $1+3+5+\cdots+(2k-1) = k^2$ for every positive integer $k$.
    solution: >-
      $(n+1)^2 - n^2 = (n+1+n)(n+1-n) = (2n+1)(1) = 2n+1$, using the difference of squares. Now, $2n+1$ for $n=0,1,\ldots,k-1$ gives the odd numbers $1,3,5,\ldots,2k-1$. So the sum equals $\sum_{n=0}^{k-1}[(n+1)^2-n^2]$, which telescopes to $k^2-0=k^2$.
    hints:
      - Use the difference of squares identity $a^2-b^2=(a+b)(a-b)$ with $a=n+1$ and $b=n$.
      - Write each odd number $2n+1$ as $(n+1)^2-n^2$ and observe the telescoping cancellation.
    rubric:
      - Proves $(n+1)^2-n^2=2n+1$ using difference of squares or direct expansion.
      - Connects odd numbers to consecutive square differences.
      - Uses the telescoping sum to derive the formula $1+3+5+\cdots+(2k-1)=k^2$.
---
## The Distributive Property

The fundamental tool of literal calculus is the **distributive property**:

$$a(b + c) = ab + ac$$

This works in both directions: left to right is **expanding** (or distributing), and right to left is **factoring**.

Example of expanding:

$$5(3x - 2) = 15x - 10$$

Be careful with signs: $-2(x - 4) = -2x + 8$, not $-2x - 8$.

## Expanding a Double Product

To expand $(a+b)(c+d)$, multiply each term of the first bracket by each term of the second:

$$(a+b)(c+d) = ac + ad + bc + bd$$

Example:

$$(x+3)(x-2) = x^2 - 2x + 3x - 6 = x^2 + x - 6$$

## Collecting Like Terms

**Like terms** share the same variable part. Only their coefficients differ:

$$7x - 3x + 2 = 4x + 2 \qquad 5x^2 + 3x - 2x^2 + x = 3x^2 + 4x$$

You cannot combine unlike terms: $3x + 2x^2$ stays as written because $x$ and $x^2$ are different.

## Factoring

Factoring is the reverse of expanding. Look for a **common factor** shared by every term:

$$6x + 9 = 3(2x + 3) \qquad 4x^2 - 2x = 2x(2x - 1)$$

When two expressions share a bracketed factor:

$$(x+1)(3x) + (x+1)(5) = (x+1)(3x + 5)$$

## Why Both Skills Matter

Expanding and factoring are complementary. Expanding turns products into sums, which is useful for simplifying or comparing expressions. Factoring turns sums into products, which is essential for solving equations (if a product equals zero, at least one factor is zero).

### Stretch Thought

Can every expression of the form $ax^2 + bx + c$ be factored into two brackets $(px + q)(rx + s)$ with integer coefficients? Try $x^2 + x + 1$.
