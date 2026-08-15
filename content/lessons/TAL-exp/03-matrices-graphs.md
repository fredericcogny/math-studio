---
id: "tal-exp-matrices"
order: 3
title: "Matrices, Graphes & Chaînes de Markov"
level: "TAL-exp"
strand: "Mathématiques Expertes"
difficulty: "stretch"
estimatedMinutes: 45
summary: "Calcul matriciel, inverse d'une matrice 2x2, matrice d'adjacence d'un graphe, graphes probabilistes et état stable."
objectives:
  - "Additionner et multiplier des matrices rectangulaires ou carrées"
  - "Calculer le déterminant ad - bc et l'inverse d'une matrice 2x2"
  - "Résoudre des systèmes linéaires AX = B et étudier l'état stable d'une chaîne de Markov"
prerequisites:
  - "Systèmes d'équations linéaires et probabilités"
vocabulary:
  - en: "Stochastic matrix"
    fr: "Matrice stochastique"
    definition: "Matrice carrée dont la somme des coefficients de chaque ligne est égale à 1."
  - en: "Steady state"
    fr: "État stable / stationnaire"
    definition: "Vecteur ligne de probabilité P tel que P * M = P."
flashcards:
  - front: "Quelle est la formule de l'inverse d'une matrice 2x2 A = [[a, b], [c, d]] ?"
    back: "A^(-1) = (1 / (ad - bc)) * [[d, -b], [-c, a]] avec det(A) = ad - bc != 0."
  - front: "Le produit de deux matrices A * B est-il toujours égal à B * A ?"
    back: "Non ! Le produit matriciel n'est généralement pas commutatif (A * B != B * A)."
generator:
  type: "linear-equation"
  seed: 303
  count: 4
  coefficientMin: 1
  coefficientMax: 4
  solutionMin: 1
  solutionMax: 5
  offsetMin: 1
  offsetMax: 4
