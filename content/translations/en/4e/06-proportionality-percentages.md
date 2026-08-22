---
id: 4e-proportionality-percentages
locale: en
title: Proportionality, Percentages, and Scales
strand: Organization and Data
summary: Use the coefficient of proportionality, cross-multiplication, and percentage calculations to solve real-world problems involving scales and rates.
objectives:
  - Identify a proportional situation and find the coefficient
  - Apply cross-multiplication to find an unknown value
  - Calculate percentage increases and decreases
prerequisites:
  - Fraction and decimal operations
  - Basic ratio reasoning
vocabulary:
  - en: proportion
    definition: An equality between two ratios, expressing that two quantities vary at the same rate.
  - en: percentage
    definition: A ratio expressed out of $100$, used to compare parts of a whole.
  - en: scale
    definition: The ratio between a distance on a map or drawing and the corresponding real distance.
flashcards:
  - front: How do you test whether a table represents a proportional relationship?
    back: Divide each output by its input. If all quotients are equal, the relationship is proportional and the quotient is the coefficient.
  - front: What is the formula for a percentage of a quantity?
    back: $\text{percentage} \times \text{quantity} \div 100$, or equivalently multiply by the decimal form.
  - front: A map has scale $1:25\,000$. What real distance does $4$ cm represent?
    back: $4 \times 25\,000 = 100\,000$ cm $= 1$ km.
exercises:
  - id: 4e-prop-t1
    tierTitle: Direct Application
    prompt: A shirt originally costs $40$ euros. It is reduced by $15\%$. What is the sale price?
    solution: The discount is $40 \times 0.15 = 6$ euros. The sale price is $40 - 6 = 34$ euros.
    hints:
      - Calculate $15\%$ of $40$ first, then subtract from the original price.
  - id: 4e-prop-t2
    tierTitle: Standard Practice
    prompt: A town's population was $12\,500$ in 2020. It increased by $4\%$ in 2021 and then decreased by $2\%$ in 2022. What was the population at the end of 2022?
    solution: "After the $4\\%$ increase: $12\\,500 \\times 1.04 = 13\\,000$. After the $2\\%$ decrease: $13\\,000 \\times 0.98 = 12\\,740$."
    hints:
      - A $4\%$ increase means multiplying by $1.04$.
      - Apply the $2\%$ decrease to the result of the first step, not the original population.
  - id: 4e-prop-t3
    tierTitle: Official Core Synthesis
    prompt: >-
      On a map with scale $1:50\,000$, a lake measures $3.6$ cm long and $1.4$ cm wide (modelled as a rectangle). Compute the real dimensions in metres and the real area in hectares. Then a new map is printed at scale $1:25\,000$. What are the lake's dimensions on the new map?
    solution: >-
      Real length: $3.6 \times 50\,000 = 180\,000$ cm $= 1\,800$ m. Real width: $1.4 \times 50\,000 = 70\,000$ cm $= 700$ m. Area: $1\,800 \times 700 = 1\,260\,000$ m$^2 = 126$ ha. On the $1:25\,000$ map: length $= 180\,000 / 25\,000 = 7.2$ cm, width $= 70\,000 / 25\,000 = 2.8$ cm.
    hints:
      - Multiply map measurements by the scale factor to get real distances in centimetres, then convert.
      - One hectare is $10\,000$ m$^2$.
    rubric:
      - Correctly converts map distances to real distances using the scale.
      - Computes the area and converts to hectares accurately.
      - Determines the dimensions on the new map using the new scale.
  - id: 4e-prop-t4
    tierTitle: Advanced Challenge
    prompt: >-
      A shop applies a $20\%$ discount, then adds $10\%$ sales tax on the discounted price. Another shop applies the $10\%$ tax first, then gives the $20\%$ discount. Show algebraically that both final prices are identical for any original price, and explain why.
    solution: >-
      Let the original price be $P$. Shop A: discounted price $= 0.8P$, then with tax $= 0.8P \times 1.1 = 0.88P$. Shop B: price with tax $= 1.1P$, then with discount $= 1.1P \times 0.8 = 0.88P$. Both give $0.88P$ because multiplication is commutative: $0.8 \times 1.1 = 1.1 \times 0.8$.
    hints:
      - Let the original price be $P$ and express each final price as a product of multipliers.
      - Remember that the order of multiplication does not change the product.
    rubric:
      - Sets up the calculation for both shops using a variable for the original price.
      - Shows both expressions simplify to $0.88P$.
      - Explains the result using commutativity of multiplication.
---
## Recognising Proportionality

Two quantities are **proportional** when their ratio is constant. If $y = kx$ for every pair $(x, y)$ in a table, the constant $k$ is the **coefficient of proportionality**.

| Petrol (L) | 5   | 10  | 15  | 25  |
|------------|-----|-----|-----|-----|
| Cost (euros)  | 9   | 18  | 27  | 45  |

Every cost divided by litres gives $1.8$, so the relationship is proportional with coefficient $k = 1.8$ euros per litre.

## Cross-Multiplication

When $\frac{a}{b} = \frac{c}{d}$, we can find an unknown by cross-multiplying:

$$a \times d = b \times c$$

**Example.** If $\frac{x}{12} = \frac{5}{8}$, then $8x = 60$, so $x = 7.5$.

## Percentages

A percentage expresses a fraction out of $100$. To compute $p\%$ of a quantity $Q$:

$$p\% \text{ of } Q = \frac{p}{100} \times Q$$

- **Increase by $p\%$:** multiply by $1 + \frac{p}{100}$.
- **Decrease by $p\%$:** multiply by $1 - \frac{p}{100}$.

**Example.** An item costs $80$ euros and increases by $5\%$. The new price is $80 \times 1.05 = 84$ euros.

> Successive percentages do not add. A $10\%$ increase followed by a $10\%$ decrease does **not** return to the original price. The result is $0.99$ times the original.

## Scales

A **scale** is the ratio $\frac{\text{distance on the drawing}}{\text{real distance}}$. A scale of $1:20\,000$ means $1$ cm on the map represents $20\,000$ cm $= 200$ m in reality.

To find a real distance: multiply the map measurement by the denominator.
To find a map distance: divide the real distance by the denominator.

### Stretch Thought

If a price increases by $25\%$, by what percentage must it decrease to return to its original value? Why is the answer not $25\%$?
