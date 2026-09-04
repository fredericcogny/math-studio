---
id: 2de-percentages-evolutions
order: 4
title: Percentages, evolution rates, and successive changes
level: 2de
strand: Proportionality
difficulty: core
estimatedMinutes: 25
summary: Turn every percentage change into a multiplying coefficient so that successive and reciprocal evolutions become simple multiplications.
objectives:
  - Convert between an evolution rate and a multiplying coefficient
  - Combine successive evolutions by multiplying their coefficients
  - Compute the reciprocal evolution that cancels a given change
prerequisites:
  - Proportionality and percentages
  - Fraction and decimal calculation
vocabulary:
  - en: multiplying coefficient
    fr: coefficient multiplicateur
    definition: The number by which a value is multiplied to apply a percentage change, equal to one plus the rate.
  - en: evolution rate
    fr: taux d'évolution
    definition: The relative change of a value, equal to the final value minus the initial value, divided by the initial value.
  - en: reciprocal evolution
    fr: évolution réciproque
    definition: The change that brings a value back to its starting point, whose coefficient is the reciprocal of the first one.
flashcards:
  - front: What coefficient applies an increase of $15\%$?
    back: $1+0.15=1.15$. A decrease of $15\%$ uses $1-0.15=0.85$.
  - front: How do two successive evolutions combine?
    back: Their coefficients multiply. Rates never add, so $+20\%$ then $-20\%$ gives $1.2\times 0.8=0.96$, an overall change of $-4\%$.
  - front: What is the evolution rate matching a coefficient of $1.035$?
    back: $t=1.035-1=0.035$, that is an increase of $3.5\%$.
  - front: What is the difference between a percentage and a percentage point?
    back: Going from $20\%$ to $25\%$ is a rise of $5$ percentage points, but an increase of $25\%$ relative to $20$.
generator:
  type: signed-arithmetic
  seed: 20401
  count: 6
  min: -20
  max: 20
tieredExercises:
  - id: '2de-percent-t1'
    tier: 1
    tierTitle: 'Direct Application'
    curriculumStatus: 'core'
    prompt: 'A ticket costs $80$ euros and its price rises by $15\%$. What is the new price in euros?'
    solution: 'The coefficient is $1+0.15=1.15$, so the new price is $80\times 1.15=92$ euros.'
    hints:
      - 'An increase of $t\%$ multiplies by $1+\frac{t}{100}$.'
    assessment:
      kind: 'numeric'
      expected: 92
  - id: '2de-percent-t2'
    tier: 2
    tierTitle: 'Standard Practice'
    curriculumStatus: 'core'
    prompt: 'A quantity increases by $20\%$, then the result decreases by $20\%$. What is the overall evolution rate, as a percentage? Give the answer as a signed number, for example $-4$ for a fall of $4\%$.'
    solution: 'The global coefficient is $1.2\times 0.8=0.96$. Since $0.96=1-0.04$, the overall rate is $-0.04$, that is a decrease of $4\%$.'
    hints:
      - 'Multiply the two coefficients rather than adding the rates.'
      - 'Subtract $1$ from the global coefficient to read the global rate.'
    assessment:
      kind: 'numeric'
      expected: -4
  - id: '2de-percent-t3'
    tier: 3
    tierTitle: 'Official Core Synthesis'
    curriculumStatus: 'core'
    prompt: 'A subscription price rose by $8\%$. The provider now wants to bring it back exactly to its original value. Determine the required percentage decrease, rounded to $0.01\%$, and explain why the answer is not $8\%$.'
    solution: 'Let $P$ be the original price. After the rise the price is $1.08P$. A decrease of rate $t$ multiplies by $1+t$, so we need $1.08\times(1+t)=1$, giving $1+t=\dfrac{1}{1.08}\approx 0.925926$ and $t\approx -0.074074$. The required decrease is about $7.41\%$. It is not $8\%$ because the decrease applies to the larger price $1.08P$, not to $P$: a fall of $8\%$ would give $1.08\times 0.92=0.9936$, that is $0.64\%$ below the start.'
    hints:
      - 'The reciprocal coefficient is $\dfrac{1}{1.08}$, not $0.92$.'
      - 'Compare the base on which each percentage is applied.'
    assessment:
      kind: 'reasoning'
      rubric:
        - 'Writes the condition as a product of coefficients equal to 1.'
        - 'Computes the reciprocal coefficient and converts it into a rate near a decrease of 7.41 percent.'
        - 'Explains that the two percentages apply to different reference values.'
  - id: '2de-percent-t4'
    tier: 4
    tierTitle: 'Advanced Challenge'
    curriculumStatus: 'olympiad'
    prompt: 'Let $t$ be a rate with $0<t<1$. Prove that an increase of $100t\%$ followed by a decrease of $100t\%$ always produces a strict overall decrease. Then find the value of $t$ for which the overall loss is exactly $9\%$.'
    solution: 'The global coefficient is $(1+t)(1-t)=1-t^{2}$. For $0<t<1$ we have $t^{2}>0$, so $1-t^{2}<1$ and the final value is strictly below the initial one, whatever the order of the two steps, since multiplication is commutative. An overall loss of $9\%$ means $1-t^{2}=0.91$, hence $t^{2}=0.09$ and, since $t>0$, $t=0.3$. The two steps are therefore an increase of $30\%$ followed by a decrease of $30\%$. A check gives $1.3\times 0.7=0.91$.'
    hints:
      - 'Use the difference-of-squares identity on the product of the two coefficients.'
      - 'The loss depends on $t^{2}$, which explains why small rates lose very little.'
    assessment:
      kind: 'reasoning'
      rubric:
        - 'Computes the global coefficient as one minus the square of the rate.'
        - 'Proves the strict decrease for every rate strictly between 0 and 1, and notes that the order does not matter.'
        - 'Solves the equation to obtain a rate of 30 percent and verifies it.'
