---
id: 5e-signed-numbers
order: 1
title: Signed numbers, without guesswork
level: 5e
strand: Numbers and calculation
difficulty: core
estimatedMinutes: 20
summary: Build a reliable mental model for movement below zero, then turn it into fast arithmetic.
objectives:
  - Compare signed numbers
  - Add and subtract reliably
  - Explain a sign change
prerequisites:
  - Whole-number addition
  - Reading a number line
vocabulary:
  - en: signed number
    fr: nombre relatif
    definition: A number described by its position relative to zero; it may be positive, zero, or negative.
  - en: opposite
    fr: opposé
    definition: The number at the same distance from zero on the other side.
  - en: number line
    fr: droite graduée
    definition: A line on which numbers are placed in increasing order.
flashcards:
  - front: What is the absolute value of -7?
    back: $|-7|=7$, because absolute value is distance from zero.
  - front: Which is greater, -3.08 or -3.8?
    back: -3.08, because it lies farther to the right on the number line.
  - front: What does subtracting a negative do?
    back: It adds the opposite, so a - (-b) = a + b.
generator:
  type: signed-arithmetic
  seed: 51201
  count: 6
  min: -15
  max: 15
tieredExercises:
  - id: "5e-signed-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Calculate $-3.7+5.25-1.8$."
    solution: "$-3.7+5.25=1.55$, then $1.55-1.8=-0.25$."
    hints:
      - "Align the decimal points and track each operation sign separately."
    assessment:
      kind: "numeric"
      expected: -0.25
  - id: "5e-signed-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "At 06:00 the temperature is $-4.5^\\circ$C. It rises by $7.2^\\circ$C, then falls by an unknown amount, then rises by $1.8^\\circ$C and finishes at $-3.1^\\circ$C. By how many degrees did it fall?"
    solution: "After the first rise the temperature is $2.7^\\circ$C. If the unknown fall is $d$, then $2.7-d+1.8=-3.1$, so $4.5-d=-3.1$ and $d=7.6$. It fell by $7.6^\\circ$C."
    hints:
      - "Work backwards from the final temperature or represent the unknown fall by $d$."
      - "Check that $-4.5+7.2-7.6+1.8=-3.1$."
    assessment:
      kind: "numeric"
      expected: 7.6
  - id: "5e-signed-t3"
    tier: 3
    tierTitle: "Official Core Synthesis"
    curriculumStatus: "core"
    prompt: "First order the four cards $-4.5,-1.2,2.3,3.4$ from least to greatest. Then arrange them so that, starting from $0$, every running total is nonnegative. Give one arrangement and list its four running totals."
    solution: "The increasing order is $-4.5<-1.2<2.3<3.4$. One valid arrangement is $3.4,-1.2,2.3,-4.5$. Its running totals are $3.4,2.2,4.5,0$, all nonnegative."
    hints:
      - "A negative card cannot be first."
      - "Before playing $-4.5$, build a running total of at least $4.5$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Gives the correct increasing order of the four signed decimals."
        - "Uses each card exactly once and computes the running totals correctly."
        - "Verifies that every running total is nonnegative."
  - id: "5e-signed-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: "The cards are $-5,-4,-3,2,3,4,6$. Starting from $0$, order all cards so that every running total is strictly positive. Among all such orders, make the largest running total as small as possible, and prove that your value is optimal."
    solution: "The order $6,-5,4,-4,3,-3,2$ gives running totals $6,1,5,1,4,1,3$, so a largest total of $6$ is achievable. A largest total below $6$ is impossible: the card $6$ must eventually be played, and the running total immediately before it is either $0$ if it is first or a strictly positive integer otherwise. Thus the total just after playing $6$ is at least $6$. Therefore the minimum possible largest running total is $6$."
    hints:
      - "Try alternating a positive card with a negative card."
      - "For the lower bound, focus on the moment when the card $6$ is played."
    assessment:
      kind: "reasoning"
      rubric:
        - "Provides an order whose running totals are all strictly positive."
        - "Shows that the proposed order has largest running total $6$."
        - "Proves that every valid order has a running total at least $6$."
---
## Position first, rules second

A signed number records a position relative to zero. A number is **positive** if it is greater than zero and **negative** if it is less than zero. Zero is neither positive nor negative. **Nonnegative** means greater than or equal to zero, so it includes zero and every positive number.

The **absolute value** of $a$, written $|a|$, is its distance from zero, so it is always nonnegative. For example, $|-3.7|=3.7$ and $|3.7|=3.7$. The opposite of $a$ is written $-a$: it has the same absolute value on the other side of zero. Together, opposites cancel:

$$a + (-a) = 0$$

On a number line, values increase as you move right. This explains both $-2>-9$ and signed-decimal comparisons. Align decimal places when useful: $-3.08>-3.80$ because $-3.08$ is farther right, whereas $-4.25<-4.2$ because $-4.25$ is farther left.

## Addition as movement

Start at the first number. Adding a positive number moves right; adding a negative number moves left. The same model works for whole and decimal amounts.

- $-4 + 7 = 3$: start at $-4$, then move seven places right.
- $5 + (-8) = -3$: start at $5$, then move eight places left.
- $-2.6+4.1=1.5$: start at $-2.6$, then move $4.1$ units right.

Once the picture is secure, use this faster method: equal signs reinforce each other; different signs compete, and the greater absolute value decides the sign.

## Subtraction means adding the opposite

Do not memorise an isolated “two minuses make a plus” slogan. Rewrite the operation:

$$6 - (-4) = 6 + 4 = 10$$

For decimals, the rule is unchanged: $1.7-(-0.8)=1.7+0.8=2.5$, while $-1.7-0.8=-2.5$.

> A robust habit: circle the operation sign and underline the number's own sign. They have different jobs.

### Stretch thought

Without calculating each term, decide whether $-101 + 99 + 2$ is positive, negative, or zero. Look for cancellation before computation.
