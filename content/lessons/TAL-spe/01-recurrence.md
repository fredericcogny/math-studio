---
id: "tal-recurrence"
order: 1
title: "Raisonnement par Récurrence"
level: "TAL-spe"
strand: "Analyse & Suites"
difficulty: "core"
estimatedMinutes: 35
summary: "Apprendre la structure logique rigoureuse de la preuve par récurrence sur l'ensemble des entiers naturels."
objectives:
  - "Rédiger les étapes : Initialisation, Hérédité, Conclusion"
  - "Démontrer des égalités et inégalités pour tout n >= n0"
  - "Éviter l'analogie sans rigueur et prouver la transmission de la propriété"
prerequisites:
  - "Suites numériques et notation généralisée"
  - "Calcul algébrique et factorisation"
vocabulary:
  - en: "Proof by induction"
    fr: "Raisonnement par récurrence"
    definition: "Principe de démonstration sur les entiers naturels reposant sur une étape de départ et un saut d'étape (hérédité)."
  - en: "Base step"
    fr: "Initialisation"
    definition: "Vérification que la propriété P(n) est vraie au rang initial n0."
flashcards:
  - front: "Quelles sont les trois étapes fondamentales d'une récurrence ?"
    back: "1. Initialisation (rang n0), 2. Hérédité (si P(k) vraie alors P(k+1) vraie), 3. Conclusion."
  - front: "Pourquoi l'étape d'hérédité seule ne suffit-elle pas ?"
    back: "Sans initialisation, la chaîne n'a pas de point de départ (effet domino sans premier domino tombé)."
generator:
  type: "linear-equation"
  seed: 201
  count: 4
  coefficientMin: 2
  coefficientMax: 6
  solutionMin: 1
  solutionMax: 10
  offsetMin: 1
  offsetMax: 5
tieredExercises:
  - id: "tal-rec-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "State, in order, the three required parts of a proof by induction starting at $n_0$."
    solution: "First verify the base case $P(n_0)$. Next prove the inductive step: for an arbitrary $k\\ge n_0$, assume $P(k)$ and derive $P(k+1)$. Finally invoke the induction principle to conclude that $P(n)$ holds for every $n\\ge n_0$."
    hints:
      - "Think of the first domino, the transmission rule, and the final logical conclusion."
    assessment:
      kind: "exact"
      expected: "base case; inductive step; conclusion"
      accepted:
        - "initialization; heredity; conclusion"
        - "initialisation; hérédité; conclusion"
  - id: "tal-rec-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "Prove by induction that $1+3+5+\\cdots+(2n-1)=n^2$ for every integer $n\\ge1$."
    solution: "Let $P(n)$ be the stated identity. For $n=1$, both sides equal $1$. Assume $P(k)$: the sum of the first $k$ odd integers is $k^2$. Adding the next odd integer gives $k^2+[2(k+1)-1]=k^2+2k+1=(k+1)^2$, which is $P(k+1)$. Therefore the identity holds for every $n\\ge1$ by induction."
    hints:
      - "The odd number added when passing from rank $k$ to rank $k+1$ is $2k+1$."
      - "Write the base case, hypothesis, transition, and conclusion explicitly."
    assessment:
      kind: "reasoning"
      rubric:
        - "Verifies the base case at $n=1$."
        - "States the induction hypothesis for an arbitrary $k\\ge1$."
        - "Adds $2k+1$ and simplifies to $(k+1)^2$."
        - "Concludes with the induction principle."
  - id: "tal-rec-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "stretch"
    prompt: "Let $u_0=0$ and $u_{n+1}=\\sqrt{2+u_n}$. Use induction to prove simultaneously that $0\\le u_n<2$ for every $n$, and that $(u_n)$ is strictly increasing. Deduce that it converges and identify its limit."
    solution: "The bounds hold at $n=0$. If $0\\le u_n<2$, then $0<u_{n+1}=\\sqrt{2+u_n}<2$, so the bounds are hereditary. Also $u_1=\\sqrt2>u_0$. If $u_n>u_{n-1}$, strict increase of the square-root function gives $u_{n+1}=\\sqrt{2+u_n}>\\sqrt{2+u_{n-1}}=u_n$. Thus the sequence is strictly increasing and bounded above by $2$, so it converges to some $L\\in[0,2]$. Passing to the limit gives $L=\\sqrt{2+L}$, hence $(L-2)(L+1)=0$; therefore $L=2$."
    hints:
      - "For the upper bound, compare $2+u_n$ with $4$."
      - "For monotonicity, use that $x\\mapsto\\sqrt{2+x}$ is strictly increasing."
      - "Only write the fixed-point equation after convergence has been proved."
    assessment:
      kind: "reasoning"
      rubric:
        - "Proves $0\\le u_n<2$ by a complete induction."
        - "Proves strict increase using a base comparison and the recurrence."
        - "Invokes monotone bounded convergence before passing to the limit."
        - "Solves the fixed-point equation and selects $L=2$."
  - id: "tal-rec-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "olympiad"
    prompt: "Let $F_2=1$, $F_3=2$, and $F_{n+1}=F_n+F_{n-1}$ for $n\\ge3$. Prove by strong induction that every positive integer can be written as a sum of distinct, pairwise nonconsecutive terms from $F_2,F_3,F_4,\\ldots$ (existence part of Zeckendorf's theorem)."
    solution: "Use strong induction on the integer $N$. The claim is immediate for $N=1=F_2$ and $N=2=F_3$. Assume it holds for every positive integer below $N$. Choose the largest $F_k\\le N$ and put $r=N-F_k$. If $r=0$, we are done. Otherwise $r<N$, so the strong induction hypothesis represents $r$ as a sum of distinct nonconsecutive Fibonacci terms. Maximality of $F_k$ gives $N<F_{k+1}=F_k+F_{k-1}$, hence $r<F_{k-1}$. Therefore the representation of $r$ can use no term as large as $F_{k-1}$; all its terms have index at most $k-2$. Appending $F_k$ preserves both distinctness and nonconsecutiveness, and represents $N$. The strong induction is complete."
    hints:
      - "Choose the largest Fibonacci term not exceeding the target integer."
      - "Show that the remainder is strictly less than the preceding Fibonacci term."
      - "Strong induction is needed because the remainder is not necessarily $N-1$."
    assessment:
      kind: "reasoning"
      rubric:
        - "Sets up strong induction with valid initial cases."
        - "Chooses a maximal $F_k\\le N$ and applies the hypothesis to the smaller remainder."
        - "Uses $N<F_{k+1}$ to prove $N-F_k<F_{k-1}$."
        - "Correctly explains why appending $F_k$ preserves distinct, nonconsecutive indices."
