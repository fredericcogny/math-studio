---
id: 2de-statistics-indicators
locale: en
title: Statistical Indicators, Quartiles and Standard Deviation
strand: Statistics
summary: Summarize a series with indicators of position and of dispersion, and choose between the mean-deviation pair and the median-quartile pair.
objectives:
  - Compute a mean, a median, and the quartiles of a series
  - Compute a range, an interquartile range, and a standard deviation
  - Choose the appropriate pair of indicators and justify the choice
prerequisites:
  - Mean, median, and range
  - Frequencies and percentages
vocabulary:
  - en: quartile
    definition: A value of the series such that at least a quarter, or three quarters, of the data are less than or equal to it.
  - en: interquartile range
    definition: The difference between the third and the first quartile, which measures the spread of the middle half of the data.
  - en: standard deviation
    definition: The square root of the mean of the squared deviations from the mean, which measures dispersion around the mean.
flashcards:
  - front: How is the first quartile found for $n$ values in increasing order?
    back: Compute $\dfrac{n}{4}$; if it is not an integer, round up, and take the value at that rank. If it is an integer, take the value at that rank.
  - front: Which pair of indicators resists outliers?
    back: Median and interquartile range. The mean and the standard deviation are both pulled by an extreme value.
  - front: What does a standard deviation of $0$ mean?
    back: Every value of the series equals the mean, so the series is constant.
  - front: Does the mean have to be a value of the series?
    back: No. The mean of $2$ and $3$ is $2.5$, which is not in the series. The same holds for the median of an even-sized series.
exercises:
  - id: 2de-stats-t1
    tierTitle: Direct Application
    prompt: Give the median of the series $12$, $7$, $15$, $9$, $21$.
    solution: In increasing order the series is $7$, $9$, $12$, $15$, $21$. There are five values, so the median is the third one, that is $12$.
    hints:
      - Sort the values before reading any position indicator.
  - id: 2de-stats-t2
    tierTitle: Standard Practice
    prompt: A series of ten values, already in increasing order, is $3$, $5$, $5$, $8$, $9$, $12$, $14$, $15$, $18$, $20$. Compute its interquartile range.
    solution: Here $n=10$, so $\dfrac{n}{4}=2.5$, which rounds up to rank $3$, and the first quartile is $Q_{1}=5$. Also $\dfrac{3n}{4}=7.5$, which rounds up to rank $8$, and the third quartile is $Q_{3}=15$. The interquartile range is $Q_{3}-Q_{1}=15-5=10$.
    hints:
      - Compute the ranks first, then read the values at those ranks.
      - A non-integer rank is always rounded up.
  - id: 2de-stats-t3
    tierTitle: Official Core Synthesis
    prompt: Two machines fill bottles. Machine A gives the volumes $49$, $50$, $50$, $50$, $51$ centiliters, and machine B gives $45$, $48$, $50$, $52$, $55$ centiliters. Compute the mean and the standard deviation of each series, then say which machine is more reliable and explain why the mean alone cannot answer the question.
    solution: >-
      For machine A the sum is $49+50+50+50+51=250$, so the mean is $50$. The deviations from the mean are $-1$, $0$, $0$, $0$, $1$, whose squares sum to $2$; the variance is $\dfrac{2}{5}=0.4$ and the standard deviation is $\sqrt{0.4}\approx 0.63$. For machine B the sum is $45+48+50+52+55=250$, so the mean is also $50$. The deviations are $-5$, $-2$, $0$, $2$, $5$, whose squares sum to $25+4+0+4+25=58$; the variance is $\dfrac{58}{5}=11.6$ and the standard deviation is $\sqrt{11.6}\approx 3.41$. The two means are equal, so the mean cannot distinguish the machines, because it is an indicator of position and not of dispersion. The standard deviation of A is much smaller, so its volumes stay closer to the target and machine A is more reliable.
    hints:
      - Compute both means first and notice that they are equal.
      - Dispersion is measured by the deviations from the mean, not by the mean itself.
    rubric:
      - Computes both means correctly and observes that they coincide.
      - Computes both standard deviations from the squared deviations.
      - Concludes that machine A is more reliable and explains the difference between position and dispersion.
  - id: 2de-stats-t4
    tierTitle: Advanced Challenge
    prompt: A series of $n$ values has mean $m$ and standard deviation $\sigma>0$. One extra value equal to $m$ is added to the series. Prove that the mean is unchanged and that the new standard deviation is strictly smaller than $\sigma$. Determine the exact factor by which the variance is multiplied.
    solution: >-
      Write the values $x_{1},\dots,x_{n}$, so that $\sum_{i=1}^{n}x_{i}=nm$ and the variance is $V=\dfrac{1}{n}\sum_{i=1}^{n}(x_{i}-m)^{2}=\sigma^{2}$. After adding the value $m$, the series has $n+1$ values and their sum is $nm+m=(n+1)m$, so the new mean is $\dfrac{(n+1)m}{n+1}=m$ and the mean is unchanged. Because the mean has not moved, the deviations of the original values are unchanged, and the new value contributes the deviation $m-m=0$. Hence the new variance is $V'=\dfrac{1}{n+1}\left(\sum_{i=1}^{n}(x_{i}-m)^{2}+0\right)=\dfrac{nV}{n+1}$. The variance is therefore multiplied by $\dfrac{n}{n+1}$, a factor strictly between $0$ and $1$. Since $V=\sigma^{2}>0$, we get $V'<V$, and taking square roots, which preserves order on nonnegative numbers, gives the new standard deviation $\sigma'=\sigma\sqrt{\dfrac{n}{n+1}}<\sigma$.
    hints:
      - Show first that the mean does not move, which keeps every earlier deviation valid.
      - Only the denominator of the variance changes, since the added squared deviation is zero.
    rubric:
      - Proves that the mean is unchanged by computing the new sum.
      - Explains that the deviations are unchanged and that the added squared deviation is zero.
      - Identifies the factor n over n plus one and concludes that the standard deviation strictly decreases.
