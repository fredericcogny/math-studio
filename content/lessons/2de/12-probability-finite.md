---
id: 2de-probability-finite
order: 12
title: Probability on a finite set
level: 2de
strand: Probability
difficulty: core
estimatedMinutes: 25
summary: Model a random experiment by a probability distribution on a finite set, then compute with unions, intersections, and complements.
objectives:
  - Build the probability distribution of a finite random experiment
  - Use the formula for the probability of a union and the complement rule
  - Read probabilities from a two-way table or a tree
prerequisites:
  - Frequencies and percentages
  - Elementary probability and equally likely outcomes
vocabulary:
  - en: sample space
    fr: univers
    definition: The finite set of all possible outcomes of a random experiment.
  - en: event
    fr: événement
    definition: A subset of the sample space, whose probability is the sum of the probabilities of its outcomes.
  - en: complementary event
    fr: événement contraire
    definition: The event that occurs exactly when a given event does not, and whose probability is one minus that of the event.
flashcards:
  - front: What defines a probability distribution on a finite set?
    back: Each outcome gets a number in $[0,\;1]$ and the sum of all these numbers equals $1$.
  - front: What is the probability of an event under equally likely outcomes?
    back: $P(A)=\dfrac{\text{number of favorable outcomes}}{\text{total number of outcomes}}$, valid only when every outcome has the same probability.
  - front: What is the formula for the probability of a union?
    back: $P(A\cup B)=P(A)+P(B)-P(A\cap B)$. The intersection is subtracted because it was counted twice.
  - front: When is it easier to use the complement?
    back: For events described by "at least one", since the complement is the single case "none", which is usually quicker to count.
generator:
  type: remainder
  seed: 21201
  count: 6
  divisorMin: 2
  divisorMax: 9
  quotientMin: 1
  quotientMax: 12
tieredExercises:
  - id: '2de-proba-t1'
    tier: 1
    tierTitle: 'Direct Application'
    curriculumStatus: 'core'
    prompt: 'A fair six-sided die is rolled once. Give the probability of obtaining an even number, as a decimal.'
    solution: 'The sample space has six equally likely outcomes and three of them are even, namely $2$, $4$ and $6$. So the probability is $\dfrac{3}{6}=\dfrac{1}{2}=0.5$.'
    hints:
      - 'Count the favorable outcomes and divide by the total number of outcomes.'
    assessment:
      kind: 'numeric'
      expected: 0.5
  - id: '2de-proba-t2'
    tier: 2
    tierTitle: 'Standard Practice'
    curriculumStatus: 'core'
    prompt: 'Two events satisfy $P(A)=0.4$, $P(B)=0.5$ and $P(A\cap B)=0.2$. Compute $P(A\cup B)$.'
    solution: 'The union formula gives $P(A\cup B)=P(A)+P(B)-P(A\cap B)=0.4+0.5-0.2=0.7$.'
    hints:
      - 'Add the two probabilities, then remove the part counted twice.'
      - 'A probability can never exceed $1$, which is a useful check.'
    assessment:
      kind: 'numeric'
      expected: 0.7
  - id: '2de-proba-t3'
    tier: 3
    tierTitle: 'Official Core Synthesis'
    curriculumStatus: 'core'
    prompt: 'Among $200$ students, $120$ study Spanish, $90$ study German, and $40$ study both. One student is chosen at random, with every student equally likely. Compute the probability that the student studies at least one of the two languages, the probability that the student studies neither, and the probability that the student studies exactly one of them.'
    solution: 'Let $S$ be the event that the student studies Spanish and $G$ that the student studies German. Then $P(S)=\dfrac{120}{200}=0.6$, $P(G)=\dfrac{90}{200}=0.45$ and $P(S\cap G)=\dfrac{40}{200}=0.2$. The union formula gives $P(S\cup G)=0.6+0.45-0.2=0.85$. The event "neither language" is the complement of the union, so its probability is $1-0.85=0.15$. Finally, exactly one language means the union without the intersection, so its probability is $0.85-0.2=0.65$. A two-way table confirms the counts: $80$ students study only Spanish, $50$ only German, $40$ both and $30$ neither, and these four numbers add up to $200$.'
    hints:
      - 'Translate every sentence into an event before computing anything.'
      - 'Build the two-way table with four cells and check that the four counts add up to the total.'
    assessment:
      kind: 'reasoning'
      rubric:
        - 'Names the events and gives the three basic probabilities from the counts.'
        - 'Applies the union formula and the complement rule correctly.'
        - 'Obtains the probability of exactly one language and verifies the answer with a two-way table.'
  - id: '2de-proba-t4'
    tier: 4
    tierTitle: 'Advanced Challenge'
    curriculumStatus: 'olympiad'
    prompt: 'Prove that for any three events, $P(A\cup B\cup C)=P(A)+P(B)+P(C)-P(A\cap B)-P(A\cap C)-P(B\cap C)+P(A\cap B\cap C)$. Then use it to compute the probability that an integer chosen at random from $1$ to $30$, with every integer equally likely, is a multiple of $2$, of $3$, or of $5$.'
    solution: 'Apply the two-event formula to $A\cup B$ and $C$: $P((A\cup B)\cup C)=P(A\cup B)+P(C)-P((A\cup B)\cap C)$. Now $P(A\cup B)=P(A)+P(B)-P(A\cap B)$, and distributing the intersection gives $(A\cup B)\cap C=(A\cap C)\cup(B\cap C)$, so a second use of the two-event formula gives $P((A\cup B)\cap C)=P(A\cap C)+P(B\cap C)-P(A\cap B\cap C)$, since $(A\cap C)\cap(B\cap C)=A\cap B\cap C$. Substituting yields exactly the stated identity. For the application, among the integers from $1$ to $30$ there are $15$ multiples of $2$, $10$ multiples of $3$, $6$ multiples of $5$, then $5$ multiples of $6$, $3$ multiples of $10$, $2$ multiples of $15$ and $1$ multiple of $30$. The identity gives a count of $15+10+6-5-3-2+1=22$ favorable integers, so the probability is $\dfrac{22}{30}=\dfrac{11}{15}\approx 0.733$.'
    hints:
      - 'Group two of the events together and apply the two-event formula twice.'
      - 'The intersection of two divisibility events is divisibility by the product when the divisors share no factor.'
    assessment:
      kind: 'reasoning'
      rubric:
        - 'Derives the three-event formula by applying the two-event formula twice, with the distributivity step justified.'
        - 'Counts the multiples of each divisor and of each product correctly.'
        - 'Concludes with the fraction eleven fifteenths.'
