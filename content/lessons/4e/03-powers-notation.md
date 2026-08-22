---
id: 4e-powers-notation
order: 3
title: Powers and their rules
level: 4e
strand: Numbers and calculation
difficulty: core
estimatedMinutes: 20
summary: Understand exponent notation and apply the core rules for computing with powers.
objectives:
  - Use exponent notation to express repeated multiplication
  - Apply the product, quotient, and power-of-a-power rules
  - Handle negative bases and the special cases of exponent 0 and 1
prerequisites:
  - Multiplication of signed numbers
  - Prime factorisation basics
vocabulary:
  - en: power/exponent
    fr: puissance/exposant
    definition: In $a^n$, the exponent $n$ tells how many times the base $a$ is used as a factor.
  - en: base
    fr: base
    definition: The number being raised to a power in the expression $a^n$.
  - en: scientific notation
    fr: notation scientifique
    definition: Writing a number as $a\times 10^n$ where $1\leq|a|<10$ and $n$ is an integer.
flashcards:
  - front: What is $a^0$ for any nonzero $a$?
    back: $a^0 = 1$, by convention and by the quotient rule ($a^n \div a^n = a^{n-n} = a^0 = 1$).
  - front: State the product rule for powers.
    back: $a^m \times a^n = a^{m+n}$, when the base is the same.
  - front: What is the difference between $(-3)^2$ and $-3^2$?
    back: $(-3)^2 = 9$ (the base is $-3$), while $-3^2 = -(3^2) = -9$ (only 3 is squared).
generator:
  type: signed-arithmetic
  seed: 40301
  count: 6
  min: -10
  max: 10
tieredExercises:
  - id: "4e-pow-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Calculate $(-2)^4$."
    solution: "$(-2)^4 = (-2)\\times(-2)\\times(-2)\\times(-2) = 4\\times 4 = 16$. Four negative factors (even count), so the result is positive."
    hints:
      - "Write out the repeated multiplication and count the negative signs."
    assessment:
      kind: "numeric"
      expected: 16
  - id: "4e-pow-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "Simplify $\\frac{3^5 \\times 3^2}{3^4}$ into a single power of 3, then compute the value."
    solution: "By the product rule, $3^5\\times 3^2=3^{5+2}=3^7$. By the quotient rule, $\\frac{3^7}{3^4}=3^{7-4}=3^3=27$."
    hints:
      - "Use the product rule $a^m\\times a^n=a^{m+n}$ first."
      - "Then apply the quotient rule $\\frac{a^m}{a^n}=a^{m-n}$."
    assessment:
      kind: "numeric"
      expected: 27
  - id: "4e-pow-t3"
    tier: 3
    tierTitle: "Official Core Synthesis"
    curriculumStatus: "core"
    prompt: "Explain why $(a^m)^n = a^{m\\times n}$ using the definition of powers. Illustrate with $(2^3)^2$ and verify the result."
    solution: "$(a^m)^n$ means multiplying $a^m$ by itself $n$ times: $a^m \\times a^m \\times \\cdots \\times a^m$ ($n$ copies). By the product rule, this equals $a^{m+m+\\cdots+m}=a^{m\\times n}$. For $(2^3)^2$: $2^3=8$, so $(2^3)^2=8^2=64$. Using the rule: $2^{3\\times 2}=2^6=64$. Both agree."
    hints:
      - "Write $(a^m)^n$ as a product of $n$ copies of $a^m$, then apply the product rule."
      - "Compute $(2^3)^2$ both ways to check."
    assessment:
      kind: "reasoning"
      rubric:
        - "Correctly expands $(a^m)^n$ as $n$ copies of $a^m$ multiplied together."
        - "Applies the product rule to derive $a^{m\\times n}$."
        - "Verifies with the numerical example $(2^3)^2=64=2^6$."
  - id: "4e-pow-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: "Find the last digit of $7^{2026}$. Explain the method and prove your answer is correct."
    solution: "Compute powers of 7 modulo 10: $7^1=7$, $7^2=49$ (last digit 9), $7^3=343$ (last digit 3), $7^4=2401$ (last digit 1), $7^5$ ends in 7 again. The cycle of last digits is $7,9,3,1$ with period 4. Since $2026=4\\times 506+2$, the remainder when dividing 2026 by 4 is 2. So $7^{2026}$ has the same last digit as $7^2$, which is $9$."
    hints:
      - "Compute $7^1, 7^2, 7^3, 7^4$ modulo 10 and look for a repeating cycle."
      - "Find the remainder of $2026\\div 4$ to determine where in the cycle $7^{2026}$ falls."
    assessment:
      kind: "reasoning"
      rubric:
        - "Identifies the cyclic pattern of last digits of powers of 7."
        - "Correctly determines the period of the cycle as 4."
        - "Uses division with remainder to find the last digit of $7^{2026}$."
---
## What is a power?

The expression $a^n$ (read "$a$ to the power $n$") means multiplying $a$ by itself $n$ times:

$$a^n = \underbrace{a \times a \times \cdots \times a}_{n \text{ factors}}$$

The number $a$ is the **base** and $n$ is the **exponent** (or **power**).

Examples: $5^3 = 5\times 5\times 5 = 125$ and $(-2)^3 = (-2)\times(-2)\times(-2) = -8$.

## Special exponents

Two cases deserve special attention:

- $a^1 = a$ for any number $a$.
- $a^0 = 1$ for any nonzero $a$. This follows from the quotient rule: $\frac{a^n}{a^n} = a^{n-n} = a^0$, and any nonzero number divided by itself is 1.

## Negative bases: brackets matter

Pay careful attention to brackets:

- $(-3)^2 = (-3)\times(-3) = 9$: the base is $-3$.
- $-3^2 = -(3\times 3) = -9$: only 3 is squared; the minus sign is applied afterwards.

In general, a negative base raised to an **even** exponent gives a positive result, and raised to an **odd** exponent gives a negative result.

## Rules for computing with powers

When the bases are the same:

| Rule | Formula | Example |
|---|---|---|
| Product | $a^m \times a^n = a^{m+n}$ | $2^3\times 2^5 = 2^8 = 256$ |
| Quotient | $\frac{a^m}{a^n} = a^{m-n}$ (with $a\neq 0$) | $\frac{5^7}{5^4}=5^3=125$ |
| Power of a power | $(a^m)^n = a^{m\times n}$ | $(3^2)^4 = 3^8 = 6561$ |

These rules work because powers represent repeated multiplication, so combining or splitting factors leads naturally to adding or subtracting exponents.

## Powers of 10 and scientific notation

Powers of 10 express large and small numbers compactly:

$$10^3 = 1000 \qquad 10^6 = 1\,000\,000$$

**Scientific notation** writes a number as $a\times 10^n$ where $1\leq|a|<10$. For example, $45\,000 = 4.5\times 10^4$.

### Stretch thought

Is $2^{10}$ closer to $10^3$ or to $10^4$? Calculate and compare.
