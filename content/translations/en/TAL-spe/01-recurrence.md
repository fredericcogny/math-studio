---
id: "tal-recurrence"
locale: "en"
title: "Proof by Induction"
strand: "Analysis and Sequences"
summary: "Learn the rigorous logical structure of proof by induction on the set of natural numbers."
objectives:
  - "Write the three steps: base case, inductive step, and conclusion"
  - "Prove equalities and inequalities for every n >= n0"
  - "Avoid unrigorous analogy and prove that the property is passed from one integer to the next"
prerequisites:
  - "Numerical sequences and generalized notation"
  - "Algebraic manipulation and factoring"
vocabulary:
  - en: "Proof by induction"
    definition: "A proof principle for the natural numbers based on a starting step and an inductive step."
  - en: "Base step"
    definition: "Verification that the property P(n) is true at the initial index n0."
flashcards:
  - front: "What are the three fundamental steps of a proof by induction?"
    back: "1. Base case (index n0), 2. Inductive step (if P(k) is true, then P(k+1) is true), 3. Conclusion."
  - front: "Why is the inductive step alone insufficient?"
    back: "Without a base case, the chain has no starting point (a domino effect without the first domino falling)."
exercises:
  - id: "tal-rec-t1"
    tierTitle: "Direct Application"
    prompt: "State, in order, the three required parts of a proof by induction starting at $n_0$."
    solution: "First verify the base case $P(n_0)$. Next prove the inductive step: for an arbitrary $k\\ge n_0$, assume $P(k)$ and derive $P(k+1)$. Finally invoke the induction principle to conclude that $P(n)$ holds for every $n\\ge n_0$."
    hints:
      - "Think of the first domino, the transmission rule, and the final logical conclusion."
  - id: "tal-rec-t2"
    tierTitle: "Standard Practice"
    prompt: "Prove by induction that $1+3+5+\\cdots+(2n-1)=n^2$ for every integer $n\\ge1$."
    solution: "Let $P(n)$ be the stated identity. For $n=1$, both sides equal $1$. Assume $P(k)$: the sum of the first $k$ odd integers is $k^2$. Adding the next odd integer gives $k^2+[2(k+1)-1]=k^2+2k+1=(k+1)^2$, which is $P(k+1)$. Therefore the identity holds for every $n\\ge1$ by induction."
    hints:
      - "The odd number added when passing from index $k$ to index $k+1$ is $2k+1$."
      - "Write the base case, hypothesis, transition, and conclusion explicitly."
    rubric:
      - "Verifies the base case at $n=1$."
      - "States the induction hypothesis for an arbitrary $k\\ge1$."
      - "Adds $2k+1$ and simplifies to $(k+1)^2$."
      - "Concludes with the induction principle."
  - id: "tal-rec-t3"
    tierTitle: "Synthesis"
    prompt: "Let $u_0=0$ and $u_{n+1}=\\sqrt{2+u_n}$. Use induction to prove simultaneously that $0\\le u_n<2$ for every $n$, and that $(u_n)$ is strictly increasing. Deduce that it converges and identify its limit."
    solution: "The bounds hold at $n=0$. If $0\\le u_n<2$, then $0<u_{n+1}=\\sqrt{2+u_n}<2$, so the bounds are preserved by the recurrence. Also $u_1=\\sqrt2>u_0$. If $u_n>u_{n-1}$, strict increase of the square-root function gives $u_{n+1}=\\sqrt{2+u_n}>\\sqrt{2+u_{n-1}}=u_n$. Thus the sequence is strictly increasing and bounded above by $2$, so it converges to some $L\\in[0,2]$. Passing to the limit gives $L=\\sqrt{2+L}$, hence $(L-2)(L+1)=0$; therefore $L=2$."
    hints:
      - "For the upper bound, compare $2+u_n$ with $4$."
      - "For monotonicity, use that $x\\mapsto\\sqrt{2+x}$ is strictly increasing."
      - "Only write the fixed-point equation after convergence has been proved."
    rubric:
      - "Proves $0\\le u_n<2$ by induction, including the base case and inductive step."
      - "Proves strict increase using a base comparison and the recurrence."
      - "Invokes monotone bounded convergence before passing to the limit."
      - "Solves the fixed-point equation and selects $L=2$."
  - id: "tal-rec-t4"
    tierTitle: "Advanced Challenge"
    prompt: "Let $F_2=1$, $F_3=2$, and $F_{n+1}=F_n+F_{n-1}$ for $n\\ge3$. Prove by strong induction that every positive integer can be written as a sum of distinct, pairwise nonconsecutive terms from $F_2,F_3,F_4,\\ldots$ (existence part of Zeckendorf's theorem)."
    solution: "Use strong induction on the integer $N$. The claim is immediate for $N=1=F_2$ and $N=2=F_3$. Assume it holds for every positive integer below $N$. Choose the largest $F_k\\le N$ and put $r=N-F_k$. If $r=0$, we are done. Otherwise $r<N$, so the strong induction hypothesis represents $r$ as a sum of distinct nonconsecutive Fibonacci terms. Maximality of $F_k$ gives $N<F_{k+1}=F_k+F_{k-1}$, hence $r<F_{k-1}$. Therefore the representation of $r$ can use no term as large as $F_{k-1}$; all its terms have index at most $k-2$. Appending $F_k$ preserves both distinctness and nonconsecutiveness, and represents $N$. The strong induction is complete."
    hints:
      - "Choose the largest Fibonacci term not exceeding the target integer."
      - "Show that the remainder is strictly less than the preceding Fibonacci term."
      - "Strong induction is needed because the remainder is not necessarily $N-1$."
    rubric:
      - "Sets up strong induction with valid initial cases."
      - "Chooses a maximal $F_k\\le N$ and applies the hypothesis to the smaller remainder."
      - "Uses $N<F_{k+1}$ to prove $N-F_k<F_{k-1}$."
      - "Correctly explains why appending $F_k$ preserves distinct, nonconsecutive indices."