---
## Modeling a random experiment

A random experiment has a finite **sample space**, the set of its possible outcomes. Giving each outcome a number is a **probability distribution** as soon as two conditions hold:

- every number lies in $[0,\;1]$;
- the numbers add up to $1$.

An **event** is a subset of the sample space, and its probability is the sum of the probabilities of the outcomes it contains. So $P(\varnothing)=0$ and $P(\Omega)=1$.

## Equally likely outcomes

When every outcome has the same probability, counting replaces computing:

$$P(A)=\frac{\text{number of favorable outcomes}}{\text{total number of outcomes}}.$$

This formula is only valid under that assumption. A loaded die, or a bag with unequal numbers of tokens per color, needs an explicit distribution instead.

Frequencies observed over many repetitions get close to the probabilities, and that is exactly what a simulation illustrates.

## Combining events

| Words | Notation |
| --- | --- |
| $A$ and $B$ | $A\cap B$ |
| $A$ or $B$ | $A\cup B$ |
| not $A$ | $\bar{A}$ |

Three rules cover everything met in Seconde:

$$P(\bar{A})=1-P(A),\qquad P(A\cup B)=P(A)+P(B)-P(A\cap B),$$

and, when $A$ and $B$ cannot occur together, that is when $A\cap B=\varnothing$,

$$P(A\cup B)=P(A)+P(B).$$

The subtraction in the union formula exists because the outcomes of the intersection would otherwise be counted twice.

The complement rule is the fastest route for any event phrased as **at least one**, since its complement is the single case **none**.

## Tables and trees

A **two-way table** organizes two characteristics into four cells whose counts add up to the total; every probability is then a ratio read from the table. A **tree** follows successive stages, with the probabilities of the branches leaving a node adding up to $1$. Choosing the representation before computing is usually what makes an exercise short.

### Stretch thought

Two events satisfy $P(A)=0.7$ and $P(B)=0.6$. Determine the smallest and the largest possible values of $P(A\cap B)$, and describe a situation reaching each bound.
