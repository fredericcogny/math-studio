---
id: 3e-statistics-probability
locale: en
title: Statistics and Probability
strand: Data and Probability
summary: Summarize distributions and build probability from events, complements, frequencies, trees, and systematic counting.
objectives:
  - Calculate a mean, weighted mean, median, and range
  - Read frequency tables, bar charts, and histograms
  - Calculate event, complement, and compound probabilities
prerequisites:
  - Fractions, percentages, and ordering numbers
  - Ratios and simple counting
vocabulary:
  - en: weighted mean
    definition: A mean in which each value is multiplied by its frequency or weight.
  - en: median
    definition: A value that separates an ordered data set into two groups containing at least half the observations each.
  - en: range
    definition: The maximum value minus the minimum value.
  - en: frequency
    definition: The proportion of observations in a value or class.
flashcards:
  - front: How is a weighted mean calculated?
    back: Add each value multiplied by its count, then divide by the total count.
  - front: Must the data be ordered to find the median?
    back: Yes; the middle position has meaning only after ordering.
  - front: How do you find the probability of the complement of event $A$?
    back: Use $P(\overline A)=1-P(A)$.
exercises:
  - id: 3e-statistics-t1
    tierTitle: Direct Application
    prompt: "A fair six-sided die is rolled. Let $A$ be the event 'the result is even.' List $A$ and its complement, explain why the outcomes are equiprobable, and calculate both probabilities. In $120$ experimental rolls, $A$ occurred $57$ times; calculate its observed frequency and compare it with the theoretical probability."
    solution: "$A=\\{2,4,6\\}$ and its complement is $\\{1,3,5\\}$. A fair die makes all six faces equiprobable, so $P(A)=3/6=1/2$ and $P(\\overline A)=3/6=1/2=1-P(A)$. The observed frequency is $57/120=0.475$, close to but not equal to the theoretical probability $0.5$; experimental frequency can fluctuate."
    hints:
      - "The complement contains every outcome not in $A$."
      - "An observed frequency is success count divided by trial count."
    rubric:
      - "Lists $A=\\{2,4,6\\}$ and its complement $\\{1,3,5\\}$."
      - "Uses equiprobability to obtain both theoretical probabilities as $1/2$."
      - "Calculates the observed frequency $57/120=0.475$."
      - "Distinguishes the fluctuating frequency $0.475$ from probability $0.5$."
  - id: 3e-statistics-t2
    tierTitle: Brevet Standard
    prompt: "A survey records travel times of $10$, $20$, $30$, and $40$ minutes with respective counts $3$, $5$, $4$, and $2$. Calculate the mean to the nearest tenth, the median, and the range. State the height of each separated bar in a bar chart of the counts."
    solution: "The total count is $14$ and the weighted sum is $10\\times3+20\\times5+30\\times4+40\\times2=330$, so the mean is $330/14\\approx23.6$ minutes. In the ordered list, positions $7$ and $8$ both equal $20$, so the median is $20$ minutes. The range is $40-10=30$ minutes. The bars above $10,20,30,40$ have heights $3,5,4,2$."
    hints:
      - "Use cumulative counts to locate positions $7$ and $8$."
      - "For this discrete series, use separated bars whose heights are the counts."
    rubric:
      - "Computes the weighted mean as approximately $23.6$ minutes."
      - "Uses the ordered positions to obtain median $20$ minutes and range $30$ minutes."
      - "Gives bar-chart heights $3,5,4,2$ in the correct order."
  - id: 3e-statistics-t3
    tierTitle: Synthesis
    prompt: "A bag contains $3$ red and $2$ blue tokens. Two tokens are drawn without replacement. A player scores $2$ points if the colors match and loses $1$ point if they differ. Calculate the probability of each score and the mean score per game."
    solution: "The probability of matching colors is $P(RR)+P(BB)=(3/5)(2/4)+(2/5)(1/4)=6/20+2/20=2/5$. Thus the probability of different colors is $3/5$. The mean score is the weighted mean $2\\times(2/5)+(-1)\\times(3/5)=1/5=0.2$ point."
    hints:
      - "The second-draw denominator is $4$ because there is no replacement."
      - "Use the probabilities as weights when calculating the mean score."
    rubric:
      - "Builds the without-replacement probabilities correctly."
      - "Finds probabilities $2/5$ for score $2$ and $3/5$ for score $-1$."
      - "Calculates the mean score as $1/5$ point."
  - id: 3e-statistics-t4
    tierTitle: Advanced Challenge
    prompt: "Roll a fair six-sided die independently $n$ times, where $n\\ge1$, and multiply all results. Prove that the probability that the product is divisible by $6$ is $1-(1/2)^n-(2/3)^n+(1/3)^n$. Deduce the exact probability for three rolls."
    solution: "The product is divisible by $6$ exactly when at least one result supplies a factor $2$ and at least one supplies a factor $3$. Let $A$ be the event that no roll is even and $B$ the event that no roll is divisible by $3$. Then $P(A)=(3/6)^n=(1/2)^n$ and $P(B)=(4/6)^n=(2/3)^n$. Event $A\\cap B$ allows only faces $1$ and $5$, so $P(A\\cap B)=(2/6)^n=(1/3)^n$. The desired event is the complement of $A\\cup B$. Inclusion-exclusion gives $1-P(A)-P(B)+P(A\\cap B)$, which is the stated formula. For $n=3$, this is $1-1/8-8/27+1/27=(216-27-64+8)/216=133/216$."
    hints:
      - "A factor $6$ requires both a factor $2$ and a factor $3$, not necessarily from the same roll."
      - "Count the complement: no even result or no multiple of $3$."
      - "Correct the double subtraction by adding the intersection."
    rubric:
      - "Characterizes divisibility by $6$ using factors $2$ and $3$."
      - "Computes both complement probabilities and their intersection for general $n$."
      - "Applies inclusion-exclusion to prove the formula."
      - "Evaluates and simplifies the three-roll probability to $133/216$."