---

# Proof by Induction

**Proof by induction** is a fundamental tool in analysis and algebra for proving that a property $P(n)$ is true for every natural number $n \ge n_0$.

## 1. The Domino-Effect Principle

Imagine an infinite row of dominoes numbered $0, 1, 2, \dots, n$. To ensure that **all** the dominoes will fall:
1. The first domino must be knocked over (base case).
2. One must ensure that if the $k$th domino falls, it necessarily knocks over the $(k+1)$th domino (inductive step).

## 2. Rigorous Structure of the Proof

To prove that a property $P(n)$ is true for every $n \ge n_0$:

### Step 1: Base Case
Verify that the property $P(n_0)$ is **true** at the initial index $n_0$.

### Step 2: Inductive Step
Let $k \ge n_0$ be a fixed integer. Assume that the property $P(k)$ is true (the **induction hypothesis**).
Then prove that the property $P(k+1)$ is also true.

### Step 3: Conclusion
The property $P(n_0)$ is true and the inductive implication has been proved. By the principle of mathematical induction, $P(n)$ is true for every natural number $n \ge n_0$.

## 3. Example: Sum of the First Positive Integers

We prove by induction that for every $n \ge 1$:

$$\sum_{i=1}^n i = 1 + 2 + \dots + n = \frac{n(n+1)}{2}$$

* **Base case ($n=1$)**: $1 = \frac{1(1+1)}{2} = 1$. True.
* **Inductive step**: Assume that $1 + \dots + k = \frac{k(k+1)}{2}$. Then:
  $$1 + \dots + k + (k+1) = \frac{k(k+1)}{2} + (k+1) = (k+1)\left(\frac{k}{2} + 1\right) = \frac{(k+1)(k+2)}{2}$$
  This proves $P(k+1)$.
