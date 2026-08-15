---
id: 5e-proportionality
order: 4
title: Proportionality from ratios to scales
level: 5e
strand: Proportional reasoning
difficulty: core
estimatedMinutes: 30
summary: Use ratios, unit rates, percentages, and scales to solve proportional situations reliably.
objectives:
  - Recognize and represent proportional relationships
  - Calculate and use a unit rate
  - Calculate a percentage of a quantity
  - Interpret and use a map or drawing scale
prerequisites:
  - Multiplication and division
  - Fractions and decimals
  - Converting metric units
vocabulary:
  - en: ratio
    fr: ratio
    definition: A comparison of two quantities by division, written in a stated order.
  - en: unit rate
    fr: passage à l'unité
    definition: The amount corresponding to one unit of another quantity.
  - en: scale
    fr: échelle
    definition: The constant ratio between a represented length and the corresponding actual length.
flashcards:
  - front: What does the ratio $2:5$ mean?
    back: For every $2$ units of the first quantity, there are $5$ units of the second.
  - front: How do you find $15\%$ of $80$?
    back: Calculate $15/100\times80=12$.
  - front: What does a scale of $1:25\,000$ mean?
    back: One unit on the drawing represents $25\,000$ of the same units in reality.
generator:
  type: linear-equation
  seed: 51204
  count: 6
  coefficientMin: 2
  coefficientMax: 9
  solutionMin: 2
  solutionMax: 15
  offsetMin: 0
  offsetMax: 10
tieredExercises:
  - id: "5e-proportionality-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "A paint mixture has blue:white ratio $2:5$ and a total volume of $21$ L. How many liters are blue?"
    solution: "The ratio has $2+5=7$ equal parts. Each part is $21\\div7=3$ L, so the blue volume is $2\\times3=6$ L."
    hints:
      - "First find the total number of equal parts in the ratio."
    assessment:
      kind: "numeric"
      expected: 6
  - id: "5e-proportionality-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "Eight notebooks cost $14.40$. At the same unit price, what is the cost of $15$ notebooks?"
    solution: "One notebook costs $14.40\\div8=1.80$ dollars. Therefore $15$ notebooks cost $15\\times1.80=27$ dollars."
    hints:
      - "First find the price of one notebook."
      - "Multiply that unit price by $15$."
    assessment:
      kind: "numeric"
      expected: 27
  - id: "5e-proportionality-t3"
    tier: 3
    tierTitle: "Official Core Synthesis"
    curriculumStatus: "core"
    prompt: "On a map at scale $1:25\\,000$, a planned route measures $3.6$ cm. A detour increases the real route length by $20\\%$. Find the new real length in kilometers."
    solution: "At this scale, $1$ cm represents $25\\,000$ cm, or $250$ m. The planned route is $3.6\\times250=900$ m. The detour adds $20/100\\times900=180$ m, so its new length is $900+180=1080$ m, or $1.08$ km."
    hints:
      - "Convert $25\\,000$ cm to $250$ m."
      - "Calculate $20\\%$ of $900$ m, then add that amount to the planned length."
    assessment:
      kind: "exact"
      expected: "1.08 km"
      accepted:
        - "1080 m"
  - id: "5e-proportionality-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: "A route is exactly $18$ km long. Map A has scale $1:n$, where $n$ is a multiple of $100\\,000$ between $300\\,000$ and $900\\,000$, inclusive. The route has a whole-number length in centimeters on Map A. Map B is an enlargement of Map A with scale factor $1.5$: every length on Map B is $150\\%$ of the corresponding length on Map A. The route also has a whole-number length in centimeters on Map B. Find every possible value of $n$ and prove that the list is complete."
    solution: "Write $n=100\\,000m$, where $m$ is an integer from $3$ to $9$. Since $18$ km is $1\\,800\\,000$ cm, its Map A length is $1\\,800\\,000/n=18/m$ cm. This is a whole number only when $m$ divides $18$, so within the range $m=3,6,9$. The Map A lengths are then $6,3,2$ cm. Multiplying every length by $1.5$ gives Map B lengths $9,4.5,3$ cm, respectively, so $m=6$ is rejected. Therefore $n=300\\,000$ or $n=900\\,000$. The divisibility check considered every allowed integer $m$, proving completeness."
    hints:
      - "Convert $18$ km to $1\\,800\\,000$ cm and write $n=100\\,000m$."
      - "First determine when $18/m$ is a whole number; then apply the enlargement factor $1.5$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Reduces the allowed scales to the integer cases $m=3,\\ldots,9$."
        - "Uses divisibility to retain $m=3,6,9$, then multiplies the corresponding lengths by $1.5$."
        - "Concludes $n=300\\,000$ or $900\\,000$ and proves no case was omitted."
---
## Recognizing proportionality

Two quantities are **proportional** when one is always obtained by multiplying the other by the same number, called the coefficient of proportionality. If $4$ kg of apples cost $10$ dollars, the coefficient from mass to price is

$$10\div4=2.5\text{ dollars per kilogram}.$$

So $m$ kilograms cost $2.5m$ dollars. A table is proportional when the quotient between corresponding nonzero values stays constant.

> Warning: a relationship with a fixed added amount is not proportional. A taxi fare of $3+2d$ dollars includes a starting charge, so doubling distance $d$ does not double the fare.

## Ratios and equivalent ratios

The ratio $2:5$ compares quantities in a fixed order. A paint mixture with blue:white $=2:5$ has $2+5=7$ equal parts. In $21$ L of paint, one part is $21\div7=3$ L, so there are $6$ L blue and $15$ L white.

Multiplying both terms by the same nonzero number produces an equivalent ratio:

$$2:5=6:15.$$

Do not confuse the ratio of blue to white, $2:5$, with the fraction of the whole that is blue, $2/7$.

## Unit rates

Passing through one unit is a dependable two-step method. If $7$ meters of fabric cost $31.50$ dollars, then

$$31.50\div7=4.50$$

dollars per meter, and $12$ meters cost $12\times4.50=54$ dollars. Keep units attached: they reveal whether to multiply or divide.

## Percentages are ratios out of 100

$18\%$ means $18/100=0.18$. To find $18\%$ of $250$, calculate $0.18\times250=45$.

For an increase, first calculate the percentage amount and add it to the starting value. For example, increasing $250$ by $18\%$ gives $250+45=295$. For a decrease, subtract the percentage amount instead.

## Scales

At scale $1:50\,000$, $1$ cm on a map represents $50\,000$ cm in reality. Since $50\,000$ cm is $500$ m, a map distance of $7.2$ cm represents

$$7.2\times500=3600\text{ m}=3.6\text{ km}.$$

Always convert to the same unit before applying a scale. For an enlargement at scale $3:2$, every represented length is $3/2=1.5$ times the original; areas would instead be multiplied by $1.5^2$.

### Stretch: increase and decrease multipliers

The one-step multiplier method is stretch material here. An increase of $18\%$ keeps the original $100\%$ and adds $18\%$, so it multiplies by $1.18$. A decrease of $18\%$ leaves $82\%$, so it multiplies by $0.82$.

> Common error: increasing by $20\%$ and then decreasing by $20\%$ does not return to the start. The stretch multipliers give $1.2\times0.8=0.96$, a net decrease of $4\%$.

### Stretch connection

Scale and percentage problems can hide divisibility conditions. If a map length must be a whole number, listing the divisors of the real length can prove that every possible scale has been considered.