tieredExercises:
  - id: "tal-mat-t1"
    tier: 1
    tierTitle: "Direct Application"
    curriculumStatus: "core"
    prompt: "Compute $AB$ for $A=\\begin{pmatrix}1&2\\\\-1&3\\end{pmatrix}$ and $B=\\begin{pmatrix}2&0\\\\4&1\\end{pmatrix}$."
    solution: "Taking row-column products gives $AB=\\begin{pmatrix}1\\cdot2+2\\cdot4&1\\cdot0+2\\cdot1\\\\-1\\cdot2+3\\cdot4&-1\\cdot0+3\\cdot1\\end{pmatrix}=\\begin{pmatrix}10&2\\\\10&3\\end{pmatrix}$."
    hints:
      - "Each entry is a row of $A$ dotted with a column of $B$."
    assessment:
      kind: "exact"
      expected: "[[10,2],[10,3]]"
      accepted:
        - "[[10,2],[10,3]]"
  - id: "tal-mat-t2"
    tier: 2
    tierTitle: "Standard Practice"
    curriculumStatus: "core"
    prompt: "Solve $\\begin{pmatrix}2&-1\\\\1&3\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}1\\\\11\\end{pmatrix}$, using elimination or a matrix inverse."
    solution: "The equations are $2x-y=1$ and $x+3y=11$. From the first, $y=2x-1$. Substitution gives $x+3(2x-1)=11$, so $7x=14$, $x=2$, and $y=3$."
    hints:
      - "Translate the matrix equation into two scalar equations."
      - "Eliminate one unknown or compute the inverse coefficient matrix."
    assessment:
      kind: "exact"
      expected: "(x,y)=(2,3)"
      accepted:
        - "x=2, y=3"
  - id: "tal-mat-t3"
    tier: 3
    tierTitle: "Synthesis"
    curriculumStatus: "stretch"
    prompt: "A two-state Markov chain has row transition matrix $M=\\begin{pmatrix}0.8&0.2\\\\0.3&0.7\\end{pmatrix}$. If $p_n$ is the probability of state 1 and $p_0=1$, derive a scalar recurrence and a closed form for $p_n$, then find $p_4$."
    solution: "The state row vector is $(p_n,1-p_n)$, so $p_{n+1}=0.8p_n+0.3(1-p_n)=0.5p_n+0.3$. Its fixed point is $0.6$, hence $p_{n+1}-0.6=0.5(p_n-0.6)$. Therefore $p_n=0.6+0.4(0.5)^n=\\frac35+\\frac25(\\frac12)^n$, and $p_4=\\frac35+\\frac1{40}=\\frac58$."
    hints:
      - "Write the state vector as $(p_n,1-p_n)$ and multiply by $M$."
      - "Subtract the fixed point to obtain a geometric recurrence."
    assessment:
      kind: "exact"
      expected: "p_n=3/5+(2/5)(1/2)^n; p_4=5/8"
      accepted:
        - "p_n=0.6+0.4(0.5)^n; p_4=0.625"
  - id: "tal-mat-t4"
    tier: 4
    tierTitle: "Advanced Challenge"
    curriculumStatus: "cpge"
    prompt: "Let $F_0=0$, $F_1=1$, and $F_{n+1}=F_n+F_{n-1}$ for $n\\geq1$. With $Q=\\begin{pmatrix}1&1\\\\1&0\\end{pmatrix}$, prove for $n\\geq1$ that $Q^n=\\begin{pmatrix}F_{n+1}&F_n\\\\F_n&F_{n-1}\\end{pmatrix}$. For $m,n\\geq1$, compare $Q^{m+n}=Q^mQ^n$ to derive an addition identity for $F_{m+n}$. Use it to prove $F_n\\mid F_{kn}$ for all $n,k\\geq1$, and use determinants to prove that consecutive positive-index Fibonacci numbers are coprime."
    solution: "For $n=1$, the formula reads $Q=\\begin{pmatrix}F_2&F_1\\\\F_1&F_0\\end{pmatrix}$. If it holds at $n$, multiplication by $Q$ gives $Q^{n+1}=\\begin{pmatrix}F_{n+1}+F_n&F_{n+1}\\\\F_n+F_{n-1}&F_n\\end{pmatrix}=\\begin{pmatrix}F_{n+2}&F_{n+1}\\\\F_{n+1}&F_n\\end{pmatrix}$, completing the induction. Comparing the $(1,2)$ entries in $Q^{m+n}=Q^mQ^n$ yields $F_{m+n}=F_{m+1}F_n+F_mF_{n-1}$. Fix $n\\geq1$. The claim $F_n\\mid F_{kn}$ follows by induction on $k$: it is clear for $k=1$, and the addition identity gives $F_{(k+1)n}=F_{kn+1}F_n+F_{kn}F_{n-1}$, a sum of two multiples of $F_n$. Finally, determinants give Cassini's identity $F_{n+1}F_{n-1}-F_n^2=(-1)^n$. Any common divisor of $F_n$ and $F_{n+1}$ divides the left side and therefore divides $1$, so $\\gcd(F_n,F_{n+1})=1$."
    hints:
      - "After induction, compare a suitable entry of $Q^{m+n}=Q^mQ^n$."
      - "Use the addition identity with $m=kn$ for the divisibility induction."
      - "A common divisor of consecutive terms must divide Cassini's determinant."
    assessment:
      kind: "reasoning"
      rubric:
        - "Verifies the base case and carries out the induction using the Fibonacci recurrence."
        - "Derives a correct addition identity from the matrix product."
        - "Proves $F_n\\mid F_{kn}$ for every positive integer $k$."
        - "Uses determinants and Cassini's identity to prove consecutive terms are coprime."
---

# Matrices, Graphes & Chaînes de Markov

Les **matrices** permettent de modéliser des systèmes d'équations linéaires, des réseaux (graphes) et l'évolution stochastique de systèmes dynamiques.

## 1. Opérations matricielles

Soient deux matrices $A$ et $B$ de même taille :
* **Addition** : $(A + B)_{i,j} = A_{i,j} + B_{i,j}$
* **Produit par un scalaire** : $(k A)_{i,j} = k A_{i,j}$
* **Produit matriciel** : Si $A$ est de taille $(m, p)$ et $B$ de taille $(p, n)$, le produit $C = AB$ est de taille $(m, n)$ avec :
  $$C_{i,j} = \sum_{k=1}^p A_{i,k} B_{k,j}$$
  *Attention* : En général, $AB \neq BA$.

## 2. Inversion de matrice 2x2

Pour une matrice carrée $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, le **déterminant** est :

$$\det(A) = a d - b c$$

Si $\det(A) \neq 0$, la matrice $A$ est **inversible** et :

$$A^{-1} = \frac{1}{a d - b c} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

## 3. Graphes et Chaînes de Markov

Dans un graphe probabiliste à $n$ états, la **matrice de transition** $M$ contient les probabilités de passage de l'état $i$ à l'état $j$.

L'état probabiliste au rang $k$ vérifie :

$$P_k = P_0 \times M^k$$

Un **état stable** $\pi = (x_1, \dots, x_n)$ est un vecteur de probabilités qui vérifie :

$$\pi M = \pi \quad \text{et} \quad \sum_{i=1}^n x_i = 1$$
