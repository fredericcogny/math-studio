---
id: 2de-roots-powers
locale: en
title: Exact Calculation with Square Roots and Powers
strand: Numbers and Calculations
summary: Keep results exact by simplifying square roots, clearing roots from denominators, and applying the power rules including negative exponents.
objectives:
  - Simplify a square root by extracting perfect squares
  - Clear a square root from a denominator using a conjugate
  - Apply the power rules with integer exponents and scientific notation
prerequisites:
  - Squares and cubes of integers
  - Fraction arithmetic
vocabulary:
  - en: square root
    definition: The unique nonnegative number whose square equals the given nonnegative number.
  - en: conjugate
    definition: The expression obtained by reversing the sign between two terms, used to remove a square root from a denominator.
  - en: scientific notation
    definition: A writing of the form a times ten to the power n, where the absolute value of a is at least one and less than ten.
flashcards:
  - front: What are the two product rules for square roots?
    back: $\sqrt{ab}=\sqrt{a}\sqrt{b}$ and $\sqrt{\dfrac{a}{b}}=\dfrac{\sqrt{a}}{\sqrt{b}}$, for $a\geqslant 0$ and $b>0$. There is no such rule for a sum.
  - front: Why is $\sqrt{a+b}$ different from $\sqrt{a}+\sqrt{b}$?
    back: Squaring the second gives $a+b+2\sqrt{ab}$, so the two agree only when $ab=0$. Test $a=b=9$ to see the gap.
  - front: What does a negative exponent mean?
    back: $a^{-n}=\dfrac{1}{a^{n}}$ for $a\neq 0$. It is a reciprocal, never a negative result.
  - front: How do you remove the root from $\dfrac{1}{3+\sqrt{2}}$?
    back: Multiply top and bottom by the conjugate $3-\sqrt{2}$, since $(3+\sqrt{2})(3-\sqrt{2})=9-2=7$.
exercises:
  - id: 2de-roots-t1
    tierTitle: Direct Application
    prompt: Write $\sqrt{72}$ in the form $a\sqrt{b}$ where $a$ and $b$ are integers and $b$ is as small as possible.
    solution: $72=36\times 2$, so $\sqrt{72}=\sqrt{36}\times\sqrt{2}=6\sqrt{2}$.
    hints:
      - Look for the largest perfect square that divides 72.
  - id: 2de-roots-t2
    tierTitle: Standard Practice
    prompt: Compute the exact value of $A=(\sqrt{3}-2)^{2}+4\sqrt{3}$.
    solution: Expanding gives $(\sqrt{3})^{2}-2\times 2\times\sqrt{3}+2^{2}=3-4\sqrt{3}+4=7-4\sqrt{3}$. Adding $4\sqrt{3}$ removes the root, so $A=7$.
    hints:
      - Expand the square with the identity for $(a-b)^{2}$.
      - Remember that $(\sqrt{3})^{2}=3$ exactly.
  - id: 2de-roots-t3
    tierTitle: Official Core Synthesis
    prompt: Show that $(2+\sqrt{5})(2-\sqrt{5})$ is an integer, then use that result to write $\dfrac{1}{2+\sqrt{5}}$ without any square root in the denominator. Check your answer with a calculator.
    solution: >-
      The product is a difference of two squares, $(2+\sqrt{5})(2-\sqrt{5})=2^{2}-(\sqrt{5})^{2}=4-5=-1$, an integer. Multiplying the fraction by the conjugate gives $\dfrac{1}{2+\sqrt{5}}=\dfrac{2-\sqrt{5}}{(2+\sqrt{5})(2-\sqrt{5})}=\dfrac{2-\sqrt{5}}{-1}=\sqrt{5}-2$. A calculator gives $\sqrt{5}-2\approx 0.236$ and $\dfrac{1}{2+\sqrt{5}}\approx 0.236$, which agree.
    hints:
      - Recognize the pattern $(a+b)(a-b)$.
      - Multiply numerator and denominator by the conjugate of the denominator.
    rubric:
      - Uses the difference-of-squares identity to obtain the integer -1.
      - Multiplies by the conjugate and simplifies to an expression with no root in the denominator.
      - Confirms the equality numerically.
  - id: 2de-roots-t4
    tierTitle: Advanced Challenge
    prompt: Take as known that $\sqrt{6}$ is irrational. Prove that $\sqrt{2}+\sqrt{3}$ is irrational. Then decide, with proof, whether $(\sqrt{2}+\sqrt{3})^{2}-(\sqrt{2}-\sqrt{3})^{2}$ is rational.
    solution: >-
      Let $x=\sqrt{2}+\sqrt{3}$. Then $x^{2}=2+2\sqrt{6}+3=5+2\sqrt{6}$, so $\sqrt{6}=\dfrac{x^{2}-5}{2}$. If $x$ were rational then $x^{2}-5$ would be rational and so would $\dfrac{x^{2}-5}{2}$, making $\sqrt{6}$ rational. That contradicts the hypothesis, so $x$ is irrational. For the second part, $(\sqrt{2}+\sqrt{3})^{2}=5+2\sqrt{6}$ and $(\sqrt{2}-\sqrt{3})^{2}=5-2\sqrt{6}$, so the difference equals $4\sqrt{6}$. If $4\sqrt{6}$ were rational then dividing by $4$ would make $\sqrt{6}$ rational, so the difference is irrational.
    hints:
      - Square the number and isolate the only remaining root.
      - The rationals are closed under the four operations, which is what makes the contradiction work.
    rubric:
      - Squares the expression correctly and isolates the square root of 6.
      - Completes a proof by contradiction using closure of the rationals.
      - Evaluates the difference of squares as four times the square root of 6 and proves it is irrational.
