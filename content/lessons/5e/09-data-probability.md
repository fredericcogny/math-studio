---
id: 5e-data-probability
order: 11
title: Data displays, mean, and probability
level: 5e
strand: Data and probability
difficulty: core
estimatedMinutes: 45
summary: Calculate a simple mean from raw data, construct and choose bar, circular, and Cartesian charts, and determine simple probabilities.
objectives:
  - Organize raw data and calculate its simple mean
  - Construct bar charts, circular charts, and Cartesian line graphs
  - Choose a display suited to categories, proportions, or ordered change
  - Determine theoretical and experimental probabilities in simple situations
prerequisites:
  - Add and divide whole and finite decimal numbers
  - Compare fractions, decimal representations, and percentages
  - Read and graduate coordinate axes
vocabulary:
  - en: frequency count
    fr: effectif
    definition: The number of observations in a value or category.
  - en: relative frequency
    fr: fréquence
    definition: A category count divided by the total count.
  - en: mean
    fr: moyenne
    definition: For raw data, the sum of all observed values divided by the number of observations.
  - en: circular chart
    fr: diagramme circulaire
    definition: A disk divided into sectors whose angles represent proportions of a whole.
  - en: probability
    fr: probabilité
    definition: A number from $0$ to $1$ that measures how likely an event is.
flashcards:
  - front: How is the mean of raw data calculated?
    back: Add every observed value and divide by the number of observations.
  - front: Which chart is suited to unordered categories?
    back: A bar chart; a circular chart is also suitable when proportions of one whole are emphasized.
  - front: How is a sector angle found in a circular chart?
    back: Relative frequency $\times360^\circ$.
  - front: What are the probabilities of an impossible event and a certain event?
    back: $0$ and $1$, respectively.
generator:
  type: remainder
  seed: 51209
  count: 6
  divisorMin: 4
  divisorMax: 12
  quotientMin: 5
  quotientMax: 20
tieredExercises:
  - id: 5e-data-probability-t1
    tier: 1
    tierTitle: Simple Mean from Raw Data
    curriculumStatus: core
    prompt: "The raw scores are $6,8,7,9,5$. Calculate their mean and check that it is plausible."
    solution: "The sum is $6+8+7+9+5=35$ and there are $5$ scores, so the mean is $35/5=7$. It is plausible because $7$ lies between the minimum $5$ and maximum $9$."
    hints:
      - "Count observations, not different values."
      - "A mean must lie between the smallest and largest observations."
    assessment:
      kind: numeric
      expected: 7
  - id: 5e-data-probability-t2
    tier: 2
    tierTitle: Constructing and Choosing Charts
    curriculumStatus: core
    prompt: >-
      Among $40$ students, $12$ walk, $16$ take the bus, $8$ cycle, and $4$ travel by car. Specify a correct bar chart and a correct circular chart by giving all bar heights and sector angles. Explain which chart better compares counts and which better shows shares of the whole.
    solution: >-
      A bar chart uses the four categories with heights $12,16,8,4$ on a count axis starting at $0$. The sector angles are $12/40\times360^\circ=108^\circ$, $16/40\times360^\circ=144^\circ$, $8/40\times360^\circ=72^\circ$, and $4/40\times360^\circ=36^\circ$; they sum to $360^\circ$. Bars make count comparisons easiest, while the circular chart emphasizes each category's share of all $40$ students.
    hints:
      - "Use equal-width separated bars and a clearly graduated count axis."
      - 'Multiply each relative frequency by $360^\circ$.'
    assessment:
      kind: reasoning
      rubric:
        - "Specifies bar heights $12,16,8,4$ with suitable labels and scale."
        - 'Calculates sector angles $108^\circ,144^\circ,72^\circ,36^\circ$ summing to $360^\circ$.'
        - "Explains the count-comparison and part-to-whole purposes of the two displays."
  - id: 5e-data-probability-t3
    tier: 3
    tierTitle: Official Core Synthesis
    curriculumStatus: core
    prompt: >-
      Temperatures measured from Monday to Friday are $8,11,10,15,14$ degrees Celsius. Calculate the simple mean, specify the five points of a Cartesian line graph, and explain why joining successive points is meaningful. If one recorded day is selected uniformly at random, find the probability that its temperature is above $10$ degrees Celsius.
    solution: >-
      The mean is $(8+11+10+15+14)/5=58/5=11.6$ degrees Celsius. With days numbered $1$ to $5$, plot $(1,8),(2,11),(3,10),(4,15),(5,14)$ on labeled, graduated axes and join successive points because the horizontal variable is ordered time and change between consecutive days is meaningful. Three of five values are above $10$, so the probability is $3/5=0.6$.
    hints:
      - "Use the day on the horizontal axis and temperature on the vertical axis."
      - "Count favorable recorded days out of five equally likely days."
    assessment:
      kind: reasoning
      rubric:
        - "Calculates the raw-data mean $11.6$ correctly."
        - "Gives all five Cartesian points and justifies joining them by the time order."
        - "Obtains probability $3/5=0.6$ from equally likely days."
  - id: 5e-data-probability-t4
    tier: 4
    tierTitle: Olympiad Reverse-Inference Challenge
    curriculumStatus: olympiad
    prompt: >-
      A game produces scores $1,2,3,4$ with unknown positive integer counts $a,b,c,d$. There were $20$ games, the weighted mean score was $2.55$, the probability that a uniformly selected recorded game had score at least $3$ is $1/2$, and score $3$ occurred twice as often as score $1$. Reconstruct the table and prove uniqueness.
    solution: >-
      The probability gives $c+d=10$, hence $a+b=10$. Also $c=2a$, so $b=10-a$ and $d=10-2a$. The weighted total is $20\times2.55=51$, so $a+2b+3c+4d=51$. Substitution gives $a+2(10-a)+3(2a)+4(10-2a)=51$, hence $60-3a=51$ and $a=3$. Thus $(a,b,c,d)=(3,7,6,4)$. These positive integers satisfy all clues. Each clue forced the displayed expressions and the final linear equation has one solution, proving uniqueness.
    hints:
      - "Translate every clue into an equation."
      - "The weighted mean determines the weighted total score."
    assessment:
      kind: reasoning
      rubric:
        - "Forms the equations for total count, probability, count ratio, and weighted mean."
        - "Deduces $(3,7,6,4)$ without unsupported guessing."
        - "Checks every clue and proves the equations force uniqueness."