---
# Statistics and Probability

## Measures of center and spread

For values $x_1,\ldots,x_n$, the **mean** is

$$\bar x=\frac{x_1+\cdots+x_n}{n}.$$

If value $x_i$ occurs $c_i$ times, use the **weighted mean**

$$\bar x=\frac{c_1x_1+\cdots+c_px_p}{c_1+\cdots+c_p}.$$

The **median** is found from the ordered data. With an odd count, use the middle value. With an even count, the usual numerical convention is the mean of the two middle values. The **range** is maximum minus minimum; unlike the median, it is very sensitive to one extreme observation.

## Worked statistical example

The values $2,4,4,5,10$ have mean $25/5=5$, median $4$, and range $10-2=8$. These measures answer different questions: the mean balances all values, the median locates the middle, and the range describes total spread.

## Frequencies, bar charts, and histograms

For a total count $N$, the frequency of a category with count $c$ is $c/N$. Frequencies add to $1$, or to $100\%$ when expressed as percentages. A **bar chart** represents distinct values or categories with separated bars. A histogram is not another name for a bar chart.

A histogram represents numerical data grouped into intervals. Its rectangles touch because the scale is continuous. With equal-width classes, heights may be counts or frequencies. With unequal widths, rectangle **area**, not raw height, must represent frequency; the appropriate height is frequency density, frequency divided by class width.

## Events, Complements, and Probability

The sample space lists all possible outcomes. An **event** is a set of outcomes, and its complement $\overline A$ contains exactly the outcomes not in $A$:

$$P(\overline A)=1-P(A).$$

When all outcomes are equiprobable, $P(A)$ is the number of favorable outcomes divided by the total number of outcomes. In repeated experiments, the observed frequency of $A$ is its number of occurrences divided by the number of trials. This frequency tends to approach the theoretical probability but need not equal it in one experiment.

## Compound probability

A probability tree records successive stages. Multiply probabilities along a branch and add probabilities of disjoint successful branches. If sampling is without replacement, the probabilities at the second stage change.

For example, drawing two aces consecutively from a standard $52$-card deck without replacement has probability

$$\frac4{52}\times\frac3{51}=\frac1{221}.$$

In repeated independent trials, probabilities do not change from one stage to the next.

## Choosing a method

- Use a weighted sum for a mean from a frequency table.
- Use cumulative counts for a median.
- Use a tree when the experiment has a small number of successive stages.
- Use a table or systematic counting when all equally likely outcomes can be listed.
- Use the complement when failure is easier to describe than success.

## Common errors

- Dividing a weighted sum by the number of distinct values instead of the total count.
- Finding a median before ordering the data.
- Confusing count with frequency.
- Adding probabilities along a single branch instead of multiplying them.
- Treating draws without replacement as independent.
- Counting overlapping cases twice without an inclusion-exclusion correction.

## Extension: simulation and long-run frequency

A simulation uses random trials to estimate a probability. Its observed frequency fluctuates, but generally stabilizes near the theoretical probability as the number of trials grows. Simulation supports a conjecture; exact counting or a probability argument explains why the value is correct.