---

# Raisonnement par Récurrence

Le **raisonnement par récurrence** est l'outil fondamental d'analyse et d'algèbre permettant de démontrer qu'une propriété $P(n)$ est vraie pour tout entier naturel $n \ge n_0$.

## 1. Le principe de l'effet domino

Imaginez une file infinie de dominos numérotés $0, 1, 2, \dots, n$. Pour s'assurer que **tous** les dominos vont tomber :
1. Il faut faire tomber le premier domino (Initialisation).
2. Il faut s'assurer que si le $k$-ième domino tombe, il fait obligatoirement tomber le $(k+1)$-ième domino (Hérédité).

## 2. Structure rigoureuse de la démonstration

Pour démontrer qu'une propriété $P(n)$ est vraie pour tout $n \ge n_0$ :

### Etape 1 : Initialisation
On vérifie que la propriété $P(n_0)$ est **vraie** pour le rang initial $n_0$.

### Etape 2 : Hérédité
Soit $k \ge n_0$ un entier fixé. On suppose que la propriété $P(k)$ est vraie (**hypothèse de récurrence**).
On démontre alors que la propriété $P(k+1)$ est également vraie.

### Etape 3 : Conclusion
La propriété $P(n_0)$ est vraie et la propriété est héréditaire. Par le principe de récurrence, $P(n)$ est vraie pour tout entier naturel $n \ge n_0$.

## 3. Exemple d'application : Somme des premiers entiers

Montrons par récurrence que pour tout $n \ge 1$ :

$$\sum_{i=1}^n i = 1 + 2 + \dots + n = \frac{n(n+1)}{2}$$

* **Initialisation ($n=1$)** : $1 = \frac{1(1+1)}{2} = 1$. Vrai.
* **Hérédité** : Supposons que $1 + \dots + k = \frac{k(k+1)}{2}$. Alors :
  $$1 + \dots + k + (k+1) = \frac{k(k+1)}{2} + (k+1) = (k+1)\left(\frac{k}{2} + 1\right) = \frac{(k+1)(k+2)}{2}$$
  Ce qui prouve $P(k+1)$.