---
## Two Families of Indicators

A series is summarized by a **position** indicator, which says where the data sit, and a **dispersion** indicator, which says how spread out they are. One without the other is misleading: two series can share a mean and behave completely differently.

The indicators come in matched pairs.

| Position | Dispersion | Behavior |
| --- | --- | --- |
| mean | standard deviation | uses every value, sensitive to outliers |
| median | interquartile range | uses ranks, resistant to outliers |

## Mean, Median, Quartiles

The **mean** of $x_{1},\dots,x_{n}$ is $\bar{x}=\dfrac{x_{1}+\dots+x_{n}}{n}$. With frequencies, it becomes a weighted mean.

The **median** splits a sorted series into two halves of equal size. The **quartiles** cut it into quarters. For $n$ values in increasing order:

- $Q_{1}$ is the value whose rank is $\dfrac{n}{4}$, rounded up if that is not an integer;
- $Q_{3}$ is the value whose rank is $\dfrac{3n}{4}$, rounded up in the same way.

Sorting first is not optional. Every position indicator is defined on the ordered series.

## Range and Interquartile Range

The **range** is the largest value minus the smallest. It is easy to compute but depends only on the two extremes, so a single unusual value changes it completely.

The **interquartile range** $Q_{3}-Q_{1}$ measures the spread of the middle half of the data, which makes it robust. Together with the minimum, the median and the maximum, it produces the five-number summary drawn as a box plot.

## Standard Deviation

The **variance** is the mean of the squared deviations from the mean, and the **standard deviation** is its square root:

$$V=\frac{1}{n}\sum_{i=1}^{n}(x_{i}-\bar{x})^{2},\qquad \sigma=\sqrt{V}.$$

Squaring makes every deviation positive and gives more weight to the large ones; the square root brings the result back into the unit of the data. A standard deviation of $0$ means the series is constant, and a large standard deviation means values far from the mean.

## Sampling

Two samples drawn from the same population rarely give the same frequency. This **sampling fluctuation** decreases as the size of the sample grows, which is why a simulation repeated many times gives a stable picture while a single small sample does not.

### Stretch Thought

Can adding one value to a series leave the mean unchanged while increasing the standard deviation? Find such an example, or prove that it is impossible.
