---
id: 4e-statistics-central-tendency
order: 7
title: Mean, median, and range
level: 4e
strand: Organization and data
difficulty: core
estimatedMinutes: 20
summary: Compute and interpret the mean, weighted mean, median, and range of a data set, and understand which summary best represents the data.
objectives:
  - Calculate the arithmetic mean and weighted mean
  - Determine the median of an ordered data set
  - Compute the range and interpret spread
prerequisites:
  - Operations with decimals and fractions
  - Ordering numbers
vocabulary:
  - en: mean
    fr: moyenne
    definition: The sum of all values divided by the number of values; a measure of central tendency.
  - en: median
    fr: médiane
    definition: The middle value when data are arranged in order; half the values lie below it and half above.
  - en: range
    fr: étendue
    definition: The difference between the greatest and least values in a data set; a measure of spread.
flashcards:
  - front: How do you calculate the mean of a data set?
    back: Add all the values and divide by the number of values. $\bar{x} = \frac{x_1 + x_2 + \cdots + x_n}{n}$.
  - front: How do you find the median when there is an even number of values?
    back: Order the values. The median is the mean of the two middle values.
  - front: Why might the median be preferred over the mean?
    back: The median is not affected by extreme values (outliers), so it better represents the typical value in skewed data.
generator:
  type: signed-arithmetic
  seed: 40701
  count: 6
  min: -30
  max: 30
tieredExercises:
  - id: "4e-stat-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Find the mean of the data set: $12, 15, 18, 9, 21$."
    solution: "Sum $= 12 + 15 + 18 + 9 + 21 = 75$. Mean $= 75 \\div 5 = 15$."
    hints:
      - "Add all five values, then divide by $5$."
    assessment:
      kind: "numeric"
      expected: 15
  - id: "4e-stat-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "A student's marks (out of $20$) with their coefficients are: Maths $14$ (coeff. $4$), French $12$ (coeff. $3$), History $16$ (coeff. $2$), Science $11$ (coeff. $3$). Calculate the weighted mean."
    solution: "Weighted sum $= 14 \\times 4 + 12 \\times 3 + 16 \\times 2 + 11 \\times 3 = 56 + 36 + 32 + 33 = 157$. Total coefficients $= 4 + 3 + 2 + 3 = 12$. Weighted mean $= 157 \\div 12 \\approx 13.08$."
    hints:
      - "Multiply each mark by its coefficient, sum the products, then divide by the sum of coefficients."
      - "Do not simply average the four marks without accounting for the coefficients."
    assessment:
      kind: "numeric"
      expected: 13.08
  - id: "4e-stat-t3"
    tier: 3
    tierTitle: "Official Core Synthesis"
    curriculumStatus: "core"
    prompt: "The ages (in years) of $10$ members of a sports club are: $14, 16, 13, 15, 42, 14, 15, 13, 16, 14$. Calculate the mean, median, and range. Which measure better represents the typical age? Justify your answer."
    solution: "Ordered data: $13, 13, 14, 14, 14, 15, 15, 16, 16, 42$. Mean $= (13+13+14+14+14+15+15+16+16+42) \\div 10 = 172 \\div 10 = 17.2$. Median $= (14+15) \\div 2 = 14.5$ (average of the 5th and 6th values). Range $= 42 - 13 = 29$. The median ($14.5$) better represents the typical age because the mean ($17.2$) is pulled upward by the outlier $42$."
    hints:
      - "First order the data from least to greatest."
      - "With $10$ values, the median is the average of the 5th and 6th values."
    assessment:
      kind: "reasoning"
      rubric:
        - "Correctly calculates the mean, median, and range."
        - "Identifies the outlier and explains its effect on the mean."
        - "Justifies why the median is a better representative measure for this data set."
  - id: "4e-stat-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: "Five different positive integers have a mean of $7$, a median of $6$, and a range of $10$. Find all possible sets of five such integers."
    solution: "The sum is $5 \\times 7 = 35$. The median is the third value when ordered, so $a < b < 6 < d < e$. The range is $e - a = 10$. The remaining sum $a + b + d + e = 35 - 6 = 29$, and $e = a + 10$, so $a + b + d + a + 10 = 29$, giving $2a + b + d = 19$. We need $a \\ge 1$, $b \\ge a+1$, $d \\ge 7$, $e = a+10 \\ge d+1$, so $d \\le a+9$. Testing: $a=1$: $b+d=17$, $b \\ge 2$, $7 \\le d \\le 10$, so $(b,d) \\in \\{(7,10),(8,9)\\}$, giving $\\{1,7,6,10,11\\}$ and $\\{1,8,6,9,11\\}$. $a=2$: $b+d=15$, $b \\ge 3$, $7 \\le d \\le 11$, but $e=12$, so $d \\le 11$: $(b,d) \\in \\{(4,11),(5,10),(6,9)\\}$, but $b<6$ needed, giving $\\{2,4,6,11,12\\}$, $\\{2,5,6,10,12\\}$. Check $b=6$: not allowed since values are different and median is $6$. Actually $d$ must be $>6$, and we need $d < e = a+10$: $a=2$: $(3,12),(4,11),(5,10),(6,9)$, but $b<6$, so $(3,12)$ fails since $d \\le 11$, giving $\\{2,4,6,11,12\\}$ and $\\{2,5,6,10,12\\}$. $a=3$: $b+d=13$, $b \\ge 4$, $b \\le 5$, $d \\le 12$, $e=13$: $(4,9),(5,8)$, giving $\\{3,4,6,9,13\\}$ and $\\{3,5,6,8,13\\}$. $a=4$: $b+d=11$, $b=5$, $d=6$, but $d>6$ needed, no solution. The valid sets are $\\{1,7,6,10,11\\}$, $\\{1,8,6,9,11\\}$, $\\{2,4,6,11,12\\}$, $\\{2,5,6,10,12\\}$, $\\{3,4,6,9,13\\}$, $\\{3,5,6,8,13\\}$."
    hints:
      - "Use the mean to find the total sum, and the range to link the smallest and largest values."
      - "Systematically test possible values of the smallest integer."
    assessment:
      kind: "reasoning"
      rubric:
        - "Derives the constraints from the mean, median, and range conditions."
        - "Systematically enumerates valid combinations."
        - "Lists all valid sets and verifies each satisfies all three conditions."
