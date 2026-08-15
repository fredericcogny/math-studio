---
id: "tal-combinatorics"
order: 6
title: "Combinatoire & Dénombrement"
level: "TAL-spe"
strand: "Probabilités & Combinatoire"
difficulty: "core"
estimatedMinutes: 35
summary: "Principe additif et multiplicatif, p-listes, factorielles, arrangements et combinaisons avec le triangle de Pascal."
objectives:
  - "Dénombrer des ensembles finis à l'aide de p-listes (n^p) et de factorielles (n!)"
  - "Calculer des combinaisons binomiales n choose k"
  - "Utiliser la formule du binôme de Newton et la symétrie du triangle de Pascal"
prerequisites:
  - "Probabilités conditionnelles et ensembles"
vocabulary:
  - en: "Factorial"
    fr: "Factorielle"
    definition: "Produit des entiers strictement positifs inférieurs ou égaux à n, noté n! = n * (n-1) * ... * 1 avec 0! = 1."
  - en: "Combination"
    fr: "Combinaison"
    definition: "Sous-ensemble non ordonné de k éléments choisis parmi n éléments, noté (n choose k)."
flashcards:
  - front: "Quelle est la formule générale de la combinaison (n choose k) ?"
    back: "(n choose k) = n! / (k! * (n - k)!)"
  - front: "Que vaut la somme des combinaisons sum_{k=0}^n (n choose k) ?"
    back: "2^n (cardinal de l'ensemble des parties d'un ensemble à n éléments)"
generator:
  type: "signed-arithmetic"
  seed: 206
  count: 4
  min: 1
  max: 6
tieredExercises:
  - id: "tal-comb-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Compute $\\binom{8}{3}$."
    solution: "$\\binom{8}{3}=\\frac{8\\cdot7\\cdot6}{3\\cdot2\\cdot1}=56$."
    hints:
      - "Use $\\binom nk=\\frac{n!}{k!(n-k)!}$."
    assessment:
      kind: "numeric"
      expected: 56
  - id: "tal-comb-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "A five-person committee is chosen from 8 women and 6 men. How many committees contain exactly 3 women and at least one of two designated men?"
    solution: "Choose the 3 women in $\\binom83=56$ ways. The 2 men may be any pair except a pair chosen entirely from the 4 non-designated men, so there are $\\binom62-\\binom42=15-6=9$ choices. The total is $56\\cdot9=504$."
    hints:
      - "Choose the women and men independently."
      - "For the men, subtract pairs containing neither designated man."
    assessment:
      kind: "numeric"
      expected: 504
  - id: "tal-comb-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "stretch"
    prompt: "Find the coefficient of $x^5$ in $(1+x)^4(1+x)^6$."
    solution: "Multiplying the two Newton expansions, the coefficient is $\\sum_{k=0}^{4}\\binom4k\\binom6{5-k}=6+60+120+60+6=252$. Since $(1+x)^4(1+x)^6=(1+x)^{10}$, the same coefficient is $\\binom{10}{5}=252$."
    hints:
      - "Terms $x^k$ and $x^{5-k}$ combine to produce $x^5$."
      - "Also use $(1+x)^4(1+x)^6=(1+x)^{10}$."
    assessment:
      kind: "numeric"
      expected: 252
  - id: "tal-comb-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "cpge"
    prompt: "For integers $r,s,n\\geq0$, prove Vandermonde's identity $\\sum_k\\binom rk\\binom s{n-k}=\\binom{r+s}{n}$, with the convention that out-of-range binomial coefficients are zero. Give both a counting proof and a proof using generating polynomials."
    solution: "For the counting proof, split a set of $r+s$ elements into groups of sizes $r$ and $s$. An $n$-element subset contains $k$ elements from the first group and $n-k$ from the second, giving $\\binom rk\\binom s{n-k}$ choices for each $k$; summing counts every $n$-subset exactly once, so the sum is $\\binom{r+s}{n}$. Algebraically, $(1+x)^r(1+x)^s=(1+x)^{r+s}$. The coefficient of $x^n$ on the left is the convolution sum, while on the right it is $\\binom{r+s}{n}$."
    hints:
      - "Partition an $(r+s)$-element set into two groups."
      - "Compare coefficients of $x^n$ in two equal polynomials."
    assessment:
      kind: "reasoning"
      rubric:
        - "The counting proof partitions the selected $n$ elements by the number chosen from the first group."
        - "The polynomial proof correctly identifies the coefficient convolution in $(1+x)^r(1+x)^s$."
        - "Handles the full index range through the stated zero convention."
---

# Combinatoire & Dénombrement

Le **dénombrement** consiste à compter le nombre d'éléments ou de configurations d'un ensemble fini sans les énumérer un par un.

## 1. Principes fondamentaux

* **Principe additif** : Si un ensemble est la réunion disjointe de $A$ et $B$, alors $\text{Card}(A \cup B) = \text{Card}(A) + \text{Card}(B)$.
* **Principe multiplicatif** : Un choix composé de $k$ étapes indépendantes offrant respectivement $n_1, n_2, \dots, n_k$ possibilités comporte $n_1 \times n_2 \times \dots \times n_k$ issues au total.

## 2. p-listes, Permutations et Arrangements

* **$p$-liste d'un ensemble à $n$ éléments** (remise et ordre) : $n^p$
* **Permutations d'un ensemble à $n$ éléments** (ordre sans répétition) :
  $$n! = n \times (n-1) \times \dots \times 1$$
* **Arrangements de $p$ éléments parmi $n$** (ordre sans répétition) :
  $$A_n^p = \frac{n!}{(n-p)!}$$

## 3. Combinaisons & Triangle de Pascal

Une **combinaison** de $k$ éléments parmi $n$ est un sous-ensemble (non ordonné) de $k$ éléments. Son nombre est :

$$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$

### Propriétés remarquables
* Symétrie : $\binom{n}{k} = \binom{n}{n-k}$
* Relation de Pascal : $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$
* Binôme de Newton : $(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^k b^{n-k}$
