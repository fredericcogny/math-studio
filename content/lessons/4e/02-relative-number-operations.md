---
id: 4e-relative-number-operations
order: 2
title: Multiplying and dividing signed numbers
level: 4e
strand: Numbers and calculation
difficulty: core
estimatedMinutes: 20
summary: Learn the sign rules for multiplication and division of integers and decimals, then apply them confidently in multi-step calculations.
objectives:
  - Apply sign rules for multiplication
  - Apply sign rules for division
  - Determine the sign of a product of several factors
prerequisites:
  - Adding and subtracting signed numbers
  - Multiplication tables
vocabulary:
  - en: product
    fr: produit
    definition: The result of a multiplication.
  - en: quotient
    fr: quotient
    definition: The result of a division.
  - en: sign rule
    fr: règle des signes
    definition: The rule stating that the product or quotient of two numbers with the same sign is positive, and with different signs is negative.
flashcards:
  - front: What is the sign of the product of two negative numbers?
    back: Positive. Two negatives multiplied give a positive, e.g. $(-3)\times(-4)=12$.
  - front: How do you determine the sign of a product of several factors?
    back: Count the negative factors. An even count gives a positive product; an odd count gives a negative product.
  - front: What is $(-7)\div(-1)$?
    back: $7$, because dividing two negatives gives a positive result.
generator:
  type: signed-arithmetic
  seed: 40201
  count: 6
  min: -20
  max: 20
tieredExercises:
  - id: "4e-rel-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Calculate $(-5)\\times 8$."
    solution: "Different signs give a negative product: $(-5)\\times 8 = -40$."
    hints:
      - "Multiply the absolute values, then apply the sign rule."
    assessment:
      kind: "numeric"
      expected: -40
  - id: "4e-rel-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "A submarine descends $3.5$ metres per minute. After $8$ minutes it rests, then ascends $2$ metres per minute for $5$ minutes. Express the final change in depth as a signed number and calculate it."
    solution: "Descent: $(-3.5)\\times 8 = -28$ m. Ascent: $(+2)\\times 5 = +10$ m. Total change: $-28 + 10 = -18$ m. The submarine is $18$ m below its starting point."
    hints:
      - "Model descent as a negative rate and ascent as positive."
      - "Add the two signed changes to find the net result."
    assessment:
      kind: "numeric"
      expected: -18
  - id: "4e-rel-t3"
    tier: 3
    tierTitle: "Official Core Synthesis"
    curriculumStatus: "core"
    prompt: "Without computing the exact value, determine the sign of the expression $(-2)\\times 3\\times(-4)\\times(-1)\\times 5$ and explain your reasoning. Then verify by calculating the product."
    solution: "There are three negative factors ($-2$, $-4$, $-1$), so the number of negative factors is odd, which makes the product negative. Calculation: $(-2)\\times 3 = -6$, $(-6)\\times(-4)=24$, $24\\times(-1)=-24$, $(-24)\\times 5=-120$. The product is $-120$, confirming it is negative."
    hints:
      - "Count the number of negative factors in the product."
      - "An odd number of negative factors makes the product negative."
    assessment:
      kind: "reasoning"
      rubric:
        - "Correctly counts the number of negative factors."
        - "Applies the parity rule to predict the sign."
        - "Verifies by computing the full product step by step."
  - id: "4e-rel-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: "Let $a$, $b$, and $c$ be nonzero integers such that $a\\times b > 0$, $b\\times c < 0$, and $a\\times c < 0$. Determine the signs of $a$, $b$, and $c$. How many essentially different sign assignments are there? Justify."
    solution: "$a\\times b>0$ means $a$ and $b$ have the same sign. $b\\times c<0$ means $b$ and $c$ have different signs. $a\\times c<0$ means $a$ and $c$ have different signs. If $a>0$ then $b>0$ (same sign as $a$), and $c<0$ (different from $a$). Check: $b\\times c = (+)(-)< 0$ and $a\\times c=(+)(-)<0$, both satisfied. If $a<0$ then $b<0$ and $c>0$. Check: $a\\times b = (-)(-) > 0$, $b\\times c=(-)(+)<0$, $a\\times c=(-)(+)<0$, all satisfied. There are exactly two valid sign assignments: $(+,+,-)$ and $(-,-,+)$."
    hints:
      - "Start from $a\\times b>0$: what does this tell you about the signs of $a$ and $b$?"
      - "Consider both cases ($a>0$ and $a<0$) and check each condition."
    assessment:
      kind: "reasoning"
      rubric:
        - "Correctly deduces the relationship between the signs from each inequality."
        - "Identifies both valid sign assignments."
        - "Proves no other assignment is possible."
---
## The sign rule for multiplication

In 5e you learned to add and subtract signed numbers. Now we extend to multiplication. The rule is direct:

- **Same signs** give a **positive** product: $(+)\times(+)=+$ and $(-)\times(-)=+$.
- **Different signs** give a **negative** product: $(+)\times(-)=-$ and $(-)\times(+)=-$.

Examples:

$$(-3)\times(-7) = 21 \qquad 4\times(-6) = -24 \qquad (-2.5)\times 4 = -10$$

Why does $(-1)\times(-1)=1$? Because $(-1)\times(-1)$ must be the number that, added to $(-1)\times 1 = -1$, gives $(-1)\times(1+(-1))=(-1)\times 0=0$. So $(-1)\times(-1)=-(-1)=1$.

## Sign of a product of several factors

When multiplying more than two factors, count the negative ones:

- **Even** number of negative factors $\Rightarrow$ positive product.
- **Odd** number of negative factors $\Rightarrow$ negative product.

$$(-2)\times(-3)\times(-5) = -30 \quad \text{(three negatives, odd, so negative)}$$

$$(-1)\times(-2)\times(-3)\times(-4) = 24 \quad \text{(four negatives, even, so positive)}$$

## The sign rule for division

Division follows the same sign rule as multiplication:

$$\frac{-12}{-3}=4 \qquad \frac{-12}{3}=-4 \qquad \frac{12}{-3}=-4$$

This is consistent because division is multiplication by a reciprocal.

## Combining operations

In expressions with mixed operations, apply the usual order: brackets first, then multiplication and division (left to right), then addition and subtraction.

$$(-3)\times 4 + (-10)\div(-2) = -12 + 5 = -7$$

### Stretch thought

Is it possible for the product of 100 nonzero integers to be negative? What about 101 nonzero integers? Explain using the sign-counting rule.
