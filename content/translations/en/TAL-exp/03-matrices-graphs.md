---
id: "tal-exp-matrices"
locale: "en"
title: "Matrices, Graphs & Markov Chains"
strand: "Advanced Mathematics"
summary: "Matrix calculations, inverses of 2x2 matrices, adjacency matrices of graphs, state-transition diagrams, and steady states."
objectives:
  - "Add and multiply rectangular or square matrices"
  - "Calculate the determinant ad - bc and the inverse of a 2x2 matrix"
  - "Solve linear systems AX = B and analyze the steady state of a Markov chain"
prerequisites:
  - "Systems of linear equations and probability"
vocabulary:
  - en: "Stochastic matrix"
    definition: "A square matrix whose entries in each row sum to 1."
  - en: "Steady state"
    definition: "A probability row vector P such that P * M = P."
flashcards:
  - front: "What is the formula for the inverse of a 2x2 matrix A = [[a, b], [c, d]]?"
    back: "A^(-1) = (1 / (ad - bc)) * [[d, -b], [-c, a]], with det(A) = ad - bc != 0."
  - front: "Is the product of two matrices A * B always equal to B * A?"
    back: "No! Matrix multiplication is generally not commutative (A * B != B * A)."
exercises:
  - id: "tal-mat-t1"
    tierTitle: "Direct Application"
    prompt: "Compute $AB$ for $A=\\begin{pmatrix}1&2\\\\-1&3\\end{pmatrix}$ and $B=\\begin{pmatrix}2&0\\\\4&1\\end{pmatrix}$."
    solution: "Taking row-column products gives $AB=\\begin{pmatrix}1\\cdot2+2\\cdot4&1\\cdot0+2\\cdot1\\\\-1\\cdot2+3\\cdot4&-1\\cdot0+3\\cdot1\\end{pmatrix}=\\begin{pmatrix}10&2\\\\10&3\\end{pmatrix}$."
    hints:
      - "Each entry is a row of $A$ dotted with a column of $B$."
  - id: "tal-mat-t2"
    tierTitle: "Standard Practice"
    prompt: "Solve $\\begin{pmatrix}2&-1\\\\1&3\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}1\\\\11\\end{pmatrix}$, using elimination or a matrix inverse."
    solution: "The equations are $2x-y=1$ and $x+3y=11$. From the first, $y=2x-1$. Substitution gives $x+3(2x-1)=11$, so $7x=14$, $x=2$, and $y=3$."
    hints:
      - "Translate the matrix equation into two scalar equations."
      - "Eliminate one unknown or compute the inverse coefficient matrix."
  - id: "tal-mat-t3"
    tierTitle: "Synthesis"
    prompt: "A two-state Markov chain has row transition matrix $M=\\begin{pmatrix}0.8&0.2\\\\0.3&0.7\\end{pmatrix}$. If $p_n$ is the probability of state 1 and $p_0=1$, derive a scalar recurrence and a closed form for $p_n$, then find $p_4$."
    solution: "The state row vector is $(p_n,1-p_n)$, so $p_{n+1}=0.8p_n+0.3(1-p_n)=0.5p_n+0.3$. Its fixed point is $0.6$, hence $p_{n+1}-0.6=0.5(p_n-0.6)$. Therefore, $p_n=0.6+0.4(0.5)^n=\\frac35+\\frac25(\\frac12)^n$, and $p_4=\\frac35+\\frac1{40}=\\frac58$."
    hints:
      - "Write the state vector as $(p_n,1-p_n)$ and multiply by $M$."
      - "Subtract the fixed point to obtain a geometric recurrence."
  - id: "tal-mat-t4"
    tierTitle: "Advanced Challenge"
    prompt: "Let $F_0=0$, $F_1=1$, and $F_{n+1}=F_n+F_{n-1}$ for $n\\geq1$. With $Q=\\begin{pmatrix}1&1\\\\1&0\\end{pmatrix}$, prove for $n\\geq1$ that $Q^n=\\begin{pmatrix}F_{n+1}&F_n\\\\F_n&F_{n-1}\\end{pmatrix}$. For $m,n\\geq1$, compare $Q^{m+n}=Q^mQ^n$ to derive an addition identity for $F_{m+n}$. Use it to prove $F_n\\mid F_{kn}$ for all $n,k\\geq1$, and use determinants to prove that consecutive positive-index Fibonacci numbers are coprime."
    solution: "For $n=1$, the formula reads $Q=\\begin{pmatrix}F_2&F_1\\\\F_1&F_0\\end{pmatrix}$. If it holds at $n$, multiplication by $Q$ gives $Q^{n+1}=\\begin{pmatrix}F_{n+1}+F_n&F_{n+1}\\\\F_n+F_{n-1}&F_n\\end{pmatrix}=\\begin{pmatrix}F_{n+2}&F_{n+1}\\\\F_{n+1}&F_n\\end{pmatrix}$, completing the induction. Comparing the $(1,2)$ entries in $Q^{m+n}=Q^mQ^n$ yields $F_{m+n}=F_{m+1}F_n+F_mF_{n-1}$. Fix $n\\geq1$. The claim $F_n\\mid F_{kn}$ follows by induction on $k$: it is clear for $k=1$, and the addition identity gives $F_{(k+1)n}=F_{kn+1}F_n+F_{kn}F_{n-1}$, a sum of two multiples of $F_n$. Finally, determinants give Cassini's identity $F_{n+1}F_{n-1}-F_n^2=(-1)^n$. Any common divisor of $F_n$ and $F_{n+1}$ divides the left side and therefore divides $1$, so $\\gcd(F_n,F_{n+1})=1$."
    hints:
      - "After induction, compare a suitable entry of $Q^{m+n}=Q^mQ^n$."
      - "Use the addition identity with $m=kn$ for the divisibility induction."
      - "A common divisor of consecutive terms must divide Cassini's determinant."
    rubric:
      - "Verifies the base case and carries out the induction using the Fibonacci recurrence."
      - "Derives a correct addition identity from the matrix product."
      - "Proves $F_n\\mid F_{kn}$ for every positive integer $k$."
      - "Uses determinants and Cassini's identity to prove consecutive terms are coprime."
---

# Matrices, Graphs & Markov Chains

**Matrices** can be used to model systems of linear equations, networks (graphs), and the stochastic evolution of dynamical systems.

## 1. Matrix Operations

Let $A$ and $B$ be two matrices of the same size:
* **Addition**: $(A + B)_{i,j} = A_{i,j} + B_{i,j}$
* **Scalar multiplication**: $(k A)_{i,j} = k A_{i,j}$
* **Matrix multiplication**: If $A$ has size $(m, p)$ and $B$ has size $(p, n)$, the product $C = AB$ has size $(m, n)$, with:
  $$C_{i,j} = \sum_{k=1}^p A_{i,k} B_{k,j}$$
  *Caution*: In general, $AB \neq BA$.

## 2. Inverse of a 2x2 Matrix

For a square matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, the **determinant** is:

$$\det(A) = a d - b c$$

If $\det(A) \neq 0$, the matrix $A$ is **invertible**, and:

$$A^{-1} = \frac{1}{a d - b c} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

## 3. Graphs and Markov Chains

For a Markov chain with $n$ states, the **transition matrix** $M$ contains the probabilities of moving from state $i$ to state $j$.

The state-probability row vector at step $k$ satisfies:

$$P_k = P_0 \times M^k$$

A **steady state** $\pi = (x_1, \dots, x_n)$ is a probability vector satisfying:

$$\pi M = \pi \quad \text{and} \quad \sum_{i=1}^n x_i = 1$$