---
## Square Roots That Stay Exact

For $a\geqslant 0$, the square root $\sqrt{a}$ is the unique number that is nonnegative and whose square is $a$. Two rules move roots through products and quotients:

$$\sqrt{ab}=\sqrt{a}\,\sqrt{b}\quad (a\geqslant 0,\;b\geqslant 0),\qquad \sqrt{\frac{a}{b}}=\frac{\sqrt{a}}{\sqrt{b}}\quad (a\geqslant 0,\;b>0).$$

There is **no** rule for a sum. Testing $a=b=9$ gives $\sqrt{18}\approx 4.24$ while $\sqrt{9}+\sqrt{9}=6$.

To **simplify** a root, extract the largest perfect square:

$$\sqrt{50}=\sqrt{25\times 2}=5\sqrt{2},\qquad \sqrt{147}=\sqrt{49\times 3}=7\sqrt{3}.$$

Simplified roots can then be added like terms: $\sqrt{50}+\sqrt{8}=5\sqrt{2}+2\sqrt{2}=7\sqrt{2}$.

## Clearing a Root from a Denominator

The identity $(a+b)(a-b)=a^{2}-b^{2}$ turns a sum of roots into a number. The expression $a-b$ is the **conjugate** of $a+b$.

$$\frac{1}{3+\sqrt{2}}=\frac{3-\sqrt{2}}{(3+\sqrt{2})(3-\sqrt{2})}=\frac{3-\sqrt{2}}{9-2}=\frac{3-\sqrt{2}}{7}$$

An exact answer like this is preferred over a rounded decimal, because rounding early makes later steps drift.

## Powers with Integer Exponents

For $a\neq 0$ and integers $m$ and $n$:

$$a^{m}a^{n}=a^{m+n},\qquad \frac{a^{m}}{a^{n}}=a^{m-n},\qquad (a^{m})^{n}=a^{mn},\qquad a^{-n}=\frac{1}{a^{n}},\qquad a^{0}=1.$$

A negative exponent signals a reciprocal, not a negative number: $2^{-3}=\frac{1}{8}$.

**Scientific notation** writes a number as $a\times 10^{n}$ with $1\leqslant |a|<10$. It makes orders of magnitude comparable:

$$0.00042=4.2\times 10^{-4},\qquad 3\,600\,000=3.6\times 10^{6}.$$

Multiplying in scientific notation multiplies the leading factors and adds the exponents.

### Stretch Thought

For which integers $n$ is $\sqrt{n}$ an integer? Describe the whole set and explain how the prime factorization decides the answer.
