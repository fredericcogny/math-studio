---
id: "1re-conditional-probability"
locale: "en"
title: "Conditional Probability and Independence"
strand: "Probability and Statistics"
summary: "Conditioning on an event with nonzero probability, constructing weighted tree diagrams, and the law of total probability."
objectives:
  - "Calculate the conditional probability P_A(B)"
  - "Construct and use a weighted tree diagram"
  - "Apply the law of total probability"
  - "Test whether two events are independent"
prerequisites:
  - "Basic probability concepts (union, intersection, and complement of an event)"
vocabulary:
  - en: "Conditional probability"
    definition: "The probability that event B occurs given that event A has already occurred, denoted by P_A(B)."
  - en: "Law of total probability"
    definition: "A rule for calculating P(B) by adding the probabilities of the intersections of B with the elements of a partition."
flashcards:
  - front: "What is the definition of the conditional probability P_A(B)?"
    back: "P_A(B) = P(A intersection B) / P(A), where P(A) > 0"
  - front: "When are two events A and B said to be independent?"
    back: "If and only if P(A intersection B) = P(A) * P(B)"
exercises:
  - id: "1re-prob-t1"
    tierTitle: "Direct Application"
    prompt: "Given $P(A)=0.4$ and $P(A\\cap B)=0.12$, calculate $P(B\\mid A)$."
    solution: "$P(B\\mid A)=P(A\\cap B)/P(A)=0.12/0.4=0.3$."
    hints:
      - "Divide the intersection probability by the probability of the conditioning event."
  - id: "1re-prob-t2"
    tierTitle: "Standard Practice"
    prompt: "A factory uses machine $A$ for $60\\%$ of its output and machine $B$ for $40\\%$. Their defect rates are respectively $2\\%$ and $5\\%$. Find the probability that a randomly selected item is defective."
    solution: "Let $D$ denote a defect. By the law of total probability, $P(D)=P(A)P(D\\mid A)+P(B)P(D\\mid B)=0.60\\times0.02+0.40\\times0.05=0.012+0.020=0.032$."
    hints:
      - "Split the event according to which machine produced the item."
      - "Add the probabilities of the two disjoint defective branches."
  - id: "1re-prob-t3"
    tierTitle: "Synthesis"
    prompt: "A disease affects $5\\%$ of a population. A test is positive for $95\\%$ of infected people and for $2\\%$ of uninfected people. Given a positive result, find the probability that the person is infected. Round to three decimal places."
    solution: "Let $I$ be infection and $T$ a positive test. First, $P(T)=0.05\\times0.95+0.95\\times0.02=0.0665$. Bayes' formula then gives $P(I\\mid T)=P(I\\cap T)/P(T)=0.0475/0.0665=95/133\\approx0.7142857$, hence $0.714$ to three decimal places."
    hints:
      - "Use total probability to find the overall positive-test probability."
      - "Then divide the infected-and-positive branch by the total positive probability."
  - id: "1re-prob-t4"
    tierTitle: "Advanced Challenge"
    prompt: "Events $A,B,C$ satisfy $P(A)=P(B)=P(C)=1/2$ and are pairwise independent. Set $t=P(A\\cap B\\cap C)$. Prove that the probabilities of the eight atoms determined by $A,B,C$ are alternately $t$ and $1/4-t$, deduce the exact possible range of $t$, and determine precisely when $A,B,C$ are mutually independent. Give a concrete example with $t=1/4$."
    solution: "Pairwise independence gives $P(A\\cap B)=P(A\\cap C)=P(B\\cap C)=1/4$. Hence $P(A\\cap B\\cap C^c)=1/4-t$, and similarly for the other two atoms belonging to exactly two events. Subtracting these atoms from $P(A)=1/2$ gives $P(A\\cap B^c\\cap C^c)=t$, and cyclically the atoms belonging to exactly one event also have probability $t$. Finally the atom outside all three events has probability $1/4-t$. Nonnegativity is equivalent to $0\\le t\\le1/4$, and every value in that interval defines a valid probability distribution on the eight atoms. Since pairwise independence is already known, mutual independence holds exactly when $P(A\\cap B\\cap C)=P(A)P(B)P(C)=1/8$. For $t=1/4$, toss two fair coins and take $A=$ 'first is heads', $B=$ 'second is heads', and $C=$ 'the two results agree'; these events are pairwise independent and $P(A\\cap B\\cap C)=1/4$."
    hints:
      - "Start with $P(A\\cap B)=1/4$ and subtract the triple intersection."
      - "Use $P(A)=1/2$ to recover atoms that belong to only one event."
      - "Mutual independence imposes one additional product condition on the triple intersection."
    rubric:
      - "Derives all eight atom probabilities as four copies each of $t$ and $1/4-t$."
      - "Uses nonnegativity and sufficiency to prove the exact range $0\\le t\\le1/4$."
      - "Proves mutual independence holds exactly at $t=1/8$."
      - "Provides and verifies a valid pairwise-independent example with $t=1/4$."
---

# Conditional Probability and Independence

**Conditioning** makes it possible to reevaluate the probability that an event will occur when some information is already known.

## 1. Definition and Bayes' Formula

Let $A$ be an event with nonzero probability ($P(A) > 0$). The **conditional probability** of $B$ given $A$ is:

$$P_A(B) = \frac{P(A \cap B)}{P(A)}$$

This gives the multiplication rule: $P(A \cap B) = P(A) \times P_A(B)$.

## 2. Law of Total Probability

If the events $A_1, A_2, \dots, A_n$ form a **partition** of the sample space $\Omega$ (mutually exclusive events whose union is $\Omega$), then for any event $B$:

$$P(B) = \sum_{i=1}^n P(B \cap A_i) = \sum_{i=1}^n P(A_i) \times P_{A_i}(B)$$

In particular, for an event $A$ and its complement $\bar{A}$:

$$P(B) = P(A) P_A(B) + P(\bar{A}) P_{\bar{A}}(B)$$

## 3. Independence of Two Events

Two events $A$ and $B$ are **independent** if and only if:

$$P(A \cap B) = P(A) \times P(B)$$

This is equivalent to $P_A(B) = P(B)$ (if $P(A) > 0$).