---
## Arithmetic mean

The **arithmetic mean** (or simply the mean) of a data set is the sum of all values divided by the number of values:

$$\bar{x} = \frac{x_1 + x_2 + \cdots + x_n}{n}$$

**Example.** The heights in centimetres of four plants are $12, 18, 15, 11$.

$$\bar{x} = \frac{12 + 18 + 15 + 11}{4} = \frac{56}{4} = 14 \text{ cm}$$

The mean is sensitive to extreme values. One very large or very small value can shift it significantly.

## Weighted mean

When values have different **weights** (or coefficients), use the weighted mean:

$$\bar{x}_w = \frac{w_1 x_1 + w_2 x_2 + \cdots + w_n x_n}{w_1 + w_2 + \cdots + w_n}$$

**Example.** A student scores $15$ (coefficient $3$) and $9$ (coefficient $1$). The weighted mean is $\frac{15 \times 3 + 9 \times 1}{3 + 1} = \frac{54}{4} = 13.5$, not $\frac{15+9}{2} = 12$.

## Median

The **median** is the middle value of an ordered data set. It splits the data into two equal halves.

- If $n$ is odd, the median is the value at position $\frac{n+1}{2}$.
- If $n$ is even, the median is the mean of the values at positions $\frac{n}{2}$ and $\frac{n}{2}+1$.

**Example.** Data: $3, 7, 8, 12, 15$. The median is $8$ (the third of five values).

**Example.** Data: $4, 6, 9, 13$. The median is $\frac{6+9}{2} = 7.5$.

The median is **robust**: it does not change much when an extreme value is added or modified.

## Range

The **range** is the difference between the maximum and minimum values:

$$\text{Range} = x_{\max} - x_{\min}$$

It measures how spread out the data are. A large range indicates high variability; a small range indicates consistency.

**Example.** Temperatures over a week: $-2, 1, 3, 5, 5, 7, 12$. Range $= 12 - (-2) = 14$ degrees.

### Stretch thought

Two classes both have a mean test score of $12$ out of $20$, but one class has a range of $4$ and the other a range of $16$. What does this tell you about the two classes, even though their means are identical?