---
## One coefficient per change

A percentage change is easier to handle as a multiplication than as an addition. If a value changes at rate $t$, written as a decimal, then

$$\text{final}=\text{initial}\times(1+t).$$

The number $1+t$ is the **multiplying coefficient**.

| Change | Rate $t$ | Coefficient |
| --- | --- | --- |
| $+15\%$ | $0.15$ | $1.15$ |
| $-30\%$ | $-0.30$ | $0.70$ |
| $\times 3$ | $2$ | $3$ |
| unchanged | $0$ | $1$ |

Read backwards, a coefficient gives the rate: $t=\text{coefficient}-1$. A coefficient of $1.035$ is a rise of $3.5\%$; a coefficient of $0.94$ is a fall of $6\%$.

The **evolution rate** between an initial value $V_{i}$ and a final value $V_{f}$ is

$$t=\frac{V_{f}-V_{i}}{V_{i}}.$$

## Successive evolutions multiply

Two changes applied one after the other correspond to two multiplications, so their coefficients multiply:

$$C_{\text{global}}=C_{1}\times C_{2}.$$

Rates never add. A rise of $20\%$ followed by a fall of $20\%$ gives

$$1.20\times 0.80=0.96,$$

an overall fall of $4\%$, not a return to the start. Multiplication is commutative, so the order of the steps does not change the final value.

## Reciprocal evolution

To cancel a change of coefficient $C$, multiply by $\dfrac{1}{C}$. The **reciprocal evolution** of $+25\%$ therefore has coefficient $\dfrac{1}{1.25}=0.8$, that is a decrease of $20\%$, not of $25\%$. The two percentages differ because each one is measured against a different reference value.

## Percentage of a percentage

Two statements that sound alike measure different things.

- A share rising from $20\%$ to $25\%$ gains $5$ **percentage points**.
- The same move is an increase of $\dfrac{25-20}{20}=0.25$, that is $25\%$, relative to the original share.

Naming the reference value in every sentence removes the ambiguity.

### Stretch thought

A value grows by $2\%$ each year. Estimate the number of years needed for it to double, then compare your estimate with the exact answer obtained from powers of $1.02$.
