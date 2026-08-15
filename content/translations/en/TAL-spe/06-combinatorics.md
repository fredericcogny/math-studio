---
id: "tal-combinatorics"
locale: "en"
title: "Combinatorics & Counting"
strand: "Probability & Combinatorics"
summary: "The addition and multiplication principles, p-tuples, factorials, ordered selections, combinations, and Pascal's triangle."
objectives:
  - "Count finite sets using p-tuples (n^p) and factorials (n!)"
  - "Calculate binomial coefficients n choose k"
  - "Use the binomial theorem and the symmetry of Pascal's triangle"
prerequisites:
  - "Conditional probability and sets"
vocabulary:
  - en: "Factorial"
    definition: "The product of the positive integers less than or equal to n, denoted n! = n * (n-1) * ... * 1, with 0! = 1."
  - en: "Combination"
    definition: "An unordered subset of k elements chosen from n elements, denoted (n choose k)."
flashcards:
  - front: "What is the general formula for the combination (n choose k)?"
    back: "(n choose k) = n! / (k! * (n - k)!)"
  - front: "What is the value of the sum of the combinations sum_{k=0}^n (n choose k)?"
    back: "2^n (the cardinality of the power set of a set with n elements)"
exercises:
  - id: "tal-comb-t1"
    tierTitle: "Direct Application"
    prompt: "Compute $\\binom{8}{3}$."
    solution: "$\\binom{8}{3}=\\frac{8\\cdot7\\cdot6}{3\\cdot2\\cdot1}=56$."
    hints:
      - "Use $\\binom nk=\\frac{n!}{k!(n-k)!}$."
  - id: "tal-comb-t2"
    tierTitle: "Standard Practice"
    prompt: "A five-person committee is chosen from 8 women and 6 men. How many committees contain exactly 3 women and at least one of two designated men?"
    solution: "Choose the 3 women in $\\binom83=56$ ways. The 2 men may be any pair except a pair chosen entirely from the 4 non-designated men, so there are $\\binom62-\\binom42=15-6=9$ choices. The total is $56\\cdot9=504$."
    hints:
      - "Choose the women and men independently."
      - "For the men, subtract pairs containing neither designated man."
  - id: "tal-comb-t3"
    tierTitle: "Synthesis"
    prompt: "Find the coefficient of $x^5$ in $(1+x)^4(1+x)^6$."
    solution: "Multiplying the two binomial expansions, the coefficient is $\\sum_{k=0}^{4}\\binom4k\\binom6{5-k}=6+60+120+60+6=252$. Since $(1+x)^4(1+x)^6=(1+x)^{10}$, the same coefficient is $\\binom{10}{5}=252$."
    hints:
      - "Terms $x^k$ and $x^{5-k}$ combine to produce $x^5$."
      - "Also use $(1+x)^4(1+x)^6=(1+x)^{10}$."
  - id: "tal-comb-t4"
    tierTitle: "Advanced Challenge"
    prompt: "For integers $r,s,n\\geq0$, prove Vandermonde's identity $\\sum_k\\binom rk\\binom s{n-k}=\\binom{r+s}{n}$, with the convention that out-of-range binomial coefficients are zero. Give both a counting proof and a proof using generating polynomials."
    solution: "For the counting proof, split a set of $r+s$ elements into groups of sizes $r$ and $s$. An $n$-element subset contains $k$ elements from the first group and $n-k$ from the second, giving $\\binom rk\\binom s{n-k}$ choices for each $k$; summing counts every $n$-subset exactly once, so the sum is $\\binom{r+s}{n}$. Algebraically, $(1+x)^r(1+x)^s=(1+x)^{r+s}$. The coefficient of $x^n$ on the left is the convolution sum, while on the right it is $\\binom{r+s}{n}$."
    hints:
      - "Partition an $(r+s)$-element set into two groups."
      - "Compare coefficients of $x^n$ in two equal polynomials."
    rubric:
      - "The counting proof partitions the selected $n$ elements by the number chosen from the first group."
      - "The polynomial proof correctly identifies the coefficient convolution in $(1+x)^r(1+x)^s$."
      - "Handles the full index range through the stated zero convention."
---

# Combinatorics & Counting

**Counting** consists of finding the number of elements or configurations in a finite set without listing them one by one.

## 1. Fundamental Principles

* **Addition principle**: If a set is the disjoint union of $A$ and $B$, then $\text{Card}(A \cup B) = \text{Card}(A) + \text{Card}(B)$.
* **Multiplication principle**: A choice consisting of $k$ independent stages offering $n_1, n_2, \dots, n_k$ possibilities, respectively, has $n_1 \times n_2 \times \dots \times n_k$ possible outcomes in total.

## 2. p-Tuples, Permutations, and Ordered Selections

* **$p$-tuple from a set with $n$ elements** (repetition and order): $n^p$
* **Permutations of a set with $n$ elements** (order without repetition):
  $$n! = n \times (n-1) \times \dots \times 1$$
* **Ordered selections of $p$ elements chosen from $n$** (order without repetition):
  $$A_n^p = \frac{n!}{(n-p)!}$$

## 3. Combinations & Pascal's Triangle

A **combination** of $k$ elements chosen from $n$ is an unordered subset of $k$ elements. The number of such combinations is:

$$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$

### Notable Properties
* Symmetry: $\binom{n}{k} = \binom{n}{n-k}$
* Pascal's identity: $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$
* Binomial theorem: $(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^k b^{n-k}$