---
## Raw Data, Counts, and Frequencies

Raw data lists every observation. A frequency table groups repeated values or categories. In French school terminology, an **effectif** is a count and a **fréquence** is the proportion

$$\text{relative frequency}=\frac{\text{category count}}{\text{total count}}.$$

Relative frequencies lie from $0$ to $1$ and sum to $1$, apart from rounding. Percentages sum to $100\%$.

## Simple Mean from Raw Data

For $n$ raw observations,

$$\text{mean}=\frac{\text{sum of all observed values}}{n}.$$

For $5,7,7,9$, the mean is $28/4=7$. Divide by the number of observations, not the number of different values. The mean must lie between the smallest and largest observations, although it need not itself appear in the data.

## Constructing and Choosing Charts

A **bar chart** compares categories or separate values. Use labeled axes, a clear scale, equal-width separated bars, and heights proportional to counts or frequencies. A truncated scale must be announced because it can exaggerate differences.

A **circular chart** displays parts of one whole. For a category,

$$\text{sector angle}=\text{relative frequency}\times360^\circ.$$

Sector angles must total $360^\circ$ apart from rounding. Use a circular chart when part-to-whole proportions matter; use bars when precise category comparison matters.

A **Cartesian line graph** displays ordered change, often over time. Put the independent ordered variable on the horizontal axis, values on the vertical axis, plot coordinate pairs, then join successive points only when the order and change between them are meaningful. Do not join unordered categories such as eye colors.

## Core Probability

A random experiment has possible outcomes; an event is a collection of outcomes. Probability lies from $0$ to $1$. For equally likely outcomes,

$$P(E)=\frac{\text{number of favorable outcomes}}{\text{number of possible outcomes}}.$$

For a fair die, $P(\text{even})=3/6=1/2$. Experimental probability is the observed event count divided by the number of trials. It need not exactly equal a theoretical probability in a finite experiment.

> Counting favorable outcomes works only when the listed outcomes are equally likely. Unequal spinner sectors must be compared by angle or area, not by counting colors.

## Percentage Wording

A frequency or probability cannot be $150\%$: it describes part of a fixed whole and cannot exceed $100\%$. In a comparison, however, “$150\%$ of the reference value” means $1.5$ times the reference, while “increased by $150\%$” means the original plus $1.5$ originals, or $2.5$ times the original. Always state the reference and distinguish “of” from “increase by.”

## Stretch Only: Weighted Mean and Range

The **range**, maximum minus minimum, and the **weighted mean from a frequency table** are placed later or treated as stretch in this lesson. For values $x_i$ with counts $n_i$,

$$\overline{x}=\frac{\sum n_i x_i}{\sum n_i}.$$

These ideas are used in the olympiad reverse-inference problem T4, but T1-T3 assess the official core: raw-data mean, chart construction and choice, and simple probability.
